
import express from "express";
import http from "http";
import {server as serverConfig} from './config/index';

const app = express();
const server = http.createServer(app);

server.listen(serverConfig.port, function(){
  console.log(`listening on ${serverConfig.port}`);
});