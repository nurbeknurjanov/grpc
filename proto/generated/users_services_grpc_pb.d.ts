// package: tutorial
// file: users_services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_services_pb from "./users_services_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as users_messages_pb from "./users_messages_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUsersService_IGetUser;
    createUser: IUsersService_ICreateUser;
    updateUser: IUsersService_IUpdateUser;
    deleteUser: IUsersService_IDeleteUser;
    getUsersStream: IUsersService_IGetUsersStream;
    getUsers: IUsersService_IGetUsers;
}

interface IUsersService_IGetUser extends grpc.MethodDefinition<users_messages_pb.UserRequest, users_messages_pb.User> {
    path: "/tutorial.Users/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_messages_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<users_messages_pb.UserRequest>;
    responseSerialize: grpc.serialize<users_messages_pb.User>;
    responseDeserialize: grpc.deserialize<users_messages_pb.User>;
}
interface IUsersService_ICreateUser extends grpc.MethodDefinition<users_messages_pb.UserPost, users_messages_pb.User> {
    path: "/tutorial.Users/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_messages_pb.UserPost>;
    requestDeserialize: grpc.deserialize<users_messages_pb.UserPost>;
    responseSerialize: grpc.serialize<users_messages_pb.User>;
    responseDeserialize: grpc.deserialize<users_messages_pb.User>;
}
interface IUsersService_IUpdateUser extends grpc.MethodDefinition<users_messages_pb.UserPostUpdate, users_messages_pb.User> {
    path: "/tutorial.Users/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_messages_pb.UserPostUpdate>;
    requestDeserialize: grpc.deserialize<users_messages_pb.UserPostUpdate>;
    responseSerialize: grpc.serialize<users_messages_pb.User>;
    responseDeserialize: grpc.deserialize<users_messages_pb.User>;
}
interface IUsersService_IDeleteUser extends grpc.MethodDefinition<users_messages_pb.UserRequest, google_protobuf_empty_pb.Empty> {
    path: "/tutorial.Users/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_messages_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<users_messages_pb.UserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersService_IGetUsersStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, users_messages_pb.User> {
    path: "/tutorial.Users/GetUsersStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<users_messages_pb.User>;
    responseDeserialize: grpc.deserialize<users_messages_pb.User>;
}
interface IUsersService_IGetUsers extends grpc.MethodDefinition<users_messages_pb.UsersRequest, users_messages_pb.UsersResponse> {
    path: "/tutorial.Users/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_messages_pb.UsersRequest>;
    requestDeserialize: grpc.deserialize<users_messages_pb.UsersRequest>;
    responseSerialize: grpc.serialize<users_messages_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_messages_pb.UsersResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getUser: grpc.handleUnaryCall<users_messages_pb.UserRequest, users_messages_pb.User>;
    createUser: grpc.handleUnaryCall<users_messages_pb.UserPost, users_messages_pb.User>;
    updateUser: grpc.handleUnaryCall<users_messages_pb.UserPostUpdate, users_messages_pb.User>;
    deleteUser: grpc.handleUnaryCall<users_messages_pb.UserRequest, google_protobuf_empty_pb.Empty>;
    getUsersStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, users_messages_pb.User>;
    getUsers: grpc.handleUnaryCall<users_messages_pb.UsersRequest, users_messages_pb.UsersResponse>;
}

export interface IUsersClient {
    getUser(request: users_messages_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: users_messages_pb.UserPost, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: users_messages_pb.UserPost, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: users_messages_pb.UserPost, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: users_messages_pb.UserPostUpdate, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: users_messages_pb.UserPostUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: users_messages_pb.UserPostUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_messages_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getUsersStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_messages_pb.User>;
    getUsersStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_messages_pb.User>;
    getUsers(request: users_messages_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: users_messages_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: users_messages_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: users_messages_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: users_messages_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: users_messages_pb.UserPost, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: users_messages_pb.UserPost, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: users_messages_pb.UserPost, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_messages_pb.UserPostUpdate, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_messages_pb.UserPostUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_messages_pb.UserPostUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_messages_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_messages_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getUsersStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_messages_pb.User>;
    public getUsersStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_messages_pb.User>;
    public getUsers(request: users_messages_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: users_messages_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: users_messages_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: users_messages_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}
