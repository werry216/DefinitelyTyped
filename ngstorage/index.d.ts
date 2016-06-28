// Type definitions for ngstorage 0.3.10
// Project: https://github.com/gsklee/ngStorage
// Definitions by: Jakub Pistek <https://github.com/kubiq>
// Definitions: https://github.com/kubiq/DefinitelyTyped

import * as angular from 'angularjs';

declare module 'angularjs' {
    export namespace storage {

        export interface IStorageService {
            $default(items: {}): IStorageService;
            $reset(items?: {}): IStorageService;
            $apply(): void;

            get<T>(key: string): T;
            set<T>(key: string, value: T): T;
        }

        export interface IStorageProvider extends angular.IServiceProvider {

            get<T>(key: string): T;
            set<T>(key: string, value: T): T;

            setKeyPrefix(prefix: string): void;
            setSerializer(serializer: (value: any) => string): void;
            setDeserializer(deserializer: (value: string) => any): void;
        }
    }
}
