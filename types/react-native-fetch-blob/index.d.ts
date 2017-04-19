// Type definitions for react-native-fetch-blob 0.10
// Project: https://github.com/wkh237/react-native-fetch-blob#readme
// Definitions by: MNB <https://github.com/MNBuyskih>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const RNFetchBlob: RNFetchBlobStatic;
export type RNFetchBlob = RNFetchBlobStatic;
export default RNFetchBlob;

interface RNFetchBlobStatic {
    fetch(method: Methods, url: string, headers?: { [key: string]: string }, body?: any
        | null): StatefulPromise<FetchBlobResponse>;
    base64: { encode(input: string): string; decode(input: string): string };
    android: AndroidApi;
    ios: IOSApi;
    config(options: RNFetchBlobConfig): RNFetchBlobStatic;
    session(name: string): RNFetchBlobSession;
    fs: FS;
    wrap(path: string): string;
    net: Net;
    polyfill: Polyfill;
    // this require external module https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/oboe
    JSONStream: any;
}

interface Polyfill {
    Blob: PolyfillBlob;
    File: PolyfillFile;
    XMLHttpRequest: PolyfillXMLHttpRequest;
    ProgressEvent: PolyfillProgressEvent;
    Event: PolyfillEvent;
    FileReader: PolyfillFileReader;
    Fetch: PolyfillFetch;
}

declare class PolyfillFetch extends RNFetchBlobFetchPolyfill {
    constructor(config: RNFetchBlobConfig);
}

declare class RNFetchBlobFetchPolyfill {
    constructor(config: RNFetchBlobConfig);

    build(): (url: string, options: RNFetchBlobConfig) => StatefulPromise<RNFetchBlobFetchRepsonse>;
}

interface RNFetchBlobFetchRepsonse {
    arrayBuffer(): Promise<any[]>;
    blob(): Promise<PolyfillBlob>;
    json(): Promise<any>;
    rawResp(): Promise<FetchBlobResponse>;
    text(): Promise<string>;
    bodyUsed: boolean;
    headers: any;
    ok: boolean;
    resp: FetchBlobResponse;
    rnfbResp: FetchBlobResponse;
    rnfbRespInfo: RNFetchBlobResponseInfo;
    status: number;
    type: string;
}

/**
 * RNFetchBlob response object class.
 */
interface FetchBlobResponse {
    taskId: string;
    /**
     * get path of response temp file
     * @return {string} File path of temp file.
     */
    path(): string;
    type: "base64" | "path" | "utf8";
    data: any;
    /**
     * Convert result to javascript RNFetchBlob object.
     * @return {Promise<Blob>} Return a promise resolves Blob object.
     */
    blob(contentType: string, sliceSize: number): Promise<PolyfillBlob>;
    /**
     * Convert result to text.
     * @return {string} Decoded base64 string.
     */
    text(): string | Promise<any>;
    /**
     * Convert result to JSON object.
     * @return {object} Parsed javascript object.
     */
    json(): any;
    /**
     * Return BASE64 string directly.
     * @return {string} BASE64 string of response body.
     */
    base64(): any;
    /**
     * Remove cahced file
     * @return {Promise}
     */
    flush(): void;
    respInfo: RNFetchBlobResponseInfo;
    session(name: string): RNFetchBlobSession | null;
    /**
     * Read file content with given encoding, if the response does not contains
     * a file path, show warning message
     * @param  {String} encode Encode type, should be one of `base64`, `ascrii`, `utf8`.
     */
    readFile(encode: Encoding): Promise<any> | null;
    /**
     * Start read stream from cached file
     * @param  {String} encode Encode type, should be one of `base64`, `ascrii`, `utf8`.
     */
    readStream(encode: Encoding): RNFetchBlobStream | null;
}

interface PolyfillFileReader extends EventTarget {
    isRNFBPolyFill: boolean;
    onloadstart(e: Event): void;
    onprogress(e: Event): void;
    onload(e: Event): void;
    onabort(e: Event): void;
    onerror(e: Event): void;
    onloadend(e: Event): void;

    abort(): void;
    readAsArrayBuffer(b: PolyfillBlob): void;
    readAsBinaryString(b: PolyfillBlob): void;
    readAsText(b: PolyfillBlob, label?: string): void;
    readAsDataURL(b: PolyfillBlob): void;

    readyState: number;
    result: number;
}

declare namespace PolyfillFileReader {
    const EMPTY: number;
    const LOADING: number;
    const DONE: number;
}

