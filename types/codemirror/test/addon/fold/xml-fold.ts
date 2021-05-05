import * as CodeMirror from 'codemirror';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/xml-fold';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.xml);
