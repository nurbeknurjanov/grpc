#!/bin/bash

PROTO_DIR=./proto

#echo $(pwd) > ${PROTO_DIR}/example.txt

#generate server js code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR}/generated \
    --grpc_out=${PROTO_DIR}/generated \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR} ${PROTO_DIR}/*.proto

#generate server ts code
yarn run grpc_tools_node_protoc \
    --ts_out=${PROTO_DIR}/generated \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    -I ${PROTO_DIR} ${PROTO_DIR}/*.proto