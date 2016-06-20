// Type definitions for Redux v3.3.1
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Redux;
export as namespace Redux;

declare namespace Redux {

    interface ActionCreator extends Function {
        (...args: any[]): any;
    }

    interface Reducer extends Function {
        (state: any, action: any): any;
    }

    interface Dispatch extends Function {
        (action: any): any;
    }

    interface StoreMethods {
        dispatch: Dispatch;
        getState(): any;
    }


    interface MiddlewareArg {
        dispatch: Dispatch;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }

    class Store {
        getReducer(): Reducer;
        replaceReducer(nextReducer: Reducer): void;
        dispatch(action: any): any;
        getState(): any;
        subscribe(listener: Function): Function;
    }

    function createStore(reducer: Reducer, initialState?: any, enhancer?: Function): Store;
    function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch): T;
    function combineReducers(reducers: any): Reducer;
    function applyMiddleware(...middlewares: Middleware[]): Function;
    function compose<T extends Function>(...functions: Function[]): T;
}