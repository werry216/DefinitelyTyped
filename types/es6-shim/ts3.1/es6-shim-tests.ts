interface Point { x: number; y: number; }
interface Point3D extends Point { z: number; }

let a: any;
let s = '';
let i = 2;
let iOrUndef: number | undefined;
let b: boolean;
let f: () => void = () => {};
let o: Object;
let r: RegExp = /a/;
declare const sym: symbol;
let e: Error = new Error();
let date: Date;
let key: PropertyKey;
let point: Point = { x: 1, y: 2 };
let point3d: Point3D = { x: 1, y: 2, z: 3 };
let point3dOrUndef: Point3D | undefined;
let pointOrUndef: Point | undefined;
let arrayOfPoint: Point[] = [];
let arrayOfPoint3D: Point3D[];
let arrayOfSymbol: symbol[];
let arrayOfPropertyKey: PropertyKey[];
let arrayOfAny: any[];
let arrayOfStringAny: Array<[string, any]>;
let arrayLikeOfAny: ArrayLike<any> = [];
let iterableOfPoint: IterableShim<Point> = [];
let iterableOfStringPoint: IterableShim<[string, Point]> = [];
let iterableOfPointPoint3D: IterableShim<[Point, Point3D]> = [];
let iterableIteratorOfPoint: IterableIteratorShim<Point>;
let iterableIteratorOfNumberPoint: IterableIteratorShim<[number, Point]>;
let iterableIteratorOfNumber: IterableIteratorShim<number>;
let iterableIteratorOfString: IterableIteratorShim<string>;
let iterableIteratorOfPointPoint: IterableIteratorShim<[Point, Point]>;
let iterableIteratorOfNode: IterableIteratorShim<Node>;
let iterableIteratorOfStringPoint: IterableIteratorShim<[string, Point]>;
let iterableIteratorOfAny: IterableIteratorShim<any>;
let iterableIteratorOfPropertyKey: IterableIteratorShim<PropertyKey>;
let iterableIteratorOfPropertyKeyPoint: IterableIteratorShim<[PropertyKey, Point]>;
let nodeList: NodeList;
let pd: PropertyDescriptor = {};
let pdm: PropertyDescriptorMap = {};
let map: Map<string, Point> = new Map<string, Point>();
let set: Set<Point> = new Set<Point>();
let weakMap: WeakMap<Point, Point3D> = new WeakMap<Point, Point3D>();
let weakSet: WeakSet<Point> = new WeakSet<Point>();
let promiseLikeOfPoint: PromiseLike<Point> = Promise.resolve(point);
let promiseLikeOfPoint3D: PromiseLike<Point3D> = Promise.resolve(point3d);
let promiseOfPoint: Promise<Point> = Promise.resolve(point);
let promiseOfPoint3D: Promise<Point3D> = Promise.resolve(point3d);
let promiseOfArrayOfPoint: Promise<Point[]>;
let promiseOfVoid: Promise<void>;

