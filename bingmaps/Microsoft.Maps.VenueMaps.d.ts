﻿// Type definitions for Microsoft.Maps.VenueMaps 7.0
// Project: http://msdn.microsoft.com/en-us/library/hh312797.aspx
// Definitions by: [AUTHOR NAME] <[AUTHOR URL]>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="Microsoft.Maps.d.ts"/>

declare module Microsoft.Maps.VenueMaps {

    export interface MouseResponse {
        eventArgs: MouseEventArgs;
    }

    export interface Directory {

        addToDOM(div: HTMLElement, sortOrder: DirectorySortOrder, to_group_or_not: DirectoryGrouping): void;
        createUIElements(): void;
        handleMouseClick(response: MouseResponse): void;
        handleMouseOut(response: MouseResponse): void;
        handleMouseOver(response: MouseResponse): void;
        isInDOM(): boolean;
        removeFromDOM(): void;
        setHeight(height: number): void;

        click: (eventArgs: MouseEventArgs) => any;
        mouseOut: (eventArgs: MouseEventArgs) => any;
        mouseOver: (eventArgs: MouseEventArgs) => any;
    }

    export enum DirectoryGrouping {
        byCategory,
        none,
    }

    export enum DirectorySortOrder {
        alphabetical,
        byFloor,
    }

    export interface Floor {
        name: string;
        primitives: Array<Primitive>;
        zoomRange: Array<number>;
    }

    export interface Footprint {
        polygons: Array<Polygon>;
        zoomRange: Array<number>;
    }

    export interface Metadata {
        CenterLatitude: number;
        CenterLongitude: number;
        DefaultFloor: string;
        FloorHeader: string;
        Floors: Array<Floor>;
        Footprint: Footprint;
        MapId: string;
        MapType: string;
        Name: string;
        YpId: string;
    }

    export interface NearbyVenue {
        distance: number;
        metadata: Metadata;
    }

    export interface NearbyVenueOptions {
        callback: (maps: Array<VenueMap>) => any;
        location: Location;
        map: Map;
        radius: number;
    }

    export interface Polygon {
        bounds: LocationRect;
        center: Location;
        locations: Array<Location>;
    }

    export interface Primitive {

        bounds: LocationRect;
        businessId: string;
        categoryId: string;
        categoryName: string;
        center: Location;
        floor: Floor;
        id: string;
        locations: Array<Location>;
        name: string;

        highlight(): void;
        unhighlight(): void;
    }

    export interface VenueMap {

        address: string;
        bestMapView: ViewOptions;
        businessId: string;
        center: Location;
        defaultFloor: string;
        directory: Directory;
        floorHeader: string;
        floors: Array<Floor>;
        footprint: Footprint;
        id: string;
        name: string;
        phoneNumber: string;
        type: string;

        dispose(): void;
        getActiveFloor(): string;
        hide(): void;
        setActiveFloor(floor: string): void;
        show(): void;

        click: (eventArgs: Primitive) => any;
        close: () => any;
        footprintclick: (eventArgs: Primitive) => any;
        mouseout: (eventArgs: Primitive) => any;
        mouseover: (eventArgs: Primitive) => any;
    }

    export interface VenueMapCreationOptions {
        error: (errorCode: number, args: any) => any;
        success: (venueMap: VenueMap, args: any) => any;
        venueMapId: string;
    }

    export class VenueMapFactory {

        constructor(map: Map);

        create(options: VenueMapCreationOptions): void;
        getNearbyVenues(options: NearbyVenueOptions): void;
    }

} 