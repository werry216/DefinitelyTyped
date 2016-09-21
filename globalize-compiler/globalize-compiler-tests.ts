///<reference path="globalize-compiler.d.ts" />

import globalizeCompiler = require("globalize-compiler");
const globalize: GlobalizeStatic = null;

let extractsArray: GlobalizeCompiler.FormatterOrParserFunction[];

const templateFunction: (options: GlobalizeCompiler.CompileTemplateOptions) => string =
  (options: GlobalizeCompiler.CompileTemplateOptions): string => {
    const deps: string[] = options.dependencies;
    const code: string = options.code;
    return `${deps.join(';')}${code}`;
  };

let compileOutput: string;
compileOutput = globalizeCompiler.compile(extractsArray);
compileOutput = globalizeCompiler.compile({ x: () => "test", y: (x: string) => x });
compileOutput = globalizeCompiler.compile(extractsArray, { template: templateFunction });
compileOutput = globalizeCompiler.compile({ x: () => "test", y: (x: string) => x }, { template: templateFunction });

let extractOutput: GlobalizeCompiler.ExtractFunction;
extractOutput = globalizeCompiler.extract("path");

const ast: ESTree.Program = undefined;
extractOutput = globalizeCompiler.extract(ast);

extractsArray = extractOutput(globalize);

compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en" });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", messages: {} });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", template: templateFunction });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", messages: {}, template: templateFunction });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", cldr: {} });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", cldr: {}, messages: {} });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", cldr: {}, template: templateFunction });
compileOutput = globalizeCompiler.compileExtracts({ extracts: extractOutput, defaultLocale: "en", cldr: {}, messages: {}, template: templateFunction });
