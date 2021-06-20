// package: tutorial
// file: users_messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_messages_pb from "./common_messages_pb";

export class UserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        id: number,
    }
}

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;
    getAge(): number;
    setAge(value: number): User;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        name: string,
        email: string,
        password: string,
        age: number,
        status: UserStatus,
    }
}

export class UserPost extends jspb.Message { 
    getName(): string;
    setName(value: string): UserPost;
    getEmail(): string;
    setEmail(value: string): UserPost;
    getPassword(): string;
    setPassword(value: string): UserPost;
    getAge(): number;
    setAge(value: number): UserPost;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): UserPost;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPost.AsObject;
    static toObject(includeInstance: boolean, msg: UserPost): UserPost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPost;
    static deserializeBinaryFromReader(message: UserPost, reader: jspb.BinaryReader): UserPost;
}

export namespace UserPost {
    export type AsObject = {
        name: string,
        email: string,
        password: string,
        age: number,
        status: UserStatus,
    }
}

export class UserPostUpdate extends jspb.Message { 
    getId(): number;
    setId(value: number): UserPostUpdate;

    hasPost(): boolean;
    clearPost(): void;
    getPost(): UserPost | undefined;
    setPost(value?: UserPost): UserPostUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPostUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: UserPostUpdate): UserPostUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPostUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPostUpdate;
    static deserializeBinaryFromReader(message: UserPostUpdate, reader: jspb.BinaryReader): UserPostUpdate;
}

export namespace UserPostUpdate {
    export type AsObject = {
        id: number,
        post?: UserPost.AsObject,
    }
}

export class UsersRequest extends jspb.Message { 

    hasFilterParams(): boolean;
    clearFilterParams(): void;
    getFilterParams(): FilterParams | undefined;
    setFilterParams(value?: FilterParams): UsersRequest;

    hasPaginationParams(): boolean;
    clearPaginationParams(): void;
    getPaginationParams(): common_messages_pb.PaginationRequest | undefined;
    setPaginationParams(value?: common_messages_pb.PaginationRequest): UsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsersRequest): UsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersRequest;
    static deserializeBinaryFromReader(message: UsersRequest, reader: jspb.BinaryReader): UsersRequest;
}

export namespace UsersRequest {
    export type AsObject = {
        filterParams?: FilterParams.AsObject,
        paginationParams?: common_messages_pb.PaginationRequest.AsObject,
    }
}

export class UsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): UsersResponse;
    addUsers(value?: User, index?: number): User;

    hasPaginationParams(): boolean;
    clearPaginationParams(): void;
    getPaginationParams(): common_messages_pb.PaginationResponse | undefined;
    setPaginationParams(value?: common_messages_pb.PaginationResponse): UsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersResponse;
    static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
    export type AsObject = {
        usersList: Array<User.AsObject>,
        paginationParams?: common_messages_pb.PaginationResponse.AsObject,
    }
}

export class FilterParams extends jspb.Message { 
    getName(): string;
    setName(value: string): FilterParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterParams.AsObject;
    static toObject(includeInstance: boolean, msg: FilterParams): FilterParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterParams;
    static deserializeBinaryFromReader(message: FilterParams, reader: jspb.BinaryReader): FilterParams;
}

export namespace FilterParams {
    export type AsObject = {
        name: string,
    }
}

export enum UserStatus {
    ZERO_VALUE_REQUIRED = 0,
    APPROVED_USER = 1,
    BANNED_USER = 2,
}
