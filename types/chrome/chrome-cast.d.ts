// Type definitions for Chrome Cast application development
// Project: https://developers.google.com/cast/
// Definitions by: Thomas Stig Jacobsen <https://github.com/eXeDK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

////////////////////
// Cast
// @see https://code.google.com/p/chromium/codesearch#chromium/src/ui/file_manager/externs/chrome_cast.js
////////////////////
declare namespace chrome.cast {
    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.AutoJoinPolicy
     */
    export enum AutoJoinPolicy {
        CUSTOM_CONTROLLER_SCOPED = "custom_controller_scoped",
        TAB_AND_ORIGIN_SCOPED = "tab_and_origin_scoped",
        ORIGIN_SCOPED = "origin_scoped",
        PAGE_SCOPED = "page_scoped"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.DefaultActionPolicy
     */
    export enum DefaultActionPolicy {
        CREATE_SESSION = "create_session",
        CAST_THIS_TAB = "cast_this_tab"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Capability
     */
    export enum Capability {
        VIDEO_OUT = "video_out",
        AUDIO_OUT = "audio_out",
        VIDEO_IN = "video_in",
        AUDIO_IN = "audio_in",
        MULTIZONE_GROUP = "multizone_group"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ErrorCode
     */
    export enum ErrorCode {
        CANCEL = "cancel",
        TIMEOUT = "timeout",
        API_NOT_INITIALIZED = "api_not_initialized",
        INVALID_PARAMETER = "invalid_parameter",
        EXTENSION_NOT_COMPATIBLE = "extension_not_compatible",
        EXTENSION_MISSING = "extension_missing",
        RECEIVER_UNAVAILABLE = "receiver_unavailable",
        SESSION_ERROR = "session_error",
        CHANNEL_ERROR = "channel_error",
        LOAD_MEDIA_FAILED = "load_media_failed"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverAvailability
     */
    export enum ReceiverAvailability {
        AVAILABLE = "available",
        UNAVAILABLE = "unavailable"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SenderPlatform
     */
    export enum SenderPlatform {
        CHROME = "chrome",
        IOS = "ios",
        ANDROID = "android"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverType
     */
    export enum ReceiverType {
        CAST = "cast",
        DIAL = "dial",
        HANGOUT = "hangout",
        CUSTOM = "custom"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverAction
     */
    export enum ReceiverAction {
        CAST = "cast",
        STOP = "stop"
    }



    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionStatus
     */
    export enum SessionStatus {
        CONNECTED = "connected",
        DISCONNECTED = "disconnected",
        STOPPED = "stopped"
    }

    /**
     * @const {!Array<number>}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.VERSION
     */
    export var VERSION: Array<number>;

    /**
     * @type {boolean}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.isAvailable
     */
    export var isAvailable: boolean;

    /**
     * @param {!chrome.cast.ApiConfig} apiConfig
     * @param {function()} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     */
    export function initialize(
        apiConfig: chrome.cast.ApiConfig,
        successCallback: Function,
        errorCallback: (error: chrome.cast.Error) => void
    ): void;

    /**
     * @param {function(!chrome.cast.Session)} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     * @param {chrome.cast.SessionRequest=} opt_sessionRequest
     * @param {string=} opt_label
     */
    export function requestSession(
        successCallback: (session: chrome.cast.Session) => void,
        errorCallback: (error: chrome.cast.Error) => void,
        sessionRequest?: chrome.cast.SessionRequest,
        label?: string
    ): void

    /**
     * @param {string} sessionId The id of the session to join.
     */
    export function requestSessionById(
        sessionId: string
    ): void

    /**
     * @param {chrome.cast.ReceiverActionListener} listener
     */
    export function addReceiverActionListener(
        listener: (receiver: chrome.cast.Receiver, receiverAction: chrome.cast.ReceiverAction) => void
    ): void

    /**
     * @param {chrome.cast.ReceiverActionListener} listener
     */
    export function removeReceiverActionListener(
        listener: (receiver: chrome.cast.Receiver, receiverAction: chrome.cast.ReceiverAction) => void
    ): void

    /**
     * @param {string} message The message to log.
     */
    export function logMessage(
        message: string
    ): void

    /**
     * @param {!Array<chrome.cast.Receiver>} receivers
     * @param {function()} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     */
    export function setCustomReceivers(
        receivers: Array<chrome.cast.Receiver>,
        successCallback: Function,
        errorCallback: (error: chrome.cast.Error) => void
    ): void