declare class PolyfillEvent {
}

interface PolyfillProgressEvent extends EventTarget {
    lengthComputable: boolean;
    loaded: number;
    total: number;
}

declare class PolyfillBlob extends EventTarget {
    /**
     * RNFetchBlob Blob polyfill, create a Blob directly from file path, BASE64
     * encoded data, and string. The conversion is done implicitly according to
     * given `mime`. However, the blob creation is asynchronously, to register
     * event `onCreated` is need to ensure the Blob is creadted.
     *
     * @param data Content of Blob object
     * @param cType Content type settings of Blob object, `text/plain` by default
     * @param {boolean} defer When this argument set to `true`, blob constructor will not invoke blob created event automatically.
     */
    constructor(data: any, cType: any, defer: boolean);

    /**
     * Since Blob content will asynchronously write to a file during creation,
     * use this method to register an event handler for Blob initialized event.
     * @param  {(b:Blob) => void} fn An event handler invoked when Blob created
     * @return {Blob} The Blob object instance itself
     */
    onCreated(fn: () => void): PolyfillBlob;

    markAsDerived(): void;

    /**
     * Get file reference of the Blob object.
     * @return {string} Blob file reference which can be consumed by RNFetchBlob fs
     */
    getRNFetchBlobRef(): string;

    /**
     * Create a Blob object which is sliced from current object
     * @param  {number} start    Start byte number
     * @param  {number} end      End byte number
     * @param  {string} contentType Optional, content type of new Blob object
     * @return {Blob}
     */
    slice(start?: number, end?: number, contentType?: string): PolyfillBlob;

    /**
     * Read data of the Blob object, this is not standard method.
     * @param  {string} encoding Read data with encoding
     * @return {Promise}
     */
    readBlob(encoding: string): Promise<any>;

    /**
     * Release the resource of the Blob object.
     * @nonstandard
     * @return {Promise}
     */
    close(): Promise<void>;
}

declare namespace PolyfillBlob {
    function clearCache(): void;

    function build(data: any, cType: any): Promise<PolyfillBlob>;

    function setLog(level: number): void;
}

declare class PolyfillFile extends PolyfillBlob {
}

interface PolyfillXMLHttpRequest extends PolyfillXMLHttpRequestEventTarget {
    upload: PolyfillXMLHttpRequestEventTarget;
    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;

    /**
     * XMLHttpRequest.open, always async, user and password not supported. When
     * this method invoked, headers should becomes empty again.
     * @param  {string} method Request method
     * @param  {string} url Request URL
     * @param  {boolean} async Always async
     * @param  user NOT SUPPORTED
     * @param  password NOT SUPPORTED
     */
    open(method: string, url: string, async: true, user: any, password: any): void;

    /**
     * Invoke this function to send HTTP request, and set body.
     * @param body Body in RNfetchblob flavor
     */
    send(body: any): void;

    overrideMimeType(mime: string): void;

    setRequestHeader(name: string, value: string): void;

    abort(): void;

    getResponseHeader(field: string): string | null;

    getAllResponseHeaders(): string | null;

    onreadystatechange(e: Event): void;
    readyState: number;
    status: number;
    statusText: string;
    response: any;
    responseText: any;
    responseURL: string;
    responseHeaders: any;
    timeout: number;
    responseType: string;
}

declare namespace PolyfillXMLHttpRequest {
    const binaryContentTypes: string[];
    const UNSENT: number;
    const OPENED: number;
    const HEADERS_RECEIVED: number;
    const LOADING: number;
    const DONE: number;

    function setLog(level: number): void;

    function addBinaryContentType(substr: string): void;

    function removeBinaryContentType(): void;
}

interface PolyfillXMLHttpRequestEventTarget extends EventTarget {
    onabort(e: Event): void;
    onerror(e: Event): void;
    onload(e: Event): void;
    onloadstart(e: Event): void;
    onprogress(e: Event): void;
    ontimeout(e: Event): void;
    onloadend(e: Event): void;
}

interface Net {
    /**
     * Get cookie according to the given url.
     * @param  {string} domain Domain of the cookies to be removed, remove all
     * @return {Promise<Array<String>>}     Cookies of a specific domain.
     */
    getCookies(domain: string): Promise<string[]>;

    /**
     * Remove cookies for a specific domain
     * @param  {?string} domain Domain of the cookies to be removed, remove all
     * cookies when this is null.
     * @return {Promise<null>}
     */
    removeCookies(domain?: string): Promise<null>;
}

