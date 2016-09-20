// Type definitions for s3-upload-stream
// Project: https://github.com/nathanpeck/s3-upload-stream
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="aws-sdk" />

import * as stream from 'stream';
import * as AWS from 'aws-sdk';

interface S3StreamUploader {
    upload(destinationDetails: AWS.s3.PutObjectRequest, sessionDetails?: any): S3WriteStream;
}

interface S3WriteStream extends stream.Writable {
    maxPartSize(sizeInBytes: number): void;
    concurrentParts(numberOfParts: number): void;
}

declare function s3Stream(client: AWS.S3): S3StreamUploader;
export = s3Stream;
