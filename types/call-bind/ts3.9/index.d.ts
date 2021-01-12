// This is necessary to disallow import of `call-bind/index` or `call-bind/index.js`:
// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'call-bind' {
    export = callBind;

    /**
     * For a given function, creates a bound function that has the same body as the original function.
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
     *
     * Equivalent to:
     * ```js
     * Function.prototype.call.bind(target, ...)
     * ```
     *
     * @param target The function to be used as the this object for `Function.prototype.call`.
     * @param args Arguments to bind to the parameters of the function.
     */
    function callBind<T, A extends readonly unknown[], R>(
        target: (this: T, ...args: A) => R,
    ): (thisArg: T, ...args: A) => R;
    function callBind<T, A extends readonly unknown[], R>(
        target: (this: T, ...args: A) => R,
        thisArg: T,
    ): (...args: A) => R;
    function callBind<T, A0, A extends readonly unknown[], R>(
        target: (this: T, arg0: A0, ...args: A) => R,
        thisArg: T,
        arg0: A0,
    ): (...args: A) => R;
    function callBind<T, A0, A1, A extends readonly unknown[], R>(
        target: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
        thisArg: T,
        arg0: A0,
        arg1: A1,
    ): (...args: A) => R;
    function callBind<T, A0, A1, A2, A extends readonly unknown[], R>(
        target: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
        thisArg: T,
        arg0: A0,
        arg1: A1,
        arg2: A2,
    ): (...args: A) => R;
    function callBind<T, A0, A1, A2, A3, A extends readonly unknown[], R>(
        target: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
        thisArg: T,
        arg0: A0,
        arg1: A1,
        arg2: A2,
        arg3: A3,
    ): (...args: A) => R;
    function callBind<T, AX, R>(
        target: (this: T, ...args: readonly AX[]) => R,
        thisArg: T,
        ...args: readonly AX[]
    ): (...args: readonly AX[]) => R;

    // tslint:disable-next-line: ban-types
    function callBind<F extends Function>(
        target: F,
    ): (
        thisArg: ThisParameterType<F>,
        ...args: F extends (...args: infer A) => any ? A : readonly unknown[]
    ) => F extends (...args: any) => infer R ? R : any;

    // tslint:disable-next-line: ban-types
    function callBind<F extends Function>(
        target: F,
        thisArg: ThisParameterType<F>,
    ): (
        ...args: F extends (...args: infer A) => any ? A : readonly unknown[]
    ) => F extends (...args: any) => infer R ? R : any;

    // tslint:disable-next-line: ban-types
    function callBind<F extends Function>(
        target: F,
        thisArg: ThisParameterType<F>,
        ...args: readonly unknown[]
    ): (...args: readonly unknown[]) => F extends (...args: any) => infer R ? R : any;

    namespace callBind {
        /**
         * For a given function, creates a bound function that has the same body as the original function.
         * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
         *
         * Equivalent to:
         * ```js
         * Function.prototype.apply.bind(target, ...)
         * ```
         *
         * @param target The function to be used as the this object for `Function.prototype.apply`.
         * @param args Arguments to bind to the parameters of the function.
         */
        function apply<T, A extends readonly unknown[], R>(
            target: (this: T, ...args: A) => R,
        ): (thisArg: T, args: Readonly<A>) => R;
        function apply<T, A extends readonly unknown[], R>(
            target: (this: T, ...args: A) => R,
            thisArg: T,
        ): (args: Readonly<A>) => R;
        function apply<T, A0, A extends readonly unknown[], R>(
            target: (this: T, arg0: A0, ...args: A) => R,
            thisArg: T,
            arg0: A0,
        ): (args: Readonly<A>) => R;
        function apply<T, A0, A1, A extends readonly unknown[], R>(
            target: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
            thisArg: T,
            arg0: A0,
            arg1: A1,
        ): (args: Readonly<A>) => R;
        function apply<T, A0, A1, A2, A extends readonly unknown[], R>(
            target: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
            thisArg: T,
            arg0: A0,
            arg1: A1,
            arg2: A2,
        ): (args: Readonly<A>) => R;
        function apply<T, A0, A1, A2, A3, A extends readonly unknown[], R>(
            target: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
            thisArg: T,
            arg0: A0,
            arg1: A1,
            arg2: A2,
            arg3: A3,
        ): (args: Readonly<A>) => R;
        function apply<T, AX, R>(
            target: (this: T, ...args: readonly AX[]) => R,
            thisArg: T,
            ...args: readonly AX[]
        ): (args: readonly AX[]) => R;

        // tslint:disable-next-line: ban-types
        function apply<F extends Function>(
            target: F,
        ): (
            thisArg: ThisParameterType<F>,
            args: F extends (...args: infer A) => any ? Readonly<A> : readonly unknown[],
        ) => F extends (...args: any) => infer R ? R : any;

        // tslint:disable-next-line: ban-types
        function apply<F extends Function>(
            target: F,
            thisArg: ThisParameterType<F>,
        ): (
            args: F extends (...args: infer A) => any ? Readonly<A> : readonly unknown[],
        ) => F extends (...args: any) => infer R ? R : any;

        // tslint:disable-next-line: ban-types
        function apply<F extends Function>(
            target: F,
            thisArg: ThisParameterType<F>,
            ...args: readonly unknown[]
        ): (args: ArrayLike<unknown>) => F extends (...args: any) => infer R ? R : any;
    }
}
