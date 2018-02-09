/**
 * @license
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

import MDCFoundation from 'material__base/foundation';
import MDCTextFieldBottomLineAdapter from './adapter';
import { cssClasses, strings } from './constants';

export default class MDCTextFieldBottomLineFoundation extends MDCFoundation<MDCTextFieldBottomLineAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly defaultAdapter: MDCTextFieldBottomLineAdapter;

    /**
     * Activates the bottom line
     */
    activate(): void;

    /**
     * Sets the transform origin given a user's click location.
     */
    setTransformOrigin(evt: Event): void;

    /**
     * Deactivates the bottom line
     */
    deactivate(): void;

    /**
     * Handles a transition end event
     */
    handleTransitionEnd(evt: Event): void;
}
