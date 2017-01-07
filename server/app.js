
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import {server as serverConfig} from './config/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/../client'));


const server = http.createServer(app);

server.listen(serverConfig.port, function(){
  console.log(`listening on ${serverConfig.port}`);
});