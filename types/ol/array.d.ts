export function binarySearch(haystack: any[], needle: any, opt_comparator?: (() => void)): number;
export function equals(arr1: any[] | Uint8ClampedArray, arr2: any[] | Uint8ClampedArray): boolean;
export function extend<VALUE>(arr: VALUE[], data: VALUE[] | VALUE): void;
export function find<VALUE>(arr: VALUE[], func: (() => void)): VALUE;
export function findIndex(arr: any[], func: (() => void)): number;
export function includes(arr: any[], obj: any): boolean;
export function isSorted(arr: any[], opt_func?: (() => void), opt_strict?: boolean): boolean;
export function linearFindNearest(arr: number[], target: number, direction: number): number;
export function numberSafeCompareFunction(a: any, b: any): number;
export function remove<VALUE>(arr: VALUE[], obj: VALUE): boolean;
export function reverseSubArray(arr: any[], begin: number, end: number): void;
export function stableSort(arr: any[], compareFnc: (() => void)): void;
