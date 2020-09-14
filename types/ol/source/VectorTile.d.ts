import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { FeatureLike } from '../Feature';
import FeatureFormat from '../format/Feature';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import { LoadFunction, UrlFunction } from '../Tile';
import TileGrid from '../tilegrid/TileGrid';
import VectorRenderTile from '../VectorRenderTile';
import VectorTile_1 from '../VectorTile';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import UrlTile from './UrlTile';

export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    extent?: Extent;
    format?: FeatureFormat;
    overlaps?: boolean;
    projection?: ProjectionLike;
    state?: State;
    tileClass?: VectorTile_1;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
    maxResolution?: number;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tileUrlFunction?: UrlFunction;
    url?: string;
    transition?: number;
    urls?: string[];
    wrapX?: boolean;
    zDirection?: number;
}
export default class VectorTile extends UrlTile {
    constructor(options: Options);
    protected tileClass: VectorTile_1;
    clear(): void;
    expireCache(projection: Projection, usedTiles: { [key: string]: boolean }): void;
    getFeaturesInExtent(extent: Extent): FeatureLike[];
    getOverlaps(): boolean;
    getSourceTiles(pixelRatio: number, projection: Projection, tile: VectorRenderTile): VectorTile_1[];
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): VectorRenderTile;
    getTileGridForProjection(projection: Projection): TileGrid;
    getTilePixelRatio(pixelRatio: number): number;
    getTilePixelSize(z: number, pixelRatio: number, projection: Projection): Size;
    updateCacheSize(tileCount: number, projection: Projection): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
export function defaultLoadFunction(tile: VectorTile_1, url: string): void;
