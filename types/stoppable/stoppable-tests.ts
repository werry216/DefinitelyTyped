import * as http from 'http';
import stoppable = require('stoppable');

const server = stoppable(http.createServer());
server.stop();

const server2 = stoppable(http.createServer(), 10000);
server2.stop();

const server3 = stoppable(http.createServer());
server.stop((err, gracefully) => {});
