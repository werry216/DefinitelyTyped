import * as buble from 'buble';

const input = 'const answer = () => 42;';

// Simple transform
(() => {
    const output = buble.transform(input);

    console.log(output.code);
    console.log(output.map.toString());
    console.log(output.map.toUrl());
})();

// Transform for Chrome & Firefox
(() => {
    const output = buble.transform(input, {
        target: {
            chrome: 71,
            firefox: 64,
        },
    });
})();

// Transform with sourcemaps support
(() => {
    const output = buble.transform(input, {
        source: 'input.js',
        file: 'output.js',
        includeContent: true,
    });
})();

// Transform for Preact
(() => {
    const output = buble.transform(input, {
        jsx: 'h'
    });
})();

// Transform with Object assign/spread support
(() => {
    let output = buble.transform(input, {
        objectAssign: true,
    });
    output = buble.transform(input, {
        objectAssign: 'MyCustomObjectAssign',
    });
})();

// Transform with every transforms
(() => {
    const output = buble.transform(input, {
        transforms: {
            arrow: true,
            classes: false,
            collections: true,
            computedProperty: false,
            conciseMethodProperty: true,
            constLoop: false,
            dangerousForOf: true,
            dangerousTaggedTemplateString: false,
            defaultParameter: true,
            destructuring: false,
            forOf: true,
            generator: false,
            letConst: true,
            modules: false,
            numericLiteral: true,
            parameterDestructuring: false,
            reservedProperties: true,
            spreadRest: false,
            stickyRegExp: true,
            templateString: false,
            unicodeRegExp: true,
        }
    });
})();
