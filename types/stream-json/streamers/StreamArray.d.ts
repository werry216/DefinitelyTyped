import * as Chain from 'stream-chain';
import * as StreamBase from './StreamBase';

export = StreamArray;

declare class StreamArray extends StreamBase {
    constructor(options?: StreamBase.StreamOptions);
}

declare namespace StreamArray {
    function make(options?: StreamBase.StreamOptions): StreamArray;

    namespace make {
        type Constructor = StreamArray;
        const Constructor: typeof StreamArray;
    }

    function streamArray(options?: StreamBase.StreamOptions): StreamArray;

    namespace streamArray {
        type Constructor = StreamArray;
        const Constructor: typeof StreamArray;
    }

    function withParser(options?: StreamBase.StreamOptions): Chain;
}
