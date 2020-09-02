// Type definitions for react-native-wheel-pick 1.1
// Project: https://github.com/TronNatthakorn/react-native-wheel-pick#readme
// Definitions by: seongjoojin <https://github.com/seongjoojin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';

export interface DatePickerIOSProps extends ViewProps {
    date?: Date;
    maximumDate?: Date;
    minimumDate?: Date;
    mode?: 'date' | 'time' | 'datetime';
    onDateChange: (newDate: Date) => void;
}

export interface DatePickerAndroidProps extends ViewProps {
    labelUnit?: {
        year?: string;
        month?: string[];
        date?: string;
    };
    order?: string;
    date?: Date;
    maximumDate?: Date;
    minimumDate?: Date;
    mode?: 'date' | 'time' | 'datetime';
    onDateChange: (newDate: Date) => void;
    style?: StyleProp<ViewStyle>;
    textColor?: string;
    textSize?: number;
    itemSpace?: number;
}

export interface DatePickerProps extends DatePickerAndroidProps, DatePickerIOSProps {
    date?: Date;
    maximumDate?: Date;
    minimumDate?: Date;
    mode?: 'date' | 'time' | 'datetime';
    onDateChange: (newDate: Date) => void;
    style?: StyleProp<ViewStyle>;
}

export interface PickerProps extends ViewProps {
    textColor?: string;
    textSize?: number;
    itemSpace?: number;
    itemStyle?: StyleProp<ViewStyle>;
    onValueChange: (value: string) => void;
    pickerData: string[];
    style?: StyleProp<ViewStyle>;
    selectedValue?: any;
}

export class Picker extends React.Component<PickerProps> {}
export class DatePicker extends React.PureComponent<DatePickerProps> {}
