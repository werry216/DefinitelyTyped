declare module 'perf_hooks' {
    import { AsyncResource } from 'node:async_hooks';

    type EntryType = 'node' | 'mark' | 'measure' | 'gc' | 'function' | 'http2' | 'http';

    interface NodeGCPerformanceDetail {
        /**
         * When `performanceEntry.entryType` is equal to 'gc', `the performance.kind` property identifies
         * the type of garbage collection operation that occurred.
         * See perf_hooks.constants for valid values.
         */
        readonly kind?: number | undefined;

        /**
         * When `performanceEntry.entryType` is equal to 'gc', the `performance.flags`
         * property contains additional information about garbage collection operation.
         * See perf_hooks.constants for valid values.
         */
        readonly flags?: number | undefined;
    }

    class PerformanceEntry {
        protected constructor();
        /**
         * The total number of milliseconds elapsed for this entry.
         * This value will not be meaningful for all Performance Entry types.
         */
        readonly duration: number;

        /**
         * The name of the performance entry.
         */
        readonly name: string;

        /**
         * The high resolution millisecond timestamp marking the starting time of the Performance Entry.
         */
        readonly startTime: number;

        /**
         * The type of the performance entry.
         * Currently it may be one of: 'node', 'mark', 'measure', 'gc', or 'function'.
         */
        readonly entryType: EntryType;

        readonly details?: NodeGCPerformanceDetail | unknown | undefined; // TODO: Narrow this based on entry type.
    }

    class PerformanceNodeTiming extends PerformanceEntry {
        /**
         * The high resolution millisecond timestamp at which the Node.js process completed bootstrap.
         */
        readonly bootstrapComplete: number;

        /**
         * The high resolution millisecond timestamp at which the Node.js process completed bootstrapping.
         * If bootstrapping has not yet finished, the property has the value of -1.
         */
        readonly environment: number;

        /**
         * The high resolution millisecond timestamp at which the Node.js environment was initialized.
         */
        readonly idleTime: number;

        /**
         * The high resolution millisecond timestamp of the amount of time the event loop has been idle
         *  within the event loop's event provider (e.g. `epoll_wait`). This does not take CPU usage
         * into consideration. If the event loop has not yet started (e.g., in the first tick of the main script),
         *  the property has the value of 0.
         */
        readonly loopExit: number;

        /**
         * The high resolution millisecond timestamp at which the Node.js event loop started.
         * If the event loop has not yet started (e.g., in the first tick of the main script), the property has the value of -1.
         */
        readonly loopStart: number;

        /**
         * The high resolution millisecond timestamp at which the V8 platform was initialized.
         */
        readonly v8Start: number;
    }

    interface EventLoopUtilization {
        idle: number;
        active: number;
        utilization: number;
    }

    /**
     * @param util1 The result of a previous call to eventLoopUtilization()
     * @param util2 The result of a previous call to eventLoopUtilization() prior to util1
     */
    type EventLoopUtilityFunction = (
        util1?: EventLoopUtilization,
        util2?: EventLoopUtilization,
    ) => EventLoopUtilization;

    interface MarkOptions {
        /**
         * Additional optional detail to include with the mark.
         */
        detail?: unknown | undefined;
        /**
         * An optional timestamp to be used as the mark time.
         * @default `performance.now()`.
         */
        startTime?: number | undefined;
    }

    interface MeasureOptions {
        /**
         * Additional optional detail to include with the mark.
         */
        detail?: unknown | undefined;
        /**
         * Duration between start and end times.
         */
        duration?: number | undefined;
        /**
         * Timestamp to be used as the end time, or a string identifying a previously recorded mark.
         */
        end?: number | string | undefined;
        /**
         * Timestamp to be used as the start time, or a string identifying a previously recorded mark.
         */
        start?: number | string | undefined;
    }

    interface TimerifyOptions {
        /**
         * A histogram object created using
         * `perf_hooks.createHistogram()` that will record runtime durations in
         * nanoseconds.
         */
        histogram?: RecordableHistogram | undefined;
    }

    interface Performance {
        /**
         * If name is not provided, removes all PerformanceMark objects from the Performance Timeline.
         * If name is provided, removes only the named mark.
         * @param name
         */
        clearMarks(name?: string): void;

        /**
         * Creates a new PerformanceMark entry in the Performance Timeline.
         * A PerformanceMark is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'mark',
         * and whose performanceEntry.duration is always 0.
         * Performance marks are used to mark specific significant moments in the Performance Timeline.
         * @param name
         */
        mark(name?: string, options?: MarkOptions): void;

        /**
         * Creates a new PerformanceMeasure entry in the Performance Timeline.
         * A PerformanceMeasure is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'measure',
         * and whose performanceEntry.duration measures the number of milliseconds elapsed since startMark and endMark.
         *
         * The startMark argument may identify any existing PerformanceMark in the the Performance Timeline, or may identify
         * any of the timestamp properties provided by the PerformanceNodeTiming class. If the named startMark does not exist,
         * then startMark is set to timeOrigin by default.
         *
         * The endMark argument must identify any existing PerformanceMark in the the Performance Timeline or any of the timestamp
         * properties provided by the PerformanceNodeTiming class. If the named endMark does not exist, an error will be thrown.
         * @param name
         * @param startMark
         * @param endMark
         */
        measure(name: string, startMark?: string, endMark?: string): void;
        measure(name: string, options: MeasureOptions): void;

        /**
         * An instance of the PerformanceNodeTiming class that provides performance metrics for specific Node.js operational milestones.
         */
        readonly nodeTiming: PerformanceNodeTiming;

        /**
         * @return the current high resolution millisecond timestamp
         */
        now(): number;

        /**
         * The timeOrigin specifies the high resolution millisecond timestamp from which all performance metric durations are measured.
         */
        readonly timeOrigin: number;

        /**
         * Wraps a function within a new function that measures the running time of the wrapped function.
         * A PerformanceObserver must be subscribed to the 'function' event type in order for the timing details to be accessed.
         * @param fn
         */
        timerify<T extends (...params: any[]) => any>(fn: T, options?: TimerifyOptions): T;

        /**
         * eventLoopUtilization is similar to CPU utilization except that it is calculated using high precision wall-clock time.
         * It represents the percentage of time the event loop has spent outside the event loop's event provider (e.g. epoll_wait).
         * No other CPU idle time is taken into consideration.
         */
        eventLoopUtilization: EventLoopUtilityFunction;
    }

    interface PerformanceObserverEntryList {
        /**
         * @return a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.
         */
        getEntries(): PerformanceEntry[];

        /**
         * @return a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
         * whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.
         */
        getEntriesByName(name: string, type?: EntryType): PerformanceEntry[];

        /**
         * @return Returns a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
         * whose performanceEntry.entryType is equal to type.
         */
        getEntriesByType(type: EntryType): PerformanceEntry[];
    }

    type PerformanceObserverCallback = (list: PerformanceObserverEntryList, observer: PerformanceObserver) => void;

    class PerformanceObserver extends AsyncResource {
        constructor(callback: PerformanceObserverCallback);

        /**
         * Disconnects the PerformanceObserver instance from all notifications.
         */
        disconnect(): void;

        /**
         * Subscribes the PerformanceObserver instance to notifications of new PerformanceEntry instances identified by options.entryTypes or options.type.
         * When options.buffered is false, the callback will be invoked once for every PerformanceEntry instance.
         */
        observe(options: { entryTypes: ReadonlyArray<EntryType> } | { type: EntryType }): void;
    }

    namespace constants {
        const NODE_PERFORMANCE_GC_MAJOR: number;
        const NODE_PERFORMANCE_GC_MINOR: number;
        const NODE_PERFORMANCE_GC_INCREMENTAL: number;
        const NODE_PERFORMANCE_GC_WEAKCB: number;

        const NODE_PERFORMANCE_GC_FLAGS_NO: number;
        const NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: number;
        const NODE_PERFORMANCE_GC_FLAGS_FORCED: number;
        const NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: number;
        const NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: number;
    }

    const performance: Performance;

    interface EventLoopMonitorOptions {
        /**
         * The sampling rate in milliseconds.
         * Must be greater than zero.
         * @default 10
         */
        resolution?: number | undefined;
    }

    interface Histogram {
        /**
         * A `Map` object detailing the accumulated percentile distribution.
         */
        readonly percentiles: Map<number, number>;

        /**
         * The number of times the event loop delay exceeded the maximum 1 hour eventloop delay threshold.
         */
        readonly exceeds: number;

        /**
         * The minimum recorded event loop delay.
         */
        readonly min: number;

        /**
         * The maximum recorded event loop delay.
         */
        readonly max: number;

        /**
         * The mean of the recorded event loop delays.
         */
        readonly mean: number;

        /**
         * The standard deviation of the recorded event loop delays.
         */
        readonly stddev: number;

        /**
         * Resets the collected histogram data.
         */
        reset(): void;

        /**
         * Returns the value at the given percentile.
         * @param percentile A percentile value between 1 and 100.
         */
        percentile(percentile: number): number;
    }

    interface IntervalHistogram extends Histogram {
        /**
         * Enables the event loop delay sample timer. Returns `true` if the timer was started, `false` if it was already started.
         */
        enable(): boolean;
        /**
         * Disables the event loop delay sample timer. Returns `true` if the timer was stopped, `false` if it was already stopped.
         */
        disable(): boolean;
    }

    interface RecordableHistogram extends Histogram {
        record(val: number | bigint): void;

        /**
         * Calculates the amount of time (in nanoseconds) that has passed since the previous call to recordDelta() and records that amount in the histogram.
         */
        recordDelta(): void;
    }

    function monitorEventLoopDelay(options?: EventLoopMonitorOptions): IntervalHistogram;

    interface CreateHistogramOptions {
        /**
         * The minimum recordable value. Must be an integer value greater than 0.
         * @default 1
         */
        min?: number | bigint | undefined;

        /**
         * The maximum recordable value. Must be an integer value greater than min.
         * @default Number.MAX_SAFE_INTEGER
         */
        max?: number | bigint | undefined;
        /**
         * The number of accuracy digits. Must be a number between 1 and 5.
         * @default 3
         */
        figures?: number | undefined;
    }

    function createHistogram(options?: CreateHistogramOptions): RecordableHistogram;
}

declare module 'node:perf_hooks' {
    export * from 'perf_hooks';
}