    /**
     * @param {!chrome.cast.Receiver} receiver
     * @param {function()} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     */
    export function setReceiverDisplayStatus(
        receiver: chrome.cast.Receiver,
        successCallback: Function,
        errorCallback: (error: chrome.cast.Error) => void
    ): void

    export interface ApiConfig {
        /**
         * @param {!chrome.cast.SessionRequest} sessionRequest
         * @param {function(!chrome.cast.Session)} sessionListener
         * @param {function(!chrome.cast.ReceiverAvailability,Array<Object>)}
         *     receiverListener
         * @param {chrome.cast.AutoJoinPolicy=} opt_autoJoinPolicy
         * @param {chrome.cast.DefaultActionPolicy=} opt_defaultActionPolicy
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ApiConfig
         */
        new(
            sessionRequest: chrome.cast.SessionRequest,
            sessionListener: (session: chrome.cast.Session) => void,
            receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void,
            autoJoinPolicy?: chrome.cast.AutoJoinPolicy,
            defaultActionPolicy?: chrome.cast.DefaultActionPolicy
        ): ApiConfig;

        sessionRequest: chrome.cast.SessionRequest;
        sessionListener: (session: chrome.cast.Session) => void;
        receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void;
        autoJoinPolicy?: chrome.cast.AutoJoinPolicy;
        defaultActionPolicy: chrome.cast.DefaultActionPolicy;
    }

    export interface Error {
        /**
         * @param {!chrome.cast.ErrorCode} code
         * @param {string=} opt_description
         * @param {Object=} opt_details
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Error
         */
        new(
            code: chrome.cast.ErrorCode,
            description?: string,
            details?: Object
        ): Error;

        code: chrome.cast.ErrorCode;
        description?: string;
        details?: string;

    }

    export interface Image {
        /**
         * @param {string} url
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Image
         */
        new(
            url: string
        ): Image;

        url: string;
        height?: number;
        width?: number;
    }

    export interface SenderApplication {
        /**
         * @param {!chrome.cast.SenderPlatform} platform
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SenderApplication
         */
        new(
            platform: chrome.cast.SenderPlatform
        ): SenderApplication;

        platform: chrome.cast.SenderPlatform;
        url?: string;
        packageId?: string;
    }

    export interface SessionRequest {
        /**
         * @param {string} appId
         * @param {!Array<chrome.cast.Capability>=} opt_capabilities
         * @param {number=} opt_timeout
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionRequest
         */
        new(
            appId: string,
            capabilities?: Array<chrome.cast.Capability>,
            timeout?: number
        ): SessionRequest;

        appId: string;
        capabilities: Array<chrome.cast.Capability>;
        requestSessionTimeout: number;
        language?: string;
    }

    export interface Session {
        /**
         * @param {string} sessionId
         * @param {string} appId
         * @param {string} displayName
         * @param {!Array<chrome.cast.Image>} appImages
         * @param {!chrome.cast.Receiver} receiver
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session
         */
        new(
            sessionId: string,
            appId: string,
            displayName: string,
            appImages: Array<chrome.cast.Image>,
            receiver: chrome.cast.Receiver
        ): Session;

        sessionId: string;
        appId: string;
        displayName: string;
        appImages: Array<chrome.cast.Image>;
        receiver: chrome.cast.Receiver;
        senderApps: Array<chrome.cast.SenderApplication>;
        namespaces: Array<{ name: string }>;
        media: Array<chrome.cast.media.Media>;
        status: chrome.cast.SessionStatus

        /**
         * @param {number} newLevel
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        setReceiverVolumeLevel(
            newLevel: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {boolean} muted
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        setReceiverMuted(
            muted: boolean,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        leave(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        stop(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {string} namespace
         * @param {!Object|string} message
         * @param {!function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        sendMessage(
            namespace: string,
            message: string,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function(boolean)} listener
         */
        addUpdateListener(
            listener: (isAlive: boolean) => void
        ): void

        /**
         * @param {function(boolean)} listener
         */
        removeUpdateListener(
            listener: (isAlive: boolean) => void
        ): void

        /**
         * @param {string} namespace
         * @param {function(string,string)} listener
         */
        addMessageListener(
            namespace: string,
            listener: (namespace: string, message: string) => void
        ): void

