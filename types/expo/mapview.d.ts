// Based on https://github.com/react-community/react-native-maps/blob/master/index.d.ts.

import * as React from 'react';
import {
    Animated,
    ImageRequireSource,
    ImageURISource,
    NativeSyntheticEvent,
    ViewProperties
} from 'react-native';

export interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

export interface LatLng {
    latitude: number;
    longitude: number;
}

export interface Point {
    x: number;
    y: number;
}

// helper interface
export interface MapEvent<T = {}> extends NativeSyntheticEvent<T & {
    coordinate: LatLng;
    position: Point;
}> { }

export type LineCapType = 'butt' | 'round' | 'square';
export type LineJoinType = 'miter' | 'round' | 'bevel';

// =======================================================================
//  AnimatedRegion
// =======================================================================

export interface AnimatedRegionTimingConfig extends Animated.AnimationConfig, Partial<Region> {
    easing?: (value: number) => number;
    duration?: number;
    delay?: number;
}

export interface AnimatedRegionSpringConfig extends Animated.AnimationConfig, Partial<Region> {
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?: number | Point;
    bounciness?: number;
    speed?: number;
    tension?: number;
    friction?: number;
    stiffness?: number;
    mass?: number;
    damping?: number;
}

export class AnimatedRegion extends Animated.AnimatedWithChildren {
    latitude: Animated.Value;
    longitude: Animated.Value;
    latitudeDelta: Animated.Value;
    longitudeDelta: Animated.Value;

    constructor(region?: Region);

    setValue(value: Region): void;
    setOffset(offset: Region): void;
    flattenOffset(): void;
    stopAnimation(callback?: (region: Region) => void): void;
    addListener(callback: (region: Region) => void): string;
    removeListener(id: string): void;
    spring(config: AnimatedRegionSpringConfig): Animated.CompositeAnimation;
    timing(config: AnimatedRegionTimingConfig): Animated.CompositeAnimation;
}

// =======================================================================
//  MapView (default export)
// =======================================================================

/**
 * takeSnapshot options
 */
export interface SnapshotOptions {
    /** optional, when omitted the view-width is used */
    width?: number;
    /** optional, when omitted the view-height is used */
    height?: number;
    /** __iOS only__, optional region to render */
    region?: Region;
    /** image formats, defaults to 'png' */
    format?: 'png' | 'jpg';
    /** image quality: 0..1 (only relevant for jpg, default: 1) */
    quality?: number;
    /** result types, defaults to 'file' */
    result?: 'file' | 'base64';
}

/**
 * onUserLocationChange parameters
 */
export interface EventUserLocation extends NativeSyntheticEvent<{}> {
    nativeEvent: {
        coordinate: {
            latitude: number,
            longitude: number,
            altitude: number,
            timestamp: number,
            accuracy: number,
            speed: number,
            isFromMockProvider: boolean,
        },
    };
}

/**
 * Map style elements.
 * @see https://developers.google.com/maps/documentation/ios-sdk/styling#use_a_string_resource
 * @see https://developers.google.com/maps/documentation/android-api/styling
 */
export interface MapStyleElement {
    featureType?: string;
    elementType?: string;
    stylers: object[];
}

