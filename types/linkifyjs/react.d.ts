import * as React from "react";
import { LinkifyOptions } from "./index";

export interface LinkifyProps {
    options?: LinkifyOptions;
}

declare class Linkify extends React.Component<LinkifyProps> {}

export default Linkify;