interface FS {
    RNFetchBlobSession: RNFetchBlobSession;

    /**
     * Remove file at path.
     * @param  {string}   path:string Path of target file.
     * @return {Promise}
     */
    unlink(path: string): Promise<void>;

    /**
     * Create a directory.
     * @param  {string} path Path of directory to be created
     * @return {Promise}
     */
    mkdir(path: string): Promise<void>;

    /**
     * Get a file cache session
     * @param  {string} name Stream ID
     * @return {RNFetchBlobSession}
     */
    session(name: string): RNFetchBlobSession;

    ls(path: string): Promise<string[]>;

    /**
     * Create file stream from file at `path`.
     * @param  {string} path   The file path.
     * @param  {string} encoding Data encoding, should be one of `base64`, `utf8`, `ascii`
     * @param  {boolean} bufferSize Size of stream buffer.
     * @return {RNFetchBlobStream} RNFetchBlobStream stream instance.
     */
    readStream(path: string, encoding: Encoding, bufferSize?: number, tick?: number): Promise<RNFetchBlobReadStream>;

    mv(path: string, dest: string): Promise<boolean>;

    cp(path: string, dest: string): Promise<boolean>;

    /**
     * Create write stream to a file.
     * @param  {string} path Target path of file stream.
     * @param  {string} encoding Encoding of input data.
     * @param  {boolean} append  A flag represent if data append to existing ones.
     * @return {Promise<{}>} A promise resolves a `WriteStream` object.
     */
    writeStream(path: string, encoding: Encoding, append?: boolean): Promise<RNFetchBlobWriteStream>;

    /**
     * Write data to file.
     * @param  {string} path  Path of the file.
     * @param  {string | number[]} data Data to write to the file.
     * @param  {string} encoding Encoding of data (Optional).
     * @return {Promise}
     */
    writeFile(path: string, data: string | number[], encoding?: Encoding): Promise<void>;

    appendFile(path: string, data: string | number[], encoding?: Encoding): Promise<void>;

    /**
     * Wrapper method of readStream.
     * @param  {string} path Path of the file.
     * @param  {'base64' | 'utf8' | 'ascii'} encoding Encoding of read stream.
     * @return {Promise<Array<number> | string>}
     */
    readFile(path: string, encoding: Encoding, bufferSize?: number): Promise<any>;
    /**
     * Check if file exists and if it is a folder.
     * @param  {string} path Path to check
     * @return {Promise<boolean>}
     */
    exists(path: string): Promise<boolean>;

    createFile(path: string, data: string, encoding: Encoding): Promise<void>;

    isDir(path: string): Promise<boolean>;

    /**
     * Show statistic data of a path.
     * @param  {string} path Target path
     * @return {RNFetchBlobFile}
     */
    stat(path: string): Promise<RNFetchBlobFile>;

    lstat(path: string): Promise<RNFetchBlobFile[]>;

    /**
     * Android only method, request media scanner to scan the file.
     * @param  {Array<Object<string, string>>} pairs Array contains Key value pairs with key `path` and `mime`.
     * @return {Promise}
     */
    scanFile(pairs: Array<{ [key: string]: string }>): Promise<void>;

    dirs: Dirs;

    slice(src: string, dest: string, start: number, end: number): Promise<void>;
    asset(path: string): string;
    df(): Promise<{ free: number, total: number }>;
}

interface Dirs {
    DocumentDir: string;
    CacheDir: string;
    PictureDir: string;
    MusicDir: string;
    MovieDir: string;
    DownloadDir: string;
    DCIMDir: string;
    SDCardDir: string;
    MainBundleDir: string;
}

interface RNFetchBlobWriteStream {
    id: string;
    encoding: string;
    append: boolean;

    write(data: string): Promise<void>;
    close(): void;
}

interface RNFetchBlobReadStream {
    path: string;
    encoding: Encoding;
    bufferSize?: number;
    closed: boolean;
    tick: number;

    open(): void;

    onData(fn: (chunk: string | number[]) => void): void;

    onError(fn: (err: any) => void): void;

    onEnd(fn: () => void): void;
}

type Encoding = "utf8" | "ascii" | "base64";

/* tslint:disable-next-line interface-name*/
interface IOSApi {
    /**
     * Open a file in {@link https://developer.apple.com/reference/uikit/uidocumentinteractioncontroller UIDocumentInteractionController},
     * this is the default document viewer of iOS, supports several kinds of files. On Android, there's an similar method {@link android.actionViewIntent}.
     * @param path This is a required field, the path to the document. The path should NOT contains any scheme prefix.
     */
    previewDocument(path: string): void;