point = Object.assign(point, point);
b = Object.is(point, point);
Object.setPrototypeOf(point, {});
pointOrUndef = arrayOfPoint.find(p => b);
i = arrayOfPoint.findIndex(p => b);
arrayOfPoint = arrayOfPoint.fill(point, i, arrayOfPoint.length);
arrayOfPoint = arrayOfPoint.copyWithin(i, i, i);
arrayOfPoint = Array.from(arrayOfPoint);
arrayOfPoint = Array.from(iterableOfPoint);
arrayOfPoint3D = Array.from(arrayOfPoint, point => point3d);
arrayOfPoint3D = Array.from(arrayOfPoint, point => point3d, a);
arrayOfPoint3D = Array.from(iterableOfPoint, point => point3d);
arrayOfPoint3D = Array.from(iterableOfPoint, point => point3d, a);
arrayOfPoint = Array.of(point, point);
i = s.codePointAt(i);
b = s.includes(s, i);
b = s.endsWith(s, i);
s = s.repeat(i);
b = s.startsWith(s, i);
s = String.fromCodePoint(2 as number, 3 as number);
s = String.raw`abc`;
s = r.flags;
i = Number.EPSILON;
b = Number.isFinite(i);
b = Number.isInteger(i);
b = Number.isNaN(i);
b = Number.isSafeInteger(i);
i = Number.MAX_SAFE_INTEGER;
i = Number.MIN_SAFE_INTEGER;
i = Number.parseFloat(s);
i = Number.parseInt(s, 10);
i = Number.parseInt(s, i);
i = Math.clz32(i);
i = Math.imul(i, i);
i = Math.sign(i);
i = Math.log10(i);
i = Math.log2(i);
i = Math.log1p(i);
i = Math.expm1(i);
i = Math.cosh(i);
i = Math.sinh(i);
i = Math.tanh(i);
i = Math.acosh(i);
i = Math.asinh(i);
i = Math.atanh(i);
i = Math.hypot(i, i);
i = Math.trunc(i);
i = Math.fround(i);
i = Math.cbrt(i);
map.clear();
map.delete(s);
map.forEach((value: Point, key: string) => { });
pointOrUndef = map.get(s);
b = map.has(s);
map = map.set(s, point);
i = map.size;
map = new Map<string, Point>();
map = new Map(iterableOfStringPoint);
set.clear();
set.delete(point);
set.forEach((value: Point, key: Point) => { });
b = set.has(point);
set = set.add(point);
i = set.size;
set = new Set<Point>();
set = new Set(iterableOfPoint);
weakMap.delete(point);
point3dOrUndef = weakMap.get(point);
b = weakMap.has(point);
weakMap = weakMap.set(point, point3d);
weakMap = new WeakMap<Point, Point3D>();
weakMap = new WeakMap(iterableOfPointPoint3D);
weakSet.delete(point);
weakSet = weakSet.add(point);
b = weakSet.has(point);
weakSet = new WeakSet<Point>();
weakSet = new WeakSet(iterableOfPoint);
iterableIteratorOfNumberPoint = arrayOfPoint.entries();
iterableIteratorOfNumber = arrayOfPoint.keys();
iterableIteratorOfPoint = arrayOfPoint.values();
iterableIteratorOfPointPoint = set.entries();
iterableIteratorOfPoint = set.keys();
iterableIteratorOfPoint = set.values();
promiseLikeOfPoint.then((point: Point) => { });
promiseLikeOfPoint = promiseLikeOfPoint.then();
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint, e => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => promiseLikeOfPoint);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => { });
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint, e => { });
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D, e => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => promiseLikeOfPoint3D);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => { });
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D, e => { });
promiseOfPoint.then((point: Point) => { });
promiseOfPoint = promiseOfPoint.then();
promiseOfPoint = promiseOfPoint.then(p => point);
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint);
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => point);
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint, e => point);
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint, e => point);
promiseOfPoint = promiseOfPoint.then(p => point, e => promiseOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => { });
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint, e => { });
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint, e => { });
promiseOfPoint3D = promiseOfPoint.then(p => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => promiseLikeOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => { });
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D, e => { });
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D, e => { });
promiseOfPoint = promiseOfPoint.catch(e => point);
promiseOfPoint = promiseOfPoint.catch(e => promiseOfPoint);
promiseOfPoint = promiseOfPoint.catch(e => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.catch(e => { });
promiseOfPoint3D = promiseOfPoint3D.catch(e => point3d);
promiseOfPoint3D = promiseOfPoint3D.catch(e => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint3D.catch(e => promiseLikeOfPoint3D);
promiseOfPoint = new Promise<Point>((resolve, reject) => resolve(point));
promiseOfPoint = new Promise<Point>((resolve, reject) => resolve(promiseOfPoint));
promiseOfPoint = new Promise<Point>((resolve, reject) => resolve(promiseLikeOfPoint));
promiseOfPoint = new Promise<Point>((resolve, reject) => reject(e));
// To prevent UnhandledPromiseRejectionWarning
promiseOfPoint.catch(() => {});
promiseOfArrayOfPoint = Promise.all(arrayOfPoint);
promiseOfArrayOfPoint = Promise.all(iterableOfPoint);
promiseOfPoint = Promise.race(arrayOfPoint);
promiseOfPoint = Promise.race(iterableOfPoint);
promiseOfVoid = Promise.resolve();
promiseOfPoint = Promise.resolve(point3d);
promiseOfPoint = Promise.resolve(promiseOfPoint);
promiseOfPoint = Promise.resolve(promiseLikeOfPoint);
promiseOfVoid = Promise.reject(e);
// To prevent UnhandledPromiseRejectionWarning
promiseOfVoid.catch(() => {});
promiseOfPoint = Promise.reject<Point>(e);
// To prevent UnhandledPromiseRejectionWarning
promiseOfPoint.catch(() => {});
a = Reflect.apply(f, a, arrayLikeOfAny);
a = Reflect.construct(f, arrayLikeOfAny);
b = Reflect.defineProperty(a, s, pd);
b = Reflect.defineProperty(a, i, pd);
b = Reflect.defineProperty(a, sym, pd);
b = Reflect.deleteProperty(a, s);
b = Reflect.deleteProperty(a, i);
b = Reflect.deleteProperty(a, sym);
iterableIteratorOfAny = Reflect.enumerate(a);
Reflect.get(a, s, a);
Reflect.get(a, i, a);
Reflect.get(a, sym, a);
pd = Reflect.getOwnPropertyDescriptor(a, s);
pd = Reflect.getOwnPropertyDescriptor(a, i);
pd = Reflect.getOwnPropertyDescriptor(a, sym);
a = Reflect.getPrototypeOf(a);
b = Reflect.has(a, s);
b = Reflect.has(a, i);
b = Reflect.has(a, sym);
b = Reflect.isExtensible(a);
arrayOfPropertyKey = Reflect.ownKeys(a);
b = Reflect.preventExtensions(a);
b = Reflect.set(a, s, a, a);
b = Reflect.set(a, i, a, a);
b = Reflect.set(a, sym, a, a);
b = Reflect.setPrototypeOf(a, a);
