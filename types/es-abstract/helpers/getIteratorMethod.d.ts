import { PropertyKey as ESPropertyKey } from '../index';

declare function getIteratorMethod<T>(
	ES: {
		GetMethod(O: unknown, P: ESPropertyKey): ((...args: any) => any) | undefined;
		IsArray?(O: unknown): boolean;
		Type?(O: unknown): string | undefined;
	},
	iterable: T,
): T extends Iterable<any> ? () => Iterator<T extends Iterable<infer U> ? U : any, any, any> : undefined;

export = getIteratorMethod;
