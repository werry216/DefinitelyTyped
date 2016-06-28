// Type definitions for angular-http-auth 1.2.1
// Project: https://github.com/witoldsz/angular-http-auth
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angularjs" />

import * as angular from 'angularjs';

declare module 'angularjs' {
	export namespace httpAuth {
		interface IAuthService {
			loginConfirmed(data?: any, configUpdater?: Function): void;
			loginCancelled(data?: any, reason?: any): void;
		}

		interface IHttpBuffer {
			append(config: ng.IRequestConfig, deferred: { resolve(data: any): void; reject(data: any): void; }): void;
			rejectAll(reason?: any): void;
			retryAll(updater?: Function): void;
		}
	}
}
