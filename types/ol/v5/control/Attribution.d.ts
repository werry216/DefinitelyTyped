import { EventsKey } from '../events';
import Event from '../events/Event';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    className?: string | undefined;
    target?: HTMLElement | string | undefined;
    collapsible?: boolean | undefined;
    collapsed?: boolean | undefined;
    tipLabel?: string | undefined;
    label?: string | HTMLElement | undefined;
    collapseLabel?: string | HTMLElement | undefined;
    render?: ((p0: MapEvent) => void) | undefined;
}
export default class Attribution extends Control {
    constructor(opt_options?: Options);
    getCollapsed(): boolean;
    getCollapsible(): boolean;
    setCollapsed(collapsed: boolean): void;
    setCollapsible(collapsible: boolean): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function render(mapEvent: MapEvent): void;
