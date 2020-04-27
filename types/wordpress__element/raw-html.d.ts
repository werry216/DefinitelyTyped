/**
 * Component used as equivalent of Fragment with unescaped HTML, in cases where
 * it is desirable to render dangerous HTML without needing a wrapper element.
 * To preserve additional props, a `div` wrapper _will_ be created if any props
 * aside from `children` are passed.
 *
 * @param  props Children should be a string of HTML. Other props
 *                             will be passed through to div wrapper.
 *
 * @return  Dangerously-rendering component.
 */
export default function RawHTML({
    children,
    ...props
}: {
    children: string;
} & Pick<
    import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    | 'hidden'
    | 'color'
    | 'style'
    | 'title'
    | 'key'
    | 'children'
    | 'defaultChecked'
    | 'defaultValue'
    | 'suppressContentEditableWarning'
    | 'suppressHydrationWarning'
    | 'accessKey'
    | 'className'
    | 'contentEditable'
    | 'contextMenu'
    | 'dir'
    | 'draggable'
    | 'id'
    | 'lang'
    | 'placeholder'
    | 'slot'
    | 'spellCheck'
    | 'tabIndex'
    | 'translate'
    | 'radioGroup'
    | 'role'
    | 'about'
    | 'datatype'
    | 'inlist'
    | 'prefix'
    | 'property'
    | 'resource'
    | 'typeof'
    | 'vocab'
    | 'autoCapitalize'
    | 'autoCorrect'
    | 'autoSave'
    | 'itemProp'
    | 'itemScope'
    | 'itemType'
    | 'itemID'
    | 'itemRef'
    | 'results'
    | 'security'
    | 'unselectable'
    | 'inputMode'
    | 'is'
    | 'aria-activedescendant'
    | 'aria-atomic'
    | 'aria-autocomplete'
    | 'aria-busy'
    | 'aria-checked'
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colspan'
    | 'aria-controls'
    | 'aria-current'
    | 'aria-describedby'
    | 'aria-details'
    | 'aria-disabled'
    | 'aria-dropeffect'
    | 'aria-errormessage'
    | 'aria-expanded'
    | 'aria-flowto'
    | 'aria-grabbed'
    | 'aria-haspopup'
    | 'aria-hidden'
    | 'aria-invalid'
    | 'aria-keyshortcuts'
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-level'
    | 'aria-live'
    | 'aria-modal'
    | 'aria-multiline'
    | 'aria-multiselectable'
    | 'aria-orientation'
    | 'aria-owns'
    | 'aria-placeholder'
    | 'aria-posinset'
    | 'aria-pressed'
    | 'aria-readonly'
    | 'aria-relevant'
    | 'aria-required'
    | 'aria-roledescription'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowspan'
    | 'aria-selected'
    | 'aria-setsize'
    | 'aria-sort'
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | 'dangerouslySetInnerHTML'
    | 'onCopy'
    | 'onCopyCapture'
    | 'onCut'
    | 'onCutCapture'
    | 'onPaste'
    | 'onPasteCapture'
    | 'onCompositionEnd'
    | 'onCompositionEndCapture'
    | 'onCompositionStart'
    | 'onCompositionStartCapture'
    | 'onCompositionUpdate'
    | 'onCompositionUpdateCapture'
    | 'onFocus'
    | 'onFocusCapture'
    | 'onBlur'
    | 'onBlurCapture'
    | 'onChange'
    | 'onChangeCapture'
    | 'onBeforeInput'
    | 'onBeforeInputCapture'
    | 'onInput'
    | 'onInputCapture'
    | 'onReset'
    | 'onResetCapture'
    | 'onSubmit'
    | 'onSubmitCapture'
    | 'onInvalid'
    | 'onInvalidCapture'
    | 'onLoad'
    | 'onLoadCapture'
    | 'onError'
    | 'onErrorCapture'
    | 'onKeyDown'
    | 'onKeyDownCapture'
    | 'onKeyPress'
    | 'onKeyPressCapture'
    | 'onKeyUp'
    | 'onKeyUpCapture'
    | 'onAbort'
    | 'onAbortCapture'
    | 'onCanPlay'
    | 'onCanPlayCapture'
    | 'onCanPlayThrough'
    | 'onCanPlayThroughCapture'
    | 'onDurationChange'
    | 'onDurationChangeCapture'
    | 'onEmptied'
    | 'onEmptiedCapture'
    | 'onEncrypted'
    | 'onEncryptedCapture'
    | 'onEnded'
    | 'onEndedCapture'
    | 'onLoadedData'
    | 'onLoadedDataCapture'
    | 'onLoadedMetadata'
    | 'onLoadedMetadataCapture'
    | 'onLoadStart'
    | 'onLoadStartCapture'
    | 'onPause'
    | 'onPauseCapture'
    | 'onPlay'
    | 'onPlayCapture'
    | 'onPlaying'
    | 'onPlayingCapture'
    | 'onProgress'
    | 'onProgressCapture'
    | 'onRateChange'
    | 'onRateChangeCapture'
    | 'onSeeked'
    | 'onSeekedCapture'
    | 'onSeeking'
    | 'onSeekingCapture'
    | 'onStalled'
    | 'onStalledCapture'
    | 'onSuspend'
    | 'onSuspendCapture'
    | 'onTimeUpdate'
    | 'onTimeUpdateCapture'
    | 'onVolumeChange'
    | 'onVolumeChangeCapture'
    | 'onWaiting'
    | 'onWaitingCapture'
    | 'onAuxClick'
    | 'onAuxClickCapture'
    | 'onClick'
    | 'onClickCapture'
    | 'onContextMenu'
    | 'onContextMenuCapture'
    | 'onDoubleClick'
    | 'onDoubleClickCapture'
    | 'onDrag'
    | 'onDragCapture'
    | 'onDragEnd'
    | 'onDragEndCapture'
    | 'onDragEnter'
    | 'onDragEnterCapture'
    | 'onDragExit'
    | 'onDragExitCapture'
    | 'onDragLeave'
    | 'onDragLeaveCapture'
    | 'onDragOver'
    | 'onDragOverCapture'
    | 'onDragStart'
    | 'onDragStartCapture'
    | 'onDrop'
    | 'onDropCapture'
    | 'onMouseDown'
    | 'onMouseDownCapture'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseMoveCapture'
    | 'onMouseOut'
    | 'onMouseOutCapture'
    | 'onMouseOver'
    | 'onMouseOverCapture'
    | 'onMouseUp'
    | 'onMouseUpCapture'
    | 'onSelect'
    | 'onSelectCapture'
    | 'onTouchCancel'
    | 'onTouchCancelCapture'
    | 'onTouchEnd'
    | 'onTouchEndCapture'
    | 'onTouchMove'
    | 'onTouchMoveCapture'
    | 'onTouchStart'
    | 'onTouchStartCapture'
    | 'onPointerDown'
    | 'onPointerDownCapture'
    | 'onPointerMove'
    | 'onPointerMoveCapture'
    | 'onPointerUp'
    | 'onPointerUpCapture'
    | 'onPointerCancel'
    | 'onPointerCancelCapture'
    | 'onPointerEnter'
    | 'onPointerEnterCapture'
    | 'onPointerLeave'
    | 'onPointerLeaveCapture'
    | 'onPointerOver'
    | 'onPointerOverCapture'
    | 'onPointerOut'
    | 'onPointerOutCapture'
    | 'onGotPointerCapture'
    | 'onGotPointerCaptureCapture'
    | 'onLostPointerCapture'
    | 'onLostPointerCaptureCapture'
    | 'onScroll'
    | 'onScrollCapture'
    | 'onWheel'
    | 'onWheelCapture'
    | 'onAnimationStart'
    | 'onAnimationStartCapture'
    | 'onAnimationEnd'
    | 'onAnimationEndCapture'
    | 'onAnimationIteration'
    | 'onAnimationIterationCapture'
    | 'onTransitionEnd'
    | 'onTransitionEndCapture'
>): JSX.Element;
export type RawHTMLProps = {
    children: string;
} & Pick<
    import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    | 'hidden'
    | 'color'
    | 'style'
    | 'title'
    | 'key'
    | 'children'
    | 'defaultChecked'
    | 'defaultValue'
    | 'suppressContentEditableWarning'
    | 'suppressHydrationWarning'
    | 'accessKey'
    | 'className'
    | 'contentEditable'
    | 'contextMenu'
    | 'dir'
    | 'draggable'
    | 'id'
    | 'lang'
    | 'placeholder'
    | 'slot'
    | 'spellCheck'
    | 'tabIndex'
    | 'translate'
    | 'radioGroup'
    | 'role'
    | 'about'
    | 'datatype'
    | 'inlist'
    | 'prefix'
    | 'property'
    | 'resource'
    | 'typeof'
    | 'vocab'
    | 'autoCapitalize'
    | 'autoCorrect'
    | 'autoSave'
    | 'itemProp'
    | 'itemScope'
    | 'itemType'
    | 'itemID'
    | 'itemRef'
    | 'results'
    | 'security'
    | 'unselectable'
    | 'inputMode'
    | 'is'
    | 'aria-activedescendant'
    | 'aria-atomic'
    | 'aria-autocomplete'
    | 'aria-busy'
    | 'aria-checked'
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colspan'
    | 'aria-controls'
    | 'aria-current'
    | 'aria-describedby'
    | 'aria-details'
    | 'aria-disabled'
    | 'aria-dropeffect'
    | 'aria-errormessage'
    | 'aria-expanded'
    | 'aria-flowto'
    | 'aria-grabbed'
    | 'aria-haspopup'
    | 'aria-hidden'
    | 'aria-invalid'
    | 'aria-keyshortcuts'
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-level'
    | 'aria-live'
    | 'aria-modal'
    | 'aria-multiline'
    | 'aria-multiselectable'
    | 'aria-orientation'
    | 'aria-owns'
    | 'aria-placeholder'
    | 'aria-posinset'
    | 'aria-pressed'
    | 'aria-readonly'
    | 'aria-relevant'
    | 'aria-required'
    | 'aria-roledescription'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowspan'
    | 'aria-selected'
    | 'aria-setsize'
    | 'aria-sort'
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | 'dangerouslySetInnerHTML'
    | 'onCopy'
    | 'onCopyCapture'
    | 'onCut'
    | 'onCutCapture'
    | 'onPaste'
    | 'onPasteCapture'
    | 'onCompositionEnd'
    | 'onCompositionEndCapture'
    | 'onCompositionStart'
    | 'onCompositionStartCapture'
    | 'onCompositionUpdate'
    | 'onCompositionUpdateCapture'
    | 'onFocus'
    | 'onFocusCapture'
    | 'onBlur'
    | 'onBlurCapture'
    | 'onChange'
    | 'onChangeCapture'
    | 'onBeforeInput'
    | 'onBeforeInputCapture'
    | 'onInput'
    | 'onInputCapture'
    | 'onReset'
    | 'onResetCapture'
    | 'onSubmit'
    | 'onSubmitCapture'
    | 'onInvalid'
    | 'onInvalidCapture'
    | 'onLoad'
    | 'onLoadCapture'
    | 'onError'
    | 'onErrorCapture'
    | 'onKeyDown'
    | 'onKeyDownCapture'
    | 'onKeyPress'
    | 'onKeyPressCapture'
    | 'onKeyUp'
    | 'onKeyUpCapture'
    | 'onAbort'
    | 'onAbortCapture'
    | 'onCanPlay'
    | 'onCanPlayCapture'
    | 'onCanPlayThrough'
    | 'onCanPlayThroughCapture'
    | 'onDurationChange'
    | 'onDurationChangeCapture'
    | 'onEmptied'
    | 'onEmptiedCapture'
    | 'onEncrypted'
    | 'onEncryptedCapture'
    | 'onEnded'
    | 'onEndedCapture'
    | 'onLoadedData'
    | 'onLoadedDataCapture'
    | 'onLoadedMetadata'
    | 'onLoadedMetadataCapture'
    | 'onLoadStart'
    | 'onLoadStartCapture'
    | 'onPause'
    | 'onPauseCapture'
    | 'onPlay'
    | 'onPlayCapture'
    | 'onPlaying'
    | 'onPlayingCapture'
    | 'onProgress'
    | 'onProgressCapture'
    | 'onRateChange'
    | 'onRateChangeCapture'
    | 'onSeeked'
    | 'onSeekedCapture'
    | 'onSeeking'
    | 'onSeekingCapture'
    | 'onStalled'
    | 'onStalledCapture'
    | 'onSuspend'
    | 'onSuspendCapture'
    | 'onTimeUpdate'
    | 'onTimeUpdateCapture'
    | 'onVolumeChange'
    | 'onVolumeChangeCapture'
    | 'onWaiting'
    | 'onWaitingCapture'
    | 'onAuxClick'
    | 'onAuxClickCapture'
    | 'onClick'
    | 'onClickCapture'
    | 'onContextMenu'
    | 'onContextMenuCapture'
    | 'onDoubleClick'
    | 'onDoubleClickCapture'
    | 'onDrag'
    | 'onDragCapture'
    | 'onDragEnd'
    | 'onDragEndCapture'
    | 'onDragEnter'
    | 'onDragEnterCapture'
    | 'onDragExit'
    | 'onDragExitCapture'
    | 'onDragLeave'
    | 'onDragLeaveCapture'
    | 'onDragOver'
    | 'onDragOverCapture'
    | 'onDragStart'
    | 'onDragStartCapture'
    | 'onDrop'
    | 'onDropCapture'
    | 'onMouseDown'
    | 'onMouseDownCapture'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseMoveCapture'
    | 'onMouseOut'
    | 'onMouseOutCapture'
    | 'onMouseOver'
    | 'onMouseOverCapture'
    | 'onMouseUp'
    | 'onMouseUpCapture'
    | 'onSelect'
    | 'onSelectCapture'
    | 'onTouchCancel'
    | 'onTouchCancelCapture'
    | 'onTouchEnd'
    | 'onTouchEndCapture'
    | 'onTouchMove'
    | 'onTouchMoveCapture'
    | 'onTouchStart'
    | 'onTouchStartCapture'
    | 'onPointerDown'
    | 'onPointerDownCapture'
    | 'onPointerMove'
    | 'onPointerMoveCapture'
    | 'onPointerUp'
    | 'onPointerUpCapture'
    | 'onPointerCancel'
    | 'onPointerCancelCapture'
    | 'onPointerEnter'
    | 'onPointerEnterCapture'
    | 'onPointerLeave'
    | 'onPointerLeaveCapture'
    | 'onPointerOver'
    | 'onPointerOverCapture'
    | 'onPointerOut'
    | 'onPointerOutCapture'
    | 'onGotPointerCapture'
    | 'onGotPointerCaptureCapture'
    | 'onLostPointerCapture'
    | 'onLostPointerCaptureCapture'
    | 'onScroll'
    | 'onScrollCapture'
    | 'onWheel'
    | 'onWheelCapture'
    | 'onAnimationStart'
    | 'onAnimationStartCapture'
    | 'onAnimationEnd'
    | 'onAnimationEndCapture'
    | 'onAnimationIteration'
    | 'onAnimationIterationCapture'
    | 'onTransitionEnd'
    | 'onTransitionEndCapture'
>;
