// Type definitions for react-hyperscript 3.0
// Project: https://github.com/mlmorg/react-hyperscript
// Definitions by: tock203 <https://github.com/tock203>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentClass, StatelessComponent, ReactElement } from 'react';

declare namespace h {}

type Element = ReactElement<any> | string | null;

declare function h(
    componentOrTag: ComponentClass | StatelessComponent | string,
    children?: ReadonlyArray<Element> | Element
): ReactElement<any>;

declare function h<P extends {[attr: string]: any}>(
    componentOrTag: ComponentClass<P> | StatelessComponent<P> | string,
    properties: P,
    children?: ReadonlyArray<Element> | Element
): ReactElement<P>;

export = h;
