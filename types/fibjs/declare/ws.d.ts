/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */





/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="EventInfo.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HandlerEx.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="Int64.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="Stats.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="SubProcess.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="ZmqSocket.d.ts" />

/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
    * @brief websocket ????????????
    * @detail ???????????????,```JavaScript,var ws = require('ws');,```,????????????????????????,```JavaScript,var ws = require('ws');,var http = require('http');,,var svr = new http.Server(80, {,    '/ws': ws.upgrade((conn, req) => {,        conn.onmessage = e => console.log(e.data);,    }),});,svr.run();,```,?????? WebSocket ????????????,```JavaScript,var ws = require('ws');,,var conn = new ws.Socket('ws://127.0.0.1/ws');,conn.ommessage = e => console.log(e.data);,```
    */
declare module "ws" {
    

    module ws {
        
        /**
         * 
         * @brief ?????? websocket ???????????? 0????????????????????????
         * 
         * 
         */
        export const CONTINUE = 0;
        
        /**
         * 
         * @brief ?????? websocket ???????????? 1????????????????????????
         * 
         * 
         */
        export const TEXT = 1;
        
        /**
         * 
         * @brief ?????? websocket ???????????? 2???????????????????????????
         * 
         * 
         */
        export const BINARY = 2;
        
        /**
         * 
         * @brief ?????? websocket ???????????? 8???????????????
         * 
         * 
         */
        export const CLOSE = 8;
        
        /**
         * 
         * @brief ?????? websocket ???????????? 9??????????????? ping ???
         * 
         * 
         */
        export const PING = 9;
        
        /**
         * 
         * @brief ?????? websocket ???????????? 10??????????????? pong ???
         * 
         * 
         */
        export const PONG = 10;
        
        /**
         * 
         * @brief ?????? WebSocket ??????????????????????????????
         * 
         * 
         */
        export const CONNECTING = 0;
        
        /**
         * 
         * @brief ?????? WebSocket ???????????????????????????
         * 
         * 
         */
        export const OPEN = 1;
        
        /**
         * 
         * @brief ?????? WebSocket ???????????????????????? CLOSE ????????????????????????
         * 
         * 
         */
        export const CLOSING = 2;
        
        /**
         * 
         * @brief ?????? WebSocket ???????????????????????????
         * 
         * 
         */
        export const CLOSED = 3;
        
        
        
        /**
         * 
         * @brief ???????????? websocket ????????????????????? WebSocketMessage
         * 
         * 
         */
        export class Message extends Class_WebSocketMessage {}
        
        
        /**
         * 
         * @brief WebSocket ??????????????? WebSocket
         * 
         * 
         */
        export class Socket extends Class_WebSocket {}
        
        
        
        
        /**
         * 
         * @brief ???????????? websocket ????????????????????? http ?????? upgrade ???????????????????????? WebSocket ??????
         * accept ???????????????????????????????????????????????????????????????????????? WebSocket ??????????????????????????????????????? HttpRequest ?????????
         * @param accept ????????????????????????
         * @return ?????????????????????????????? HttpServer, Chain, Routing ?????????
         * 
         * 
         * 
         */
        export function upgrade(accept: Function): Class_Handler;
    
    } /** end of `module ws` */
    export = ws
}

/** endof `module Or Internal Object` */


