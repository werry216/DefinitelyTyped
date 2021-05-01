// Type definitions for xo 0.39
// Project: https://github.com/xojs/xo#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Chuah Chee Shian (shian15810) <https://github.com/shian15810>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import eslint = require("eslint");

// eslint.CLIEngine.getErrorResults without modification
// eslint.CLIEngine.getFormatter without modification
// eslint.CLIEngine.outputFixes redeclared to match input shape

/**
 * Can be used to filter out all the non error messages from the report object.
 */
export const getErrorResults: typeof eslint.CLIEngine.getErrorResults;
/**
 * Returns the formatter representing the given format
 * or null if no formatter with the given name can be found.
 * see {@link https://github.com/eslint/eslint/blob/master/docs/developer-guide/nodejs-api.md#clienginegetformatter}
 */
export const getFormatter: typeof eslint.CLIEngine.prototype.getFormatter;
/**
 * Used to output fixes from report to disk.
 * It does by looking for files that have an output property in their results
 */
export function outputFixes(report: ResultReport): void;

export function lintText(text: string, options?: Options): ResultReport;
export function lintFiles(patterns: string | string[], options?: Options): ResultReport | Promise<ResultReport>;

export type CLIEngineOptions = Pick<
    eslint.CLIEngine.Options,
    "baseConfig" | "cwd" | "envs" | "extensions" | "fix" | "globals" | "ignore" | "parser" | "plugins" | "rules"
>;
export type ESLintOptions = Pick<eslint.Linter.LintOptions, "filename">;
export type ESLintConfig = Pick<eslint.Linter.Config, "extends" | "settings">;

export type Options = {
    /** Some paths are ignored by default, including paths in .gitignore and .eslintignore. Additional ignores can be added here */
    ignores?: string[];
    /** Enable rules specific to the Node.js versions within the configured range */
    nodeVersion?: string | boolean;
    /** Format code with Prettier */
    prettier?: boolean;
    /**
     *  Print the ESLint configuration for the given file
     */
    printConfig?: string;
    /** Set it to false to enforce no-semicolon style. */
    semicolon?: boolean;
    /** Set it to true to get 2-space indentation or specify the number of spaces. */
    space?: boolean | number;
    /**
     * Use {@link https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack}
     * to resolve import search paths. This is enabled automatically if a `webpack.config.js` file is found.
     * Set this to a boolean to explicitly enable or disable the resolver.
     * @default false
     */
    webpack?: boolean | object;
} & CLIEngineOptions &
    ESLintConfig &
    ESLintOptions;

export interface ResultReport {
    readonly errorCount: number;
    readonly warningCount: number;
    readonly results: eslint.CLIEngine.LintResult[];
}
