// Type definitions for html-minifier 4.0
// Project: https://github.com/kangax/html-minifier, https://kangax.github.io/html-minifier
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Riku <https://github.com/rikuayanokozy>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as UglifyJS from 'uglify-js';
import * as CleanCSS from 'clean-css';
import * as RelateUrl from 'relateurl';

export function minify(text: string, options?: Options): string;

export interface Options {
    // Treat attributes in case sensitive manner (useful for custom HTML tags)
    caseSensitive?: boolean;

    // Omit attribute values from boolean attributes
    collapseBooleanAttributes?: boolean;

    // Don't leave any spaces between display:inline; elements when collapsing. Must be used in conjunction with collapseWhitespace=true
    collapseInlineTagWhitespace?: boolean;

    /**
     * Collapse white space that contributes to text nodes in a document tree
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#collapse_whitespace
     */
    collapseWhitespace?: boolean;

    // Always collapse to 1 space (never remove it entirely). Must be used in conjunction with collapseWhitespace=true
    conservativeCollapse?: boolean;
    /**
     * Handle parse errors instead of aborting
     * @default false
     */
    continueOnParseError?: boolean;

    // Arrays of regex'es that allow to support custom attribute assign expressions (e.g. '<div flex?="{{mode != cover}}"></div>')
    customAttrAssign?: RegExp[];

    // Regex that specifies custom attribute to strip newlines from (e.g. /ng-class/)
    customAttrCollapse?: RegExp;

    // Arrays of regex'es that allow to support custom attribute surround expressions (e.g. <input {{#if value}}checked="checked"{{/if}}>)
    customAttrSurround?: RegExp[];

    // Arrays of regex'es that allow to support custom event attributes for minifyJS (e.g. ng-click)
    customEventAttributes?: RegExp[];

    // Use direct Unicode characters whenever possible
    decodeEntities?: boolean;

    // Parse input according to HTML5 specifications
    html5?: boolean;

    // Array of regex'es that allow to ignore certain comments, when matched
    ignoreCustomComments?: RegExp[];

    // Array of regex'es that allow to ignore certain fragments, when matched (e.g. <?php ... ?>, {{ ... }}, etc.)
    ignoreCustomFragments?: RegExp[];

    // Insert tags generated by HTML parser
    includeAutoGeneratedTags?: boolean;

    // Keep the trailing slash on singleton elements
    keepClosingSlash?: boolean;

    // Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points
    maxLineLength?: number;

    // Minify CSS in style elements and style attributes (uses clean-css or function specified)
    minifyCSS?: boolean | CleanCSS.Options | ((text: string) => string);

    // Minify JavaScript in script elements and event attributes (uses UglifyJS or function specified)
    minifyJS?: boolean | UglifyJS.MinifyOptions | ((text: string, inline: boolean) => string);

    // Minify URLs in various attributes (uses relateurl or function specified)
    minifyURLs?: boolean | RelateUrl.Options | ((text: string) => string);

    // Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break. Must be used in conjunction with collapseWhitespace=true
    preserveLineBreaks?: boolean;

    // Prevents the escaping of the values of attributes
    preventAttributesEscaping?: boolean;

    // Process contents of conditional comments through minifier
    processConditionalComments?: boolean;

    // Array of strings corresponding to types of script elements to process through minifier (e.g. text/ng-template, text/x-handlebars-template, etc.)
    processScripts?: string[];

    // Type of quote to use for attribute values (' or ")
    quoteCharacter?: string;

    /**
     * Remove quotes around attributes when possible
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#remove_attribute_quotes
     */
    removeAttributeQuotes?: boolean;

    /**
     * Strip HTML comments
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#remove_comments
     */
    removeComments?: boolean;

    /**
     * Remove all attributes with whitespace-only values
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#remove_empty_or_blank_attributes
     */
    removeEmptyAttributes?: boolean | ((attrName: string, tag: string) => boolean);

    /**
     * Remove all elements with empty contents
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#remove_empty_elements
     */
    removeEmptyElements?: boolean;

    /**
     * Remove optional tags
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#remove_optional_tags
     */
    removeOptionalTags?: boolean;

    /**
     * Remove attributes when value matches default.
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#remove_redundant_attributes
     */
    removeRedundantAttributes?: boolean;

    // Remove type="text/javascript" from script tags. Other type attribute values are left intact
    removeScriptTypeAttributes?: boolean;

    // Remove type="text/css" from style and link tags. Other type attribute values are left intact
    removeStyleLinkTypeAttributes?: boolean;

    // Remove space between attributes whenever possible. Note that this will result in invalid HTML!
    removeTagWhitespace?: boolean;

    /**
     * Sort attributes by frequency
     *
     * Minifier options like sortAttributes and sortClassName won't impact the plain-text size
     * of the output. However, they form long repetitive chains of characters that should improve
     * compression ratio of gzip used in HTTP compression.
     *
     * @see https://github.com/kangax/html-minifier#sorting-attributes--style-classes
     */
    sortAttributes?: boolean;

    /**
     * Sort style classes by frequency
     *
     * Minifier options like sortAttributes and sortClassName won't impact the plain-text size
     * of the output. However, they form long repetitive chains of characters that should improve
     * compression ratio of gzip used in HTTP compression.
     *
     * @see https://github.com/kangax/html-minifier#sorting-attributes--style-classes
     */
    sortClassName?: boolean;

    // Trim white space around ignoreCustomFragments
    trimCustomFragments?: boolean;

    /**
     * Replaces the doctype with the short (HTML5) doctype
     * @see http://perfectionkills.com/experimenting-with-html-minifier/#use_short_doctype
     */
    useShortDoctype?: boolean;
}
