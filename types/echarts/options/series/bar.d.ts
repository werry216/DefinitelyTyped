declare namespace echarts {
    namespace EChartOption {
        /**
         * **bar chart**
         *
         * Bar chart shows different data through the height of a bar, which
         * is used in
         * [rectangular coordinate](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
         * with at least 1 category axis.
         *
         *
         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar
         */
        interface SeriesBar {
            /**
             * @default
             * "bar"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.type
             */
            type?: 'bar';

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.id
             */
            id?: string;

            /**
             * Series name used for displaying in
             * [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip)
             * and filtering with
             * [legend](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.name
             */
            name?: string;

            /**
             * Whether to enable highlighting chart when
             * [legend](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend)
             * is being hovered.
             *
             *
             * @default
             * "true"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.legendHoverLink
             */
            legendHoverLink?: boolean;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `'cartesian2d'`
             *
             * Use a two-dimensional rectangular coordinate (also known as Cartesian
             * coordinate), with
             * [xAxisIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.xAxisIndex)
             * and
             * [yAxisIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.yAxisIndex)
             * to assign the corresponding axis component.
             *
             *
             * @default
             * "cartesian2d"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.coordinateSystem
             */
            coordinateSystem?: string;

            /**
             * Index of
             * [x axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis)
             * to combine with, which is useful for multiple x axes in one chart.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.xAxisIndex
             */
            xAxisIndex?: number;

            /**
             * Index of
             * [y axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis)
             * to combine with, which is useful for multiple y axes in one chart.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.yAxisIndex
             */
            yAxisIndex?: number;

            /**
             * Text label of , to explain some data information about graphic
             * item like value, name and so on.
             * `label` is placed under `itemStyle` in ECharts 2.x.
             * In ECharts 3, to make the configuration structure flatter, `label`is
             * taken to be at the same level with `itemStyle`, and has `emphasis`
             * as `itemStyle` does.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label
             */
            label?: {
                /**
                 * Some properties like "normal" or "emphasis" are not documented.
                 * Please, write description for them
                 */
                [unknownProperty: string]: any;

                /**
                 * Whether to show label.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.show
                 */
                show?: boolean;

                /**
                 * Label position.
                 *
                 * **Followings are the options:**
                 *
                 * + \[x, y\]
                 *
                 * Use relative percentage, or absolute pixel values to represent
                 * position of label relative to top-left corner of bounding
                 * box. For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 * + 'top'
                 *
                 * + 'left'
                 * + 'right'
                 * + 'bottom'
                 * + 'inside'
                 * + 'insideLeft'
                 * + 'insideRight'
                 * + 'insideTop'
                 * + 'insideBottom'
                 * + 'insideTopLeft'
                 * + 'insideBottomLeft'
                 * + 'insideTopRight'
                 * + 'insideBottomRight'
                 *
                 * See:
                 * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                 * .
                 *
                 *
                 * @default
                 * "inside"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.position
                 */
                position?: any[] | string;

                /**
                 * Distance to the host graphic element.
                 * Works when position is string value (like `'top'`、`'insideRight'`).
                 *
                 * See:
                 * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                 * .
                 *
                 *
                 * @default
                 * 5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.distance
                 */
                distance?: number;

                /**
                 * Rotate label, from -90 degree to 90, positive value represents
                 * rotate anti-clockwise.
                 *
                 * See:
                 * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                 * .
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rotate
                 */
                rotate?: number;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.offset
                 */
                offset?: any[];

                /**
                 * Data label formatter, which supports string template and
                 * callback function.
                 * In either form, `\n` is supported to represent a new line.
                 *
                 * **String template**
                 *
                 * Model variation includes:
                 *
                 * + `{a}`: series name.
                 * + `{b}`: the name of a data item.
                 * + `{c}`: the value of a data item.
                 * + `{@xxx}: the value of a dimension named`'xxx'`, for example,`{@product}`refers
                 * the value of`'product'\` dimension。
                 * + `{@[n]}: the value of a dimension at the index of`n`, for
                 * example,`{@\[3\]}\` refers the value at dimensions\[3\].
                 *
                 * **example:**
                 *
                 * ```
                 * formatter: '{b}: {@score}'
                 *
                 * ```
                 *
                 * **Callback function**
                 *
                 * Callback function is in form of:
                 *
                 * ```
                 * (params: Object|Array) => string
                 *
                 * ```
                 *
                 * where `params` is the single dataset needed by formatter,
                 * which is formed as:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.formatter
                 */
                formatter?: Function | string;

                /**
                 * text color.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * ""#fff""
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.color
                 */
                color?: string;

                /**
                 * font style
                 *
                 * Options are:
                 *
                 * + `'normal'`
                 * + `'italic'`
                 * + `'oblique'`
                 *
                 *
                 * @default
                 * "normal"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.fontStyle
                 */
                fontStyle?: string;

                /**
                 * font thick weight
                 *
                 * Options are:
                 *
                 * + `'normal'`
                 * + `'bold'`
                 * + `'bolder'`
                 * + `'lighter'`
                 * + 100 | 200 | 300 | 400...
                 *
                 *
                 * @default
                 * "normal"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.fontWeight
                 */
                fontWeight?: string;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 *
                 * @default
                 * "sans-serif"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.fontFamily
                 */
                fontFamily?: string;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.fontSize
                 */
                fontSize?: number;

                /**
                 * Horizontal alignment of text, automatic by default.
                 *
                 * Options are:
                 *
                 * + `'left'`
                 * + `'center'`
                 * + `'right'`
                 *
                 * If `align` is not set in `rich`, `align` in parent level
                 * will be used. For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.align
                 */
                align?: string;

                /**
                 * Vertical alignment of text, automatic by default.
                 *
                 * Options are:
                 *
                 * + `'top'`
                 * + `'middle'`
                 * + `'bottom'`
                 *
                 * If `verticalAlign` is not set in `rich`, `verticalAlign`
                 * in parent level will be used. For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.verticalAlign
                 */
                verticalAlign?: string;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.lineHeight
                 */
                lineHeight?: number;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.backgroundColor
                 */
                backgroundColor?: object | string;

                /**
                 * Border color of the text fregment.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.borderColor
                 */
                borderColor?: string;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.borderRadius
                 */
                borderRadius?: number;

                /**
                 * Padding of the text fregment, for example:
                 *
                 * + `padding: [3, 4, 5, 6]`: represents padding of `[top, right,
                 * bottom, left]`.
                 * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                 * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.padding
                 */
                padding?: any[] | number;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Width of the text block.
                 * It is the width of the text by default.
                 * In most cases, there is no need to specify it.
                 * You may want to use it in some cases like make simple table
                 * or using background image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * `width` can also be percent string, like `'100%'`, which
                 * represents the percent of `contentWidth` (that is, the width
                 * without `padding`) of its container box.
                 * It is based on `contentWidth` because that each text fregment
                 * is layout based on the `content box`, where it makes no sense
                 * that calculating width based on `outerWith` in prectice.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.width
                 */
                width?: number | string;

                /**
                 * Height of the text block.
                 * It is the width of the text by default.
                 * You may want to use it in some cases like using background
                 * image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.height
                 */
                height?: number | string;

                /**
                 * Storke color of the text.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.textBorderColor
                 */
                textBorderColor?: string;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.textBorderWidth
                 */
                textBorderWidth?: number;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.textShadowColor
                 */
                textShadowColor?: string;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.textShadowBlur
                 */
                textShadowBlur?: number;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label)
                 *
                 * For more details, see
                 * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich
                 */
                rich?: {

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.color
                         */
                        color?: string;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                         */
                        fontStyle?: string;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };
                };
            };

            /**
             * Graphic style of , `emphasis` is the style when it is highlighted,
             * like being hovered by mouse, or highlighted via legend connect.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle
             */
            itemStyle?: {
                /**
                 * Some properties like "normal" or "emphasis" are not documented.
                 * Please, write description for them
                 */
                [unknownProperty: string]: any;

                /**
                 * Bar color. defaults to acquire colors from global palette
                 * [option.color](https://ecomfe.github.io/echarts-doc/public/en/option.html#color)
                 * .
                 *
                 *
                 * @default
                 * "auto"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.color
                 */
                color?: string | {
                    type: 'linear',
                    x: number,
                    y: number,
                    x2: number,
                    y2: number,
                    colorStops: {
                        offset: number,
                        color: string
                    }[],
                    global: boolean
                } | {
                    type: 'radial',
                    x: number,
                    y: number,
                    r: number,
                    colorStops: {
                        offset: number,
                        color: string
                    }[],
                    global: boolean
                };

                /**
                 * The bodrder color of bar.
                 *
                 *
                 * @default
                 * '#000'
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.barBorderColor
                 */
                barBorderColor?: string;

                /**
                 * The bodrder width of bar. defaults to have no border.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.barBorderWidth
                 */
                barBorderWidth?: number;

                /**
                 * The radius of rounded corner.
                 * Its unit is px.
                 * And it supports use array to respectively specify the 4 corner
                 * radiuses.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.itemStyle)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.barBorderRadius
                 */
                barBorderRadius?: any[] | number;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.itemStyle)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.opacity
                 */
                opacity?: number;
            };

            /**
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis
             */
            emphasis?: {

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.show
                     */
                    show?: boolean;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.offset
                     */
                    offset?: any[];

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {@score}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.color
                     */
                    color?: string;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.fontStyle
                     */
                    fontStyle?: string;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.fontWeight
                     */
                    fontWeight?: string;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.align
                     */
                    align?: string;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.borderRadius
                     */
                    borderRadius?: number;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.width
                     */
                    width?: number | string;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle
                 */
                itemStyle?: {

                    /**
                     * Bar color..
                     *
                     *
                     * @default
                     * "auto"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.color
                     */
                    color?: string;

                    /**
                     * The bodrder color of bar.
                     *
                     *
                     * @default
                     * '#000'
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.barBorderColor
                     */
                    barBorderColor?: string;

                    /**
                     * The bodrder width of bar. defaults to have no border.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.barBorderWidth
                     */
                    barBorderWidth?: number;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.emphasis.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.emphasis.itemStyle.opacity
                     */
                    opacity?: number;
                };
            };

            /**
             * Name of stack.
             * On the same category axis, the series with the same `stack` name
             * would be put on top of each other.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.stack
             */
            stack?: string;

            /**
             * The mouse style when mouse hovers on an element, the same as
             * `cursor` property in `CSS`.
             *
             *
             * @default
             * "pointer"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.cursor
             */
            cursor?: string;

            /**
             * The width of the bar. Adaptive when not specified.
             *
             * In a single coodinate system, this attribute is shared by multiple
             * `'bar'` series.
             * This attribute should be set on the last `'bar'` series in the
             * coodinate system, then it will be adopted by all `'bar'` series
             * in the coordinate system.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.barWidth
             */
            barWidth?: number;

            /**
             * The maximum width of the bar. Adaptive when not specified.
             *
             * In a single coodinate system, this attribute is shared by multiple
             * `'bar'` series.
             * This attribute should be set on the last `'bar'` series in the
             * coodinate system, then it will be adopted by all `'bar'` series
             * in the coordinate system.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.barMaxWidth
             */
            barMaxWidth?: number;

            /**
             * The minimum width of bar.
             * It could be used to avoid the following situation: the interaction
             * would be affected when the value of some data item is too small.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.barMinHeight
             */
            barMinHeight?: number;

            /**
             * The gap between bars between different series, is a percent value
             * like `'30%'`, which means `30%` of the bar width.
             *
             * Set barGap as `'-100%'` can overlap bars that belong to different
             * series, which is useful when making a series of bar be background.
             *
             * In a single coodinate system, this attribute is shared by multiple
             * `'bar'` series.
             * This attribute should be set on the last `'bar'` series in the
             * coodinate system, then it will be adopted by all `'bar'` series
             * in the coordinate system.
             *
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             *
             * @default
             * 30%
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.barGap
             */
            barGap?: string;

            /**
             * The bar gap of a single series, defaults to be `20%` of the category
             * gap, can be set as a fixed value.
             *
             * In a single coodinate system, this attribute is shared by multiple
             * `'bar'` series.
             * This attribute should be set on the last `'bar'` series in the
             * coodinate system, then it will be adopted by all `'bar'` series
             * in the coordinate system.
             *
             *
             * @default
             * '20%'
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.barCategoryGap
             */
            barCategoryGap?: string;

            /**
             * Whether to enable the optimization of large-scale data.
             * It could be set when large data causes performance problem.
             *
             * After being enabled, `largeThreshold` can be used to indicate
             * the minimum number for turning on the optimization.
             *
             * But when the optimization enabled, the style of single data item
             * can't be customized any more.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.large
             */
            large?: boolean;

            /**
             * The threshold enabling the drawing optimization.
             *
             *
             * @default
             * 400
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.largeThreshold
             */
            largeThreshold?: number;

            /**
             * `progressive` specifies the amount of graphic elements that can
             * be rendered within a frame (about 16ms) if "progressive rendering"
             * enabled.
             *
             * When data amount is from thousand to more than 10 million, it
             * will take too long time to render all of the graphic elements.
             * Since ECharts 4, "progressive rendering" is supported in its
             * workflow, which processes and renders data chunk by chunk alone
             * with each frame, avoiding to block the UI thread of the browser.
             *
             *
             * @default
             * 5000
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.progressive
             */
            progressive?: number;

            /**
             * If current data amount is over the threshold, "progressive rendering"
             * is enabled.
             *
             *
             * @default
             * 3000
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.progressiveThreshold
             */
            progressiveThreshold?: number;

            /**
             * Chunk approach, optional values:
             *
             * + `'sequential'`: slice data by data index.
             * + `'mod'`: slice data by mod, which make the data items of each
             * chunk coming from all over the data, bringing better visual effect
             * while progressive rendering.
             *
             *
             * @default
             * "mod"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.progressiveChunkMode
             */
            progressiveChunkMode?: string;

            /**
             * `dimensions` can be used to define dimension info for `series.data`
             * or `dataset.source`.
             *
             * Notice: if
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * is used, we can provide dimension names in the first column/row
             * of
             * [dataset.source](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset.source)
             * , and not need to specify `dimensions` here.
             * But if `dimensions` is specified here, echarts will not retrieve
             * dimension names from the first row/column of `dataset.source`
             * any more.
             *
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * Each data item of `dimensions` can be:
             *
             * + `string`, for example, `'someName'`, which equals to `{name:
             * 'someName'}`.
             * + `Object`, where the attributes can be:
             * + name: `string`.
             * + type: `string`, supports:
             * + `number`
             * + `float`, that is,
             * [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
             *
             * + `int`, that is,
             * [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
             *
             * + `ordinal`, discrete value, which represents string generally.
             * + `time`, time value, see
             * [data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.data)
             * to check the format of time value.
             * + displayName: `string`, generally used in tooltip for dimension
             * display. If not specified, use `name` by default.
             *
             * When `dimensions` is specified, the default `tooltip` will be
             * displayed vertically, which is better to show diemsion names.
             * Otherwise, `tooltip` will displayed only value horizontally.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.dimensions
             */
            dimensions?: any[];

            /**
             * Define what is encoded to for each dimension of `data`.
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * Attributes of encode are different according to the type of coordinate
             * systtems. For
             * [cartesian2d](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
             * , `x` and `y` can be defined. For
             * [polar](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
             * , `radius` and `angle` can be defined. For
             * [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo)
             * , `lng` and `lat` can be defined.
             * Attribute `tooltip` and `itemName` (data item name in tooltip)
             * are always able to be defined.
             *
             * When
             * [dimensions](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.dimensions)
             * is used to defined name for a certain dimension, `encode` can
             * refer the name directly. For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * Specially, in \[custom series(~series-custom), some property
             * in `encode`, corresponding to axis, can be set as null to make
             * the series not controlled by the axis, that is, the series data
             * will not be count in the extent of the axis, and the
             * [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom)
             * on the axis will not filter the series.
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.encode
             */
            encode?: object;

            /**
             * When
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * is used, `seriesLayoutBy` specifies whether the column or the
             * row of `dataset` is mapped to the series, namely, the series
             * is "layout" on columns or rows. Optional values:
             *
             * + 'column': by default, the columns of `dataset` are mapped the
             * series. In this case, each column represents a dimension.
             * + 'row'：the rows of `dataset` are mapped to the series.
             * In this case, each row represents a dimension.
             *
             * Check this
             * [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=dataset-series-layout-by)
             * .
             *
             *
             * @default
             * "column"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.seriesLayoutBy
             */
            seriesLayoutBy?: string;

            /**
             * If
             * [series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.data)
             * is not specified, and
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * exists, the series will use `dataset`.
             * `datasetIndex` specifies which dataset will be used.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.datasetIndex
             */
            datasetIndex?: number;

            /**
             * Data array of series, which can be in the following forms:
             *
             * Notice, if no `data` specified in series, and there is
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * in option, series will use the first
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * as its datasource. If `data` has been specified,
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * will not used.
             *
             * `series.datasetIndex` can be used to specify other
             * [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)
             * .
             *
             * Basically, data is represented by a two-dimension array, like
             * the example below, where each colum is named as a "dimension".
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * + In
             * [cartesian (grid)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
             * , "dimX" and "dimY" correspond to
             * [xAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis)
             * and
             * [yAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis)
             * repectively.
             * + In
             * [polar](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
             * "dimX" and "dimY" correspond to
             * [radiusAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#radiusAxis)
             * 和
             * [angleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#anbleAxis)
             * repectively.
             * + Other dimensions are optional, which can be used in other place.
             * For example:
             * + [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap)
             * can map one or more dimensions to viusal (color, symbol size
             * ...).
             * + [series.symbolSize](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.symbolSize)
             * can be set as a callback function, where symbol size can be calculated
             * by values of a certain dimension.
             * + Values in other dimensions can be shown by
             * [tooltip.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.formatter)
             * or
             * [series.label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.label.formatter)
             * .
             *
             * Especially, when there is one and only one category axis (axis.type
             * is `'category'`), data can be simply be represented by a one-dimension
             * array, like:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * **Relationship between "value" and
             * [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type)
             * **
             *
             * + When a dimension corresponds to a value axis (axis.type
             * is `'value'` or `'log'`):
             *
             * The value can be a `number` (like `12`) (can also be a number
             * in a `string` format, like `'12'`).
             *
             * + When a dimension corresponds to a category axis (axis.type
             * is `'category'`):
             *
             * The value should be the ordinal of the axis.data
             * (based on `0`), the string value of the axis.data.
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * There is an example of double category axes:
             * [Github Punchcard](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-punchCard)
             * .
             *
             * + When a dimension corresponds to a time axis (type is `'time'`),
             * the value can be:
             *
             * + a timestamp, like `1484141700832`, which represents a UTC time.
             * + a date string, in one of the formats below:
             * + a subset of
             * [ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#se
             * c-15.9.1.15)
             * , only including (all of these are treated as local time unless
             * timezone is specified, which is consistent with
             * [moment](https://momentjs.com/)
             * ):
             * + only part of year/month/date/time are specified: `'2012-03'`,
             * `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
             * + separated by `"T"` or a space: `'2012-03-01T12:22:33.123'`,
             * `'2012-03-01 12:22:33.123'`.
             * + timezone specified: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`,
             * `'2012-03-01T12:22:33-05:00'`.
             * + other date string format (all of these are treated as local
             * time): `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`,
             * `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`.
             * + a JavaScript Date instance created by user:
             * + Caution, when using a data string to create a Date instance,
             * [browser differences and inconsistencies](http://dygraphs.com/date-formats.html)
             * should be considered.
             * + For example: In chrome, `new Date('2012-01-01')` is treated
             * as a Jan 1st 2012 in UTC, while `new Date('2012-1-1')` and `new
             * Date('2012/01/01')` are treated as Jan 1st 2012 in local timezone.
             * In safari `new Date('2012-1-1')` is not supported.
             * + So if you intent to perform `new Date(dateString)`, it is strongly
             * recommended to use a time parse library (e.g.,
             * [moment](https://momentjs.com/)
             * ), or use `echarts.number.parseDate`, or check
             * [this](http://dygraphs.com/date-formats.html)
             * .
             *
             * **Customize a data item:**
             *
             * When needing to customize a data item, it can be set as an object,
             * where property `value` reprensent real value. For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * **Empty value:**
             *
             * `'-'` or `null` or `undefined` or `NaN` can be used to describe
             * that a data item is not exists (ps：_not exist_ does not means
             * its value is `0`).
             *
             * For example, line chart can break when encounter an empty value,
             * and scatter chart do not display graphic elements for empty values.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data
             */
            data?: (
                (void | string | number | SeriesBar.DataObject)[]
                | (void | string | number | SeriesBar.DataObject)[][]
            );

            /**
             * Mark point in a chart.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint
             */
            markPoint?: {

                /**
                 * Symbol of .
                 *
                 * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                 * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                 * `'none'`
                 *
                 * It can be set to an image with `'image://url'` , in which
                 * URL is the link to an image, or `dataURI` of an image.
                 *
                 * An image URL example:
                 *
                 * ```
                 * 'image://http://xxx.xxx.xxx/a/b.png'
                 *
                 * ```
                 *
                 * A `dataURI` example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 * Icons can be set to arbitrary vector path via `'path://'`
                 * in ECharts.
                 * As compared with raster image, vector paths prevent from
                 * jagging and blurring when scaled, and have a better control
                 * over changing colors.
                 * Size of vectoer icon will be adapted automatically.
                 * Refer to
                 * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                 * for more information about format of path.
                 * You may export vector paths from tools like Adobe Illustrator.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 *
                 * @default
                 * "pin"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.symbol
                 */
                symbol?: string;

                /**
                 * symbol size.
                 * It can be set to single numbers like `10`, or use an array
                 * to represent width and height.
                 * For example, `[20, 10]` means symbol width is `20`, and height
                 * is`10`.
                 *
                 * If size of symbols needs to be different, you can set with
                 * callback function in the following format:
                 *
                 * ```
                 * (value: Array|number, params: Object) => number|Array
                 *
                 * ```
                 *
                 * The first parameter `value` is the value in
                 * [data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.data)
                 * , and the second parameter `params` is the rest parameters
                 * of data item.
                 *
                 *
                 * @default
                 * 50
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.symbolRotate
                 */
                symbolRotate?: number;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.symbolKeepAspect
                 */
                symbolKeepAspect?: boolean;

                /**
                 * Offset of symbol relative to original position.
                 * By default, symbol will be put in the center position of
                 * data.
                 * But if symbol is from user-defined vector path or image,
                 * you may not expect symbol to be in center.
                 * In this case, you may use this attribute to set offset to
                 * default position.
                 * It can be in absolute pixel value, or in relative percentage
                 * value.
                 *
                 * For example, `[0, '50%']` means to move upside side position
                 * of symbol height.
                 * It can be used to make the arrow in the bottom to be at data
                 * position when symbol is pin.
                 *
                 *
                 * @default
                 * [0, 0]
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.symbolOffset
                 */
                symbolOffset?: any[];

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.silent
                 */
                silent?: boolean;

                /**
                 * Label of mark point.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.show
                     */
                    show?: boolean;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * "inside"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.offset
                     */
                    offset?: any[];

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {@score}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.color
                     */
                    color?: string;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.fontStyle
                     */
                    fontStyle?: string;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.fontWeight
                     */
                    fontWeight?: string;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.align
                     */
                    align?: string;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.borderRadius
                     */
                    borderRadius?: number;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.width
                     */
                    width?: number | string;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.offset
                         */
                        offset?: any[];

                        /**
                         * Data label formatter, which supports string template
                         * and callback function.
                         * In either form, `\n` is supported to represent a
                         * new line.
                         *
                         * **String template**
                         *
                         * Model variation includes:
                         *
                         * + `{a}`: series name.
                         * + `{b}`: the name of a data item.
                         * + `{c}`: the value of a data item.
                         * + `{@xxx}: the value of a dimension named`'xxx'`,
                         * for example,`{@product}`refers the value of`'product'\`
                         * dimension。
                         * + `{@[n]}: the value of a dimension at the index
                         * of`n`, for example,`{@\[3\]}\` refers the value at
                         * dimensions\[3\].
                         *
                         * **example:**
                         *
                         * ```
                         * formatter: '{b}: {@score}'
                         *
                         * ```
                         *
                         * **Callback function**
                         *
                         * Callback function is in form of:
                         *
                         * ```
                         * (params: Object|Array) => string
                         *
                         * ```
                         *
                         * where `params` is the single dataset needed by formatter,
                         * which is formed as:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.formatter
                         */
                        formatter?: Function | string;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.color
                         */
                        color?: string;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.fontStyle
                         */
                        fontStyle?: string;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.fontWeight
                         */
                        fontWeight?: string;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich
                         */
                        rich?: {

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };
                };

                /**
                 * Mark point style.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle
                 */
                itemStyle?: {

                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis
                     */
                    emphasis?: {

                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.x)
                 * ,
                 * [y](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * 2. Assign coordinate position with
                 * [coord](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.coord)
                 * attribute, in which `'min'`, `'max'`, `'average'` are supported
                 * for each dimension.
                 *
                 * 3. Use
                 * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.type)
                 * attribute to mark the maximum and minimum values in the series,
                 * in which
                 * [valueIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.valueIndex)
                 * or
                 * [valueDim](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.valueDim)
                 * can be used to assign the dimension.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data
                 */
                data?: {

                    /**
                     * Mark point name.
                     *
                     *
                     * @default
                     * ''
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.name
                     */
                    name?: string;

                    /**
                     * Special label types, are used to label maximum value,
                     * minimum value and so on.
                     *
                     * **Options are:**
                     *
                     * + `'min'` maximum value.
                     * + `'max'` minimum value.
                     * + `'average'` average value.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.type
                     */
                    type?: string;

                    /**
                     * Available when using
                     * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.type)
                     * it is used to assign maximum value and minimum value
                     * in dimensions, it could be `0` (xAxis, radiusAxis), `1`
                     * (yAxis, angleAxis), and use the first value axis dimension
                     * by default.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.valueIndex
                     */
                    valueIndex?: number;

                    /**
                     * Works only when
                     * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.type)
                     * is assigned.
                     * It is used to state the dimension used to calculate maximum
                     * value or minimum value.
                     * It may be the direct name of a dimension, like `x`, or
                     * `angle` for line charts, or `open`, or `close` for candlestick
                     * charts.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.valueDim
                     */
                    valueDim?: string;

                    /**
                     * Coordinates of the starting point or ending point, whose
                     * format depends on the coordinate of the series.
                     * It can be `x`, and `y` for
                     * [rectangular coordinates](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
                     * , or `radius`, and `angle` for
                     * [polar coordinates](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
                     * .
                     *
                     * **Notice:** For axis with
                     * [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAixs.type)
                     * `'category'`:
                     *
                     * + If coord value is `number`, it represents index of
                     * [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data)
                     * .
                     * + If coord value is `string`, it represents concrete
                     * value in
                     * [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data)
                     *
                     *
                     * Please notice that in this case `xAxis.data`
                     * must not be written as \[number, number,
                     *
                     *
                     *
                     * \], but can only be written \[string, string,
                     *
                     *
                     *
                     * \].
                     * Otherwise it is not able to be located by markPoint /
                     * markLine.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.coord
                     */
                    coord?: any[];

                    /**
                     * X position according to container, in pixel.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.x
                     */
                    x?: number;

                    /**
                     * Y position according to container, in pixel.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.y
                     */
                    y?: number;

                    /**
                     * Label value, which can be ignored.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.value
                     */
                    value?: number;

                    /**
                     * Symbol of .
                     *
                     * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                     * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                     * `'none'`
                     *
                     * It can be set to an image with `'image://url'` , in which
                     * URL is the link to an image, or `dataURI` of an image.
                     *
                     * An image URL example:
                     *
                     * ```
                     * 'image://http://xxx.xxx.xxx/a/b.png'
                     *
                     * ```
                     *
                     * A `dataURI` example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data)
                     *
                     * Icons can be set to arbitrary vector path via `'path://'`
                     * in ECharts.
                     * As compared with raster image, vector paths prevent from
                     * jagging and blurring when scaled, and have a better control
                     * over changing colors.
                     * Size of vectoer icon will be adapted automatically.
                     * Refer to
                     * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                     * for more information about format of path.
                     * You may export vector paths from tools like Adobe Illustrator.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.symbol
                     */
                    symbol?: string;

                    /**
                     * symbol size.
                     * It can be set to single numbers like `10`, or use an
                     * array to represent width and height.
                     * For example, `[20, 10]` means symbol width is `20`, and
                     * height is`10`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.symbolKeepAspect
                     */
                    symbolKeepAspect?: boolean;

                    /**
                     * Offset of symbol relative to original position.
                     * By default, symbol will be put in the center position
                     * of data.
                     * But if symbol is from user-defined vector path or image,
                     * you may not expect symbol to be in center.
                     * In this case, you may use this attribute to set offset
                     * to default position.
                     * It can be in absolute pixel value, or in relative percentage
                     * value.
                     *
                     * For example, `[0, '50%']` means to move upside side position
                     * of symbol height.
                     * It can be used to make the arrow in the bottom to be
                     * at data position when symbol is pin.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[];

                    /**
                     * Mark point style.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle
                     */
                    itemStyle?: {

                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number;

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis
                         */
                        emphasis?: {

                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number;
                        };
                    };

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label
                     */
                    label?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.offset
                         */
                        offset?: any[];

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.color
                         */
                        color?: string;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.fontStyle
                         */
                        fontStyle?: string;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.fontWeight
                         */
                        fontWeight?: string;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich
                         */
                        rich?: {

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis
                         */
                        emphasis?: {

                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.show
                             */
                            show?: boolean;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.position
                             */
                            position?: any[] | string;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @default
                             * 5
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.distance
                             */
                            distance?: number;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.offset
                             */
                            offset?: any[];

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich
                             */
                            rich?: {

                                /**
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {

                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string;

                                    /**
                                     * font style
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'italic'`
                                     * + `'oblique'`
                                     *
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string;

                                    /**
                                     * font thick weight
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'bold'`
                                     * + `'bolder'`
                                     * + `'lighter'`
                                     * + 100 | 200 | 300 | 400...
                                     *
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };
                        };
                    };
                }[];

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animation
                 */
                animation?: boolean;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationDuration
                 */
                animationDuration?: Function | number;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=line-easing)
                 * .
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 *
                 * @default
                 * 300
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markPoint)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Use a line in the chart to illustrate.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine
             */
            markLine?: {

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.silent
                 */
                silent?: boolean;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.symbol)
                 * for more format information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.symbol
                 */
                symbol?: any[] | string;

                /**
                 * Symbol size at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 *
                 * **Attention:** You cannot assgin width and height seperately
                 * as normal `symbolSize`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.symbolSize
                 */
                symbolSize?: any[] | number;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 *
                 * @default
                 * 2
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.precision
                 */
                precision?: number;

                /**
                 * Mark line text.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label
                 */
                label?: {

                    /**
                     * Whether show label or not.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.show
                     */
                    show?: boolean;

                    /**
                     * Positions of labels can be:
                     *
                     * + `'start'` starting point of the line.
                     * + `'middle'` middle point of the line.
                     * + `'end'` ending point of the line.
                     *
                     *
                     * @default
                     * "end"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.position
                     */
                    position?: string;

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{d}`: the percent.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {d}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether show label or not.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Positions of labels can be:
                         *
                         * + `'start'` starting point of the line.
                         * + `'middle'` middle point of the line.
                         * + `'end'` ending point of the line.
                         *
                         *
                         * @default
                         * "end"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.emphasis.position
                         */
                        position?: string;

                        /**
                         * Data label formatter, which supports string template
                         * and callback function.
                         * In either form, `\n` is supported to represent a
                         * new line.
                         *
                         * **String template**
                         *
                         * Model variation includes:
                         *
                         * + `{a}`: series name.
                         * + `{b}`: the name of a data item.
                         * + `{c}`: the value of a data item.
                         * + `{d}`: the percent.
                         * + `{@xxx}: the value of a dimension named`'xxx'`,
                         * for example,`{@product}`refers the value of`'product'\`
                         * dimension。
                         * + `{@[n]}: the value of a dimension at the index
                         * of`n`, for example,`{@\[3\]}\` refers the value at
                         * dimensions\[3\].
                         *
                         * **example:**
                         *
                         * ```
                         * formatter: '{b}: {d}'
                         *
                         * ```
                         *
                         * **Callback function**
                         *
                         * Callback function is in form of:
                         *
                         * ```
                         * (params: Object|Array) => string
                         *
                         * ```
                         *
                         * where `params` is the single dataset needed by formatter,
                         * which is formed as:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string;
                    };
                };

                /**
                 * Mark line style.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle
                 */
                lineStyle?: {

                    /**
                     * Line color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.width
                     */
                    width?: number;

                    /**
                     * line type.
                     *
                     * Options are:
                     *
                     * + `'solid'`
                     * + `'dashed'`
                     * + `'dotted'`
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.lineStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.curveness
                     */
                    curveness?: number;

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis
                     */
                    emphasis?: {

                        /**
                         * Line color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.lineStyle.emphasis)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * line width.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.width
                         */
                        width?: number;

                        /**
                         * line type.
                         *
                         * Options are:
                         *
                         * + `'solid'`
                         * + `'dashed'`
                         * + `'dotted'`
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.type
                         */
                        type?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.lineStyle.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.lineStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * Data array of marking line.
                 * Every array item can be an array of one or two values, representing
                 * starting and ending point of the line, and every item is
                 * an object.
                 * Here are several ways to assign the positions of starting
                 * and ending point.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.x)
                 * ,
                 * [y](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * 2. Assign coordinate position with
                 * [coord](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.coord)
                 * attribute, in which `'min'`, `'max'`, `'average'` are supported
                 * for each dimension.
                 *
                 * 3. Use
                 * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.type)
                 * attribute to mark the maximum and minimum values in the series,
                 * in which
                 * [valueIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.valueIndex)
                 * or
                 * [valueDim](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.valueDim)
                 * can be used to assign the dimension.
                 *
                 * 4.
                 * You may also create a mark line in Cartesian coordinate at
                 * a specific position in X or Y axis by assigning `xAxis` or
                 * `yAxis`. See
                 * [scatter-weight](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-weight)
                 * for example.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * You may also set the type of mark line through `type`, stating
                 * whether it is for the maximum value or average value.
                 * Likewise, dimensions can be assigned through `valueIndex`.
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data
                 */
                data?: {

                    /**
                     * Data of the starting point.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0
                     */
                    0?: {

                        /**
                         * Special label types, are used to label maximum value,
                         * minimum value and so on.
                         *
                         * **Options are:**
                         *
                         * + `'min'` maximum value.
                         * + `'max'` minimum value.
                         * + `'average'` average value.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.type
                         */
                        type?: string;

                        /**
                         * Works only when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be `0` (for xAxis, or radiusAxis), or `1`
                         * (for yAxis, or angleAxis).
                         * Dimension of the first numeric axis is used by default.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Works only when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be the direct name of a dimension, like `x`,
                         * or `angle` for line charts, or `open`, or `close`
                         * for candlestick charts.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.valueDim
                         */
                        valueDim?: string;

                        /**
                         * Coordinates of the starting point or ending point,
                         * whose format depends on the coordinate of the series.
                         * It can be `x`, and `y` for
                         * [rectangular coordinates](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
                         * , or `radius`, and `angle` for
                         * [polar coordinates](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
                         * .
                         *
                         * **Notice:** For axis with
                         * [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAixs.type)
                         * `'category'`:
                         *
                         * + If coord value is `number`, it represents index
                         * of
                         * [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data)
                         * .
                         * + If coord value is `string`, it represents concrete
                         * value in
                         * [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data)
                         *
                         *
                         * Please notice that in this case `xAxis.data`
                         * must not be written as \[number, number,
                         *
                         *
                         *
                         * \], but can only be written \[string, string,
                         *
                         *
                         *
                         * \].
                         * Otherwise it is not able to be located by markPoint
                         * / markLine.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.coord
                         */
                        coord?: any[];

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.value
                         */
                        value?: number;

                        /**
                         * Symbol of starting point.
                         *
                         * Icon types provided by ECharts includes `'circle'`,
                         * `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`,
                         * `'pin'`, `'arrow'`, `'none'`
                         *
                         * It can be set to an image with `'image://url'` ,
                         * in which URL is the link to an image, or `dataURI`
                         * of an image.
                         *
                         * An image URL example:
                         *
                         * ```
                         * 'image://http://xxx.xxx.xxx/a/b.png'
                         *
                         * ```
                         *
                         * A `dataURI` example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0)
                         *
                         * Icons can be set to arbitrary vector path via `'path://'`
                         * in ECharts.
                         * As compared with raster image, vector paths prevent
                         * from jagging and blurring when scaled, and have a
                         * better control over changing colors.
                         * Size of vectoer icon will be adapted automatically.
                         * Refer to
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * for more information about format of path.
                         * You may export vector paths from tools like Adobe
                         * Illustrator.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.symbol
                         */
                        symbol?: string;

                        /**
                         * starting point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean;

                        /**
                         * Offset of starting point symbol relative to original
                         * position.
                         * By default, symbol will be put in the center position
                         * of data.
                         * But if symbol is from user-defined vector path or
                         * image, you may not expect symbol to be in center.
                         * In this case, you may use this attribute to set offset
                         * to default position.
                         * It can be in absolute pixel value, or in relative
                         * percentage value.
                         *
                         * For example, `[0, '50%']` means to move upside side
                         * position of symbol height.
                         * It can be used to make the arrow in the bottom to
                         * be at data position when symbol is pin.
                         *
                         *
                         * @default
                         * [0, 0]
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle
                         */
                        lineStyle?: {

                            /**
                             * Line color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.width
                             */
                            width?: number;

                            /**
                             * line type.
                             *
                             * Options are:
                             *
                             * + `'solid'`
                             * + `'dashed'`
                             * + `'dotted'`
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0.lineStyle)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Line color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.width
                                 */
                                width?: number;

                                /**
                                 * line type.
                                 *
                                 * Options are:
                                 *
                                 * + `'solid'`
                                 * + `'dashed'`
                                 * + `'dotted'`
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.type
                                 */
                                type?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label
                         */
                        label?: {

                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.show
                             */
                            show?: boolean;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             *
                             * @default
                             * "end"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.position
                             */
                            position?: string;

                            /**
                             * Data label formatter, which supports string template
                             * and callback function.
                             * In either form, `\n` is supported to represent
                             * a new line.
                             *
                             * **String template**
                             *
                             * Model variation includes:
                             *
                             * + `{a}`: series name.
                             * + `{b}`: the name of a data item.
                             * + `{c}`: the value of a data item.
                             * + `{d}`: the percent.
                             * + `{@xxx}: the value of a dimension named`'xxx'`,
                             * for example,`{@product}`refers the value of`'product'\`
                             * dimension。
                             * + `{@[n]}: the value of a dimension at the index
                             * of`n`, for example,`{@\[3\]}\` refers the value
                             * at dimensions\[3\].
                             *
                             * **example:**
                             *
                             * ```
                             * formatter: '{b}: {d}'
                             *
                             * ```
                             *
                             * **Callback function**
                             *
                             * Callback function is in form of:
                             *
                             * ```
                             * (params: Object|Array) => string
                             *
                             * ```
                             *
                             * where `params` is the single dataset needed by
                             * formatter, which is formed as:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 *
                                 * @default
                                 * "end"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.emphasis.position
                                 */
                                position?: string;

                                /**
                                 * Data label formatter, which supports string
                                 * template and callback function.
                                 * In either form, `\n` is supported to represent
                                 * a new line.
                                 *
                                 * **String template**
                                 *
                                 * Model variation includes:
                                 *
                                 * + `{a}`: series name.
                                 * + `{b}`: the name of a data item.
                                 * + `{c}`: the value of a data item.
                                 * + `{d}`: the percent.
                                 * + `{@xxx}: the value of a dimension named`'xxx'`,
                                 * for example,`{@product}`refers the value
                                 * of`'product'\` dimension。
                                 * + `{@[n]}: the value of a dimension at the
                                 * index of`n`, for example,`{@\[3\]}\` refers
                                 * the value at dimensions\[3\].
                                 *
                                 * **example:**
                                 *
                                 * ```
                                 * formatter: '{b}: {d}'
                                 *
                                 * ```
                                 *
                                 * **Callback function**
                                 *
                                 * Callback function is in form of:
                                 *
                                 * ```
                                 * (params: Object|Array) => string
                                 *
                                 * ```
                                 *
                                 * where `params` is the single dataset needed
                                 * by formatter, which is formed as:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string;
                            };
                        };
                    };

                    /**
                     * Data of the ending point.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1
                     */
                    1?: {

                        /**
                         * Special label types, are used to label maximum value,
                         * minimum value and so on.
                         *
                         * **Options are:**
                         *
                         * + `'min'` maximum value.
                         * + `'max'` minimum value.
                         * + `'average'` average value.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.type
                         */
                        type?: string;

                        /**
                         * Works only when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be `0` (for xAxis, or radiusAxis), or `1`
                         * (for yAxis, or angleAxis).
                         * Dimension of the first numeric axis is used by default.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Works only when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be the direct name of a dimension, like `x`,
                         * or `angle` for line charts, or `open`, or `close`
                         * for candlestick charts.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.valueDim
                         */
                        valueDim?: string;

                        /**
                         * Coordinates of the starting point or ending point,
                         * whose format depends on the coordinate of the series.
                         * It can be `x`, and `y` for
                         * [rectangular coordinates](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
                         * , or `radius`, and `angle` for
                         * [polar coordinates](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
                         * .
                         *
                         * **Notice:** For axis with
                         * [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAixs.type)
                         * `'category'`:
                         *
                         * + If coord value is `number`, it represents index
                         * of
                         * [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data)
                         * .
                         * + If coord value is `string`, it represents concrete
                         * value in
                         * [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data)
                         *
                         *
                         * Please notice that in this case `xAxis.data`
                         * must not be written as \[number, number,
                         *
                         *
                         *
                         * \], but can only be written \[string, string,
                         *
                         *
                         *
                         * \].
                         * Otherwise it is not able to be located by markPoint
                         * / markLine.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.coord
                         */
                        coord?: any[];

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.value
                         */
                        value?: number;

                        /**
                         * Symbol of ending point.
                         *
                         * Icon types provided by ECharts includes `'circle'`,
                         * `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`,
                         * `'pin'`, `'arrow'`, `'none'`
                         *
                         * It can be set to an image with `'image://url'` ,
                         * in which URL is the link to an image, or `dataURI`
                         * of an image.
                         *
                         * An image URL example:
                         *
                         * ```
                         * 'image://http://xxx.xxx.xxx/a/b.png'
                         *
                         * ```
                         *
                         * A `dataURI` example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1)
                         *
                         * Icons can be set to arbitrary vector path via `'path://'`
                         * in ECharts.
                         * As compared with raster image, vector paths prevent
                         * from jagging and blurring when scaled, and have a
                         * better control over changing colors.
                         * Size of vectoer icon will be adapted automatically.
                         * Refer to
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * for more information about format of path.
                         * You may export vector paths from tools like Adobe
                         * Illustrator.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.symbol
                         */
                        symbol?: string;

                        /**
                         * ending point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean;

                        /**
                         * Offset of ending point symbol relative to original
                         * position.
                         * By default, symbol will be put in the center position
                         * of data.
                         * But if symbol is from user-defined vector path or
                         * image, you may not expect symbol to be in center.
                         * In this case, you may use this attribute to set offset
                         * to default position.
                         * It can be in absolute pixel value, or in relative
                         * percentage value.
                         *
                         * For example, `[0, '50%']` means to move upside side
                         * position of symbol height.
                         * It can be used to make the arrow in the bottom to
                         * be at data position when symbol is pin.
                         *
                         *
                         * @default
                         * [0, 0]
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle
                         */
                        lineStyle?: {

                            /**
                             * Line color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.width
                             */
                            width?: number;

                            /**
                             * line type.
                             *
                             * Options are:
                             *
                             * + `'solid'`
                             * + `'dashed'`
                             * + `'dotted'`
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1.lineStyle)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Line color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.width
                                 */
                                width?: number;

                                /**
                                 * line type.
                                 *
                                 * Options are:
                                 *
                                 * + `'solid'`
                                 * + `'dashed'`
                                 * + `'dotted'`
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.type
                                 */
                                type?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label
                         */
                        label?: {

                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.show
                             */
                            show?: boolean;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             *
                             * @default
                             * "end"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.position
                             */
                            position?: string;

                            /**
                             * Data label formatter, which supports string template
                             * and callback function.
                             * In either form, `\n` is supported to represent
                             * a new line.
                             *
                             * **String template**
                             *
                             * Model variation includes:
                             *
                             * + `{a}`: series name.
                             * + `{b}`: the name of a data item.
                             * + `{c}`: the value of a data item.
                             * + `{d}`: the percent.
                             * + `{@xxx}: the value of a dimension named`'xxx'`,
                             * for example,`{@product}`refers the value of`'product'\`
                             * dimension。
                             * + `{@[n]}: the value of a dimension at the index
                             * of`n`, for example,`{@\[3\]}\` refers the value
                             * at dimensions\[3\].
                             *
                             * **example:**
                             *
                             * ```
                             * formatter: '{b}: {d}'
                             *
                             * ```
                             *
                             * **Callback function**
                             *
                             * Callback function is in form of:
                             *
                             * ```
                             * (params: Object|Array) => string
                             *
                             * ```
                             *
                             * where `params` is the single dataset needed by
                             * formatter, which is formed as:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 *
                                 * @default
                                 * "end"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.emphasis.position
                                 */
                                position?: string;

                                /**
                                 * Data label formatter, which supports string
                                 * template and callback function.
                                 * In either form, `\n` is supported to represent
                                 * a new line.
                                 *
                                 * **String template**
                                 *
                                 * Model variation includes:
                                 *
                                 * + `{a}`: series name.
                                 * + `{b}`: the name of a data item.
                                 * + `{c}`: the value of a data item.
                                 * + `{d}`: the percent.
                                 * + `{@xxx}: the value of a dimension named`'xxx'`,
                                 * for example,`{@product}`refers the value
                                 * of`'product'\` dimension。
                                 * + `{@[n]}: the value of a dimension at the
                                 * index of`n`, for example,`{@\[3\]}\` refers
                                 * the value at dimensions\[3\].
                                 *
                                 * **example:**
                                 *
                                 * ```
                                 * formatter: '{b}: {d}'
                                 *
                                 * ```
                                 *
                                 * **Callback function**
                                 *
                                 * Callback function is in form of:
                                 *
                                 * ```
                                 * (params: Object|Array) => string
                                 *
                                 * ```
                                 *
                                 * where `params` is the single dataset needed
                                 * by formatter, which is formed as:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.data.1.label.emphasis.formatter
                                 */
                                formatter?: Function | string;
                            };
                        };
                    };
                };

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animation
                 */
                animation?: boolean;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationDuration
                 */
                animationDuration?: Function | number;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=line-easing)
                 * .
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine)
                 *
                 *
                 * @default
                 * 300
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markLine)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea
             */
            markArea?: {

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.silent
                 */
                silent?: boolean;

                /**
                 * Label in mark area.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.show
                     */
                    show?: boolean;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.offset
                     */
                    offset?: any[];

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.color
                     */
                    color?: string;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.fontStyle
                     */
                    fontStyle?: string;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.fontWeight
                     */
                    fontWeight?: string;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.align
                     */
                    align?: string;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.borderRadius
                     */
                    borderRadius?: number;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.width
                     */
                    width?: number | string;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.offset
                         */
                        offset?: any[];

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.color
                         */
                        color?: string;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.fontStyle
                         */
                        fontStyle?: string;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.fontWeight
                         */
                        fontWeight?: string;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich
                         */
                        rich?: {

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };
                };

                /**
                 * Style of the mark area.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle
                 */
                itemStyle?: {

                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis
                     */
                    emphasis?: {

                        /**
                         * color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * The scope of the area is defined by `data`, which is an array
                 * with two item, representing the left-top point and the right-bottom
                 * point of rectangle area.
                 * Each item can be defined as follows:
                 *
                 * 1.
                 * Specify the coordinate in screen coordinate system using
                 * [x](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.x)
                 * ,
                 * [y](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * 2.
                 * Specify the coordinate in data coordinate system (i.e.,
                 * cartesian) using
                 * [coord](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.coord)
                 * , which can be also set as `'min'`, `'max'`, `'average'`
                 * (e.g,
                 * `coord: [23, 'min']`, or `coord: ['average', 'max']`)。
                 *
                 * 1.
                 * Locate the point on the min value or max value of `series.data`
                 * using
                 * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.type)
                 * , where
                 * [valueIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.valueIndex)
                 * or
                 * [valueDim](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markPoint.data.0.valueDim)
                 * can be used to specify the dimension on which the min, max
                 * or average are calculated.
                 * 2.
                 * If in cartesian, you can only specify `xAxis` or `yAxis`
                 * to define a mark area based on only X or Y axis, see sample
                 * [scatter-weight](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-weight)
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data
                 */
                data?: {

                    /**
                     * Specify the left-top point.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0
                     */
                    0?: {

                        /**
                         * Specify this item is on min or max or average value.
                         *
                         * **Options:**
                         *
                         * + `'min'` max value。
                         * + `'max'` min value。
                         * + `'average'` average value。
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.type
                         */
                        type?: string;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be `0` (means xAxis, radiusAxis) or
                         * `1` (means yAxis, angleAxis), using the dimension
                         * of the first axis by default.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be the name of the dimension (for example,
                         * the value can be `x`, `angle` in line chart, and
                         * `open`, `close` in candlestick).
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.valueDim
                         */
                        valueDim?: string;

                        /**
                         * The format is \[start coordinate, end coordinate\],
                         * where the coordinate system can be `x`, `y` on
                         * [cartesian](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
                         * , or `radius`, `angle` on
                         * [polar](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.coord
                         */
                        coord?: any[];

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle
                         */
                        itemStyle?: {

                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis
                             */
                            emphasis?: {

                                /**
                                 * color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.borderType
                                 */
                                borderType?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.itemStyle.emphasis.opacity
                                 */
                                opacity?: number;
                            };
                        };

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label
                         */
                        label?: {

                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.show
                             */
                            show?: boolean;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.position
                             */
                            position?: any[] | string;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @default
                             * 5
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.distance
                             */
                            distance?: number;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.offset
                             */
                            offset?: any[];

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich
                             */
                            rich?: {

                                /**
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {

                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string;

                                    /**
                                     * font style
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'italic'`
                                     * + `'oblique'`
                                     *
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string;

                                    /**
                                     * font thick weight
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'bold'`
                                     * + `'bolder'`
                                     * + `'lighter'`
                                     * + 100 | 200 | 300 | 400...
                                     *
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Label position.
                                 *
                                 * **Followings are the options:**
                                 *
                                 * + \[x, y\]
                                 *
                                 * Use relative percentage, or absolute pixel
                                 * values to represent position of label relative
                                 * to top-left corner of bounding box.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis)
                                 *
                                 * + 'top'
                                 *
                                 * + 'left'
                                 * + 'right'
                                 * + 'bottom'
                                 * + 'inside'
                                 * + 'insideLeft'
                                 * + 'insideRight'
                                 * + 'insideTop'
                                 * + 'insideBottom'
                                 * + 'insideTopLeft'
                                 * + 'insideBottomLeft'
                                 * + 'insideTopRight'
                                 * + 'insideBottomRight'
                                 *
                                 * See:
                                 * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.position
                                 */
                                position?: any[] | string;

                                /**
                                 * Distance to the host graphic element.
                                 * Works when position is string value (like
                                 * `'top'`、`'insideRight'`).
                                 *
                                 * See:
                                 * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @default
                                 * 5
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.distance
                                 */
                                distance?: number;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.offset
                                 */
                                offset?: any[];

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.fontStyle
                                 */
                                fontStyle?: string;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.fontWeight
                                 */
                                fontWeight?: string;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {

                                    /**
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {

                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                         */
                                        color?: string;

                                        /**
                                         * font style
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'italic'`
                                         * + `'oblique'`
                                         *
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                         */
                                        fontStyle?: string;

                                        /**
                                         * font thick weight
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'bold'`
                                         * + `'bolder'`
                                         * + `'lighter'`
                                         * + 100 | 200 | 300 | 400...
                                         *
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number;

                                        /**
                                         * Horizontal alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'left'`
                                         * + `'center'`
                                         * + `'right'`
                                         *
                                         * If `align` is not set in `rich`,
                                         * `align` in parent level will be used.
                                         * For example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string;

                                        /**
                                         * Vertical alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'top'`
                                         * + `'middle'`
                                         * + `'bottom'`
                                         *
                                         * If `verticalAlign` is not set in
                                         * `rich`, `verticalAlign` in parent
                                         * level will be used. For example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number;

                                        /**
                                         * Padding of the text fregment, for
                                         * example:
                                         *
                                         * + `padding: [3, 4, 5, 6]`: represents
                                         * padding of `[top, right, bottom,
                                         * left]`.
                                         * + `padding: 4`: represents `padding:
                                         * [4, 4, 4, 4]`.
                                         * + `padding: [3, 4]`: represents `padding:
                                         * [3, 4, 3, 4]`.
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number;

                                        /**
                                         * Width of the text block.
                                         * It is the width of the text by default.
                                         * In most cases, there is no need to
                                         * specify it.
                                         * You may want to use it in some cases
                                         * like make simple table or using background
                                         * image (see `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * `width` can also be percent string,
                                         * like `'100%'`, which represents the
                                         * percent of `contentWidth` (that is,
                                         * the width without `padding`) of its
                                         * container box.
                                         * It is based on `contentWidth` because
                                         * that each text fregment is layout
                                         * based on the `content box`, where
                                         * it makes no sense that calculating
                                         * width based on `outerWith` in prectice.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string;

                                        /**
                                         * Height of the text block.
                                         * It is the width of the text by default.
                                         * You may want to use it in some cases
                                         * like using background image (see
                                         * `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number;
                                    };
                                };
                            };
                        };
                    };

                    /**
                     * Specify the right-bottom point.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1
                     */
                    1?: {

                        /**
                         * Specify this item is on min or max or average value.
                         *
                         * **Options:**
                         *
                         * + `'min'` max value。
                         * + `'max'` min value。
                         * + `'average'` average value。
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.type
                         */
                        type?: string;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be `0` (means xAxis, radiusAxis) or
                         * `1` (means yAxis, angleAxis), using the dimension
                         * of the first axis by default.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be the name of the dimension (for example,
                         * the value can be `x`, `angle` in line chart, and
                         * `open`, `close` in candlestick).
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.valueDim
                         */
                        valueDim?: string;

                        /**
                         * The format is \[start coordinate, end coordinate\],
                         * where the coordinate system can be `x`, `y` on
                         * [cartesian](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)
                         * , or `radius`, `angle` on
                         * [polar](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.coord
                         */
                        coord?: any[];

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle
                         */
                        itemStyle?: {

                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis
                             */
                            emphasis?: {

                                /**
                                 * color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.borderType
                                 */
                                borderType?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.itemStyle.emphasis.opacity
                                 */
                                opacity?: number;
                            };
                        };

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label
                         */
                        label?: {

                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.show
                             */
                            show?: boolean;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.position
                             */
                            position?: any[] | string;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @default
                             * 5
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.distance
                             */
                            distance?: number;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.offset
                             */
                            offset?: any[];

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich
                             */
                            rich?: {

                                /**
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {

                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string;

                                    /**
                                     * font style
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'italic'`
                                     * + `'oblique'`
                                     *
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string;

                                    /**
                                     * font thick weight
                                     *
                                     * Options are:
                                     *
                                     * + `'normal'`
                                     * + `'bold'`
                                     * + `'bolder'`
                                     * + `'lighter'`
                                     * + 100 | 200 | 300 | 400...
                                     *
                                     *
                                     * @default
                                     * "normal"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Label position.
                                 *
                                 * **Followings are the options:**
                                 *
                                 * + \[x, y\]
                                 *
                                 * Use relative percentage, or absolute pixel
                                 * values to represent position of label relative
                                 * to top-left corner of bounding box.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis)
                                 *
                                 * + 'top'
                                 *
                                 * + 'left'
                                 * + 'right'
                                 * + 'bottom'
                                 * + 'inside'
                                 * + 'insideLeft'
                                 * + 'insideRight'
                                 * + 'insideTop'
                                 * + 'insideBottom'
                                 * + 'insideTopLeft'
                                 * + 'insideBottomLeft'
                                 * + 'insideTopRight'
                                 * + 'insideBottomRight'
                                 *
                                 * See:
                                 * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.position
                                 */
                                position?: any[] | string;

                                /**
                                 * Distance to the host graphic element.
                                 * Works when position is string value (like
                                 * `'top'`、`'insideRight'`).
                                 *
                                 * See:
                                 * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @default
                                 * 5
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.distance
                                 */
                                distance?: number;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.offset
                                 */
                                offset?: any[];

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.fontStyle
                                 */
                                fontStyle?: string;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.fontWeight
                                 */
                                fontWeight?: string;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {

                                    /**
                                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {

                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                         */
                                        color?: string;

                                        /**
                                         * font style
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'italic'`
                                         * + `'oblique'`
                                         *
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                         */
                                        fontStyle?: string;

                                        /**
                                         * font thick weight
                                         *
                                         * Options are:
                                         *
                                         * + `'normal'`
                                         * + `'bold'`
                                         * + `'bolder'`
                                         * + `'lighter'`
                                         * + 100 | 200 | 300 | 400...
                                         *
                                         *
                                         * @default
                                         * "normal"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number;

                                        /**
                                         * Horizontal alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'left'`
                                         * + `'center'`
                                         * + `'right'`
                                         *
                                         * If `align` is not set in `rich`,
                                         * `align` in parent level will be used.
                                         * For example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string;

                                        /**
                                         * Vertical alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'top'`
                                         * + `'middle'`
                                         * + `'bottom'`
                                         *
                                         * If `verticalAlign` is not set in
                                         * `rich`, `verticalAlign` in parent
                                         * level will be used. For example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number;

                                        /**
                                         * Padding of the text fregment, for
                                         * example:
                                         *
                                         * + `padding: [3, 4, 5, 6]`: represents
                                         * padding of `[top, right, bottom,
                                         * left]`.
                                         * + `padding: 4`: represents `padding:
                                         * [4, 4, 4, 4]`.
                                         * + `padding: [3, 4]`: represents `padding:
                                         * [3, 4, 3, 4]`.
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number;

                                        /**
                                         * Width of the text block.
                                         * It is the width of the text by default.
                                         * In most cases, there is no need to
                                         * specify it.
                                         * You may want to use it in some cases
                                         * like make simple table or using background
                                         * image (see `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * `width` can also be percent string,
                                         * like `'100%'`, which represents the
                                         * percent of `contentWidth` (that is,
                                         * the width without `padding`) of its
                                         * container box.
                                         * It is based on `contentWidth` because
                                         * that each text fregment is layout
                                         * based on the `content box`, where
                                         * it makes no sense that calculating
                                         * width based on `outerWith` in prectice.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string;

                                        /**
                                         * Height of the text block.
                                         * It is the width of the text by default.
                                         * You may want to use it in some cases
                                         * like using background image (see
                                         * `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number;
                                    };
                                };
                            };
                        };
                    };
                };

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animation
                 */
                animation?: boolean;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationDuration
                 */
                animationDuration?: Function | number;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=line-easing)
                 * .
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea)
                 *
                 *
                 * @default
                 * 300
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.markArea)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * `zlevel` value of all graghical elements in bar chart.
             *
             * `zlevel` is used to make layers with Canvas.
             * Graphical elements with different `zlevel` values will be placed
             * in different Canvases, which is a common optimization technique.
             * We can put those frequently changed elements (like those with
             * animations) to a seperate `zlevel`.
             * Notice that too many Canvases will increase memory cost, and
             * should be used carefully on mobile phones to avoid crash.
             *
             * Canvases with bigger `zlevel` will be placed on Canvases with
             * smaller `zlevel`.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.zlevel
             */
            zlevel?: number;

            /**
             * `z` value of all graghical elements in bar chart, which controls
             * order of drawing graphical components.
             * Components with smaller `z` values may be overwritten by those
             * with larger `z` values.
             *
             * `z` has a lower priority to `zlevel`, and will not create new
             * Canvas.
             *
             *
             * @default
             * 2
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.z
             */
            z?: number;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animation
             */
            animation?: boolean;

            /**
             * Whether to set graphic number threshold to animation.
             * Animation will be disabled when graphic number is larger than
             * threshold.
             *
             *
             * @default
             * 2000
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationThreshold
             */
            animationThreshold?: number;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             *
             * @default
             * 1000
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationDuration
             */
            animationDuration?: Function | number;

            /**
             * Easing method used for the first animation.
             * Varied easing effects can be found at
             * [easing effect example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=line-easing)
             * .
             *
             *
             * @default
             * "cubicOut"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationEasing
             */
            animationEasing?: string;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * See
             * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationDelay
             */
            animationDelay?: Function | number;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             *
             * @default
             * 300
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationEasingUpdate
             */
            animationEasingUpdate?: string;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar)
             *
             * See
             * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip
             */
            tooltip?: {

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The position of the tooltip's floating layer, which would
                 * follow the position of mouse by default.
                 *
                 * Options:
                 *
                 * + `Array`
                 *
                 * Display the position of tooltip's floating layer through
                 * array, which supports absolute position and relative percentage.
                 *
                 * Example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * + `Function`
                 *
                 * Callback function in the following form:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * **Parameters:**
                 * point: Mouse position.
                 * param: The same as formatter.
                 * dom: The DOM object of tooltip.
                 * rect: It is valid only when mouse is on graphic elements,
                 * which stands for a bounding box with `x`, `y`, `width`, and
                 * `height`.
                 * size: The size of dom echarts container.
                 * For example: `{contentSize: [width, height], viewSize: [width,
                 * height]}`.
                 *
                 * **Return:**
                 * Return value is an array standing for tooltip position, which
                 * can be absolute pixels, or relative percentage.
                 * Or can be an object, like `{left: 10, top: 30}`, or `{right:
                 * '20%', bottom: 40}`.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * Or:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * + `'inside'`
                 *
                 * Center position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'top'`
                 *
                 * Top position of the graphic element where the mouse is in,
                 * which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'left'`
                 *
                 * Left position of the graphic element where the mouse is in,
                 * which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'right'`
                 *
                 * Right position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'bottom'`
                 *
                 * Bottom position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.position
                 */
                position?: any[] | string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The content formatter of tooltip's floating layer which supports
                 * string template and callback function.
                 *
                 * **1\. String template**
                 *
                 * The template variables are `{a}`, `{b}`, `{c}`, `{d}` and
                 * `{e}`, which stands for series name, data name and data value
                 * and ect. When
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is set to be `'axis'`, there may be data from multiple series.
                 * In this time, series index can be refered as `{a0}`, `{a1}`,
                 * or `{a2}`.
                 *
                 * `{a}`, `{b}`, `{c}`, `{d}` have different meanings for different
                 * series types:
                 *
                 * + Line (area) charts, bar (column) charts, K charts: `{a}`
                 * for series name, `{b}` for category name, `{c}` for data
                 * value, `{d}` for none;
                 *
                 * + Scatter (bubble) charts: `{a}` for series name, `{b}` for
                 * data name, `{c}` for data value, `{d}` for none;
                 *
                 * + Map: `{a}` for series name, `{b}` for area name, `{c}`
                 * for merging data, `{d}` for none;
                 *
                 * + Pie charts, gauge charts, funnel charts: `{a}` for series
                 * name, `{b}` for data item name, `{c}` for data value, `{d}`
                 * for percentage.
                 *
                 * **Example:**
                 *
                 * ```
                 * formatter: '{b0}: {c0}<br />{b1}: {c1}'
                 *
                 * ```
                 *
                 * **2\. Callback function**
                 *
                 * The format of callback function:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * The first parameter `params` is the data that the formatter
                 * needs. Its format is shown as follows:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * When
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'axis'`, or when tooltip is triggered by
                 * [axisPointer](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisPointer)
                 * , `params` is the data array of multiple series.
                 * The content of each item of the array is the same as above.
                 * Besides,
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 * **Note:** Using array to present all the parameters in ECharts
                 * 2.x is not supported anymore.
                 *
                 * The second parameter `ticket` is the asynchronous callback
                 * flag which should be used along with the third parameter
                 * `callback` when it is used.
                 *
                 * The third parameter `callback` is asynchronous callback.
                 * When the content of tooltip is acquired asynchronously, `ticket`
                 * and `htm` as introduced above can be used to update tooltip
                 * with callback.
                 *
                 * Example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.formatter
                 */
                formatter?: Function | string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The background color of tooltip's floating layer.
                 *
                 *
                 * @default
                 * "rgba(50,50,50,0.7)"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.backgroundColor
                 */
                backgroundColor?: string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The border color of tooltip's floating layer.
                 *
                 *
                 * @default
                 * '#333'
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.borderColor
                 */
                borderColor?: string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The border width of tooltip's floating layer.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.borderWidth
                 */
                borderWidth?: number;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The floating layer of tooltip space around content.
                 * The unit is px.
                 * Default values for each position are 5.
                 * And they can be set to different values with left, right,
                 * top, and bottom.
                 *
                 * Examples:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip)
                 *
                 *
                 * @default
                 * 5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.padding
                 */
                padding?: number;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The text syle of tooltip's floating layer.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle
                 */
                textStyle?: {

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.color
                     */
                    color?: string;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.fontStyle
                     */
                    fontStyle?: string;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.fontWeight
                     */
                    fontWeight?: string;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 14
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.tooltip.textStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.width
                     */
                    width?: number | string;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.textStyle.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;
                };

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * Extra CSS style for floating layer.
                 * The following is an example for adding shadow.
                 *
                 * ```
                 * extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
                 *
                 * ```
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip.extraCssText
                 */
                extraCssText?: string;
            };
        }

        namespace SeriesBar {
            interface DataObject {

                /**
                 * The name of data item.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.name
                 */
                name?: string;

                /**
                 * The value of a single data item.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.value
                 */
                value?: number;

                /**
                 * The style setting of the text label in a single bar.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.show
                     */
                    show?: boolean;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * "inside"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.offset
                     */
                    offset?: any[];

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.color
                     */
                    color?: string;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.fontStyle
                     */
                    fontStyle?: string;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.fontWeight
                     */
                    fontWeight?: string;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.align
                     */
                    align?: string;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.borderRadius
                     */
                    borderRadius?: number;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.width
                     */
                    width?: number | string;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             *
                             * @default
                             * "normal"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.offset
                         */
                        offset?: any[];

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.color
                         */
                        color?: string;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.fontStyle
                         */
                        fontStyle?: string;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.fontWeight
                         */
                        fontWeight?: string;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich
                         */
                        rich?: {

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string;

                                /**
                                 * font style
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'italic'`
                                 * + `'oblique'`
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string;

                                /**
                                 * font thick weight
                                 *
                                 * Options are:
                                 *
                                 * + `'normal'`
                                 * + `'bold'`
                                 * + `'bolder'`
                                 * + `'lighter'`
                                 * + 100 | 200 | 300 | 400...
                                 *
                                 *
                                 * @default
                                 * "normal"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };
                };

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle
                 */
                itemStyle?: {

                    /**
                     * Bar color..
                     *
                     *
                     * @default
                     * "auto"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.color
                     */
                    color?: string;

                    /**
                     * The bodrder color of bar.
                     *
                     *
                     * @default
                     * '#000'
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.barBorderColor
                     */
                    barBorderColor?: string;

                    /**
                     * The bodrder width of bar. defaults to have no border.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.barBorderWidth
                     */
                    barBorderWidth?: number;

                    /**
                     * The radius of rounded corner.
                     * Its unit is px.
                     * And it supports use array to respectively specify the
                     * 4 corner radiuses.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.barBorderRadius
                     */
                    barBorderRadius?: any[] | number;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis
                     */
                    emphasis?: {

                        /**
                         * Bar color..
                         *
                         *
                         * @default
                         * "auto"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * The bodrder color of bar.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.barBorderColor
                         */
                        barBorderColor?: string;

                        /**
                         * The bodrder width of bar.
                         * defaults to have no border.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.barBorderWidth
                         */
                        barBorderWidth?: number;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.itemStyle.emphasis)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * tooltip settings in this series data.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip
                 */
                tooltip?: {

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The position of the tooltip's floating layer, which would
                     * follow the position of mouse by default.
                     *
                     * Options:
                     *
                     * + `Array`
                     *
                     * Display the position of tooltip's floating layer through
                     * array, which supports absolute position and relative
                     * percentage.
                     *
                     * Example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * + `Function`
                     *
                     * Callback function in the following form:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * **Parameters:**
                     * point: Mouse position.
                     * param: The same as formatter.
                     * dom: The DOM object of tooltip.
                     * rect: It is valid only when mouse is on graphic elements,
                     * which stands for a bounding box with `x`, `y`, `width`,
                     * and `height`.
                     * size: The size of dom echarts container.
                     * For example: `{contentSize: [width, height], viewSize:
                     * [width, height]}`.
                     *
                     * **Return:**
                     * Return value is an array standing for tooltip position,
                     * which can be absolute pixels, or relative percentage.
                     * Or can be an object, like `{left: 10, top: 30}`, or `{right:
                     * '20%', bottom: 40}`.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * Or:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * + `'inside'`
                     *
                     * Center position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'top'`
                     *
                     * Top position of the graphic element where the mouse is
                     * in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'left'`
                     *
                     * Left position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'right'`
                     *
                     * Right position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'bottom'`
                     *
                     * Bottom position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.position
                     */
                    position?: any[] | string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The content formatter of tooltip's floating layer which
                     * supports string template and callback function.
                     *
                     * **1\. String template**
                     *
                     * The template variables are `{a}`, `{b}`, `{c}`, `{d}`
                     * and `{e}`, which stands for series name, data name and
                     * data value and ect. When
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is set to be `'axis'`, there may be data from multiple
                     * series.
                     * In this time, series index can be refered as `{a0}`,
                     * `{a1}`, or `{a2}`.
                     *
                     * `{a}`, `{b}`, `{c}`, `{d}` have different meanings for
                     * different series types:
                     *
                     * + Line (area) charts, bar (column) charts, K charts:
                     * `{a}` for series name, `{b}` for category name, `{c}`
                     * for data value, `{d}` for none;
                     *
                     * + Scatter (bubble) charts: `{a}` for series name, `{b}`
                     * for data name, `{c}` for data value, `{d}` for none;
                     *
                     * + Map: `{a}` for series name, `{b}` for area name, `{c}`
                     * for merging data, `{d}` for none;
                     *
                     * + Pie charts, gauge charts, funnel charts: `{a}` for
                     * series name, `{b}` for data item name, `{c}` for data
                     * value, `{d}` for percentage.
                     *
                     * **Example:**
                     *
                     * ```
                     * formatter: '{b0}: {c0}<br />{b1}: {c1}'
                     *
                     * ```
                     *
                     * **2\. Callback function**
                     *
                     * The format of callback function:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * The first parameter `params` is the data that the formatter
                     * needs. Its format is shown as follows:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * When
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'axis'`, or when tooltip is triggered by
                     * [axisPointer](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisPointer)
                     * , `params` is the data array of multiple series.
                     * The content of each item of the array is the same as
                     * above. Besides,
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     * **Note:** Using array to present all the parameters in
                     * ECharts 2.x is not supported anymore.
                     *
                     * The second parameter `ticket` is the asynchronous callback
                     * flag which should be used along with the third parameter
                     * `callback` when it is used.
                     *
                     * The third parameter `callback` is asynchronous callback.
                     * When the content of tooltip is acquired asynchronously,
                     * `ticket` and `htm` as introduced above can be used to
                     * update tooltip with callback.
                     *
                     * Example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The background color of tooltip's floating layer.
                     *
                     *
                     * @default
                     * "rgba(50,50,50,0.7)"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.backgroundColor
                     */
                    backgroundColor?: string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The border color of tooltip's floating layer.
                     *
                     *
                     * @default
                     * '#333'
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.borderColor
                     */
                    borderColor?: string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The border width of tooltip's floating layer.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The floating layer of tooltip space around content.
                     * The unit is px.
                     * Default values for each position are 5.
                     * And they can be set to different values with left, right,
                     * top, and bottom.
                     *
                     * Examples:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip)
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.padding
                     */
                    padding?: number;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The text syle of tooltip's floating layer.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle
                     */
                    textStyle?: {

                        /**
                         * text color.
                         *
                         *
                         * @default
                         * "#fff"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.color
                         */
                        color?: string;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.fontStyle
                         */
                        fontStyle?: string;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         *
                         * @default
                         * "normal"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.fontWeight
                         */
                        fontWeight?: string;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 14
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.bar.data.tooltip.textStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.textStyle.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * Extra CSS style for floating layer.
                     * The following is an example for adding shadow.
                     *
                     * ```
                     * extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
                     *
                     * ```
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.data.tooltip.extraCssText
                     */
                    extraCssText?: string;
                };
            }
        }
    }
}
