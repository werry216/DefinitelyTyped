// Type definitions for fast-diff 1.1
// Project: https://github.com/jhchen/fast-diff#readme
// Definitions by: John Renner <https://github.com/djrenren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function diff(text1: string, text2: string, cursorPos?: number): diff.Diff[];

declare namespace diff {
    type Diff = [-1 | 0 | 1, string];

    const DIFF_DELETE: -1;
    const DIFF_INSERT: 1;
    const DIFF_EQUAL: 0;
}

export = diff;
