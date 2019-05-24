import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import ImageWrapper from 'ol/Image';
import ImageBase from 'ol/ImageBase';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import Source, { AttributionLike } from 'ol/source/Source';
import State from 'ol/source/State';
export function defaultImageLoadFunction(image: ImageWrapper, src: string): void;
export default class ImageSource extends Source {
    constructor(options: Options);
    protected findNearestResolution(resolution: number): number;
    protected getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageBase;
    protected handleImageChange(event: Event): void;
    getImage(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageBase;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class ImageSourceEvent extends Event {
    constructor(type: string, image: ImageWrapper);
    image: ImageWrapper;
}
export enum ImageSourceEventType {
    IMAGELOADSTART = 'imageloadstart',
    IMAGELOADEND = 'imageloadend',
    IMAGELOADERROR = 'imageloaderror',
}
export interface Options {
    attributions?: AttributionLike;
    projection?: ProjectionLike;
    resolutions?: number[];
    state?: State;
}