        /**
         * @param {string} namespace
         * @param {function(string,string)} listener
         */
        removeMessageListener(
            namespace: string,
            listener: (namespace: string, message: string) => void
        ): void

        /**
         * @param {function(!chrome.cast.media.Media)} listener
         */
        addMediaListener(
            listener: (media: chrome.cast.media.Media) => void
        ): void

        /**
         * @param {function(!chrome.cast.media.Media)} listener
         */
        removeMediaListener(
            listener: (media: chrome.cast.media.Media) => void
        ): void

        /**
         * @param {!chrome.cast.media.LoadRequest} loadRequest
         * @param {function(!chrome.cast.media.Media)} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        loadMedia(
            loadRequest: chrome.cast.media.LoadRequest,
            successCallback: (media: chrome.cast.media.Media) => void,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueLoadRequest} queueLoadRequest
         * @param {function(!chrome.cast.media.Media)} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueLoad(
            queueLoadRequest: chrome.cast.media.QueueLoadRequest,
            successCallback: (media: chrome.cast.media.Media) => void,
            errorCallback: (error: chrome.cast.Error) => void
        ): void
    }

    export interface Receiver {
        /**
         * @param {string} label
         * @param {string} friendlyName
         * @param {Array<chrome.cast.Capability>=} opt_capabilities
         * @param {chrome.cast.Volume=} opt_volume
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Receiver
         */
        new(
            label: string,
            friendlyName: string,
            capabilities?: Array<chrome.cast.Capability>,
            volume?: chrome.cast.Volume
        ): Receiver;

        label: string;
        friendlyName: string;
        capabilities: Array<chrome.cast.Capability>;
        volume: chrome.cast.Volume;
        receiverType: chrome.cast.ReceiverType;
        displayStatus: chrome.cast.ReceiverDisplayStatus;
    }

    export interface ReceiverDisplayStatus {
        /**
         * @param {string} statusText
         * @param {!Array<chrome.cast.Image>} appImages
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverDisplayStatus
         */
        new(
            statusText: string,
            appImages: Array<chrome.cast.Image>
        ): ReceiverDisplayStatus;

        statusText: string;
        appImages: Array<chrome.cast.Image>;
    }

    export interface Volume {
        /**
         * @param {?number=} opt_level
         * @param {?boolean=} opt_muted
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Volume
         */
        new(
            level?: number,
            muted?: boolean
        ): Volume;

        level?: number;
        muted?: boolean;
    }
}

declare namespace chrome.cast.media {

    export var DEFAULT_MEDIA_RECEIVER_APP_ID: string;

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MediaCommand
     */
    export enum MediaCommand {
        PAUSE = "pause",
        SEEK = "seek",
        STREAM_VOLUME = "stream_volume",
        STREAM_MUTE = "stream_mute"
    }

    /**
     * @enum {number}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MetadataType
     */
    export enum MetadataType {
        GENERIC,
        TV_SHOW,
        MOVIE,
        MUSIC_TRACK,
        PHOTO
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PlayerState
     */
    export enum PlayerState {
        IDLE = "IDLE",
        PLAYING = "PLAYING",
        PAUSED = "PAUSED",
        BUFFERING = "BUFFERING"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.ResumeState
     */
    export enum ResumeState {
        PLAYBACK_START = "PLAYBACK_START",
        PLAYBACK_PAUSE = "PLAYBACK_PAUSE"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.StreamType
     */
    export enum StreamType {
        BUFFERED = "BUFFERED",
        LIVE = "LIVE",
        OTHER = "OTHER"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.IdleReason
     */
    export enum IdleReason {
        CANCELLED = "CANCELLED",
        INTERRUPTED = "INTERRUPTED",
        FINISHED = "FINISHED",
        ERROR = "ERROR"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.RepeatMode
     */
    export enum RepeatMode {
        OFF = "REPEAT_OFF",
        ALL = "REPEAT_ALL",
        SINGLE = "REPEAT_SINGLE",
        ALL_AND_SHUFFLE = "REPEAT_ALL_AND_SHUFFLE"
    }

    export interface QueueItem {
        /**
         * @param {!chrome.cast.media.MediaInfo} mediaInfo
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueItem
         */
        new(
            mediaInfo: chrome.cast.media.MediaInfo
        ): QueueItem;