export interface EdgePadding {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface EdgeInsets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface KmlMarker {
    id: string;
    title: string;
    description: string;
    coordinate: LatLng;
    position: Point;
}

/**
 * onKmlReady parameter
 */
export interface KmlMapEvent extends NativeSyntheticEvent<{ markers: KmlMarker[] }> {
}

export type MapTypes = 'standard' | 'satellite' | 'hybrid' | 'terrain' | 'none' | 'mutedStandard';

export interface MapViewProps extends ViewProperties {
    provider?: 'google' | null;
    customMapStyle?: MapStyleElement[];
    customMapStyleString?: string;
    showsUserLocation?: boolean;
    userLocationAnnotationTitle?: string;
    showsMyLocationButton?: boolean;
    followsUserLocation?: boolean;
    showsPointsOfInterest?: boolean;
    showsCompass?: boolean;
    zoomEnabled?: boolean;
    zoomControlEnabled?: boolean;
    rotateEnabled?: boolean;
    cacheEnabled?: boolean;
    loadingEnabled?: boolean;
    loadingBackgroundColor?: string;
    loadingIndicatorColor?: string;
    scrollEnabled?: boolean;
    pitchEnabled?: boolean;
    toolbarEnabled?: boolean;
    moveOnMarkerPress?: boolean;
    showsScale?: boolean;
    showsBuildings?: boolean;
    showsTraffic?: boolean;
    showsIndoors?: boolean;
    showsIndoorLevelPicker?: boolean;
    mapType?: MapTypes;
    region?: Region;
    initialRegion?: Region;
    liteMode?: boolean;
    mapPadding?: EdgePadding;
    maxDelta?: number;
    minDelta?: number;
    legalLabelInsets?: EdgeInsets;

    onMapReady?: () => void;
    onKmlReady?: (values: KmlMapEvent) => void;
    onRegionChange?: (region: Region) => void;
    onRegionChangeComplete?: (region: Region) => void;
    onPress?: (event: MapEvent) => void;
    onLongPress?: (event: MapEvent) => void;
    onUserLocationChange?: (event: EventUserLocation) => void;
    onPanDrag?: (event: MapEvent) => void;
    onPoiClick?: (event: MapEvent<{ placeId: string, name: string }>) => void;
    onMarkerPress?: (event: MapEvent<{ action: 'marker-press', id: string }>) => void;
    onMarkerSelect?: (event: MapEvent<{ action: 'marker-select', id: string }>) => void;
    onMarkerDeselect?: (event: MapEvent<{ action: 'marker-deselect', id: string }>) => void;
    onCalloutPress?: (event: MapEvent<{ action: 'callout-press' }>) => void;
    onMarkerDragStart?: (event: MapEvent) => void;
    onMarkerDrag?: (event: MapEvent) => void;
    onMarkerDragEnd?: (event: MapEvent) => void;

    minZoomLevel?: number;
    maxZoomLevel?: number;
    kmlSrc?: string;
}

export class MapView extends React.Component<MapViewProps, any> {
    animateToNavigation(location: LatLng, bearing: number, angle: number, duration?: number): void;
    animateToRegion(region: Region, duration?: number): void;
    animateToCoordinate(latLng: LatLng, duration?: number): void;
    animateToBearing(bearing: number, duration?: number): void;
    animateToViewingAngle(angle: number, duration?: number): void;
    fitToElements(animated: boolean): void;
    fitToSuppliedMarkers(markers: string[], options?: { edgePadding?: EdgePadding, animated?: boolean }): void;
    fitToCoordinates(coordinates?: LatLng[], options?: { edgePadding?: EdgePadding, animated?: boolean }): void;
    setMapBoundaries(northEast: LatLng, southWest: LatLng): void;
    takeSnapshot(options?: SnapshotOptions): Promise<string>;
}

export class MapViewAnimated extends MapView {
}

// =======================================================================
//  Marker
// =======================================================================

export interface MarkerProps extends ViewProperties {
    identifier?: string;
    reuseIdentifier?: string;
    title?: string;
    description?: string;
    image?: ImageURISource | ImageRequireSource;
    opacity?: number;
    pinColor?: string;
    coordinate: LatLng | AnimatedRegion;
    centerOffset?: Point;
    calloutOffset?: Point;
    anchor?: Point;
    calloutAnchor?: Point;
    flat?: boolean;
    draggable?: boolean;
    tracksViewChanges?: boolean;
    tracksInfoWindowChanges?: boolean;
    stopPropagation?: boolean;
    onPress?: (event: MapEvent<{ action: 'marker-press', id: string }>) => void;
    onSelect?: (event: MapEvent<{ action: 'marker-select', id: string }>) => void;
    onDeselect?: (event: MapEvent<{ action: 'marker-deselect', id: string }>) => void;
    onCalloutPress?: (event: MapEvent<{ action: 'callout-press' }>) => void;
    onDragStart?: (event: MapEvent) => void;
    onDrag?: (event: MapEvent) => void;
    onDragEnd?: (event: MapEvent) => void;

