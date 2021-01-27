import { ComponentType, ReactNode, Ref as ElementRef } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps, GroupTypeBase, OptionTypeBase, PropsWithStyles } from '../types';

interface State {
    /** Whether the select is disabled. */
    isDisabled: boolean;
    /** Whether the select is focused. */
    isFocused: boolean;
    /** Whether the select is expanded. */
    menuIsOpen: boolean;
}

export type ControlProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> &
    PropsWithStyles &
    State & {
        /** Children to render. */
        children: ReactNode;
        innerRef: ElementRef<any>;
        /** The mouse down event and the innerRef to pass down to the controller element. */
        innerProps: {
            onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
        };
    };

export function css(state: State): React.CSSProperties;

declare const Control: ComponentType<ControlProps<any, boolean>>;

export default Control;
