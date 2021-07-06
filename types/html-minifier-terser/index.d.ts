// Type definitions for html-minifier-terser 5.1
// Project: https://github.com/terser/html-minifier-terser#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * HTMLMinifier is a highly configurable, well-tested, JavaScript-based HTML minifier.
 */
export function minify(value: string, options?: Options): string;

/**
 * Most of the options are disabled by default
 */
export interface Options {
    /**
     * Treat attributes in case sensitive manner (useful for custom HTML tags)
     * @default false
     */
    caseSensitive?: boolean | undefined;
    /**
     * Omit attribute values from boolean attributes
     * @default false
     */
    collapseBooleanAttributes?: boolean | undefined;
    /**
     * Don't leave any spaces between display:inline;
     * elements when collapsing. Must be used in conjunction with collapseWhitespace=true
     * @default false
     */
    collapseInlineTagWhitespace?: boolean | undefined;
    /**
     * Collapse white space that contributes to text nodes in a document tree
     * @default false
     */
    collapseWhitespace?: boolean | undefined;
    /**
     * Always collapse to 1 space (never remove it entirely). Must be used in conjunction with `collapseWhitespace=true`
     * @default false
     */
    conservativeCollapse?: boolean | undefined;
    /**
     * Handle parse errors
     * @default false
     */
    continueOnParseError?: boolean | undefined;
    /**
     * Arrays of regex'es that allow to support custom attribute assign expressions (e.g. `'<div flex?="{{mode != cover}}"></div>'`)
     * @default []
     */
    customAttrAssign?: RegExp[] | undefined;
    /**
     * Regex that specifies custom attribute to strip newlines from (e.g. `/ng-class/`
     */
    customAttrCollapse?: RegExp | undefined;
    /**
     * Arrays of regex'es that allow to support custom attribute surround expressions (e.g. `<input {{#if value}}checked="checked"{{/if}}>`)
     * @default []
     */
    customAttrSurround?: RegExp[] | undefined;
    /**
     * Arrays of regex'es that allow to support custom event attributes for `minifyJS` (e.g. `ng-click`)
     * @default [/^on[a-z]{3,}$/]
     */
    customEventAttributes?: RegExp[] | undefined;
    /**
     * Use direct Unicode characters whenever possible
     * @default false
     */
    decodeEntities?: boolean | undefined;
    /**
     * Parse input according to HTML5 specifications
     * @default true
     */
    html5?: boolean | undefined;
    /**
     * Array of regex'es that allow to ignore certain comments, when matched
     * @default [ /^!/, /^\s*#/ ]
     */
    ignoreCustomComments?: RegExp[] | undefined;
    /**
     * Array of regex'es that allow to ignore certain fragments, when matched (e.g. `<?php ... ?>`, `{{ ... }}`, etc.)
     * @default [/<%[\s\S]*?%>/, /<\?[\s\S]\*?\?>/]
     */
    ignoreCustomFragments?: RegExp[] | undefined;
    /**
     * Insert tags generated by HTML parser
     * @default true
     */
    includeAutoGeneratedTags?: boolean | undefined;
    /**
     * Keep the trailing slash on singleton elements
     * @default false
     */
    keepClosingSlash?: boolean | undefined;
    /**
     * Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points
     */
    maxLineLength?: number | undefined;
    /**
     * Minify CSS in style elements and style attributes
     * @default false
     */
    minifyCSS?: boolean | object | ((text: string, type?: string) => string) | undefined;
    /**
     * Minify JavaScript in script elements and event attributes
     * @default false
     */
    minifyJS?: boolean | object | ((text: string, inline?: boolean) => string) | undefined;
    /**
     * Minify URLs in various attributes
     * @default false
     */
    minifyURLs?: boolean | string | object | ((text: string) => string) | undefined;
    /**
     * Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break.
     * Must be used in conjunction with `collapseWhitespace=true`
     * @default false
     */
    preserveLineBreaks?: boolean | undefined;
    /**
     * Prevents the escaping of the values of attributes
     * @default false
     */
    preventAttributesEscaping?: boolean | undefined;
    /**
     * Process contents of conditional comments through minifier
     * @default false
     */
    processConditionalComments?: boolean | undefined;
    /**
     * Array of strings corresponding to types of script elements to process through minifier
     * (e.g. `text/ng-template`, `text/x-handlebars-template`, etc.)
     * @default []
     */
    processScripts?: string[] | undefined;
    /**
     * Type of quote to use for attribute values (' or ")
     */
    quoteCharacter?: string | undefined;
    /**
     * Remove quotes around attributes when possible
     * @default false
     */
    removeAttributeQuotes?: boolean | undefined;
    /**
     * Strip HTML comments
     * @default false
     */
    removeComments?: boolean | undefined;
    /**
     * Remove all attributes with whitespace-only values
     * @default false
     */
    removeEmptyAttributes?: boolean | ((attrName: string, tag: string) => boolean) | undefined;
    /**
     * Remove all elements with empty contents
     * @default false
     */
    removeEmptyElements?: boolean | undefined;
    /**
     * Remove optional tags
     * @default false
     */
    removeOptionalTags?: boolean | undefined;
    /**
     * Remove attributes when value matches default
     * @default false
     */
    removeRedundantAttributes?: boolean | undefined;
    /**
     * Remove `type="text/javascript"` from `script` tags. Other `type` attribute values are left intact
     * @default false
     */
    removeScriptTypeAttributes?: boolean | undefined;
    /**
     * Remove `type="text/css"` from `style` and `link` tags. Other `type` attribute values are left intact
     * @default false
     */
    removeStyleLinkTypeAttributes?: boolean | undefined;
    /**
     * Remove space between attributes whenever possible. **Note that this will result in invalid HTML!**
     * @default false
     */
    removeTagWhitespace?: boolean | undefined;
    /**
     * Sort attributes by frequency
     * @default false
     */
    sortAttributes?: boolean | undefined;
    /**
     * Sort style classes by frequency
     * @default false
     */
    sortClassName?: boolean | undefined;
    /**
     * Trim white space around `ignoreCustomFragments`
     * @default false
     */
    trimCustomFragments?: boolean | undefined;
    /**
     * Replaces the `doctype` with the short (HTML5) doctype
     * @default false
     */
    useShortDoctype?: boolean | undefined;
}