    rotation?: number;
    zIndex?: number;
}

export class Marker extends React.Component<MarkerProps, any> {
    /**
     * Shows the callout for this marker
     */
    showCallout(): void;
    /**
     * Hides the callout for this marker
     */
    hideCallout(): void;
    /**
     * Animates marker movement.
     * __Android only__
     */
    animateMarkerToCoordinate(coordinate: LatLng, duration?: number): void;
}

export class MarkerAnimated extends Marker {
}

// =======================================================================
//  Callout
// =======================================================================

export interface MapCalloutProps extends ViewProperties {
    tooltip?: boolean;
    onPress?: (event: MapEvent<{ action: 'callout-press' }>) => void;
}

export class Callout extends React.Component<MapCalloutProps, any> {
}

// =======================================================================
//  Polyline
// =======================================================================

export interface MapPolylineProps extends ViewProperties {
    coordinates: LatLng[];
    onPress?: (event: MapEvent) => void;
    tappable?: boolean;
    fillColor?: string;
    strokeWidth?: number;
    strokeColor?: string;
    strokeColors?: string[];
    zIndex?: number;
    lineCap?: LineCapType;
    lineJoin?: LineJoinType;
    miterLimit?: number;
    geodesic?: boolean;
    lineDashPhase?: number;
    lineDashPattern?: number[];
}

export class Polyline extends React.Component<MapPolylineProps, any> {
}

// =======================================================================
//  Polygon
// =======================================================================

export interface MapPolygonProps extends ViewProperties {
    coordinates: LatLng[];
    holes?: LatLng[][];
    onPress?: (event: MapEvent) => void;
    tappable?: boolean;
    strokeWidth?: number;
    strokeColor?: string;
    fillColor?: string;
    zIndex?: number;
    lineCap?: LineCapType;
    lineJoin?: LineJoinType;
    miterLimit?: number;
    geodesic?: boolean;
    lineDashPhase?: number;
    lineDashPattern?: number[];
}

export class Polygon extends React.Component<MapPolygonProps, any> {
}

// =======================================================================
//  Circle
// =======================================================================

export interface MapCircleProps extends ViewProperties {
    center: LatLng;
    radius: number;
    onPress?: (event: MapEvent) => void;
    strokeWidth?: number;
    strokeColor?: string;
    fillColor?: string;
    zIndex?: number;
    lineCap?: LineCapType;
    lineJoin?: LineJoinType;
    miterLimit?: number;
    lineDashPhase?: number;
    lineDashPattern?: number[];
}

export class Circle extends React.Component<MapCircleProps, any> {
}

// =======================================================================
//  UrlTile & LocalTile
// =======================================================================

export interface MapUrlTileProps extends ViewProperties {
    urlTemplate: string;
    maximumZ?: number;
    zIndex?: number;
}

export class UrlTile extends React.Component<MapUrlTileProps, any> {
}

export interface MapLocalTileProps extends ViewProperties {
    pathTemplate: string;
    tileSize?: number;
    zIndex?: number;
}

export class LocalTile extends React.Component<MapLocalTileProps, any> {
}

// =======================================================================
//  Overlay
// =======================================================================

export type Coordinate = [number, number];

export interface MapOverlayProps extends ViewProperties {
    image?: ImageURISource | ImageRequireSource;
    bounds: [Coordinate, Coordinate];
}

export class Overlay extends React.Component<MapOverlayProps, any> {
}

export class OverlayAnimated extends Overlay {
}

// =======================================================================
//  Constants
// =======================================================================

export const MAP_TYPES: {
    STANDARD: MapTypes,
    SATELLITE: MapTypes,
    HYBRID: MapTypes,
    TERRAIN: MapTypes,
    NONE: MapTypes,
    MUTEDSTANDARD: MapTypes,
};

export const PROVIDER_DEFAULT: null;
export const PROVIDER_GOOGLE: 'google';
