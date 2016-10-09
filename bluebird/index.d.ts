// Type definitions for bluebird 3.0.0
// Project: https://github.com/petkaantonov/bluebird
// Definitions by: Leonard Hecker <https://github.com/lhecker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*!
 * The code following this comment originates from:
 *   https://github.com/types/npm-bluebird
 *
 * Licensed under:
 *   The MIT License (MIT)
 *
 *   Copyright (c) 2016 unional
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 */

declare class Bluebird<R> implements Bluebird.Thenable<R>, Bluebird.Inspection<R> {
  /**
   * Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
   * If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.
   */
  constructor(callback: (resolve: (thenableOrResult?: R | Bluebird.Thenable<R>) => void, reject: (error?: any) => void, onCancel?: (callback: () => void) => void) => void);

  /**
   * Promises/A+ `.then()`. Returns a new promise chained from this promise. The new promise will be rejected or resolved dedefer on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.
   */
  then<U1, U2>(onFulfill: (value: R) => U1 | Bluebird.Thenable<U1>, onReject: (error: any) => U2 | Bluebird.Thenable<U2>): Bluebird<U1 | U2>;
  then<U>(onFulfill: (value: R) => U | Bluebird.Thenable<U>, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U>;
  then<U>(onFulfill: (value: R) => U | Bluebird.Thenable<U>): Bluebird<U>;
  then(): Bluebird<R>;

  /**
   * This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise. Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.
   *
   * Alias `.caught();` for compatibility with earlier ECMAScript version.
   */
  catch(onReject?: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  caught(onReject?: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  catch<U>(onReject?: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
  caught<U>(onReject?: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;

  /**
   * This extends `.catch` to work more like catch-clauses in languages like Java or C#. Instead of manually checking `instanceof` or `.name === "SomeError"`, you may specify a number of error constructors which are eligible for this catch handler. The catch handler that is first met that has eligible constructors specified, is the one that will be called.
   *
   * This method also supports predicate-based filters. If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument. The return result of the predicate will be used determine whether the error handler should be called.
   *
   * Alias `.caught();` for compatibility with earlier ECMAScript version.
   */
  catch(predicate: (error: any) => boolean, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  caught(predicate: (error: any) => boolean, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  catch<U>(predicate: (error: any) => boolean, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
  caught<U>(predicate: (error: any) => boolean, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
  catch(ErrorClass: Function, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  caught(ErrorClass: Function, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  catch<U>(ErrorClass: Function, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
  caught<U>(ErrorClass: Function, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
  catch(predicate: Object, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  caught(predicate: Object, onReject: (error: any) => R | Bluebird.Thenable<R> | void | Bluebird.Thenable<void>): Bluebird<R>;
  catch<U>(predicate: Object, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;
  caught<U>(predicate: Object, onReject: (error: any) => U | Bluebird.Thenable<U>): Bluebird<U | R>;

  /**
   * Like `.catch` but instead of catching all types of exceptions, it only catches those that don't originate from thrown errors but rather from explicit rejections.
   */
  error<U>(onReject: (reason: any) => U | Bluebird.Thenable<U>): Bluebird<U>;

  /**
   * Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise. There are special semantics for `.finally()` in that the final value cannot be modified from the handler.
   *
   * Alias `.lastly();` for compatibility with earlier ECMAScript version.
   */
  finally<U>(handler: () => U | Bluebird.Thenable<U>): Bluebird<R>;

  lastly<U>(handler: () => U | Bluebird.Thenable<U>): Bluebird<R>;

  /**
   * Create a promise that follows this promise, but is bound to the given `thisArg` value. A bound promise will call its handlers with the bound value set to `this`. Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.
   */
  bind(thisArg: any): Bluebird<R>;

  /**
   * Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.
   */
  done<U>(onFulfilled?: (value: R) => U | Bluebird.Thenable<U>, onRejected?: (error: any) => U | Bluebird.Thenable<U>): void;

  /**
   * Like `.finally()`, but not called for rejections.
   */
  tap<U>(onFulFill: (value: R) => Bluebird.Thenable<U>): Bluebird<R>;
  tap<U>(onFulfill: (value: R) => U): Bluebird<R>;

  /**
   * Same as calling `Promise.delay(ms, this)`.
   */
  delay(ms: number): Bluebird<R>;

  /**
   * Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason.
   *  However, if this promise is not fulfilled or rejected within ms milliseconds, the returned promise
   *  is rejected with a TimeoutError or the error as the reason.
   *
   * You may specify a custom error message with the `message` parameter.
   */
  timeout(ms: number, message?: string | Error): Bluebird<R>;

  /**
   * Register a node-style callback on this promise. When this promise is is either fulfilled or rejected, the node callback will be called back with the node.js convention where error reason is the first argument and success value is the second argument. The error argument will be `null` in case of success.
   * If the `callback` argument is not a function, this method does not do anything.
   */
  nodeify(callback: (err: any, value?: R) => void, options?: Bluebird.SpreadOption): this;
  nodeify(...sink: any[]): this;
  asCallback(callback: (err: any, value?: R) => void, options?: Bluebird.SpreadOption): this;
  asCallback(...sink: any[]): this;

  /**
   * See if this `promise` has been fulfilled.
   */
  isFulfilled(): boolean;

  /**
   * See if this `promise` has been rejected.
   */
  isRejected(): boolean;

  /**
   * See if this `promise` is still defer.
   */
  isPending(): boolean;

  /**
   * See if this `promise` has been cancelled.
   */
  isCancelled(): boolean;

  /**
   * See if this `promise` is resolved -> either fulfilled or rejected.
   */
  isResolved(): boolean;

  /**
   * Get the fulfillment value of the underlying promise. Throws if the promise isn't fulfilled yet.
   *
   * throws `TypeError`
   */
  value(): R;

  /**
   * Get the rejection reason for the underlying promise. Throws if the promise isn't rejected yet.
   *
   * throws `TypeError`
   */
  reason(): any;

  /**
   * Synchronously inspect the state of this `promise`. The `PromiseInspection` will represent the state of
   * the promise as snapshotted at the time of calling `.reflect()`.
   */
  reflect(): Bluebird<Bluebird.Inspection<R>>;
  reflect(): Bluebird<Bluebird.Inspection<any>>;

  /**
   * This is a convenience method for doing:
   *
   * <code>
   * promise.then(function(obj){
   *     return obj[propertyName].call(obj, arg...);
   * });
   * </code>
   */
  call(propertyName: string, ...args: any[]): Bluebird<any>;

  /**
   * This is a convenience method for doing:
   *
   * <code>
   * promise.then(function(obj){
   *     return obj[propertyName];
   * });
   * </code>
   */
  // TODO: Use "type property type" once it's there
  // @see https://github.com/Microsoft/TypeScript/issues/1295
  get<U>(key: string | number): Bluebird<U>;

  /**
   * Convenience method for:
   *
   * <code>
   * .then(function() {
   *    return value;
   * });
   * </code>
   *
   * in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`
   *
   * Alias `.thenReturn();` for compatibility with earlier ECMAScript version.
   */
  return(): Bluebird<any>;
  thenReturn(): Bluebird<any>;
  return<U>(value: U): Bluebird<U>;
  thenReturn<U>(value: U): Bluebird<U>;

  /**
   * Convenience method for:
   *
   * <code>
   * .then(function() {
   *    throw reason;
   * });
   * </code>
   * Same limitations apply as with `.return()`.
   *
   * Alias `.thenThrow();` for compatibility with earlier ECMAScript version.
   */
  throw(reason: Error): Bluebird<R>;
  thenThrow(reason: Error): Bluebird<R>;

  /**
   * Convert to String.
   */
  toString(): string;

  /**
   * This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.
   */
  toJSON(): Object;

  /**
   * Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.
   */
  spread<U, W>(fulfilledHandler: (...values: W[]) => U | Bluebird.Thenable<U>): Bluebird<U>;
  spread<U>(fulfilledHandler: Function): Bluebird<U>;

  /**
   * Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  all<U>(): Bluebird<U[]>;

  /**
   * Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO how to model instance.props()?
  props(): Bluebird<Object>;

  /**
   * Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  any<U>(): Bluebird<U>;

  /**
   * Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  some<U>(count: number): Bluebird<U[]>;

  /**
   * Same as calling `Promise.race(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  race<U>(): Bluebird<U>;

  /**
   * Same as calling `Bluebird.map(thisPromise, mapper)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  map<Q, U>(mapper: (item: Q, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption): Bluebird<U[]>;

  /**
   * Same as calling `Promise.reduce(thisPromise, Function reducer, initialValue)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  reduce<Q, U>(reducer: (memo: U, item: Q, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, initialValue?: U): Bluebird<U>;

  /**
   * Same as calling ``Promise.filter(thisPromise, filterer)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  // TODO type inference from array-resolving promise?
  filter<U>(filterer: (item: U, index: number, arrayLength: number) => boolean | Bluebird.Thenable<boolean>, options?: Bluebird.ConcurrencyOption): Bluebird<U[]>;

  /**
   * Same as calling ``Bluebird.each(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  each<R, U>(iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>): Bluebird<R[]>;

  /**
   * Same as calling ``Bluebird.mapSeries(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
   */
  mapSeries<R, U>(iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>): Bluebird<U[]>;

  /**
   * Cancel this `promise`. Will not do anything if this promise is already settled or if the cancellation feature has not been enabled
   */
  cancel(): void;

  /**
   * Basically sugar for doing: somePromise.catch(function(){});
   * 
   * Which is needed in case error handlers are attached asynchronously to the promise later, which would otherwise result in premature unhandled rejection reporting.
   */
  suppressUnhandledRejections(): void;

  /**
   * Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
   *
   * Note about second argument: if it's specifically a true array, its values become respective arguments for the function call. Otherwise it is passed as is as the first argument for the function call.
   *
   * Alias for `attempt();` for compatibility with earlier ECMAScript version.
   */
  static try<R>(fn: () => R | Bluebird.Thenable<R>): Bluebird<R>;
  static attempt<R>(fn: () => R | Bluebird.Thenable<R>): Bluebird<R>;

  /**
   * Returns a new function that wraps the given function `fn`. The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
   * This method is convenient when a function can sometimes return synchronously or throw synchronously.
   */
  static method(fn: Function): Function;

  /**
   * Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
   */
  static resolve(): Bluebird<void>;
  static resolve<R>(value: R | Bluebird.Thenable<R>): Bluebird<R>;

  /**
   * Create a promise that is rejected with the given `reason`.
   */
  static reject(reason: any): Bluebird<any>;
  static reject<R>(reason: any): Bluebird<R>;

  /**
   * Create a promise with undecided fate and return a `PromiseResolver` to control it. See resolution?: Promise(#promise-resolution).
   */
  static defer<R>(): Bluebird.Resolver<R>;

  /**
   * Cast the given `value` to a trusted promise. If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value. If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
   */
  static cast<R>(value: R | Bluebird.Thenable<R>): Bluebird<R>;

  /**
   * Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
   */
  static bind(thisArg: any): Bluebird<void>;

  /**
   * See if `value` is a trusted Promise.
   */
  static is(value: any): boolean;

  /**
   * Call this right after the library is loaded to enabled long stack traces. Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created. Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
   */
  static longStackTraces(): void;

  /**
   * Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
   * If value is a promise, the delay will start counting down when it is fulfilled and the returned
   *  promise will be fulfilled with the fulfillment value of the value promise.
   */
  static delay<R>(ms: number, value: R | Bluebird.Thenable<R>): Bluebird<R>;
  static delay(ms: number): Bluebird<void>;

  /**
   * Returns a function that will wrap the given `nodeFunction`. Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function. The node function should conform to node.js convention of accepting a callback as last argument and calling that callback with error as the first argument and success value on the second argument.
   *
   * If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
   *
   * If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
   */
  static promisify<T>(func: (callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions): () => Bluebird<T>;
  static promisify<T, A1>(func: (arg1: A1, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions): (arg1: A1) => Bluebird<T>;
  static promisify<T, A1, A2>(func: (arg1: A1, arg2: A2, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions): (arg1: A1, arg2: A2) => Bluebird<T>;
  static promisify<T, A1, A2, A3>(func: (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions): (arg1: A1, arg2: A2, arg3: A3) => Bluebird<T>;
  static promisify<T, A1, A2, A3, A4>(func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Bluebird<T>;
  static promisify<T, A1, A2, A3, A4, A5>(func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result: T) => void) => void, options?: Bluebird.PromisifyOptions): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Bluebird<T>;
  static promisify(nodeFunction: Function, options?: Bluebird.PromisifyOptions): Function;

  /**
   * Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain. The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
   *
   * Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example, if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
   */
  // TODO how to model promisifyAll?
  static promisifyAll(target: Object, options?: Bluebird.PromisifyAllOptions): Object;

  /**
   * Returns a promise that is resolved by a node style callback function.
   */
  static fromNode(resolver: (callback: (err: any, result?: any) => void) => void, options?: Bluebird.FromNodeOptions): Bluebird<any>;
  static fromNode<T>(resolver: (callback: (err: any, result?: T) => void) => void, options?: Bluebird.FromNodeOptions): Bluebird<T>;
  static fromCallback(resolver: (callback: (err: any, result?: any) => void) => void, options?: Bluebird.FromNodeOptions): Bluebird<any>;
  static fromCallback<T>(resolver: (callback: (err: any, result?: T) => void) => void, options?: Bluebird.FromNodeOptions): Bluebird<T>;

  /**
   * Returns a function that can use `yield` to run asynchronous code synchronously. This feature requires the support of generators which are drafted in the next version of the language. Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
   */
  // TODO fix coroutine GeneratorFunction
  static coroutine<R>(generatorFunction: Function): Function;

  /**
   * Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
   *
   * Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
   */
  static onPossiblyUnhandledRejection(handler: (reason: any) => any): void;

  /**
   * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled. The promise's fulfillment value is an array with fulfillment values at respective positions to the original array. If any promise in the array rejects, the returned promise is rejected with the rejection reason.
   */
  // TODO enable more overloads
  // array with promises of different types
  static all<T1, T2, T3, T4, T5>(values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2, Bluebird.Thenable<T3> | T3, Bluebird.Thenable<T4> | T4, Bluebird.Thenable<T5> | T5]): Bluebird<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2, Bluebird.Thenable<T3> | T3, Bluebird.Thenable<T4> | T4]): Bluebird<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2, Bluebird.Thenable<T3> | T3]): Bluebird<[T1, T2, T3]>;
  static all<T1, T2>(values: [Bluebird.Thenable<T1> | T1, Bluebird.Thenable<T2> | T2]): Bluebird<[T1, T2]>;
  static all<T1>(values: [Bluebird.Thenable<T1> | T1]): Bluebird<[T1]>;
  // array with values
  static all<R>(values: Bluebird.Thenable<(Bluebird.Thenable<R> | R)[]> | (Bluebird.Thenable<R> | R)[]): Bluebird<R[]>;

  /**
   * Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment value is an object with fulfillment values at respective keys to the original object. If any promise in the object rejects, the returned promise is rejected with the rejection reason.
   *
   * If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties. All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
   *
   * *The original object is not modified.*
   */
  // TODO verify this is correct
  // trusted promise for object
  static props(object: Bluebird<Object>): Bluebird<Object>;
  // object
  static props(object: Object): Bluebird<Object>;

  /**
   * Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
   */
  static any<R>(values: Bluebird.Thenable<(Bluebird.Thenable<R> | R)[]> | (Bluebird.Thenable<R> | R)[]): Bluebird<R>;

  /**
   * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
   *
   * **Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
   */
  static race<R>(values: Bluebird.Thenable<(Bluebird.Thenable<R> | R)[]> | (Bluebird.Thenable<R> | R)[]): Bluebird<R>;

  /**
   * Initiate a competetive race between multiple promises or values (values will become immediately fulfilled promises). When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of the winners in order of resolution.
   *
   * If too many promises are rejected so that the promise can never become fulfilled, it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
   *
   * *The original array is not modified.*
   */
  // promise of array with promises of value
  static some<R>(values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, count: number): Bluebird<R[]>;
  // promise of array with values
  static some<R>(values: Bluebird.Thenable<R[]>, count: number): Bluebird<R[]>;
  // array with promises of value
  static some<R>(values: Bluebird.Thenable<R>[], count: number): Bluebird<R[]>;
  // array with values
  static some<R>(values: R[], count: number): Bluebird<R[]>;

  /**
   * Promise.join(
   *   Promise<any>|any values...,
   *   function handler
   * ) -> Promise
   * For coordinating multiple concurrent discrete promises.
   *
   * Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array. This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply
   */
  static join<R, A1>(arg1: A1 | Bluebird.Thenable<A1>, handler: (arg1?: A1) => R | Bluebird.Thenable<R>): Bluebird<R>;
  static join<R, A1, A2>(arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, handler: (arg1?: A1, arg2?: A2) => R | Bluebird.Thenable<R>): Bluebird<R>;
  static join<R, A1, A2, A3>(arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, arg3: A3 | Bluebird.Thenable<A3>, handler: (arg1?: A1, arg2?: A2, arg3?: A3) => R | Bluebird.Thenable<R>): Bluebird<R>;
  static join<R, A1, A2, A3, A4>(arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, arg3: A3 | Bluebird.Thenable<A3>, arg4: A4 | Bluebird.Thenable<A4>, handler: (arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4) => R | Bluebird.Thenable<R>): Bluebird<R>;
  static join<R, A1, A2, A3, A4, A5>(arg1: A1 | Bluebird.Thenable<A1>, arg2: A2 | Bluebird.Thenable<A2>, arg3: A3 | Bluebird.Thenable<A3>, arg4: A4 | Bluebird.Thenable<A4>, arg5: A5 | Bluebird.Thenable<A5>, handler: (arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4, arg5?: A5) => R | Bluebird.Thenable<R>): Bluebird<R>;

  // variadic array
  /** @deprecated use .all instead */
  static join<R>(...values: (R | Bluebird.Thenable<R>)[]): Bluebird<R[]>;

  /**
   * Map an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
   *
   * If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
   *
   * *The original array is not modified.*
   */
  // promise of array with promises of value
  static map<R, U>(values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption): Bluebird<U[]>;

  // promise of array with values
  static map<R, U>(values: Bluebird.Thenable<R[]>, mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption): Bluebird<U[]>;

  // array with promises of value
  static map<R, U>(values: Bluebird.Thenable<R>[], mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption): Bluebird<U[]>;

  // array with values
  static map<R, U>(values: R[], mapper: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, options?: Bluebird.ConcurrencyOption): Bluebird<U[]>;

  /**
   * Reduce an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
   *
   * If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
   *
   * *The original array is not modified. If no `intialValue` is given and the array doesn't contain at least 2 items, the callback will not be called and `undefined` is returned. If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
   */
  // promise of array with promises of value
  static reduce<R, U>(values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, reducer: (total: U, current: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, initialValue?: U): Bluebird<U>;

  // promise of array with values
  static reduce<R, U>(values: Bluebird.Thenable<R[]>, reducer: (total: U, current: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, initialValue?: U): Bluebird<U>;

  // array with promises of value
  static reduce<R, U>(values: Bluebird.Thenable<R>[], reducer: (total: U, current: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, initialValue?: U): Bluebird<U>;

  // array with values
  static reduce<R, U>(values: R[], reducer: (total: U, current: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>, initialValue?: U): Bluebird<U>;

  /**
   * Filter an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
   *
   * The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
   *
   * *The original array is not modified.
   */
  // promise of array with promises of value
  static filter<R>(values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, filterer: (item: R, index: number, arrayLength: number) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption): Bluebird<R[]>;

  // promise of array with values
  static filter<R>(values: Bluebird.Thenable<R[]>, filterer: (item: R, index: number, arrayLength: number) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption): Bluebird<R[]>;

  // array with promises of value
  static filter<R>(values: Bluebird.Thenable<R>[], filterer: (item: R, index: number, arrayLength: number) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption): Bluebird<R[]>;

  // array with values
  static filter<R>(values: R[], filterer: (item: R, index: number, arrayLength: number) => boolean | Bluebird.Thenable<boolean>, option?: Bluebird.ConcurrencyOption): Bluebird<R[]>;

  /**
   * Iterate over an array, or a promise of an array, which contains promises (or a mix of promises and values) with the given iterator function with the signature (item, index, value) where item is the resolved value of a respective promise in the input array. Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.
   *
   * Resolves to the original array unmodified, this method is meant to be used for side effects. If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
   */
  // promise of array with promises of value
  static each<R, U>(values: Bluebird.Thenable<Bluebird.Thenable<R>[]>, iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>): Bluebird<R[]>;
  // array with promises of value
  static each<R, U>(values: Bluebird.Thenable<R>[], iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>): Bluebird<R[]>;
  // array with values OR promise of array with values
  static each<R, U>(values: R[] | Bluebird.Thenable<R[]>, iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>): Bluebird<R[]>;

  /**
   * Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values), iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.
   *
   * Returns a promise for an array that contains the values returned by the iterator function in their respective positions. The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled. This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.
   *
   * If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.
   */
  static mapSeries<R, U>(values: (R | Bluebird.Thenable<R>)[] | Bluebird.Thenable<(R | Bluebird.Thenable<R>)[]>, iterator: (item: R, index: number, arrayLength: number) => U | Bluebird.Thenable<U>): Bluebird<U[]>;

  /**
   * A meta method used to specify the disposer method that cleans up a resource when using `Promise.using`.
   *
   * Returns a Disposer object which encapsulates both the resource as well as the method to clean it up.
   *  The user can pass this object to `Promise.using` to get access to the resource when it becomes available,
   *  as well as to ensure its automatically cleaned up.
   *
   * The second argument passed to a disposer is the result promise of the using block, which you can
   *  inspect synchronously.
   */
  disposer(disposeFn: (arg: R, promise: Bluebird<R>) => void | Bluebird.Thenable<void>): Bluebird.Disposer<R>;

  /**
   * In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
   *  will be called when the promise returned by the callback passed to using has settled. The disposer is
   *  necessary because there is no standard interface in node for disposing resources.
   */
  static using<R, T>(disposer: Bluebird.Disposer<R>, executor: (transaction: R) => Bluebird.Thenable<T>): Bluebird<T>;
  static using<R1, R2, T>(disposer: Bluebird.Disposer<R1>, disposer2: Bluebird.Disposer<R2>, executor: (transaction1: R1, transaction2: R2) => Bluebird.Thenable<T>): Bluebird<T>;
  static using<R1, R2, R3, T>(disposer: Bluebird.Disposer<R1>, disposer2: Bluebird.Disposer<R2>, disposer3: Bluebird.Disposer<R3>, executor: (transaction1: R1, transaction2: R2, transaction3: R3) => Bluebird.Thenable<T>): Bluebird<T>;

  /**
   * Add handler as the handler to call when there is a possibly unhandled rejection.
   * The default handler logs the error stack to stderr or console.error in browsers.
   *
   * Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
   *
   * Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.
   */
  static onPossiblyUnhandledRejection(handler?: (error: Error, promise: Bluebird<any>) => void): void;

  /**
   * Configure long stack traces, warnings, monitoring and cancellation.
   * Note that even though false is the default here, a development environment might be detected which automatically
   *  enables long stack traces and warnings.
   */
  static config(options: {
    /** Enable warnings */
    warnings?: boolean | {
      /** Enables all warnings except forgotten return statements. */
      wForgottenReturn: boolean;
    };
    /** Enable long stack traces */
    longStackTraces?: boolean;
    /** Enable cancellation */
    cancellation?: boolean;
    /** Enable monitoring */
    monitoring?: boolean;
  }): void;
}

declare namespace Bluebird {
  export interface ConcurrencyOption {
    concurrency: number;
  }
  export interface SpreadOption {
    spread: boolean;
  }
  export interface FromNodeOptions {
    multiArgs?: boolean;
  }
  export interface PromisifyOptions {
    context?: any;
    multiArgs?: boolean;
  }
  export interface PromisifyAllOptions extends PromisifyOptions {
    suffix?: string;
    filter?: (name: string, func: Function, target?: any, passesDefaultFilter?: boolean) => boolean;
    // The promisifier gets a reference to the original method and should return a function which returns a promise
    promisifier?: (originalMethod: Function) => () => Thenable<any>;
  }

  /**
   * Represents an error is an explicit promise rejection as opposed to a thrown error.
   *  For example, if an error is errbacked by a callback API promisified through undefined or undefined
   *  and is not a typed error, it will be converted to a `OperationalError` which has the original error in
   *  the `.cause` property.
   *
   * `OperationalError`s are caught in `.error` handlers.
   */
  export class OperationalError extends Error { }

  /**
   * Signals that an operation has timed out. Used as a custom cancellation reason in `.timeout`.
   */
  export class TimeoutError extends Error { }

  /**
   * Signals that an operation has been aborted or cancelled. The default reason used by `.cancel`.
   */
  export class CancellationError extends Error {}

  /**
   * A collection of errors. `AggregateError` is an array-like object, with numeric indices and a `.length` property.
   *  It supports all generic array methods such as `.forEach` directly.
   *
   * `AggregateError`s are caught in `.error` handlers, even if the contained errors are not operational.
   *
   * `Promise.some` and `Promise.any` use `AggregateError` as rejection reason when they fail.
   */
  export class AggregateError extends Error {}

  /**
   * returned by `Bluebird.disposer()`.
   */
  export class Disposer<R> {
  }

  export interface Thenable<R> {
    then<U>(onFulfilled: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(onFulfilled: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void | Thenable<void>): Thenable<U>;
  }

  export interface Resolver<R> {
    /**
     * Returns a reference to the controlled promise that can be passed to clients.
     */
    promise: Bluebird<R>;

    /**
     * Resolve the underlying promise with `value` as the resolution value. If `value` is a thenable or a promise, the underlying promise will assume its state.
     */
    resolve(value: R): void;
    resolve(): void;

    /**
     * Reject the underlying promise with `reason` as the rejection reason.
     */
    reject(reason: any): void;

    /**
     * Gives you a callback representation of the `PromiseResolver`. Note that this is not a method but a property. The callback accepts error object in first argument and success values on the 2nd parameter and the rest, I.E. node js conventions.
     *
     * If the the callback is called with multiple success values, the resolver fullfills its promise with an array of the values.
     */
    // TODO specify resolver callback
    callback: (err: any, value: R, ...values: R[]) => void;
  }

  export interface Inspection<R> {
    /**
     * See if the underlying promise was fulfilled at the creation time of this inspection object.
     */
    isFulfilled(): boolean;

    /**
     * See if the underlying promise was rejected at the creation time of this inspection object.
     */
    isRejected(): boolean;

    /**
     * See if the underlying promise was cancelled at the creation time of this inspection object.
     */
    isCancelled(): boolean;

    /**
     * See if the underlying promise was defer at the creation time of this inspection object.
     */
    isPending(): boolean;

    /**
     * Get the fulfillment value of the underlying promise. Throws if the promise wasn't fulfilled at the creation time of this inspection object.
     *
     * throws `TypeError`
     */
    value(): R;

    /**
     * Get the rejection reason for the underlying promise. Throws if the promise wasn't rejected at the creation time of this inspection object.
     *
     * throws `TypeError`
     */
    reason(): any;
  }

  /**
   * Returns a new independent copy of the Bluebird library.
   *
   * This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.
   */
  export function getNewLibraryCopy(): typeof Bluebird;

  /**
   * This is relevant to browser environments with no module loader.
   *
   * Release control of the Promise namespace to whatever it was before this library was loaded. Returns a reference to the library namespace so you can attach it to something else.
   */
  export function noConflict(): typeof Bluebird;

  /**
   * Changes how bluebird schedules calls a-synchronously.
   *
   * @param scheduler Should be a function that asynchronously schedules
   *                  the calling of the passed in function
   */
  export function setScheduler(scheduler: (callback: (...args: any[]) => void) => void): void;
}

export = Bluebird;