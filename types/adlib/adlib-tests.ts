/*
 | Copyright 2018 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */

import * as adlib from "adlib";

const transform1: adlib.TransformFunction =
    (key: string, value: any, settings: any, param?: any): any => {
        return null;
    };

const transformsList: adlib.TransformsList = {
    firstXform: transform1
};

const template: any = {
    value: '{{ instance.color }}'
};

const settings: any = {
    instance: {
        color: 'red'
    }
};

const interpolated: any = adlib.adlib(template, settings, transformsList);

const list: string[] = adlib.listDependencies(template);
