// Type definitions for express-formidable
// Project: https://github.com/noraesae/express-formidable
// Definitions by: Torkild Dyvik Olsen <https://github.com/tdolsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "express-formidable" {
    import { RequestHandler } from "express";

    interface ExpressFormidableOptions {
        encoding?: string;
        uploadDir?: string;
        keepExtensions?: boolean;
        type?: "multipart" | "urlencoded";
        maxFieldsSize?: number;
        maxFields?: number;
        hash?: boolean | "sha1" | "md5";
        multiples?: boolean;
    }

    function ExpressFormidable(options?: ExpressFormidableOptions): RequestHandler;

    export = ExpressFormidable;
}
