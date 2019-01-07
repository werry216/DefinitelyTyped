// Type definitions for node-xlsx 0.12
// Project: https://github.com/mgcrea/node-xlsx#readme
// Definitions by: chenc <https://github.com/cWatermelon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * parsing a xlsx from file/buffer, outputs an object of worksheets
 * @param mixed file or buffer
 * @param options options is for xlsx
 * @returns worksheets data, like: [{ name, data: [[]] }]
 */
export declare function parse(
    mixed: any,
    options?: {}
  ): Array<{
    name: string;
    data: Array<[]>;
  }>;

  /**
   * building a xlsx
   * @param worksheets worksheets data, like:[[1,2,3],['1', '2','word']]
   * @param options spannig multiple rows A1:A4
   * @returns returns a buffer of worksheets
   */
  export declare function build(worksheets: any, options?: {}): any;
  declare const _default: {
    parse: typeof parse;
    build: typeof build;
  };
  export default _default;