        activeTrackIds: Array<Number>;
        autoplay: boolean;
        customData: Object;
        itemId: number;
        media: chrome.cast.media.MediaInfo;
        preloadTime: number;
        startTime: number;
    }

    export interface QueueLoadRequest {
        /**
         * @param {!Array<chrome.cast.media.QueueItem>} items
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueLoadRequest
         */
        new(
            items: Array<chrome.cast.media.QueueItem>
        ): QueueLoadRequest;

        customData: Object;
        items: Array<chrome.cast.media.QueueItem>;
        repeatMode: chrome.cast.media.RepeatMode;
        startIndex: number;
    }

    export interface QueueInsertItemsRequest {
        /**
         * @param {!Array<chrome.cast.media.QueueItem>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueInsertItemsRequest
         */
        new(
            itemsToInsert: Array<chrome.cast.media.QueueItem>
        ): QueueInsertItemsRequest;

        customData: Object;
        insertBefore: number;
        items: Array<chrome.cast.media.QueueItem>;
    }

    export interface QueueRemoveItemsRequest {
        /**
         * @param {!Array<number>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueRemoveItemsRequest
         */
        new(
            itemIdsToRemove: Array<number>
        ): QueueRemoveItemsRequest;

        customData: Object;
        itemIds: Array<number>;
    }

    export interface QueueReorderItemsRequest {
        /**
         * @param {!Array<number>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueReorderItemsRequest
         */
        new(
            itemIdsToReorder: Array<number>
        ): QueueReorderItemsRequest;

        customData: Object;
        insertBefore: number;
        itemIds: Array<number>;
    }

    export interface QueueUpdateItemsRequest {
        /**
         * @param {!Array<chrome.cast.media.QueueItem>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueUpdateItemsRequest
         */
        new(
            itemsToUpdate: Array<chrome.cast.media.QueueItem>
        ): QueueUpdateItemsRequest;

        customData: Object;
        item: Array<chrome.cast.media.QueueItem>;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TrackType
     */
    export enum TrackType {
        TEXT = "TEXT",
        AUDIO = "AUDIO",
        VIDEO = "VIDEO"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackType
     */
    export enum TextTrackType {
        SUBTITLES = "SUBTITLES",
        CAPTIONS = "CAPTIONS",
        DESCRIPTIONS = "DESCRIPTIONS",
        CHAPTERS = "CHAPTERS",
        METADATA = "METADATA"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackEdgeType
     */
    export enum TextTrackEdgeType {
        NONE = "NONE",
        OUTLINE = "OUTLINE",
        DROP_SHADOW = "DROP_SHADOW",
        RAISED = "RAISED",
        DEPRESSED = "DEPRESSED"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackWindowType
     */
    export enum TextTrackWindowType {
        NONE = "NONE",
        NORMAL = "NORMAL",
        ROUNDED_CORNERS = "ROUNDED_CORNERS"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackFontGenericFamily
     */
    export enum TextTrackFontGenericFamily {
        SANS_SERIF = "SANS_SERIF",
        MONOSPACED_SANS_SERIF = "MONOSPACED_SANS_SERIF",
        SERIF = "SERIF",
        MONOSPACED_SERIF = "MONOSPACED_SERIF",
        CASUAL = "CASUAL",
        CURSIVE = "CURSIVE",
        SMALL_CAPITALS = "SMALL_CAPITALS"
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackFontStyle
     */
    export enum TextTrackFontStyle {
        NORMAL = "NORMAL",
        BOLD = "BOLD",
        BOLD_ITALIC = "BOLD_ITALIC",
        ITALIC = "ITALIC"
    }

    export interface GetStatusRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.GetStatusRequest
         */
        new(): GetStatusRequest;

        customData: Object;
    }

    export interface PauseRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PauseRequest
         */
        new(): PauseRequest;

        customData: Object;
    }

    export interface PlayRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PlayRequest
         */
        new(): PlayRequest;

        customData: Object;
    }

    export interface SeekRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.SeekRequest
         */
        new(): SeekRequest;

        currentTime: number;
        resumeState: chrome.cast.media.ResumeState;
        customData: Object;
    }

    export interface StopRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.StopRequest
         */
        new(): StopRequest;

        customData: Object;
    }

    export interface VolumeRequest {
        /**
         * @param {!chrome.cast.Volume} volume
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.VolumeRequest
         */
        new(
            volume: chrome.cast.Volume
        ): VolumeRequest;

