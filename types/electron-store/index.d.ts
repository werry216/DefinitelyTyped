// Type definitions for electron-store 1.2
// Project: https://github.com/sindresorhus/electron-store
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
//                 Jakub Synowiec <https://github.com/jsynowiec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'electron-store' {
    type JSONValue = string | number | boolean | JSONObject | JSONArray;

    interface JSONObject {
        [x: string]: JSONValue;
    }

    interface JSONArray extends Array<JSONValue> {}

    interface ElectronStoreOptions<T = JSONObject> {
      /**
       * Default data.
       */
      defaults?: T;

      /**
       * Name of the storage file (without extension).
       */
      name?: string;

      /**
       * Storage file location. Don't specify this unless absolutely necessary!
       */
      cwd?: string;
    }

    class ElectronStore<T> implements Iterable<[keyof T, JSONValue]> {
      constructor(options?: ElectronStoreOptions<T>);

      /**
       * Set an item.
       */
      set<K extends keyof T>(key: K, value: T[K]): void;
      set(key: string, value: any): void;

      /**
       * Set multiple items at once.
       */
      set<K extends keyof T>(object: Pick<T, K> | T): void;
      set(object: JSONObject): void

      /**
       * Get an item or defaultValue if the item does not exist.
       */
      get<K extends keyof T>(key: K, defaultValue?: JSONValue): T[K];
      get(key: string, defaultValue?: any): any;

      /**
       * Check if an item exists.
       */
      has<K extends keyof T>(key: K | string): boolean;

      /**
       * Delete an item.
       */
      delete<K extends keyof T>(key: K | string): void;

      /**
       * Delete all items.
       */
      clear(): void;

      /**
       * Watches the given key, calling callback on any changes. When a key is first set oldValue
       * will be undefined, and when a key is deleted newValue will be undefined.
       */
      onDidChange<K extends keyof T>(key: K, callback: (newValue: T[K], oldValue: T[K]) => void): void;
      onDidChange(key: string, callback: (newValue: JSONValue, oldValue: JSONValue) => void): void;

      /**
       * Get the item count.
       */
      size: number;

      /**
       * Get all the data as an object or replace the current data with an object.
       */
      store: T;

      /**
       * Get the path to the storage file.
       */
      path: string;

      /**
       * Open the storage file in the user's editor.
       */
      openInEditor(): void;

      [Symbol.iterator](): Iterator<[keyof T, JSONValue]>;
    }

    export = ElectronStore;
  }
