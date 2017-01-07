import express from "express";
import http from "http";
import {server as config} from "./config/index";

const app = express();
const server = http.createServer(app);

server.listen(config.port, function(){
  console.log(`listening on ${config.port}`);
});