    /**
     * Show options menu for interact with the file.
     * @param path This is a required field, the path to the document. The path should NOT contains any scheme prefix.
     */
    openDocument(path: string): void;
}

interface AndroidApi {
    /**
     * When sending an ACTION_VIEW intent with given file path and MIME type, system will try to open an
     * App to handle the file. For example, open Gallery app to view an image, or install APK.
     * @param path Path of the file to be opened.
     * @param mime Basically system will open an app according to this MIME type.
     */
    actionViewIntent(path: string, mime: string): Promise<any>;
}

type Methods = "POST" | "GET" | "DELETE" | "PUT" | "post" | "get" | "delete" | "put";

/**
 * A declare class inherits Promise, it has extra method like progress, uploadProgress,
 * and cancel which can help managing an asynchronous task's state.
 */
interface StatefulPromise<T> extends Promise<T> {
    /**
     * Cancel the request when invoke this method.
     */
    cancel(cb?: (reason: any) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener which triggers when data receiving from server.
     */
    progress(callback: (received: number, total: number) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener with custom configuration
     */
    progress(config: { count?: number, interval?: number }, callback: (received: number, total: number) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener with custom configuration.
     */
    uploadProgress(callback: (sent: number, total: number) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener with custom configuration
     */
    uploadProgress(config: { count?: number, interval?: number }, callback: (sent: number, total: number) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * An IOS only API, when IOS app turns into background network tasks will be terminated after ~180 seconds,
     * in order to handle these expired tasks, you can register an event handler, which will be called after the
     * app become active.
     */
    expire(callback: () => void): StatefulPromise<void>;
}

declare class RNFetchBlobSession {
    constructor(name: string, list: string[]);

    add(path: string): RNFetchBlobSession;

    remove(path: string): RNFetchBlobSession;

    dispose(): Promise<void>;

    list(): string[];

    name: string;

    static getSession(name: string): any;

    static setSession(name: string): void;

    static removeSession(name: string): void;
}

/**
 * A set of configurations that will be injected into a fetch method, with the following properties.
 */
interface RNFetchBlobConfig {
    /**
     * When this property is true, the downloaded data will overwrite the existing file. (true by default)
     */
    overwrite?: boolean;

    /**
     * Set timeout of the request (in milliseconds).
     */
    timeout?: number;

    /**
     * Set this property to true to display a network indicator on status bar, this feature is only supported on IOS.
     */
    indicator?: boolean;

    /**
     * Set this property to true will allow the request create connection with server have self-signed SSL
     * certification. This is not recommended to use in production.
     */
    trusty?: boolean;

    /**
     * Set this property to true will makes response data of the fetch stored in a temp file, by default the temp
     * file will stored in App's own root folder with file name template RNFetchBlob_tmp${timestamp}.
     */
    fileCache?: boolean;

    /**
     * Set this property to change temp file extension that created by fetch response data.
     */
    appendExt?: string;

    /**
     * When this property has value, fetch API will try to store response data in the path ignoring fileCache and
     * appendExt property.
     */
    path?: string;

    session?: string;

    addAndroidDownloads?: AddAndroidDownloads;
}

interface AddAndroidDownloads {
    /**
     * download file using Android download manager or not.
     */
    useDownloadManager?: boolean;
    /**
     * title of the file
     */
    title?: string;
    /**
     * File description of the file.
     */
    description?: string;
    /**
     * The destination which the file will be downloaded, it SHOULD be a location on external storage (DCIMDir).
     */
    path?: string;
    /**
     * MIME type of the file. By default is text/plain
     */
    mime?: string;
    /**
     * A boolean value, see Officail Document
     * (https://developer.android.com/reference/android/app/DownloadManager.html#addCompletedDownload(java.lang.String, java.lang.String, boolean, java.lang.String, java.lang.String, long, boolean))
     */
    mediaScannable?: boolean;
    /**
     * A boolean value decide whether show a notification when download complete.
     */
    notification?: boolean;
}

interface RNFetchBlobResponseInfo {
    taskId: string;
    state: number;
    headers: any;
    status: number;
    respType: "text" | "blob" | "" | "json";
    rnfbEncode: "path" | "base64" | "ascii" | "utf8";
}

interface RNFetchBlobStream {
    onData(): void;
    onError(): void;
    onEnd(): void;
}

declare class RNFetchBlobFile {
}
