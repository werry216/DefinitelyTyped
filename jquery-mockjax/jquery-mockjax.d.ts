// Type definitions for jQuery Mockjax 2.0.1
// Project: https://github.com/jakerella/jquery-mockjax
// Definitions by: Laszlo Jakab <https://github.com/laszlojakab/>, Vladimir Đokić <https://github.com/vladeck/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface MockJaxSettingsHeaders {
    [key: string]: string;
}

interface MockJaxSettings {
    url?: string | RegExp;
    data?: any;
    type?: string;
    headers?: MockJaxSettingsHeaders;
    logging?: boolean;
    status?: number;
    statusText?: string;
    responseTime?: number;
    isTimeout?: boolean;
    contentType?: string;
    response?: (settings: any) => void;
    responseText?: string | Object;
    responseXml?: string;
    proxy?: string;
    proxyType?: string;
    lastModified?: string;
    etag?: string;
    onAfterSuccess?: Function;
    onAfterError?: Function;
    onAfterComplete?: Function;
}

interface MockJaxStatic {
    (options: MockJaxSettings): number;
    handler(id?: number): any;
    clear(id?: number): void;
    mockedAjaxCalls(): any[];
    unfiredHandlers(): any[];
    unmockedAjaxCalls(): any[];
}

interface JQueryStatic {
    mockjax: MockJaxStatic;
    mockjaxSettings: MockJaxSettings;
}
