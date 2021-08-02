//Reference from docs 

const jsonServer = require('json-server'),
      server = jsonServer.create(),
      router = jsonServer.router('./libraries/db.json'),
      middlewares = jsonServer.defaults();
      port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port);