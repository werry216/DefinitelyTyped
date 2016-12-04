
// Type definitions for memoizee 0.4.1
// Project: https://github.com/medikoo/memoizee
// Definitions by: Juan Picado <https://github.com/juanpicado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Resolver options
 * @interface RevolversArray
 */
interface RevolversArray {
    [index:number]:Object
}

/**
 * List of options
 * @interface IMemoizeeOptions
 */
interface IMemoizeeOptions {
  length?: number,
  maxAge?: number,
  max?: number,
  preFetch?: number,
  promise?: boolean,
  dispose?: () => void,
  async?: boolean,
  primitive?: boolean,
  normalizer?:() => void,
  resolvers?: RevolversArray
}

/**
 * Main interface functions
 * @interface IMemoizee
 * @extends {Function}
 */
interface IMemoizee extends Function {
  delete: () => void,
  clear: () => void
}

/**
 * Memoize function
 * @param {*} f
 * @param {IMemoizeeOptions} [options]
 * @returns {IMemoizee}
 */
declare function memoizee(f: any, options?: IMemoizeeOptions): IMemoizee;

export = memoizee;
