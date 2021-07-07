import { Collection as MongoCollection, Db as MongoDb, MongoClient } from 'mongodb';
import { Meteor } from 'meteor/meteor';

declare module "meteor/mongo" {
    // Based on https://github.com/microsoft/TypeScript/issues/28791#issuecomment-443520161
    type UnionOmit<T, K extends keyof any> = T extends T ? Pick<T, Exclude<keyof T, K>> : never;

    module Mongo {

        type BsonType = 1 | "double" |
            2 | "string" |
            3 | "object" |
            4 | "array" |
            5 | "binData" |
            6 | "undefined" |
            7 | "objectId" |
            8 | "bool" |
            9 | "date" |
            10 | "null" |
            11 | "regex" |
            12 | "dbPointer" |
            13 | "javascript" |
            14 | "symbol" |
            15 | "javascriptWithScope" |
            16 | "int" |
            17 | "timestamp" |
            18 | "long" |
            19 | "decimal" |
            -1 | "minKey" |
            127 | "maxKey" | "number"

        type FieldExpression<T> = {
            $eq?: T | undefined,
            $gt?: T | undefined,
            $gte?: T | undefined,
            $lt?: T | undefined,
            $lte?: T | undefined,
            $in?: T[] | undefined,
            $nin?: T[] | undefined,
            $ne?: T | undefined,
            $exists?: boolean | undefined,
            $type?: BsonType[] | BsonType | undefined,
            $not?: FieldExpression<T> | undefined,
            $expr?: FieldExpression<T> | undefined,
            $jsonSchema?: any,
            $mod?: number[] | undefined,
            $regex?: RegExp | string | undefined,
            $options?: string | undefined,
            $text?: { $search: string, $language?: string | undefined, $caseSensitive?: boolean | undefined, $diacriticSensitive?: boolean | undefined } | undefined,
            $where?: string | Function | undefined,
            $geoIntersects?: any,
            $geoWithin?: any,
            $near?: any,
            $nearSphere?: any,
            $all?: T[] | undefined,
            $elemMatch?: T extends {} ? Query<T> : FieldExpression<T> | undefined | undefined | undefined | undefined | undefined | undefined | undefined | undefined,
            $size?: number | undefined,
            $bitsAllClear?: any,
            $bitsAllSet?: any,
            $bitsAnyClear?: any,
            $bitsAnySet?: any,
            $comment?: string | undefined
        }

        type Flatten<T> = T extends any[] ? T[0] : T

        type Query<T> = {
            [P in keyof T]?: Flatten<T[P]> | RegExp | FieldExpression<Flatten<T[P]>>
        } & {
            $or?: Query<T>[] | undefined,
            $and?: Query<T>[] | undefined,
            $nor?: Query<T>[] | undefined
        } & Dictionary<any>

        type QueryWithModifiers<T> = {
            $query: Query<T>,
            $comment?: string | undefined,
            $explain?: any,
            $hint?: any,
            $maxScan?: any,
            $max?: any,
            $maxTimeMS?: any,
            $min?: any,
            $orderby?: any,
            $returnKey?: any,
            $showDiskLoc?: any,
            $natural?: any
        }

        type Selector<T> = Query<T> | QueryWithModifiers<T>

        type Dictionary<T> = { [key: string]: T }
        type PartialMapTo<T, M> = Partial<Record<keyof T, M>>
        type OnlyArrays<T> = T extends any[] ? T : never;
        type OnlyElementsOfArrays<T> = T extends any[] ? Partial<T[0]> : never
        type ElementsOf<T> = {
            [P in keyof T]?: OnlyElementsOfArrays<T[P]>
        }
        type PushModifier<T> = {
            [P in keyof T]?:
            OnlyElementsOfArrays<T[P]> |
            { $each?: T[P] | undefined, $position?: number | undefined, $slice?: number | undefined, $sort?: 1 | -1 | Dictionary<number> | undefined }
        }
        type ArraysOrEach<T> = {
            [P in keyof T]?: OnlyElementsOfArrays<T[P]> | { $each: T[P] }
        }
        type CurrentDateModifier = { $type: "timestamp" | "date" } | true
        type Modifier<T> = T | {
            $currentDate?: Partial<Record<keyof T, CurrentDateModifier>> & Dictionary<CurrentDateModifier> | undefined,
            $inc?: PartialMapTo<T, number> & Dictionary<number> | undefined,
            $min?: PartialMapTo<T, Date | number> & Dictionary<Date | number> | undefined,
            $max?: PartialMapTo<T, Date | number> & Dictionary<Date | number> | undefined,
            $mul?: PartialMapTo<T, number> & Dictionary<number> | undefined,
            $rename?: PartialMapTo<T, string> & Dictionary<string> | undefined,
            $set?: Partial<T> & Dictionary<any> | undefined,
            $setOnInsert?: Partial<T> & Dictionary<any> | undefined,
            $unset?: PartialMapTo<T, string | boolean | 1 | 0> & Dictionary<any> | undefined,
            $addToSet?: ArraysOrEach<T> & Dictionary<any> | undefined,
            $push?: PushModifier<T> & Dictionary<any> | undefined,
            $pull?: ElementsOf<T> & Dictionary<any> | undefined,
            $pullAll?: Partial<T> & Dictionary<any> | undefined,
            $pop?: PartialMapTo<T, 1 | -1> & Dictionary<1 | -1> | undefined,
        }

        type OptionalId<TSchema> = UnionOmit<TSchema, '_id'> & { _id?: any };

        interface SortSpecifier { }
        interface FieldSpecifier {
            [id: string]: Number;
        }

