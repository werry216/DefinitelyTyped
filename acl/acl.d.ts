// Type definitions for node_acl 0.4.7
// Project: https://github.com/optimalbits/node_acl
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path='../node/node.d.ts'/>

declare module "acl" {
  import http = require('http');
  import Promise = require("bluebird");

  type strings = string|string[];
  type Value = string|number;
  type Values = Value|Value[];
  type Action = () => any;
  export type Callback = (err: Error) => any;
  type AnyCallback = (err: Error, obj: any) => any;
  type AllowedCallback = (err: Error, allowed: boolean) => any;
  type GetUserId = (req: http.ServerRequest, res: http.ServerResponse) => Value;

  interface AclStatic {
    new (backend: Backend<any>, logger: Logger, options: Option): Acl;
    new (backend: Backend<any>, logger: Logger): Acl;
    new (backend: Backend<any>): Acl;
    memoryBackend: MemoryBackendStatic;
  }

  interface Logger {
    debug: (msg: string)=>any;
  }

  interface Acl {
    addUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>;
    removeUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>;
    userRoles: (userId: Value, cb?: (err: Error, roles: string[])=>any) => Promise<string[]>;
    roleUsers: (role: Value, cb?: (err: Error, users: Values)=>any) => Promise<any>;
    hasRole: (userId: Value, role: string, cb?: (err: Error, isInRole: boolean)=>any) => Promise<boolean>;
    addRoleParents: (role: string, parents: Values, cb?: Callback) => Promise<void>;
    removeRole: (role: string, cb?: Callback) => Promise<void>;
    removeResource: (resource: string, cb?: Callback) => Promise<void>;
    allow: {
      (roles: Values, resources: strings, permissions: strings, cb?: Callback): Promise<void>;
      (aclSets: AclSet|AclSet[]): Promise<void>;
    }
    removeAllow: (role: string, resources: strings, permissions: strings, cb?: Callback) => Promise<void>;
    removePermissions: (role: string, resources: strings, permissions: strings, cb?: Function) => Promise<void>;
    allowedPermissions: (userId: Value, resources: strings, cb?: AnyCallback) => Promise<void>;
    isAllowed: (userId: Value, resources: strings, permissions: strings, cb?: AllowedCallback) => Promise<boolean>;
    areAnyRolesAllowed: (roles: strings, resource: strings, permissions: strings, cb?: AllowedCallback) => Promise<any>;
    whatResources: (roles: strings, permissions: strings, cb?: AnyCallback) => Promise<any>;
    permittedResources: (roles: strings, permissions: strings, cb?: Function) => Promise<void>;
    middleware: (numPathComponents: number, userId: Value|GetUserId, actions: strings) => Promise<any>;
  }

  interface Option {
    buckets?: BucketsOption;
  }

  interface BucketsOption {
    meta?: string;
    parents?: string;
    permissions?: string;
    resources?: string;
    roles?: string;
    users?: string;
  }

  interface AclSet {
    roles: strings;
    allows: AclAllow[];
  }

  interface AclAllow {
    resources: strings;
    permissions: strings;
  }

  interface MemoryBackend extends Backend<Action[]> { }
  interface MemoryBackendStatic {
    new(): MemoryBackend;
  }

  //
  // For internal use
  //
  export interface Backend<T> {
    begin: () => T;
    end: (transaction: T, cb?: Action) => void;
    clean: (cb?: Action) => void;
    get: (bucket: string, key: Value, cb?: Action) => void;
    union: (bucket: string, keys: Value[], cb?: Action) => void;
    add: (transaction: T, bucket: string, key: Value, values: Values) => void;
    del: (transaction: T, bucket: string, keys: Value[]) => void;
    remove: (transaction: T, bucket: string, key: Value, values: Values) => void;

    endAsync: Function; //TODO: Give more specific function signature
    getAsync: Function;
    cleanAsync: Function;
    unionAsync: Function;
  }

  interface Contract {
    (args: IArguments): Contract|NoOp;
    debug: boolean;
    fulfilled: boolean;
    args: any[];
    checkedParams: string[];
    params: (...types: string[]) => Contract|NoOp;
    end: () => void;
  }

  interface NoOp {
    params: (...types: string[]) => NoOp;
    end: () => void;
  }

  var _: AclStatic;
  export = _;
}
