import { QueryClause } from './db';
import Model, {
    AnyModel,
    CustomInstanceProps,
    IdOrModelLike,
    ModelClass,
    Ref,
    SessionBoundModel,
    UpdateProps
} from './Model';

/**
 * Optional ordering direction.
 *
 * {@see QuerySet.orderBy}
 */
export type SortOrder = 'asc' | 'desc' | true | false;

/**
 * Ordering clause.
 *
 * Either a key of SessionBoundModel or a evaluator function accepting plain object Model representation stored in the database.
 *
 * {@see QuerySet.orderBy}
 */
export type SortIteratee<M extends Model> = keyof Ref<M> | { (row: Ref<M>): any };

/**
 * Lookup clause as an object specifying props to match with plain object Model representation stored in the database.
 * {@see QuerySet.exclude}
 * {@see QuerySet.filter}
 */
export type LookupProps<M extends Model> = Partial<Ref<M>>;

/**
 * Lookup clause as predicate accepting plain object Model representation stored in the database.
 * {@see QuerySet.exclude}
 * {@see QuerySet.filter}
 */
export type LookupPredicate<M extends Model> = (row: Ref<M>) => boolean;

/**
 * A union of lookup clauses.
 * {@see QuerySet.exclude}
 * {@see QuerySet.filter}
 */
export type LookupSpec<M extends Model> = LookupProps<M> | LookupPredicate<M>;

/**
 * A lookup query result.
 *
 * May contain additional properties in case {@link LookupProps} clause had been supplied.
 * {@see QuerySet.exclude}
 * {@see QuerySet.filter}
 */
export type LookupResult<M extends Model, TLookup extends LookupSpec<M>> = TLookup extends LookupPredicate<M>
    ? QuerySet<M>
    : QuerySet<M, CustomInstanceProps<M, LookupProps<M>>>;

/**
 * <p>
 * `QuerySet` class is used to build and make queries to the database
 * and operating the resulting set (such as updating attributes
 * or deleting the records).
 * <p>
 *
 * @example queries are built lazily
 * const qs = Book.all()
 *     .filter(book => book.releaseYear > 1999)
 *     .orderBy('name')
 *
 * @description The query is executed only when terminating operations are invoked, such as:
 *
 * - {@link QuerySet#count},
 * - {@link QuerySet#toRefArray}
 * - {@link QuerySet#at} and other indexed reads
 *
 * After the query is executed, the resulting set is cached in the QuerySet instance.
 *
 * QuerySet instances return copies, so chaining filters doesn't
 * mutate the previous instances.
 *
 * @template M type of {@link Model} instances returned by QuerySet's methods.
 * @template InstanceProps additional properties available on QuerySet's elements.
 */
export default class QuerySet<M extends AnyModel = any, InstanceProps extends object = {}> {
    /**
     * Creates a `QuerySet`. The constructor is mainly for internal use;
     * Access QuerySet instances from {@link Model}.
     *
     * @param  modelClass - the {@link Model} class of objects in this QuerySet.
     * @param  clauses - query clauses needed to evaluate the set.
     * @param  [opts] - additional options
     */
    constructor(modelClass: ModelClass<M>, clauses: QueryClause[], opts?: object);

    /**
     * Register custom method on a `QuerySet` class specification.
     * QuerySet class may be attached to a {@link Model} class via {@link Model#querySetClass}
     *
     * @param methodName - name of a method to be available on specific QuerySet class instances
     *
     * @example:
     * class CustomQuerySet extends QuerySet<Book> {
     *     static currentYear = 2019
     *     unreleased(): QuerySet<Book> {
     *         return this.filter(book => book.releaseYear > CustomQuerySet.currentYear);
     *     }
     * }
     * CustomQuerySet.addSharedMethod('unreleased');
     * // assign specific QuerySet to a Model class
     * Book.querySetClass = typeof CustomQuerySet;
     * // register models
     * const schema = {Book };
     * const orm = new ORM<typeof schema>();
     * orm.register(Book);
     * const session = orm.session(orm.getEmptyState());
     * // use shared method
     * const unreleased = customQs.unreleased();
     */
    static addSharedMethod(methodName: string): void;

    /**
     * Returns a new {@link QuerySet} instance with the same entities.
     * @return a new QuerySet with the same entities.
     */
    all(): QuerySet<M, InstanceProps>;

    /**
     * Returns the {@link SessionBoundModel} instance at index `index` in the {@link QuerySet} instance if
     * `withRefs` flag is set to `false`, or a reference to the plain JavaScript
     * object in the model state if `true`.
     *
     * @param  index - index of the model instance to get
     * @return a {@link Model} derived {@link SessionBoundModel} instance at index
     *                           `index` in the {@link QuerySet} instance,
     *                           or undefined if the index is out of bounds.
     */
    at(index: number): SessionBoundModel<M, InstanceProps> | undefined;

