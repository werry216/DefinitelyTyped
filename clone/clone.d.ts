// Type definitions for clone 0.1.11
// Project: https://github.com/pvorb/node-clone
// Definitions by: Kieran Simpson <https://github.com/kierans/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * See clone JS source for API docs
 */
declare module "clone" {
    var clone: {
        /**
         * @param val the value that you want to clone, any type allowed
         * @param circular Call clone with circular set to false if you are certain that obj contains no circular references. This will give better performance if needed. There is no error if undefined or null is passed as obj.
         * @param depth to wich the object is to be cloned (optional, defaults to infinity)
         */
        <T>(val: T, circular?: boolean, depth?: number): T;
        /**
         * @param obj the object that you want to clone
         */
        clonePrototype<T>(obj: T): T;
    };

    export = clone
}
