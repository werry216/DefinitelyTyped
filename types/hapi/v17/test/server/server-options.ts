// https://github.com/hapijs/hapi/blob/master/API.md#-server-options
import {Server, ServerOptions, Plugin, Request, ServerRegisterOptions, ServerRoute, ResponseToolkit} from "hapi";
import {MimosOptions, MimosOptionsValue} from "mimos";

const CatboxMemory = require('catbox-memory');

const mimeOptions: MimosOptions = {
    override: {
        'node/module': {
            source: 'iana',
            compressible: true,
            extensions: ['node', 'modsule', 'npm'],
            type: 'node/module'
        },
        'application/javascript': {
            source: 'iana',
            charset: 'UTF-8',
            compressible: true,
            extensions: ['js', 'javascript'],
            type: 'text/javascript'
        },
        'text/html': {
            predicate: (mime:MimosOptionsValue) => {
                if (1 == 1) {
                    //mime.foo = 'test';
                }
                else {
                    //mime.foo = 'bar';
                }
                return mime;
            }
        }
    }
};

const plugin: Plugin = {
    name: 'example',
    register: (server:Server, options:ServerRegisterOptions) => {
        server.expose('key', 'value');
        server.plugins.example.other = 'other';
        console.log(server.plugins.example.key);      // 'value'
        console.log(server.plugins.example.other);    // 'other'
    }
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
    }
};

const options: ServerOptions = {
    address: '0.0.0.0',
    app: {
        key1: 'value1',
        key2: 'value2',
        any_thing: 'any_value',
    },
    autoListen: true,
    cache: {
        engine: CatboxMemory,
        name: 'test',
        shared: true,
        partition: 'hapi-cache',
        any_thing_1: 'any_thing_1',
        any_thing_2: 'any_thing_2'
    },
    compression: {
        minBytes: 1024
    },
    debug: {
        request: ['implementation']
    },
    host: 'localhost',
    listener: null,
    load: { sampleInterval: 0 },
    mime: mimeOptions,
    plugins: plugin,
    port: 8000,
    router: {
        isCaseSensitive: true,
        stripTrailingSlash: false
    },
    routes: serverRoute,
    state: {
        strictHeader: true,
        ignoreErrors: false,
        isSecure: true,
        isHttpOnly: true,
        isSameSite: 'Strict',
        encoding: 'none'
    },
    tls: null
};

const server = new Server(options);
server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
