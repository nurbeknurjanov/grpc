// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_messages_pb = require('./common_messages_pb.js');
var users_messages_pb = require('./users_messages_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_LoginPost(arg) {
  if (!(arg instanceof common_messages_pb.LoginPost)) {
    throw new Error('Expected argument of type tutorial.LoginPost');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_LoginPost(buffer_arg) {
  return common_messages_pb.LoginPost.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_TokenResponse(arg) {
  if (!(arg instanceof common_messages_pb.TokenResponse)) {
    throw new Error('Expected argument of type tutorial.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_TokenResponse(buffer_arg) {
  return common_messages_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_User(arg) {
  if (!(arg instanceof users_messages_pb.User)) {
    throw new Error('Expected argument of type tutorial.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_User(buffer_arg) {
  return users_messages_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommonService = exports.CommonService = {
  login: {
    path: '/tutorial.Common/Login',
    requestStream: false,
    responseStream: false,
    requestType: common_messages_pb.LoginPost,
    responseType: common_messages_pb.TokenResponse,
    requestSerialize: serialize_tutorial_LoginPost,
    requestDeserialize: deserialize_tutorial_LoginPost,
    responseSerialize: serialize_tutorial_TokenResponse,
    responseDeserialize: deserialize_tutorial_TokenResponse,
  },
  auth: {
    path: '/tutorial.Common/Auth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: users_messages_pb.User,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tutorial_User,
    responseDeserialize: deserialize_tutorial_User,
  },
  getAccessToken: {
    path: '/tutorial.Common/GetAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: common_messages_pb.TokenResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tutorial_TokenResponse,
    responseDeserialize: deserialize_tutorial_TokenResponse,
  },
};

exports.CommonClient = grpc.makeGenericClientConstructor(CommonService);
