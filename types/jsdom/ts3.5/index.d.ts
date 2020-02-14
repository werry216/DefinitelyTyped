import '../ts3.4/index';

// tslint:disable-next-line: no-declare-current-package
declare module 'jsdom' {
	interface DOMWindow {
		Atomics: typeof Atomics;
		BigInt: typeof BigInt;
		BigInt64Array: typeof BigInt64Array;
		BigUint64Array: typeof BigUint64Array;
		SharedArrayBuffer: typeof SharedArrayBuffer;
		WebAssembly: typeof WebAssembly;
	}
}
