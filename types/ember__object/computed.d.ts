import Ember from 'ember';

type ComputedProperty<Get, Set = Get> = Ember.ComputedProperty<Get, Set>;
declare const ComputedProperty: typeof Ember.ComputedProperty;
export default ComputedProperty;
export const alias: typeof Ember.computed.alias;
export const and: typeof Ember.computed.and;
export const bool: typeof Ember.computed.bool;
export const collect: typeof Ember.computed.collect;
export const deprecatingAlias: typeof Ember.computed.deprecatingAlias;
export const empty: typeof Ember.computed.empty;
export const equal: typeof Ember.computed.equal;
export const expandProperties: typeof Ember.expandProperties;
export const filter: typeof Ember.computed.filter;
export const filterBy: typeof Ember.computed.filterBy;
export const gt: typeof Ember.computed.gt;
export const gte: typeof Ember.computed.gte;
export const intersect: typeof Ember.computed.intersect;
export const lt: typeof Ember.computed.lt;
export const lte: typeof Ember.computed.lte;
export const map: typeof Ember.computed.map;
export const mapBy: typeof Ember.computed.mapBy;
export const match: typeof Ember.computed.match;
export const max: typeof Ember.computed.max;
export const min: typeof Ember.computed.min;
export const none: typeof Ember.computed.none;
export const not: typeof Ember.computed.not;
export const notEmpty: typeof Ember.computed.notEmpty;
export const oneWay: typeof Ember.computed.oneWay;
export const or: typeof Ember.computed.or;
export const readOnly: typeof Ember.computed.readOnly;
export const reads: typeof Ember.computed.reads;
export const setDiff: typeof Ember.computed.setDiff;
export const sort: typeof Ember.computed.sort;
export const sum: typeof Ember.computed.sum;
export const union: typeof Ember.computed.union;
export const uniq: typeof Ember.computed.uniq;
export const uniqBy: typeof Ember.computed.uniqBy;
