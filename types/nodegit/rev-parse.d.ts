import { Object } from './object';
import { Repository } from './repository';
import { Reference } from './reference';

export namespace Revparse {
    const enum MODE {
        SINGLE = 1,
        RANGE = 2,
        MERGE_BASE = 4
    }
}

export class Revparse {
    /**
     *
     *
     * @static
     * @param {Object} object_out
     * @param {Reference} reference_out
     * @param {Repository} repo
     * @param {string} spec
     * @returns {number}
     *
     * @memberof Revparse
     */
    static ext(object_out: Object, reference_out: Reference, repo: Repository, spec: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} spec
     * @returns {Promise<Object>}
     *
     * @memberof Revparse
     */
    static single(repo: Repository, spec: string): Promise<Object>;
}
