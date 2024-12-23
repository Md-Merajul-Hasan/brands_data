const jsonServer = require("json-server"); //importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json"); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //we can use any port number here

server.use(middlewares);
server.use(router);

server.listen(port);