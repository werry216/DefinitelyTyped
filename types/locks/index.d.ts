// Type definitions for Locks 0.2.2
// Project: https://github.com/Wizcorp/locks
// Definitions by: Joshua Graham <https://github.com/flippynips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/* ================== USAGE ==================

    import * as locks from "locks";
    
    let mutex: locks.Mutex = new locks.Mutex();
    let readWriteLock: locks.ReadWriteLock = new locks.ReadWriteLock();
    let semaphore: locks.Semaphore = new locks.Semaphore();
    let condVariable: locks.CondVariable = new locks.CondVariable();

 ============================================= */
 
 /** Solitary access lock */
 export class Mutex {
    /** Construct a new mutex lock. */
    constructor();
    /** Flag indicating whther the lock is currently taken. */
    isLocked: boolean;
    /** Take the lock. */
    lock(callback: () => void): void;
    /** Wait the specified number of milliseconds to take the lock. If error is set, the lock wasn't taken. */
    timedlock(ttl: number, callback: (error: Error) => void): void;
    /** Try taking the lock. If false, the lock wasn't taken. */
    tryLock(): boolean;
    /** Release the current lock. */
    unlock(): void;
    /** Clear any waiting lock callbacks. */
    resetQueue(): void;
    
}

/** Reader writer lock */
export class ReadWriteLock {
    /** Construct a new reader writer lock */
    constructor();
    /** Flag indicating whether the reader writer lock is holding the read lock */
    isReadLocked: boolean;
    /** Flag indicating whether the reader writer lock is holding the write lock */
    isWriteLocked: boolean;
    /** Get the read lock */
    readLock(callback: () => void): void;
    /** Get the write lock */
    writeLock(callback: () => void): void;
    /** Wait the specified number of milliseconds to take the read lock. If error is set, the lock wasn't taken. */
    timedReadLock(ttl: number, callback: (error: Error) => void): void;
    /** Wait the specified number of milliseconds to take the write lock. If error is set, the lock wasn't taken. */
    timedWriteLock(ttl: number, callback: (error: Error) => void): void;
    /** Try taking the read lock. If false, the lock wasn't taken. */
    tryReadLock(): boolean;
    /** Try taking the write lock. If false, the lock wasn't taken. */
    tryWriteLock(): boolean;
    /** Release the write lock if taken, or one of the taken read locks. */
    unlock(): void;
}

/** Semaphore signaller. */
export class Semaphore {
    /** Construct a new semaphore. */
    constructor(initialCount: number);
    /** Queue a callback. Callbacks are called in sequence on signals. */
    wait(callback: () => void): void;
    /** Signal a callback. */
    signal(): void;
    
}

/** Conditional variable instance */
export class CondVariable {
    /** Construct a new conditional variable with the specified initial value. */
    constructor(initialValue: any);
    /** Get the current conditional variable value. */
    get(): any;
    /** Add a callback when the specified conditional variable value matches the specified value. */
    wait(value: any, callback: ()=>void);
    /** Set the conditional variable value. */
    set(value: any): void;
}
