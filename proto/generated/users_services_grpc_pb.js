// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
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

function serialize_tutorial_User(arg) {
  if (!(arg instanceof users_messages_pb.User)) {
    throw new Error('Expected argument of type tutorial.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_User(buffer_arg) {
  return users_messages_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_UserPost(arg) {
  if (!(arg instanceof users_messages_pb.UserPost)) {
    throw new Error('Expected argument of type tutorial.UserPost');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_UserPost(buffer_arg) {
  return users_messages_pb.UserPost.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_UserPostUpdate(arg) {
  if (!(arg instanceof users_messages_pb.UserPostUpdate)) {
    throw new Error('Expected argument of type tutorial.UserPostUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_UserPostUpdate(buffer_arg) {
  return users_messages_pb.UserPostUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_UserRequest(arg) {
  if (!(arg instanceof users_messages_pb.UserRequest)) {
    throw new Error('Expected argument of type tutorial.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_UserRequest(buffer_arg) {
  return users_messages_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_UsersRequest(arg) {
  if (!(arg instanceof users_messages_pb.UsersRequest)) {
    throw new Error('Expected argument of type tutorial.UsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_UsersRequest(buffer_arg) {
  return users_messages_pb.UsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tutorial_UsersResponse(arg) {
  if (!(arg instanceof users_messages_pb.UsersResponse)) {
    throw new Error('Expected argument of type tutorial.UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tutorial_UsersResponse(buffer_arg) {
  return users_messages_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getUser: {
    path: '/tutorial.Users/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: users_messages_pb.UserRequest,
    responseType: users_messages_pb.User,
    requestSerialize: serialize_tutorial_UserRequest,
    requestDeserialize: deserialize_tutorial_UserRequest,
    responseSerialize: serialize_tutorial_User,
    responseDeserialize: deserialize_tutorial_User,
  },
  createUser: {
    path: '/tutorial.Users/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_messages_pb.UserPost,
    responseType: users_messages_pb.User,
    requestSerialize: serialize_tutorial_UserPost,
    requestDeserialize: deserialize_tutorial_UserPost,
    responseSerialize: serialize_tutorial_User,
    responseDeserialize: deserialize_tutorial_User,
  },
  updateUser: {
    path: '/tutorial.Users/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_messages_pb.UserPostUpdate,
    responseType: users_messages_pb.User,
    requestSerialize: serialize_tutorial_UserPostUpdate,
    requestDeserialize: deserialize_tutorial_UserPostUpdate,
    responseSerialize: serialize_tutorial_User,
    responseDeserialize: deserialize_tutorial_User,
  },
  deleteUser: {
    path: '/tutorial.Users/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: users_messages_pb.UserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_tutorial_UserRequest,
    requestDeserialize: deserialize_tutorial_UserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getUsersStream: {
    path: '/tutorial.Users/GetUsersStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: users_messages_pb.User,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tutorial_User,
    responseDeserialize: deserialize_tutorial_User,
  },
  getUsers: {
    path: '/tutorial.Users/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_messages_pb.UsersRequest,
    responseType: users_messages_pb.UsersResponse,
    requestSerialize: serialize_tutorial_UsersRequest,
    requestDeserialize: deserialize_tutorial_UsersRequest,
    responseSerialize: serialize_tutorial_UsersResponse,
    responseDeserialize: deserialize_tutorial_UsersResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
