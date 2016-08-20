// Type definitions for karma-fixture 0.2.6
// Project: https://github.com/billtrik/karma-fixture
// Definitions by: Ezekiel Victor <https://github.com/evictor/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module fixture {
  var el: HTMLElement;
  var json: any[];

  function load(...files: string[]): any;
  function load(file1: string, append?: boolean): any;
  function load(file1: string, file2: string, append?: boolean): any;
  function load(file1: string, file2: string, file3: string, append?: boolean): any;
  function load(file1: string, file2: string, file3: string, file4: string, append?: boolean): any;
  function load(file1: string, file2: string, file3: string, file4: string, file5: string, append?: boolean): any;

  function set(...htmlStrs: string[]): HTMLElement|HTMLElement[];
  function set(htmlStr1: string, append?: boolean): HTMLElement|HTMLElement[];
  function set(htmlStr1: string, htmlStr2: string, append?: boolean): HTMLElement|HTMLElement[];
  function set(htmlStr1: string, htmlStr2: string, htmlStr3: string, append?: boolean): HTMLElement|HTMLElement[];
  function set(htmlStr1: string, htmlStr2: string, htmlStr3: string, htmlStr4: string, append?: boolean): HTMLElement|HTMLElement[];
  function set(htmlStr1: string, htmlStr2: string, htmlStr3: string, htmlStr4: string, htmlStr5: string, append?: boolean): HTMLElement|HTMLElement[];

  function cleanup(): void;

  function setBase(fixtureBasePath: string): void;
}