    /**
     * Returns the session bound {@link Model} instance at index 0
     * in the {@link QuerySet} instance or undefined if the instance is empty.
     *
     *  @return a {@link Model} derived {@link SessionBoundModel} instance or undefined.
     */
    first(): SessionBoundModel<M, InstanceProps> | undefined;

    /**
     * Returns the session bound {@link Model} instance at index `QuerySet.count() - 1`
     * in the {@link QuerySet} instance or undefined if the instance is empty.
     *
     *  @return a {@link Model} derived {@link SessionBoundModel} instance or undefined.
     */
    last(): SessionBoundModel<M, InstanceProps> | undefined;

    /**
     * Returns a new {@link QuerySet} instance with entities that match properties in `lookupObj`.
     *
     * @param  lookupObj - the properties to match objects with ({@link LookupProps}).
     * Can also be a function ({@link LookupPredicate}).
     *
     * @return a new {@link QuerySet} instance with objects that passed the filter.
     */
    filter<TLookup extends LookupSpec<M>>(lookupObj: TLookup): LookupResult<M, TLookup>;

    /**
     * Returns a new {@link QuerySet} instance with entities that do not match properties in `lookupObj`.
     *
     * @param  lookupObj - the properties to match objects with ({@link LookupProps}).
     * Can also be a function ({@link LookupPredicate}).
     *
     * @return a new {@link QuerySet} instance with objects that passed the filter.
     */
    exclude<TLookup extends LookupSpec<M>>(lookupObj: TLookup): LookupResult<M, TLookup>;

    /**
     * Returns a new {@link QuerySet} instance with entities ordered by `iteratees` in ascending
     * order, unless otherwise specified. Delegates to `lodash.orderBy`.
     *
     * @param  iteratees - an array or a single {@link SortIteratee} where each item can be a string or a
     *                                           function. If a string is supplied, it should
     *                                           correspond to property on the entity that will
     *                                           determine the order. If a function is supplied,
     *                                           it should return the value to order by.
     *
     * @param [orders] - the sort orders of `iteratees`. If unspecified, all iteratees
     *                               will be sorted in ascending order. `true` and `'asc'`
     *                               correspond to ascending order, and `false` and `'desc`
     *                               to descending order. Accepts an array or a single {@link SortOrder}.
     *
     * @return a new {@link QuerySet} with objects ordered by `iteratees`.
     */
    orderBy(
        iteratees: SortIteratee<M> | ReadonlyArray<SortIteratee<M>>,
        orders?: SortOrder | ReadonlyArray<SortOrder>
    ): QuerySet<M>;

    /**
     * Returns the number of {@link Model} instances represented by the QuerySet.
     *
     * @return length of the QuerySet
     */
    count(): number;

    /**
     * Checks if the {@link QuerySet} instance has any records matching the query
     * in the database.
     *
     * @return `true` if the {@link QuerySet} instance contains entities, else `false`.
     */
    exists(): boolean;

    /**
     * Returns an array of the plain objects represented by the QuerySet.
     * The plain objects are direct references to the store.
     *
     * @return references to the plain JS objects represented by the QuerySet
     */
    toRefArray(): ReadonlyArray<Ref<M>>;

    /**
     * Returns an array of {@link SessionBoundModel} instances represented by the QuerySet.
     *
     * @return session bound model instances represented by the QuerySet
     */
    toModelArray(): ReadonlyArray<SessionBoundModel<M, InstanceProps>>;

    /**
     * Records an update specified with `mergeObj` to all the objects
     * in the {@link QuerySet} instance.
     *
     * @param  mergeObj - an object extending {@link UpdateProps}, to be merged with all the objects in this QuerySet.
     */
    update(mergeObj: UpdateProps<M>): void;

    /**
     * Records a deletion of all the objects in this {@link QuerySet} instance.
     */
    delete(): void;

    /**
     * Returns a string representation of QuerySet instance contents.
     *
     * @return string representation of QuerySet.
     */
    toString(): string;
}

/**
 * {@link QuerySet} extensions available on {@link ManyToMany} fields of session bound {@link Model} instances.
 *
 * @see {@link IdOrModelLike}
 */
export interface ManyToManyExtensions<M extends AnyModel> {
    add: (...entitiesToAdd: ReadonlyArray<IdOrModelLike<M>>) => void;
    remove: (...entitiesToRemove: ReadonlyArray<IdOrModelLike<M>>) => void;
    clear: () => void;
}

/**
 * A {@link QuerySet} extended with {@link ManyToMany} specific functionality - {@link ManyToManyExtensions}.
 */
export interface MutableQuerySet<M extends AnyModel = any, InstanceProps extends object = {}>
    extends ManyToManyExtensions<M>,
        QuerySet<M, InstanceProps> {}
