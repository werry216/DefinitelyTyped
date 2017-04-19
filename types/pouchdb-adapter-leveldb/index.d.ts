// Type definitions for pouchdb-adapter-leveldb v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace LevelDbAdapter {
        interface LevelDbAdapterConfiguration extends Configuration.LocalDatabaseConfiguration {
            adapter: 'leveldb';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: LevelDbAdapter.LevelDbAdapterConfiguration
            ): Database<Content>;
    }
}

declare module 'pouchdb-adapter-leveldb' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