        type Transform<T> = ((doc: T) => any) | null | undefined;

        type Options<T> = {
            sort?: SortSpecifier | undefined;
            skip?: number | undefined;
            limit?: number | undefined;
            fields?: FieldSpecifier | undefined;
            reactive?: boolean | undefined;
            transform?: Transform<T> | undefined;
        }

        type DispatchTransform<Transform, T, U> = Transform extends (...args: any) => any ? ReturnType<Transform> : Transform extends null ? T : U;

        var Collection: CollectionStatic;
        interface CollectionStatic {
            new <T, U = T>(name: string | null, options?: {
                connection?: Object | null | undefined;
                idGeneration?: string | undefined;
                transform?: ((doc: T) => U) | undefined;
            }): Collection<T, U>;
        }
        interface Collection<T, U = T> {
            allow<Fn extends Transform<T> = undefined>(options: {
                insert?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
                update?: ((userId: string, doc: DispatchTransform<Fn, T, U>, fieldNames: string[], modifier: any) => boolean) | undefined;
                remove?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
                fetch?: string[] | undefined;
                transform?: Fn | undefined;
            }): boolean;
            deny<Fn extends Transform<T> = undefined>(options: {
                insert?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
                update?: ((userId: string, doc: DispatchTransform<Fn, T, U>, fieldNames: string[], modifier: any) => boolean) | undefined;
                remove?: ((userId: string, doc: DispatchTransform<Fn, T, U>) => boolean) | undefined;
                fetch?: string[] | undefined;
                transform?: Fn | undefined;
            }): boolean;
            find(selector?: Selector<T> | ObjectID | string): Cursor<T, U>;
            find<O extends Options<T>>(selector?: Selector<T> | ObjectID | string, options?: O): Cursor<T, DispatchTransform<O['transform'], T, U>>;
            findOne(selector?: Selector<T> | ObjectID | string): U | undefined;
            findOne<O extends Omit<Options<T>, 'limit'>>(selector?: Selector<T> | ObjectID | string, options?: O): DispatchTransform<O['transform'], T, U> | undefined;
            insert(doc: OptionalId<T>, callback?: Function): string;
            rawCollection(): MongoCollection<T>;
            rawDatabase(): MongoDb;
            remove(selector: Selector<T> | ObjectID | string, callback?: Function): number;
            update(selector: Selector<T> | ObjectID | string, modifier: Modifier<T>, options?: {
                multi?: boolean | undefined;
                upsert?: boolean | undefined;
                arrayFilters?: { [identifier: string]: any }[] | undefined;
            }, callback?: Function): number;
            upsert(selector: Selector<T> | ObjectID | string, modifier: Modifier<T>, options?: {
                multi?: boolean | undefined;
            }, callback?: Function): {
                numberAffected?: number | undefined; insertedId?: string | undefined;
            };
            _ensureIndex(keys: {
                [key: string]: number | string
            } | string, options?: {
                [key: string]: any
            }): void;
            _dropIndex(keys: {
                [key: string]: number | string
            } | string): void;
        }

        var Cursor: CursorStatic;
        interface CursorStatic {
            new <T, U = T>(): Cursor<T, U>;
        }
        interface ObserveCallbacks<T> {
            added?(document: T): void;
            addedAt?(document: T, atIndex: number, before: T | null): void;
            changed?(newDocument: T, oldDocument: T): void;
            changedAt?(newDocument: T, oldDocument: T, indexAt: number): void;
            removed?(oldDocument: T): void;
            removedAt?(oldDocument: T, atIndex: number): void;
            movedTo?(document: T, fromIndex: number, toIndex: number, before: T | null): void;
        }
        interface ObserveChangesCallbacks<T> {
            added?(id: string, fields: Partial<T>): void;
            addedBefore?(id: string, fields: Partial<T>, before: T | null): void;
            changed?(id: string, fields: Partial<T>): void;
            movedBefore?(id: string, before: T | null): void;
            removed?(id: string): void;
        }
        interface Cursor<T, U = T> {
            count(applySkipLimit?: boolean): number;
            fetch(): Array<U>;
            forEach(callback: (doc: U, index: number, cursor: Cursor<T, U>) => void, thisArg?: any): void;
            map<M>(callback: (doc: U, index: number, cursor: Cursor<T, U>) => M, thisArg?: any): Array<M>;
            observe(callbacks: ObserveCallbacks<U>): Meteor.LiveQueryHandle;
            observeChanges(callbacks: ObserveChangesCallbacks<T>, options?: { nonMutatingCallbacks?: boolean | undefined }): Meteor.LiveQueryHandle;
        }

        var ObjectID: ObjectIDStatic;
        interface ObjectIDStatic {
            new(hexString?: string): ObjectID;
        }
        interface ObjectID {
            toHexString(): string;
            equals(otherID: ObjectID): boolean;
        }

        function setConnectionOptions(options: any): void;
    }

    module Mongo {
        interface AllowDenyOptions {
            insert?: ((userId: string, doc: any) => boolean) | undefined;
            update?: ((userId: string, doc: any, fieldNames: string[], modifier: any) => boolean) | undefined;
            remove?: ((userId: string, doc: any) => boolean) | undefined;
            fetch?: string[] | undefined;
            transform?: Function | null | undefined;
        }
    }
}

declare module MongoInternals {
    interface MongoConnection {
        db: MongoDb;
        client: MongoClient;
    }

    function defaultRemoteCollectionDriver(): {
        mongo: MongoConnection;
    };

    var NpmModules: any;
}
