
import * as GoogleClosureCompiler from 'google-closure-compiler';

// See
//   https://github.com/chadkillingsworth/closure-compiler-npm#plugin-authors-and-native-node-usage
// for the API example.  This code tries to do the exact same thing.

let ClosureCompiler = GoogleClosureCompiler.compiler;

console.log(ClosureCompiler.COMPILER_PATH)
console.log(ClosureCompiler.CONTRIB_PATH)

let options: GoogleClosureCompiler.CompileOptions = {
    js: 'file-one.js',
    compilation_level: 'ADVANCED',
};
let closureCompiler = new ClosureCompiler(options);
let compilerProcess = closureCompiler.run((exitCode, stdout, stderr) => {
    // ...
});

let jsonStream: GoogleClosureCompiler.JSONStreamFile[] = [
    {
        path: 'foo.js',
        src: 'var x = "hello, world";',
    },
];
