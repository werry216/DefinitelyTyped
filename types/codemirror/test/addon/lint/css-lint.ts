import CodeMirror = require('codemirror');
import 'codemirror/addon/lint/css-lint';
import 'codemirror/addon/lint/lint';

const cm: CodeMirror.Editor = CodeMirror(document.body, {
    lint: {
        getAnnotations: CodeMirror.lint.css,
    }
});
