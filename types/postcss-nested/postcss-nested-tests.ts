import * as postcss from 'postcss';
import * as nested from 'postcss-nested';

const withDefaultOptions: postcss.Transformer = nested();
const withCustomOptions: postcss.Transformer = nested({
    bubble: ['phone'],
    unwrap: ['phone'],
    preserveEmpty: true
});

postcss().use(withDefaultOptions);
postcss().use(withCustomOptions);
