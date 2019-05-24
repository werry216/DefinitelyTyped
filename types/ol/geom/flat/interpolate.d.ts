import { Coordinate } from 'ol/coordinate';
export function interpolatePoint(flatCoordinates: number[], offset: number, end: number, stride: number, fraction: number, opt_dest?: number[]): number[];
export function lineStringCoordinateAtM(flatCoordinates: number[], offset: number, end: number, stride: number, m: number, extrapolate: boolean): Coordinate;
export function lineStringsCoordinateAtM(flatCoordinates: number[], offset: number, ends: number[], stride: number, m: number, extrapolate: boolean, interpolate: boolean): Coordinate;
