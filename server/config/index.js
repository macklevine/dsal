var server;
var db;

if(process.env.NODE_ENV==="development"||!process.env.NODE_ENV){
  server = {
    port : 1337
  };
} else {
  server = {
    port : process.env.PORT
  };
}

export { server };