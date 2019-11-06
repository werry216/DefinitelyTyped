import { FluentBundle, FluentDateTime, FluentError, FluentNumber, FluentResource, Scope } from '@fluent/bundle';

// FluentBundle examples:
const bundle = new FluentBundle(['en-US']);

// FluentResource examples:
const resource = new FluentResource(`test=Some other message`);
bundle.addResource(resource, { allowOverrides: true });
const msg = bundle.getMessage('test');
if (msg && msg.value) {
    const formatted = bundle.formatPattern(msg.value);
}

// Fluent type examples:
const num = new FluentNumber(6);
const err = new FluentError('argh');
const dt = new FluentDateTime(new Date(2000, 0, 1));

// Scope examples:
class DummyScope implements Scope {
    cloneForTermReference(args: object): Scope {
        return this;
    }
    reportError(error: string): void {
    }
    memoizeIntlObject<OptsType, ObjectType>(
        ctor: new (locales: string[], opts: OptsType) => ObjectType,
        opts: OptsType,
    ): ObjectType {
        return new ctor([], opts);
    }
}
const scope = new DummyScope();
const test = `${num.toString(scope)} ${dt.toString(scope)}`;

interface IntlOpts {
    flurble: number;
}

class IntlTest {
    constructor(locales: string[], opts: IntlOpts) {}
    flarble() {
        return 'aha';
    }
}

const intlTest = scope.memoizeIntlObject(IntlTest, { flurble: 42 });
const aha = intlTest.flarble();
