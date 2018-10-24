import * as MarkdownIt from ".";
import * as Token from "./token";

export = Renderer;

declare class Renderer {
    rules: { [name: string]: MarkdownIt.TokenRender };
    render(tokens: Token[], options: any, env: any): string;
    renderAttrs(token: Token): string;
    renderInline(tokens: Token[], options: any, env: any): string;
    renderToken(tokens: Token[], idx: number, options: any): string;
}

declare module Renderer {}
