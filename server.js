const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fakeDelay = (req, res, next) => { setTimeout(next, 2000) }
const port = process.env.PORT || 3001;

server.use(fakeDelay);
server.use(middlewares);
server.use(router);

server.listen(port);