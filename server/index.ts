import { Server, ServerCredentials } from 'grpc';
import { UsersService } from '../proto/generated/users_services_grpc_pb';
import { CommonService } from '../proto/generated/common_services_grpc_pb';
import UsersServiceClass from './users_service';
import CommonServiceClass from './common_service';

const server = new Server();
server.addService(UsersService, new UsersServiceClass());
server.addService(CommonService, new CommonServiceClass());

server.bind(`localhost:4000`, ServerCredentials.createInsecure());
server.start();

