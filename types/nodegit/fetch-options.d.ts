import { RemoteCallbacks } from './remote-callbacks';
import { Strarray } from './str-array';

export interface FetchOptions {
    version?: number;
    callbacks?: RemoteCallbacks;
    prune?: number;
    updateFetchhead?: number;
    downloadTags?: number;
    customHeaders?: Strarray;
    proxyOpts?: any;
}
