import prompts = require('prompts');

type HasProperty<T, K> = K extends keyof T ? true : false;

(async () => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: 'Input value to double:',
        validate: (value: any) => (value < 0 ? `Cant be less than zero` : true),
    });
    const HasPropValue: HasProperty<typeof response, 'value'> = true;
    const DoesntHavePropAsdf: HasProperty<typeof response, 'asdf'> = false;
})();

(async () => {
    await prompts([
        {
            type: 'text',
            name: 'language',
            message: 'What langauge is the next greatest thing since sliced bread?',
        },
        {
            type: (prev, values) => {
                const HasPromptName: HasProperty<typeof values, 'language'> = true;
                const DoesntHavePromptTypes: HasProperty<typeof values, 'text'> = false;

                return prev === 'javascript' ? 'confirm' : null;
            },
            name: 'confirmation',
            message: 'Have you tried TypeScript?',
        },
        {
            type: 'select',
            name: 'so-many-options',
            message: 'options, options!!',
            choices: [
                {
                    title: 'A',
                    value: 'A',
                },
                {
                    title: 'B',
                    value: { foo: 'bar' },
                },
                {
                    title: 'C',
                    value: 'C',
                    disabled: false,
                    selected: false,
                    description: 'a description',
                },
            ],
            warn: 'Warning, option is disabled'
        },
        {
            type: 'multiselect',
            name: 'choices',
            message: `why don't we have both?`,
            instructions: false,
            choices: [
                {
                    value: 'A',
                    title: 'A',
                },
                {
                    value: 'B',
                    title: 'B',
                },
            ],
            warn: 'Warning, option is disabled'
        },
    ]);
})();

(async () => {
    await prompts([
        {
            type: 'select',
            name: 'choices',
            instructions: false,
            message: 'options, options!!',
            choices: [
                {
                    value: 'A',
                    title: 'A',
                },
                {
                    value: 'B',
                    title: 'B',
                },
            ],
            warn: 'Warning, option is disabled'
        },
        {
            type: 'select',
            name: 'subchoices',
            message: 'optionception!',
            choices: (prev) => {
                return [
                    {
                        value: prev + 'A',
                        title: prev + 'A',
                    },
                    {
                        value: prev + 'B',
                        title: prev + 'B',
                    },
                ];
             },
        },
    ]);
})();
