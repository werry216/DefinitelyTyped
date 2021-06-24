// Type definitions for staticmaps 1.5
// Project: https://github.com/StephanGeorg/staticmaps#readme
// Definitions by: Olivier Kamers <https://github.com/olivierkamers>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JpegOptions, OutputOptions, PngOptions, WebpOptions } from 'sharp';

declare class StaticMaps {
    constructor(options: StaticMaps.StaticMapsOptions);

    addLine: (options: StaticMaps.AddLineOptions) => void;
    addPolygon: (options: StaticMaps.AddPolygonOptions) => void;
    addMultiPolygon: (options: StaticMaps.AddMultiPolygonOptions) => void;
    addMarker: (options: StaticMaps.AddMarkerOptions) => void;
    addText: (options: StaticMaps.AddTextOptions) => void;
    render: (center?: ReadonlyArray<number>, zoom?: number) => Promise<void>;
    image: StaticMapsImage;
}

declare class StaticMapsImage {
    constructor();

    image: Buffer;
    save: (fileName?: string, outputOptions?: OutputOptions | PngOptions | JpegOptions | WebpOptions) => Promise<void>;
    buffer: (mime?: string, outputOptions?: OutputOptions | PngOptions | JpegOptions | WebpOptions) => Promise<Buffer>;
}

declare namespace StaticMaps {
    type ZoomLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

    interface StaticMapsOptions {
        width: number;
        height: number;
        paddingX?: number;
        paddingY?: number;
        tileUrl?: string;
        tileSize?: number;
        /**
         * Subdomains of tile server
         * @default []
         */
        subdomains?: string[];
        tileRequestTimeout?: number;
        tileRequestHeader?: object;
        /**
         * Limit concurrent connections to the tiles server
         * @default 2
         */
        tileRequestLimit?: number;
        /**
         * Defines the range of zoom levels to try
         */
        zoomRange?: {
            min?: ZoomLevel;
            max?: ZoomLevel;
        };
        /** @deprecated Use zoomRange.max instead: */
        maxZoom?: number;
        reverseY?: boolean;
    }

    interface AddMarkerOptions {
        coord: [number, number];
        img: string;
        height: number;
        width: number;
        offsetX?: number;
        offsetY?: number;
    }

    interface AddLineOptions {
        coords: ReadonlyArray<[number, number]>;
        color?: string;
        width?: number;
    }

    interface AddPolygonOptions extends AddLineOptions {
        fill?: string;
    }

    interface AddMultiPolygonOptions {
        coords: ReadonlyArray<Array<[number, number]>>;
        color?: string;
        width?: number;
        fill?: string;
    }

    interface AddTextOptions {
        /**
         * Anchor of the text
         * @default 'start'
         */
        anchor?: TextAnchor;
        coord: [number, number];
        text: string;
        font?: string;
        size?: number;
        color?: string;
        width?: number;
        fill?: string;
    }

    type TextAnchor =
        | 'start'
        | 'middle'
        | 'end';
}

export = StaticMaps;
