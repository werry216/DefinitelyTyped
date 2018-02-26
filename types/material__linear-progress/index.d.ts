// Type definitions for Material Components Web 0.26
// Project: https://material.io/components/
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MDCComponent } from 'material__base';
import { MDCLinearProgressAdapter } from './adapter';
import { MDCLinearProgressFoundation } from './foundation';

export {MDCLinearProgressAdapter, MDCLinearProgressFoundation};

export class MDCLinearProgress extends MDCComponent<MDCLinearProgressAdapter, MDCLinearProgressFoundation> {
    static attachTo(root: Element): MDCLinearProgress;

    determinate: boolean;

    progress: number;

    buffer: number;

    reverse: boolean;

    open(): void;

    close(): void;

    getDefaultFoundation(): MDCLinearProgressFoundation;
}
