import Collection from '../Collection';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import Source from '../source/Source';
import State_1 from '../source/State';
import BaseLayer from './Base';
import Layer, { State } from './Layer';

export interface Options {
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    minZoom?: number;
    maxZoom?: number;
    layers?: BaseLayer[] | Collection<BaseLayer>;
}
export default class LayerGroup extends BaseLayer {
    constructor(opt_options?: Options);
    /**
     * Returns the {@link module:ol/Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     */
    getLayers(): Collection<BaseLayer>;
    getLayersArray(opt_array?: Layer<Source>[]): Layer<Source>[];
    getLayerStatesArray(opt_states?: State[]): State[];
    getSourceState(): State_1;
    /**
     * Set the {@link module:ol/Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     */
    setLayers(layers: Collection<BaseLayer>): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:extent', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:extent', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:layers', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:layers', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:layers', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxResolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:maxZoom', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minResolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:minZoom', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:opacity', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:opacity', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:visible', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:visible', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:zIndex', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
