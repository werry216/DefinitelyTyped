import vfile = require("vfile");

const file = vfile({
    path: '~/example.txt',
    contents: 'Alpha *braavo* charlie.',
    custom: 'Custom tango',
    data: {
        custom: 12345
    }
});

file.path; // => '~/example.txt'
file.dirname; // => '~'

file.extname = '.md';

file.basename; // => 'example.md'

file.basename = 'index.text';

file.history; // => ['~/example.txt', '~/example.md', '~/index.text']

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8});

console.log(file.messages);

// Keep typings of custom data
const custom: string = file.custom; // 'Custom tango'
const dataCustom: number = file.data.custom; // 12345
