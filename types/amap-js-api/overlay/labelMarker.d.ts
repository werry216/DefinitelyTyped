declare namespace AMap {
    namespace LabelMarker {
        interface EventMap<I = LabelMarker> extends LabelsLayer.EventMap<I> { }

        type TextDirection = 'top' | 'right' | 'bottom' | 'left' | 'center';
        type FontWeight = 'normal' | 'thin' | 'bold';
        type Anchor = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
        interface TextStyle {
            fontSize?: number | undefined;
            fontFamily?: string | undefined;
            fontWeight?: FontWeight | undefined;
            fillColor?: string | undefined;
            strokeColor?: string | undefined;
            strokeWidth?: number | undefined;
        }
        interface TextOptions {
            content?: string | undefined;
            direction?: TextDirection | undefined;
            offset?: Pixel | [number, number] | undefined;
            zooms?: [number, number] | undefined;
            style?: TextStyle | undefined;
        }
        interface IconOptions {
            image?: string | undefined;
            size?: number[] | Size | undefined;
            // unsupport Pixel in v1.4.14
            clipOrigin?: number[] | Pixel | undefined;
            anchor?: Anchor | undefined;
            retina?: boolean | undefined;

            // internal
            angel?: number | undefined;
            type?: string | undefined;
            clipSize?: [number, number] | undefined;
            zooms?: [number, number] | undefined;
        }
        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            position?: string | LocationValue | undefined;
            zooms?: [number, number] | undefined;
            opacity?: number | undefined;
            icon?: IconOptions | undefined;
            text?: TextOptions | undefined;

            // internal
            zIndex?: number | undefined;
            title?: string | undefined;
            rank?: number | undefined;
        }
    }

    class LabelMarker<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: LabelMarker.Options);
        /**
         * ??????????????????
         * @param position ????????????
         */
        setPosition(position: [number, number]): void;
        /**
         * ??????????????????
         */
        getPosition(): [number, number] | [string, string];
        /**
         * ????????????????????????
         */
        getZooms(): [number, number];
        /**
         * ????????????????????????
         * @param zooms ??????????????????
         */
        setZooms(zooms: [number, number]): void;
        /**
         * ???????????????
         */
        getOpacity(): number;
        /**
         * ???????????????
         * @param opacity ?????????
         */
        setOpacity(opacity: number): void;
        /**
         * ????????????
         * @param eventName ????????????
         * @param handler ??????????????????
         * @param context ???????????????????????????
         * @param once ????????????
         * @param unshift ??????????????????
         */
        on<C = this>(
            eventName: string,
            handler: (this: C, event: any) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): any; // should be void
        /**
         * ??????????????????
         * @param eventName ????????????
         * @param handler ??????????????????
         * @param context ???????????????
         */
        off<C = this>(
            eventName: string,
            handler: ((this: C, event: any) => void) | 'mv',
            context?: C
        ): any; // should be void

        // internal
        getBounds(): Bounds;
    }
}
