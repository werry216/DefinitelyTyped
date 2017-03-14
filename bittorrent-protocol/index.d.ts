// Type definitions for bittorrent-protocol 2.1
// Project: https://github.com/feross/bittorrent-protocol#readme
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';

declare const BittorrentProtocol: BittorrentProtocol.BittorrentProtocol;

declare namespace BittorrentProtocol {
    export interface BittorrentProtocol {
        new (): Wire;
        (): Wire;
    }

    export interface Extension {
        //tslint:disable-next-line:no-misused-new - could use class instead of interface but class is not extendible
        constructor(wire: Wire): this;
        onHandshake?: () => void;
        onExtendedHandshake?: () => void;
        onMessage?: () => void;
        name: string;
    }

    export interface Request {
        //tslint:disable-next-line:no-misused-new  - could use class instead of interface but class is not extendible
        constructor(piece: number, offset: number, length: number, callback: () => void): this;
        piece: number;
        offset: number;
        length: number;
        callback: () => void;
    }

    export interface Wire extends stream.Duplex {
        readonly peerId: string; // remote peer id (hex string)
        readonly peerIdBuffer: Buffer; // remote peer id (Buffer)
        readonly type: 'webrtc' | 'tcpIncoming' | 'tcpOutgoing' | 'webSeed'; // connection type
        readonly amChoking: boolean; // are we choking the peer?
        readonly amInterested: boolean; // are we interested in the peer?
        readonly peerChoking: boolean; // is the peer choking us?
        readonly peerInterested: boolean; // is the peer interested in us?
        readonly requests: Request[];
        readonly peerRequests: Request[];
        readonly extendedMapping: { [key: number]: string, };
        readonly peerExtendedMapping: { [key: string]: number, };

        setKeepAlive(enable: boolean): void;

        setTimeot(ms: number, unref?: boolean): void;

        destroy(): void;

        use(ext: Extension): void;

        handshake(infoHash: string | Buffer, peerId: string | Buffer, extensions?: any): void;

        choke(): void;

        unchoke(): void;

        interested(): void;

        uninterested(): void;

        have(index: number): void;

        // TODO: bitfield can be also a bitfield instance
        bitfield(bitfield: Buffer | any): void;

        request<T extends any>(index: number, offset: number, length: number, cb?: (err: Error) => T): T | void;

        piece(index: number, offset: number, buffer: Buffer): void;

        cancel(index: number, offset: number, length: number): void;

        port(port: number): void;

        extend(ext: number | string, obj: any): void;

        // TODO: bitfield is a bitfield instance
        on(event: 'bitfield', listener: (bitfield: any) => void): this;
        on(event: string | 'keep-alive' | 'choke' | 'unchoke' | 'interested' | 'uninterested' | 'timeout', listener: () => void): this;
        on(event: 'upload' | 'have' | 'download' | 'port', listener: (length: number) => void): this;
        on(event: 'handshake', listener: (infoHash: string, peerId: string, extensions: Extension[]) => void): this;
        on(event: 'request', listener: (index: number, offset: number, length: number, respond: () => void) => void): this;
        on(event: 'piece', listener: (index: number, offset: number, buffer: Buffer) => void): this;
        on(event: 'cancel', listener: (index: number, offset: number, length: number) => void): this;
        on(event: 'extended', listener: (ext: 'handshake' | string, buf: any) => void): void;
        on(event: 'unknownmessage', listener: (buffer: Buffer) => void): this;
    }
}

export = BittorrentProtocol;
