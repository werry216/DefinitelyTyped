
/**
 * Typescript definition tests for d3/d3-selection-multi module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import { Selection, ArrayLike } from 'd3-selection';
import { Transition } from 'd3-transition';

import * as d3SelectionMulti from 'd3-selection-multi';

let selection: Selection<HTMLAnchorElement, string, null, undefined>;

// Selection.attrs

// Simple object
selection = selection.attrs({
    foo: 1,
    bar: '2',
    baz: true,
});

// Function values
selection = selection.attrs({
    foo: () => 1,
    bar: (d) => d,
    baz: (d, i) => i !== 0,
    bat: function () {
        return this.href;
    },
});

// Function that returns a map
selection = selection.attrs(function (d) {
    return this.id ? null : { id: d };
});

// Selection.styles
// Each test is repeated twice: once without the priority, and another time with

// Simple object
selection = selection.styles({
    top: 0,
    color: 'red',
});

selection = selection.styles({
    top: 0,
    color: 'red',
}, 'important');

// Function values
selection = selection.styles({
    top: (d, i) => i + 'px',
    color: d => d,
});

selection = selection.styles({
    top: (d, i) => i + 'px',
    color: d => d,
}, 'important');

// Functions that return a map
selection.styles(function (d) {
    return this.id ? { color: 'red' } : { color: d };
});

selection = selection.styles(function (d) {
    return this.id ? { color: 'red' } : { color: d };
}, 'important');

// Selection.properties
// Simple object
selection = selection.properties({
    foo: 1,
    bar: 'bar',
});

// Function values
selection = selection.properties({
    foo: (d, i) => i,
    bar: d => d,
});

// Function that returns an object
selection = selection.properties(function (d) {
    return this.href ? null : { href: d };
});

let transition: Transition<HTMLAnchorElement, string, null, undefined>;

// Transition.attrs

// Simple object
transition = transition.attrs({
    foo: 1,
    bar: '2',
    baz: true,
});

// Function values
transition = transition.attrs({
    foo: () => 1,
    bar: (d) => d,
    baz: (d, i) => i !== 0,
    bat: function () {
        return this.href;
    },
});

// Function that returns a map
transition = transition.attrs(function (d) {
    return this.id ? null : { id: d };
});

// Transition.styles
// As above, the tests are repeated with the priority 'important' passed in

// Simple object
transition = transition.styles({
    top: 0,
    color: 'red',
});

transition = transition.styles({
    top: 0,
    color: 'red',
}, 'important');

// Function values
transition = transition.styles({
    top: (d, i) => i + 'px',
    color: d => d,
});

transition = transition.styles({
    top: (d, i) => i + 'px',
    color: d => d,
}, 'important');

// Function that returns a map
transition = transition.styles(function (d) {
    return this.id ? { color: 'red' } : { color: d };
});

transition = transition.styles(function (d) {
    return this.id ? { color: 'red' } : { color: d };
}, 'important');

// Test ValueMap interface ----------------------------------------------

interface SampleDatum {
    name: string;
    r: number;
    filled: boolean;
}

let valueMap: d3SelectionMulti.ValueMap<SVGCircleElement, SampleDatum>;

valueMap = {
    foo1: 'test',
    foo2: 2,
    foo3: true,
    foo4: null,
    bar1: function (d) {
        let that: SVGCircleElement = this;
        let datum: SampleDatum = d;
        return d.name;
    },
    bar2: function (d, i) {
        let that: SVGCircleElement = this;
        let datum: SampleDatum = d;
        let index: number =  i;
        return d.r;
    },
    bar3: function (d, i, g) {
        let that: SVGCircleElement = this;
        let datum: SampleDatum = d;
        let index: number = i;
        let group: Array<SVGCircleElement> | ArrayLike<SVGCircleElement> = g;
        return d.filled;
    }
};

// valueMap = { // fails, as an array is not a permissible value type
//     foo1: [1, 2]
// };

// valueMap = { // fails, as a ValueFunction returning an array is not a permissible value type
//     foo1: function (d) {
//         let that: SVGCircleElement = this;
//         let datum: SampleDatum = d;
//         return [1, 2];
//     }
// };
