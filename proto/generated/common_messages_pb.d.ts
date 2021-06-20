// package: tutorial
// file: common_messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LoginPost extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginPost;
    getPassword(): string;
    setPassword(value: string): LoginPost;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginPost.AsObject;
    static toObject(includeInstance: boolean, msg: LoginPost): LoginPost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginPost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginPost;
    static deserializeBinaryFromReader(message: LoginPost, reader: jspb.BinaryReader): LoginPost;
}

export namespace LoginPost {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class TokenResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenResponse;
    static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
    export type AsObject = {
        token: string,
    }
}

export class PaginationRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): PaginationRequest;
    getPerPage(): number;
    setPerPage(value: number): PaginationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaginationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaginationRequest;
    static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
    export type AsObject = {
        page: number,
        perPage: number,
    }
}

export class PaginationResponse extends jspb.Message { 
    getTotalCount(): number;
    setTotalCount(value: number): PaginationResponse;
    getPerPage(): number;
    setPerPage(value: number): PaginationResponse;
    getCurrentPage(): number;
    setCurrentPage(value: number): PaginationResponse;
    getPageCount(): number;
    setPageCount(value: number): PaginationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaginationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PaginationResponse): PaginationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaginationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaginationResponse;
    static deserializeBinaryFromReader(message: PaginationResponse, reader: jspb.BinaryReader): PaginationResponse;
}

export namespace PaginationResponse {
    export type AsObject = {
        totalCount: number,
        perPage: number,
        currentPage: number,
        pageCount: number,
    }
}
