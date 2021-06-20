import {sendUnaryData, ServerUnaryCall, ServiceError, status, Metadata} from "grpc";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";

import {ICommonServer} from '../proto/generated/common_services_grpc_pb';
import {LoginPost, TokenResponse} from '../proto/generated/common_messages_pb';
import {User} from '../proto/generated/users_messages_pb';
import {users} from "./db";

export const jwt = require('jsonwebtoken');


export interface IPayload {
    user: User.AsObject,
    expire?: string,
    type:string
}

export const secret_key:string = 'secret_key';
export default class CommonService implements ICommonServer
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
    protected generateToken(payload:IPayload, liveTimeMilliSeconds:number = 5*60*1000):string{//5 minute
        const date = new Date(new Date().getTime() + liveTimeMilliSeconds);
        payload.expire = date.toString();
        return jwt.sign(payload, secret_key);
    }

    login(call: ServerUnaryCall<LoginPost>, callback: sendUnaryData<TokenResponse>) {
        const request = call.request;

        const user = users.find(el=>el.getEmail()===request.getEmail());
        if(user){
            if(user.getPassword()===request.getPassword()){
                const accessToken = this.generateToken({
                    type:'refresh-token',
                    user: user.toObject(),
                }, 7*24*60*60*1000);//week
                const response = new TokenResponse();
                response.setToken(accessToken);
                return callback(null, response);
            }
            return callback({
                code: 401,
                name: "Password is wrong",
                message: "Password is wrong",
            }, null)
        }
        callback({
            code: 401,
            name: "Email is wrong",
            message: "Email is wrong",
        }, null);
    }
    getAccessToken(call: ServerUnaryCall<Empty>, callback: sendUnaryData<TokenResponse>) {
        const refreshToken = String(call.metadata.get('authorization')[0]);

        try {
            const payload = this.parseToken(refreshToken);

            const user = users.find(el=>el.getId()===payload.user.id);
            if(!user)
                return callback({
                    name: "Error",
                    message: "User not found for getting access token",
                }, null);

            if(user){
                const response = new TokenResponse();
                const accessToken = this.generateToken({user:user.toObject(), type:'access-token',})
                response.setToken(accessToken);

                setTimeout(()=>{
                    callback(null, response);
                }, 0);
                return;
            }

        }catch (e) {
            callback(e, null);
        }


        /*const meta = new Metadata();
        meta.set('authorization','another_token');
        callback(null, new Empty(), meta);*/
    }
    auth(call: ServerUnaryCall<Empty>, callback: sendUnaryData<User>) {
        const token:string = String(call.metadata.get('authorization')[0]);
        try {
            const payload = this.parseToken(token);
            const user = users.find(el=>el.getId()===payload.user.id);
            if(!user)
                return callback({
                    name: "Error",
                    message: "User not found for authorize",
                }, null);
            if(user){
                setTimeout(()=>{
                    callback(null, user);
                }, 0);
                return;
            }
        }catch (e) {
            callback(e, null);
        }
    }
}
