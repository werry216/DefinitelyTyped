// Type definitions for react-copy-to-clipboard 4.2
// Project: https://github.com/nkbt/react-copy-to-clipboard
// Definitions by: Meno Abels <https://github.com/mabels>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from "react";

export as namespace CopyToClipboard;

export = CopyToClipboard;

declare namespace CopyToClipboard {

  export interface Options {
    debug: boolean;
    message: string;
  }

  export interface Props {
    text: string;
    onCopy: (a: string) => void,
    options?: Options;
  }

}

declare class CopyToClipboard extends React.Component<CopyToClipboard.Props, {}> {
}

