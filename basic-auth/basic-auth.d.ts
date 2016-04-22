// Type definitions for basic-auth
// Project: https://github.com/jshttp/basic-auth
// Definitions by: Clément Bourgeois <https://github.com/moonpyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />


declare function auth(req: Express.Request): auth.BasicAuthResult;

declare namespace auth {
    interface BasicAuthResult {
        name: string;
        pass: string;
    }
}

export = auth;
