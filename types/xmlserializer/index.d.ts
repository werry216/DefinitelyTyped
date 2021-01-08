// Type definitions for xmlserializer 0.6
// Project: https://github.com/cburgmer/xmlserializer#readme
// Definitions by: Eoin O'Brien <https://github.com/eoin-obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as parse5 from 'parse5';

export as namespace xmlserializer;

/**
 * Serializes a DOM subtree or DOM document into XML/XHTML.
 *
 * It understands documents generated by `parse5` and regular browser DOMs (and
 * thus can act as a drop-in replacement for `XMLSerializer` which for some
 * browsers only serializes true XML documents).
 *
 * Currently some cases are treated differently to the `XMLSerializer`
 * implementation of the browsers:
 *
 * - Invalid characters (ASCII control characters) that are invalid in XML 1.0
 * are removed on serialization. The browsers silently include those
 * characters and on reparsing those documents throw a parser exception.
 * - Dashes in comments are escaped to provide valid comments in XHTML. Firefox
 * does not do this.
 * - The xmlns attribute has higher precedence than the type of the DOM object
 * passed to the serializer.
 * - Small differences in style: no space in self-closing tag, empty value for
 * boolean attributes, quoting of single apostrophes in attribute values.
 *
 * This behaviour might become optional in the future.
 *
 * @example
 * import * as xmlserializer from 'xmlserializer';
 * import * as parse5 from 'parse5';
 *
 * const html2xhtml = (htmlString: string) => {
 *    const dom = parse5.parse(htmlString);
 *    return xmlserializer.serializeToString(dom);
 * };
 *
 * console.log(html2xhtml('<br>'));
 *
 * @param node the DOM element to be serialized to XML/XHTML
 */
export function serializeToString(node: parse5.Node): string;