        volume: chrome.cast.Volume;
        customData: Object;
    }

    export class LoadRequest {
        /**
         * @param {!chrome.cast.media.MediaInfo} mediaInfo
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.LoadRequest
         */
        constructor(
            mediaInfo: chrome.cast.media.MediaInfo
        );

        activeTrackIds: Array<number>;
        autoplay: boolean;
        currentTime: number;
        customData: Object;
        media: chrome.cast.media.MediaInfo;
    }

    export interface EditTracksInfoRequest {
        /**
         * @param {Array<number>=} opt_activeTrackIds
         * @param {chrome.cast.media.TextTrackStyle=} opt_textTrackStyle
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.EditTracksInfoRequest
         */
        new(
            activeTrackIds?: Array<number>,
            textTrackStyle?: chrome.cast.media.TextTrackStyle
        ): EditTracksInfoRequest;

        activeTrackIds: Array<number>;
        textTrackStyle: chrome.cast.media.TextTrackStyle;
    }

    export class GenericMediaMetadata {
        images: Array<chrome.cast.Image>;
        metadataType: chrome.cast.media.MetadataType;
        releaseDate: string;
        /** @deprecated. Use releaseDate instead. */
        releaseYear: number;
        subtitle: string;
        title: string;
        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
    }

    export interface MovieMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MovieMediaMetadata
         */
        new(): MovieMediaMetadata;

        images: Array<chrome.cast.Image>;
        metadataType: chrome.cast.media.MetadataType;
        releaseDate: string;
        /** @deprecated. Use releaseDate instead. */
        releaseYear: number;
        subtitle: string;
        title: string;
        studio: string;
        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
    }

    export interface TvShowMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TvShowMediaMetadata
         */
        new(): TvShowMediaMetadata;

        metadataType: chrome.cast.media.MetadataType;
        seriesTitle: string;
        title: string;
        season: number;
        episode: number;
        images: Array<chrome.cast.Image>;
        originalAirdate: string;

        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
        /** @deprecated. Use title instead. */
        episodeTitle: string;
        /** @deprecated. Use season instead. */
        seasonNumber: number;
        /** @deprecated. Use episode instead. */
        episodeNumber: number;
        /** @deprecated. Use originalAirdate instead. */
        releaseYear: number;
    }

    export interface MusicTrackMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MusicTrackMediaMetadata
         */
        new(): MusicTrackMediaMetadata;

        metadataType: chrome.cast.media.MetadataType;
        albumName: string;
        title: string;
        albumArtist: string;
        artist: string;
        composer: string;
        songName: string;
        trackNumber: number;
        discNumber: number;
        images: Array<chrome.cast.Image>;
        releaseDate: string;

        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
        /** @deprecated. Use artist instead. */
        artistName: string;
        /** @deprecated. Use releaseDate instead. */
        releaseYear: number;
    }

    export interface PhotoMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PhotoMediaMetadata
         */
        new(): PhotoMediaMetadata;

        metadataType: chrome.cast.media.MetadataType;
        title: string;
        artist: string;
        location: string;
        images: Array<chrome.cast.Image>;
        latitude: number;
        longitude: number;
        width: number;
        height: number;
        creationDateTime: string;

        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
    }

    export class MediaInfo {
        /**
         * @param {string} contentId
         * @param {string} contentType
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MediaInfo
         */
        constructor(
            contentId: string,
            contentType: string
        );

        contentId: string;
        streamType: chrome.cast.media.StreamType;
        contentType: string;
        metadata: Object;
        duration: number;
        tracks: Array<chrome.cast.media.Track>;
        textTrackStyle: chrome.cast.media.TextTrackStyle;
        customData: Object;
    }

    export interface Media {
        /**
         * @param {string} sessionId
         * @param {number} mediaSessionId
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media
         */
        new(
            sessionId: string,
            mediaSessionId: number
        ): Media;

        activeTrackIds: Array<number>;
        currentItemId: number;
        customData: Object;
        idleReason: chrome.cast.media.IdleReason;
        items: Array<chrome.cast.media.QueueItem>;
        loadingItemId: number;
        media: chrome.cast.media.MediaInfo;
        mediaSessionId: number;
        playbackRate: number;
        playerState: chrome.cast.media.PlayerState;
        preloadedItemId: number;
        repeatMode: chrome.cast.media.RepeatMode;
        sessionId: string;
        supportedMediaCommands: Array<chrome.cast.media.MediaCommand>;
        volume: chrome.cast.Volume;

