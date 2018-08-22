// Type definitions for koa-html-minifier 1.0
// Project: https://github.com/koajs/html-minifier
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Options } from 'html-minifier';
import { Middleware } from 'koa';

declare function minifier(options?: Options): Middleware;

declare namespace minifier {}

export = minifier;
