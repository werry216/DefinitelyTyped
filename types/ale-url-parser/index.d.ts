// Type definitions for ale-url-parser 0.13
// Project: https://github.com/msn0/ale-url-parser#readme
// Definitions by: Michał Jezierski <https://github.com/msn0>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface QueryParams {
    [key: string]: any;
}

export interface UrlObject {
    /**
     * @default 'http'
     */
    protocol?: string | undefined;
    /**
     * @default '''
     */
    host?: string | undefined;
    /**
     * @default []
     */
    path?: string[] | undefined;
    /**
     * @default {}
     */
    query?: QueryParams | undefined;
    hash?: string | undefined;
}

export interface Options {
    /**
     * Sorting query params is disabled by default.
     * You can define your own sorting method
     */
    compareFunction?: ((a: string, b: string) => number) | undefined;
}

/**
 * Parse url string into url object.
 * @return UrlObject
 */
export function parse(url: string): UrlObject;

/**
 * Stringify url object into url string.
 * @return string
 */
export function stringify(urlObject: UrlObject, options?: Options): string;