        /** @deprecated. Use getEstimatedTime instead */
        currentTime: number;

        /**
         * @param {chrome.cast.media.GetStatusRequest} getStatusRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        getStatus(
            getStatusRequest: chrome.cast.media.GetStatusRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {chrome.cast.media.PlayRequest} playRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        play(
            playRequest: chrome.cast.media.PlayRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {chrome.cast.media.PauseRequest} pauseRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        pause(
            pauseRequest: chrome.cast.media.PauseRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.SeekRequest} seekRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        seek(
            seekRequest: chrome.cast.media.SeekRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {chrome.cast.media.StopRequest} stopRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        stop(
            stopRequest: chrome.cast.media.StopRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.VolumeRequest} volumeRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        setVolume(
            volumeRequest: chrome.cast.media.VolumeRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.EditTracksInfoRequest} editTracksInfoRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        editTracksInfo(
            editTracksInfoRequest: chrome.cast.media.EditTracksInfoRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.MediaCommand} command
         * @return {boolean}
         */
        supportsCommand(
            command: chrome.cast.media.MediaCommand
        ): boolean

        /**
         * @param {function(boolean)} listener
         */
        addUpdateListener(
            listener: (isAlive: boolean) => void
        ): void

        /**
         * @param {function(boolean)} listener
         */
        removeUpdateListener(
            listener: (isAlive: boolean) => void
        ): void

        /**
         * @return {number}
         * @suppress {deprecated} Uses currentTime member to compute estimated time.
         */
        getEstimatedTime(): number

        /**
         * @param {!chrome.cast.media.QueueItem} item
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueAppendItem(
            item: chrome.cast.media.QueueItem,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueInsertItemsRequest} queueInsertItemsRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueInsertItems(
            queueInsertItemsRequest: chrome.cast.media.QueueInsertItemsRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!number} itemId
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueJumpToItem(
            itemId: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!number} itemId
         * @param {!number} newIndex
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueMoveItemToNewIndex(
            itemId: number,
            newIndex: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueNext(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queuePrev(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!number} itemId
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueRemoveItem(
            itemId: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueReorderItemsRequest} queueReorderItemsRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueReorderItems(
            queueReorderItemsRequest: chrome.cast.media.QueueReorderItemsRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.RepeatMode} repeatMode
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueSetRepeatMode(
            repeatMode: chrome.cast.media.RepeatMode,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueUpdateItemsRequest} queueUpdateItemsRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueUpdateItems(
            queueUpdateItemsRequest: chrome.cast.media.QueueUpdateItemsRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

    }

    export interface Track {
        /**
         * @param {number} trackId
         * @param {!chrome.cast.media.TrackType} trackType
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Track
         */
        new(
            trackId: number,
            trackType: chrome.cast.media.TrackType
        ): Track;

        trackId: number;
        trackContentId: string;
        trackContentType: string;
        type: chrome.cast.media.TrackType;
        name: string;
        language: string;
        subtype: chrome.cast.media.TextTrackType;
        customData: Object;
    }

    export interface TextTrackStyle {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackStyle
         */
        new(): TextTrackStyle;

        foregroundColor: string;
        backgroundColor: string;
        edgeType: chrome.cast.media.TextTrackEdgeType;
        edgeColor: string;
        windowType: chrome.cast.media.TextTrackWindowType;
        windowColor: string;
        windowRoundedCornerRadius: number;
        fontScale: number;
        fontFamily: string;
        fontGenericFamily: chrome.cast.media.TextTrackFontGenericFamily;
        fontStyle: chrome.cast.media.TextTrackFontStyle;
        customData: Object;
    }
}

/**
 * @namespace
 * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.timeout
 */
declare namespace chrome.cast.media.timeout {
    export var load: number;
    export var getStatus: number;
    export var play: number;
    export var pause: number;
    export var seek: number;
    export var stop: number;
    export var setVolume: number;
    export var editTracksInfo: number;
    export var queueInsert: number;
    export var queueLoad: number;
    export var queueRemove: number;
    export var queueReorder: number;
    export var queueUpdate: number;
}
