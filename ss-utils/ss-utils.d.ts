// Type definitions for ServiceStack Utils v0.0.1
// Project: https://servicestack.net/
// Definitions by: Demis Bellot <https://github.com/mythz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
    setFieldError: (name: string, msg: string) => void;
    serializeMap: () => { [index: string]: any };
    applyErrors: (status: ssutils.ResponseStatus, opt?: ssutils.ApplyErrorsOptions) => JQuery;
    clearErrors: () => JQuery;
    bindForm: (opt?: ssutils.ApplyErrorsOptions) => JQuery;
    applyValues: (values: { [index: string]: string }) => JQuery;
    bindHandlers: (handlers: { [index: string]: Function }) => JQuery;
    setActiveLinks: () => JQuery;
    handleServerEvents: (opt?: ssutils.HandleServerEventsOptions) => void;
}

interface JQueryStatic {
    ss: ssutils.Static;
}

declare module ssutils 
{
    interface Static {
        handlers: { [index: string]: Function };
        onSubmitDisable: string;
        validation: Validation;
        clearAdjacentError: () => void;
        todate: (s: string) => Date;
        todfmt: (s: string) => string;
        dfmt: (d: Date) => string;
        dfmthm: (d: Date) => string;
        tfmt12: (d: Date) => string;
        splitOnFirst: (s: string) => string[];
        splitOnLast: (s: string) => string[];
        getSelection: () => string;
        queryString: (url: string) => { [index: string]: string };
        createUrl: (route: string, args?: any) => string;
        humanize: (s: string) => string;

        listenOn: string;
        eventReceivers: any;
        reconnectServerEvents: (opt: ReconnectServerEventsOptions) => any;
    }

    interface Validation {
        overrideMessages: boolean;
        messages: { [index: string]: string };
        errorFilter: (errorMsg: string, errorCode: string, type: string) => void;
    }

    interface ValidationOptional {
        overrideMessages?: boolean;
        messages?: { [index: string]: string };
        errorFilter?: (errorMsg: string, errorCode: string, type: string) => void;
    }

    interface ApplyErrorsOptions extends ValidationOptional {
    }

    interface BindFormOptions {
        validation?: ValidationOptional;
        validate?: (form: HTMLFormElement) => boolean;
        onSubmitDisable?: string;
        complete?: (...args: any[]) => void;
        error?: (...args: any[]) => void;
    }

    interface HandleServerEventsOptions {
        handlers?: { [index: string]: Function };
        validate?: (op?: string, target?: string, msg?: string, json?: string) => boolean;
        heartbeatUrl?: string;
        heartbeatIntervalMs?: number;
        unRegisterUrl?: string;
        receivers?: { [index: string]: any };
        success?: (selector: string, msg: string, e: any) => void;
    }

    interface ResponseStatus {
        errorCode: string;
        message: string;
        stackTrace: string;
        errors: ResponseError[];
    }
    interface ResponseError {
        errorCode: string;
        fieldName: string;
        message: string;
    }

    interface SSECommand {
        userId: string;
        displayName: string;
        channels: string;
        profileUrl: string;
    }
    
    interface SSEHeartbeat extends SSECommand { }
    interface SSEJoin extends SSECommand { }
    interface SSELeave extends SSECommand { }
    
    interface SSEConnect extends SSECommand {
        id: string;
        unRegisterUrl: string;
        heartbeatUrl: string;
        heartbeatIntervalMs: number;
        idleTimeoutMs: number;
    }

    interface ReconnectServerEventsOptions {
        url?: string;
        onerror?: (...args: any[]) => void;
        onmessage?: (...args: any[]) => void;
        errorArgs: any[];
    }
}

