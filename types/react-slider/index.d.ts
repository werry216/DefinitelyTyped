// Type definitions for react-slider 1.1
// Project: https://github.com/zillow/react-slider
// Definitions by: Jason Unger <https://github.com/jsonunger>
//                 Björgvin Bæhrenz Þórðarson <https://github.com/bjorgvin>
//                 Loïc Huder <https://github.com/loichuder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare namespace ReactSlider {
    interface ReactSliderProps {
        /**
         * aria-label for screen-readers to apply to the thumbs.
         * Use an array for more than one thumb.
         * The length of the array must match the number of thumbs in the value array.
         */
        ariaLabel?: string | string[];

        /**
         * aria-valuetext for screen-readers.
         * Can be a static string, or a function that returns a string.
         */
        ariaValuetext?: string | ((value: { index: number; value: number | number[]; valueNow: number }) => string);

        /**
         * The css class set on the slider node.
         */
        className?: string;

        /**
         * Determines the initial positions of the thumbs and the number of thumbs.
         *
         * If a number is passed a slider with one thumb will be rendered.
         * If an array is passed each value will determine the position of one thumb.
         * The values in the array must be sorted.
         */
        defaultValue?: number | number[];

        /**
         * If `true` the thumbs can't be moved.
         */
        disabled?: boolean;

        /**
         * Inverts the slider.
         */
        invert?: boolean;

        /**
         * The CSS class set on the marks.
         */
        markClassName?: string;

        /**
         * Shows passed marks on the track, if true it shows all the marks,
         * if an array of numbers it shows just the passed marks, if a number
         * is passed it shows just the marks in that steps: like passing 3
         * shows the marks 3, 6, 9.
         */
        marks?: boolean | number | number[];

        /**
         * The maximum value of the slider.
         */
        max?: number;

        /**
         * The minimum value of the slider.
         */
        min?: number;

        /**
         * The minimal distance between any pair of thumbs.
         * Must be positive, but zero means they can sit on top of each other.
         */
        minDistance?: number;

        /**
         * Callback called only after moving a thumb has ended. The callback
         * will only be called if the action resulted in a change. The
         * function will be called with one argument,  the result value(s).
         */
        onAfterChange?: (value: number | number[] | undefined | null) => void;

        /**
         * Callback called before starting to move a thumb. The callback will
         * only be called if the action will result in a change. The function
         * will be called with one argument, the initial value(s).
         */
        onBeforeChange?: (value: number | number[] | undefined | null) => void;

        /**
         * Callback called on every value change. The function will be called
         * with one argument, the new value(s).
         */
        onChange?: (value: number | number[] | undefined | null) => void;

        /**
         * Callback called when the the slider is clicked (thumb or tracks).
         * Receives the value at the clicked position as argument.
         */
        onSliderClick?: (value: number) => void;

        /**
         * Determines whether the slider moves horizontally (from left to right)
         * or vertically (from top to bottom).
         */
        orientation?: 'horizontal' | 'vertical';

        /**
         * The result of the function is the value to be added or subtracted
         * when the `Page Up` or `Page Down` keys are pressed.
         *
         * The current `step` value will be passed as the only argument.
         * By default, paging will modify `step` by a factor of 10.
         */
        pageFn?: (step: number) => number;

        /**
         * If `true` the active thumb will push other thumbs
         * within the constraints of `min`, `max`, `step` and `minDistance`.
         */
        pearling?: boolean;

        /**
         * Provide a custom render function for the mark node.
         * The render function will be passed one argument,
         * an object with props that should be added to your handle node.
         */
        renderMark?: (props: React.HTMLProps<HTMLSpanElement>) => JSX.Element;

        /**
         * Provide a custom render function for dynamic thumb content.
         * The render function will be passed two arguments. The first is
         * an object that should be added to your thumb node.
         */
        renderThumb?: (
            props: React.HTMLProps<HTMLDivElement>,
            state: { index: number; value: number | number[]; valueNow: number },
        ) => JSX.Element;

        /**
         * Provide a custom render function for the track node.
         * The render function will be passed two arguments. The first is
         * an object that should be added to your handle node.
         */
        renderTrack?: (
            props: React.HTMLProps<HTMLDivElement>,
            state: { index: number; value: number | number[] },
        ) => JSX.Element;

        /**
         * Disables thumb move when clicking the slider track
         */
        snapDragDisabled?: boolean;

        /**
         * Value to be added or subtracted on each step the slider makes.
         * Must be greater than zero.
         * `max - min` should be evenly divisible by the step value.
         */
        step?: number;

        /**
         * The css class set on the thumb that is currently being moved.
         */
        thumbActiveClassName?: string;

        /**
         * The css class set on each thumb node.
         *
         * In addition each thumb will receive a numbered css class of the form
         * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
         */
        thumbClassName?: string;

        /**
         * The css class set on the tracks between the thumbs.
         * In addition track fragment will receive a numbered css class of the form
         * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
         */
        trackClassName?: string;

        /**
         * Like `defaultValue` but for
         * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
         */
        value?: number | number[];

        /**
         * If `true` tracks between the thumbs will be rendered.
         */
        withTracks?: boolean;
    }
}

declare const ReactSlider: React.ComponentClass<ReactSlider.ReactSliderProps>;
export = ReactSlider;
