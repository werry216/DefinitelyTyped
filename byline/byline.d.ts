// Type definitions for byline 4.2.1
// Project: https://github.com/jahewson/node-byline
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


import stream = require("stream");

export interface LineStreamOptions extends stream.TransformOptions {
    keepEmptyLines?: boolean;
}

export interface LineStream extends stream.Transform {
}

export interface LineStreamCreatable extends LineStream {
    new (options?: LineStreamOptions): LineStream
}

//TODO is it possible to declare static factory functions without name (directly on the module)
//
// JS:
// // convinience API
// module.exports = function(readStream, options) {
//      return module.exports.createStream(readStream, options);
// };
//
// TS:
// ():LineStream; // same as createStream():LineStream
// (stream:stream.Stream, options?:LineStreamOptions):LineStream; // same as createStream(stream, options?):LineStream

declare export function createStream(): LineStream;
declare export function createStream(stream: NodeJS.ReadableStream, options?: LineStreamOptions): LineStream;

declare export var LineStream: LineStreamCreatable;
