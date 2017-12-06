// From https://github.com/hapijs/hapi/blob/master/API.md#-serverapp
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const server = new Server(options);
server.app.key = 'value2';

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: function (request: Request, h: ResponseToolkit) {
        return 'key: ' + request.server.app.key;
    }
}

server.route(serverRoute);

server.start();
console.log(`Server running at: ${server.info!.uri}`);
