// package: tutorial
// file: common_services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as common_services_pb from "./common_services_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_messages_pb from "./common_messages_pb";
import * as users_messages_pb from "./users_messages_pb";

interface ICommonService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: ICommonService_ILogin;
    auth: ICommonService_IAuth;
    getAccessToken: ICommonService_IGetAccessToken;
}

interface ICommonService_ILogin extends grpc.MethodDefinition<common_messages_pb.LoginPost, common_messages_pb.TokenResponse> {
    path: "/tutorial.Common/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_messages_pb.LoginPost>;
    requestDeserialize: grpc.deserialize<common_messages_pb.LoginPost>;
    responseSerialize: grpc.serialize<common_messages_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<common_messages_pb.TokenResponse>;
}
interface ICommonService_IAuth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, users_messages_pb.User> {
    path: "/tutorial.Common/Auth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<users_messages_pb.User>;
    responseDeserialize: grpc.deserialize<users_messages_pb.User>;
}
interface ICommonService_IGetAccessToken extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, common_messages_pb.TokenResponse> {
    path: "/tutorial.Common/GetAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<common_messages_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<common_messages_pb.TokenResponse>;
}

export const CommonService: ICommonService;

export interface ICommonServer {
    login: grpc.handleUnaryCall<common_messages_pb.LoginPost, common_messages_pb.TokenResponse>;
    auth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, users_messages_pb.User>;
    getAccessToken: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, common_messages_pb.TokenResponse>;
}

export interface ICommonClient {
    login(request: common_messages_pb.LoginPost, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    login(request: common_messages_pb.LoginPost, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    login(request: common_messages_pb.LoginPost, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    auth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    auth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    auth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    getAccessToken(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    getAccessToken(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    getAccessToken(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
}

export class CommonClient extends grpc.Client implements ICommonClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: common_messages_pb.LoginPost, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public login(request: common_messages_pb.LoginPost, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public login(request: common_messages_pb.LoginPost, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public auth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public auth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public auth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_messages_pb.User) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_messages_pb.TokenResponse) => void): grpc.ClientUnaryCall;
}
