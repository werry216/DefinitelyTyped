// Type definitions for React 0.11.2
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "react" {
    export function createClass<P, S>(specification: Specification<P, S>): Factory<P>;
    export function renderComponent(component: Descriptor<any>, container: Element, callback?: () => void): void;
    export function unmountComponentAtNode(container: Element): boolean;
    export function renderComponentToString(component: Descriptor<any>): string;
    export function renderComponentToStaticMarkup(component: Descriptor<any>): string;
    export function isValidClass(factory: Factory<any>): boolean;
    export function isValidComponent(component: Descriptor<any>): boolean;
    
    export interface Descriptor<P> {
        props: P;
    }

    export interface Factory<P> {
        (properties?: P, ...children: any[]): Descriptor<P>;
    }

    export interface Mixin<P, S> {
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: P): void;
        shouldComponentUpdate?(nextProps: P, nextState: S): boolean;
        componentWillUpdate?(nextProps: P, nextState: S): void;
        componentDidUpdate?(prevProps: P, prevState: S): void;
        componentWillUnmount?(): void;
    }

    export interface Specification<P, S> extends Mixin<P, S> {
        displayName?: string;
        mixins?: Mixin<P, S>[];
        statics?: {
            [key: string]: Function
        };
        // TODO: Do the correct type definition
        propTypes?: Object;
        getDefaultProps?(): P;
        getInitialState?(): S;
        render(): Descriptor<any>;
    }

    export interface Component<P, S> {
        setState(nextState: S, callback?: () => void): void;
        replaceState(nextState: S, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        getDomNode(): Element;
        isMounted(): boolean;
        transferPropsTo(target: Factory<P>): Descriptor<P>;
        setProps(nextProps: P, callback?: () => void): void;
        replaceProps(nextProps: P, callback?: () => void): void;
    }

    // Browser Interfaces
    // Taken from https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    // Events
    export interface SyntheticEvent  {
        bubbles: boolean;
        cancelable: boolean;
        currentTarget: EventTarget;
        defaultPrevented: boolean;
        eventPhase: number;
        nativeEvent: Event;
        preventDefault(): void;
        stopPropagation(): void;
        target: EventTarget;
        timeStamp: Date;
        type: string;
    }

    export interface ClipboardEvent extends SyntheticEvent {
        clipboardData: DataTransfer;
    }

    export interface KeyboardEvent extends SyntheticEvent {
        altKey: boolean;
        charCode: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        key: string;
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        which: number;
    }

    export interface FocusEvent extends SyntheticEvent {
        relatedTarget: EventTarget;
    }

    export interface MouseEvent extends SyntheticEvent {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    export interface TouchEvent extends SyntheticEvent {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    export interface UiEvent extends SyntheticEvent {
        detail: number;
        view: AbstractView;
    }

    export interface WheelEvent extends SyntheticEvent {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    // Attributes
    interface EventAttributes {
        onCopy?: (event: ClipboardEvent) => void;
        onCut?: (event: ClipboardEvent) => void;
        onPaste?: (event: ClipboardEvent) => void;
        onKeyDown?: (event: KeyboardEvent) => void;
        onKeyPress?: (event: KeyboardEvent) => void;
        onKeyUp?: (event: KeyboardEvent) => void;
        onFocus?: (event: FocusEvent) => void;
        onBlur?: (event: FocusEvent) => void;
        onChange?: (event: SyntheticEvent) => void;
        onInput?: (event: SyntheticEvent) => void;
        onSubmit?: (event: SyntheticEvent) => void;
        onClick?: (event: MouseEvent) => void;
        onDoubleClick?: (event: MouseEvent) => void;
        onDrag?: (event: MouseEvent) => void;
        onDragEnd?: (event: MouseEvent) => void;
        onDragEnter?: (event: MouseEvent) => void;
        onDragExit?: (event: MouseEvent) => void;
        onDragLeave?: (event: MouseEvent) => void;
        onDragOver?: (event: MouseEvent) => void;
        onDragStart?: (event: MouseEvent) => void;
        onDrop?: (event: MouseEvent) => void;
        onMouseDown?: (event: MouseEvent) => void;
        onMouseEnter?: (event: MouseEvent) => void;
        onMouseLeave?: (event: MouseEvent) => void;
        onMouseMove?: (event: MouseEvent) => void;
        onMouseOut?: (event: MouseEvent) => void;
        onMouseOver?: (event: MouseEvent) => void;
        onMouseUp?: (event: MouseEvent) => void;
        onTouchCancel?: (event: TouchEvent) => void;
        onTouchEnd?: (event: TouchEvent) => void;
        onTouchMove?: (event: TouchEvent) => void;
        onTouchStart?: (event: TouchEvent) => void;
        onScroll?: (event: UiEvent) => void;
        onWheel?: (event: WheelEvent) => void;
    }
}