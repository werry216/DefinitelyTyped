/**
 * Lifecycle methods are the interface between the framework and the application. Many of the request lifecycle steps:
 * extensions, authentication, handlers, pre-handler methods, and failAction function values are lifecyle methods
 * provided by the developer and executed by the framework.
 * Each lifecycle method is a function with the signature await function(request, h, [err]) where:
 * * request - the request object.
 * * h - the response toolkit the handler must call to set a response and return control back to the framework.
 * * err - an error object availble only when the method is used as a failAction value.
 */
export interface LifecycleMethod {

    // TODO need to be implemented. Ideally with Generics types.

}

/**
 * Each lifecycle method must return a value or a promise that resolves into a value. If a lifecycle method returns
 * without a value or resolves to an undefined value, an Internal Server Error (500) error response is sent.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#lifecycle-methods)
 */
export interface LifecycleReturnValue {



}



