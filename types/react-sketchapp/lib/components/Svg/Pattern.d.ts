import React from 'react';

import { NumberProp } from './props';

export interface PatternProps {
    x1?: NumberProp;
    x2?: NumberProp;
    y1?: NumberProp;
    y2?: NumberProp;
    patternTransform?: string;
    patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    children?: React.ReactChild[] | React.ReactChild;
}

export default class Pattern extends React.Component<PatternProps> {}
