"use strict";

const server = require('./listener/server');
// const serverInit = require('./app/init/init');
const router = require('./app/routes/router');

server.start(router.router);