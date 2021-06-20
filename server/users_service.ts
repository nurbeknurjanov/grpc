import {sendUnaryData, ServerUnaryCall, ServerWritableStream, ServiceError, status,} from "grpc";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";

import {IUsersServer} from '../proto/generated/users_services_grpc_pb';
import {
    User,
    UserRequest,
    UserPost,
    UsersRequest,
    UsersResponse,
    FilterParams, UserPostUpdate,
} from '../proto/generated/users_messages_pb';
import {
    PaginationResponse,
    PaginationRequest,
} from '../proto/generated/common_messages_pb';
import {users} from "./db";
import {jwt, IPayload, secret_key} from "./common_service";


let stream:ServerWritableStream<Empty>;


export default class UsersService implements IUsersServer
{
    protected parseToken(token:string):IPayload{
        const payload =  jwt.verify(token, secret_key);
        if(
            (new Date(payload.expire)).getTime()<(new Date()).getTime()
        ){
            const error:ServiceError = new Error(payload.type +' is expired');
            error.code = status.UNAUTHENTICATED;
            throw error;
        }
        return payload;
    }
    protected checkAuthorized(token:string)
    {
        try {
            const payload = this.parseToken(token);
            const user = users.find(el=>el.getId()===payload.user.id);
        }catch (e) {
            throw new Error("Access token is wrong for authorized user");
        }
    }
    getUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<User>) {
        const token = String(call.metadata.get('authorization')[0]);
        try{
            this.checkAuthorized(token);
        }catch (e) {
            return callback(e, null);
        }

        const userId = call.request.getId();
        const user = users.find((u) => u.getId() === userId);

        if (!user) {
            const error: ServiceError = {
                code:404,
                name: "Пользователь не найден",
                message: `Пользователь с ИД ${userId} не существует.`,
            };
            callback(error, null);
            return;
        }

        callback(null, user);
    }
    deleteUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<Empty>) {
        const token = String(call.metadata.get('authorization')[0]);
        try{
            this.checkAuthorized(token);
        }catch (e) {
            return callback(e, null);
        }

        const userId = call.request.getId();
        const index = users.findIndex((u) => u.getId() === userId);
        users.splice(index, 1);
        callback(null, new Empty());
    }
    createUser(call: ServerUnaryCall<UserPost>, callback: sendUnaryData<User>) {
        const token = String(call.metadata.get('authorization')[0]);
        try{
            this.checkAuthorized(token);
        }catch (e) {
            return callback(e, null);
        }

        const request = call.request;

        let user = new User();
        user.setId(users.length+1);
        if(!request.getName())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Имя объязательное поле',
            }, null);
        user.setName(request.getName());
        if(!request.getEmail())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Почта объязательное поле',
            }, null);
        user.setEmail(request.getEmail());
        if(!request.getPassword())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Пароль объязательное поле',
            }, null);
        user.setPassword(request.getPassword());
        if(!request.getAge())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Возраст объязательное поле',
            }, null);
        user.setAge(request.getAge());
        if(request.getStatus()===null)
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Статус объязательное поле',
            }, null);
        user.setStatus(request.getStatus());
        users.push(user);

        if(stream)
            stream.write(user);

        callback(null, user);
    }
    updateUser(call: ServerUnaryCall<UserPostUpdate>, callback: sendUnaryData<User>) {
        const token = String(call.metadata.get('authorization')[0]);
        try{
            this.checkAuthorized(token);
        }catch (e) {
            return callback(e, null);
        }

        const request = call.request;

        const userId = request.getId();
        const user = users.find((u) => u.getId() === userId);

        if (!user) {
            const error: ServiceError = {
                code:404,
                name: "Пользователь не найден",
                message: `Пользователь с ИД ${userId} не существует.`,
            };
            callback(error, null);
            return;
        }

        const post = request.getPost()!;
        if(!post?.getName())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Имя объязательное поле',
            }, null);
        user.setName(post.getName());

        if(!post?.getEmail())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Почта объязательное поле',
            }, null);
        user.setEmail(post.getEmail());

        if(post?.getStatus()===null)
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Статус объязательное поле',
            }, null);
        user.setStatus(post.getStatus());
        if(!post?.getAge())
            return callback({
                code:400,
                name: "Неправильная валидация",
                message: 'Возраст объязательное поле',
            }, null);
        user.setAge(post.getAge());

        const index = users.indexOf(user);
        //users = [...users.slice(0, index), user, ...users.slice(index + 1)];
        users.splice(index, 1, user);
        callback(null, user);
    }

    getUsers(call: ServerUnaryCall<UsersRequest>, callback: sendUnaryData<UsersResponse>) {

        const token = String(call.metadata.get('authorization')[0]);
        try{
            this.checkAuthorized(token);
        }catch (e) {
            return callback(e, null);
        }


        const filterParams:FilterParams = call.request.getFilterParams()!;
        const filterName:string = filterParams?.getName();
        const paginationParams:PaginationRequest = call.request.getPaginationParams()!;
        const page:number = paginationParams?.getPage();
        const perPage:number = paginationParams?.getPerPage() || 3;

        let result = users.filter(el=>el.getName().match(new RegExp(filterName,'gi')) );
        const totalCount = result.length;
        const pageCount = Math.ceil(totalCount/perPage);

        result = result.slice((page-1)*perPage,page*perPage);


        const response  = new UsersResponse;
        const paginationResponse  = new PaginationResponse;
        paginationResponse.setTotalCount(totalCount);
        paginationResponse.setCurrentPage(page);
        paginationResponse.setPerPage(perPage);
        paginationResponse.setPageCount(pageCount);


        response.setUsersList(result);
        response.setPaginationParams(paginationResponse);

        return callback(null, response);
    }

    getUsersStream(call: ServerWritableStream<Empty>) {
        stream = call;
        for(const user of users)
            call.write(user);
        //call.end();
    }
}
