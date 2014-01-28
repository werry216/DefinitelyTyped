// Type definitions for Angular JS 1.1.5+ (ui.router module)
// Project: https://github.com/angular-ui/ui-router
// Definitions by: Michel Salib <michelsalib@hotmail.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.ui {

    interface IState {
        name?: string;
        template?: any;
        templateUrl?: any;
        templateProvider?: () => string;
        controller?: any;
        controllerProvider?: any;
        resolve?: {};
        url?: string;
        params?: any[];
        views?: {};
        abstract?: boolean;
        onEnter?: any;
        onExit?: any;
        data?: any;
    }

    interface IStateProvider extends IServiceProvider {
        state(name:string, config:IState): IStateProvider;
        decorator(name?: string, decorator?: (state: IState, parent: Function) => any): any;
    }

    interface IUrlMatcher {
        concat(pattern: string): IUrlMatcher;
        exec(path: string, searchParams: {}): {};
    }

    interface IUrlMatcherFactory {
        compile(pattern: string): IUrlMatcher;
        isMatcher(o: any): boolean;
        parameters(): string[];
        format(values: {}): string;
    }

    interface IUrlRouterProvider extends IServiceProvider {
        when(whenPath: RegExp, handler: Function): IUrlRouterProvider;
        when(whenPath: RegExp, handler: any[]): IUrlRouterProvider;
        when(whenPath: RegExp, toPath: string): IUrlRouterProvider;
        when(whenPath: IUrlMatcher, hanlder: Function): IUrlRouterProvider;
        when(whenPath: IUrlMatcher, handler: any[]): IUrlRouterProvider;
        when(whenPath: IUrlMatcher, toPath: string): IUrlRouterProvider;
        when(whenPath: string, handler: Function): IUrlRouterProvider;
        when(whenPath: string, handler: any[]): IUrlRouterProvider;
        when(whenPath: string, toPath: string): IUrlRouterProvider;
        otherwise(handler: Function): IUrlRouterProvider;
        otherwise(handler: any[]): IUrlRouterProvider;
        otherwise(path: string): IUrlRouterProvider;
        rule(handler: Function): IUrlRouterProvider;
        rule(handler: any[]): IUrlRouterProvider;
    }

    interface IStateOptions {
        location?: any;
        inherit?: boolean;
        relative?: IState;
        notify?: boolean;
    }

    interface IHrefOptions {
        lossy?: boolean;
        inherit?: boolean;
        relative?: IState;
        absolute?: boolean;
    }

    interface IStateService {
        go(to: string, params?: {}, options?: IStateOptions): void;
        transitionTo(state: string, params?: {}, updateLocation?: boolean): void;
        transitionTo(state: string, params?: {}, options?: IStateOptions): void;
        includes(state: string, params?: {}): boolean;
        is(state:string, params?: {}): boolean;
        is(state: IState, params?: {}): boolean;
        href(state: IState, params?: {}, options?: IHrefOptions): string;
        href(state: string, params?: {}, options?: IHrefOptions): string;
        get(state: string): IState;
        get(): IState[];
        current: IState;
        params: IStateParamsService;
    }

    interface IStateParamsService {
        [key: string]: any;
    }
}
