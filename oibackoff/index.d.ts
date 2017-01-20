// Type definitions for oibackoff v1.0
// Project: https://github.com/chilts/oibackoff
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare function backoff(opts?: BackoffOptions): BackoffInstance;

export declare interface BackoffOptions {
    maxTries?: number;
    algorithm?: 'incremental' | 'exponential' | 'fibonacci';
    delayRatio?: number;
    maxDelay?: number;
}

export declare interface BackoffInstance {
    <A,B,C,D,E,F,G,H,I,J,K>(fn: (callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K>(fn: (callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O>(fn: (p0: O, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O>(fn: (p0: O, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P>(fn: (p0: O, p1: P, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P>(fn: (p0: O, p1: P, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q>(fn: (p0: O, p1: P, p2: Q, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q>(fn: (p0: O, p1: P, p2: Q, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R>(fn: (p0: O, p1: P, p2: Q, p3: R, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R>(fn: (p0: O, p1: P, p2: Q, p3: R, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W,X>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W,X>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W,X,Y>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W,X,Y>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W,X,Y,Z>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, p11: Z, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, p11: Z, intermediate: BackoffIntermediate<A>, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
    <A,B,C,D,E,F,G,H,I,J,K,O,P,Q,R,S,T,U,V,W,X,Y,Z>(fn: (p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, p11: Z, callback: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => any) => any, p0: O, p1: P, p2: Q, p3: R, p4: S, p5: T, p6: U, p7: V, p8: W, p9: X, p10: Y, p11: Z, callback: (a: A, b: B | null | undefined, priorErrorsOrC: C | A[] | undefined, d: D | undefined, e: E | undefined, f: F | undefined, g: G | undefined, h: H | undefined, i: I | undefined, j: J | undefined, k: K | undefined) => void): void;
}

export declare interface BackoffIntermediate<A> {
    (err: A, tries: number, delay: number): boolean;
}

export declare function incremental(n: number): number;
export declare function exponential(n: number): number;
export declare function fibonacci(n: number): number;
