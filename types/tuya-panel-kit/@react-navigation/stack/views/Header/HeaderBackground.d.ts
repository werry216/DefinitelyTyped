import * as React from 'react';
import { Animated, ViewProps, StyleProp, ViewStyle } from 'react-native';
// tslint:disable-next-line strict-export-declare-modifiers
declare type Props = ViewProps & {
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>> | undefined;
    children?: React.ReactNode | undefined;
};
export default function HeaderBackground({ style, ...rest }: Props): JSX.Element;
export {};
