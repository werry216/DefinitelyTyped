import * as http from 'http';
import stoppable = require('stoppable');

const server: http.Server = stoppable(http.createServer());
server.stop();

const server2: http.Server = stoppable(http.createServer(), 10000);
server2.stop();
