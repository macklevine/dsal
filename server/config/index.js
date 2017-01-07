import defaults from "./default.js";

var config = {
  server : {
    port : process.env.SERVER_PORT
  }
};

if(process.env.NODE_ENV==="development"||!process.env.NODE_ENV){
  config = defaults;
}

export default config;