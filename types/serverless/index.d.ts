// Type definitions for serverless 1.78
// Project: https://github.com/serverless/serverless#readme
// Definitions by: Hassan Khan <https://github.com/hassankhan>
//                 Jonathan M. Wilbur <https://github.com/JonathanWilbur>
//                 Alex Pavlenko <https://github.com/a-pavlenko>
//                 Frédéric Barthelet <https://github.com/fredericbarthelet>
//                 Bryan Hunter <https://github.com/bryan-hunter>
//                 Thomas Aribart <https://github.com/thomasaribart>
//                 Gareth Jones <https://github.com/G-Rath>
//                 Abdullah Ali <https://github.com/AbdullahAli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Service = require('./classes/Service');
import Plugin = require('./classes/Plugin');
import PluginManager = require('./classes/PluginManager');
import Utils = require('./classes/Utils');
import YamlParser = require('./classes/YamlParser');
import AwsProvider = require('./plugins/aws/provider/awsProvider');
import ApiGatewayValidate = require('./plugins/aws/package/compile/events/apiGateway/lib/validate');

declare namespace Serverless {
    interface Options {
        function?: string | undefined;
        watch?: boolean | undefined;
        extraServicePath?: string | undefined;
        stage: string | null;
        region: string | null;
        noDeploy?: boolean | undefined;
    }

    interface Config {
        servicePath: string;
    }

    interface FunctionDefinition {
        name?: string | undefined;
        package?: Package | undefined;
        reservedConcurrency?: number | undefined;
        runtime?: string | undefined;
        timeout?: number | undefined;
        memorySize?: number | undefined;
        environment?: { [name: string]: string } | undefined;
        events: Event[];
        tags?: { [key: string]: string } | undefined;
    }

    interface LogOptions {
        color?: string;
        bold?: boolean;
        underline?: boolean;
        entity?: string;
    }

    interface FunctionDefinitionHandler extends FunctionDefinition {
        handler: string;
    }

    interface FunctionDefinitionImage extends FunctionDefinition {
        image: string;
    }

    // Other events than ApiGatewayEvent are available
    type Event = ApiGatewayValidate.ApiGatewayEvent | object;

    interface Package {
        /** @deprecated use `patterns` instead */
        include?: string[] | undefined;
        /** @deprecated use `patterns` instead */
        exclude?: string[] | undefined;
        patterns?: string[] | undefined;
        artifact?: string | undefined;
        individually?: boolean | undefined;
    }
}

declare class Serverless {
    constructor(config?: {});

    init(): Promise<any>;
    run(): Promise<any>;

    setProvider(name: string, provider: AwsProvider): null;
    getProvider(name: string): AwsProvider;

    getVersion(): string;

    cli: {
        log(message: string, entity?: string, options?: Serverless.LogOptions): null;
    };

    providers: {};
    utils: Utils;
    variables: {
        populateService(): Promise<any>;
    };
    yamlParser: YamlParser;
    pluginManager: PluginManager;

    config: Serverless.Config;
    serverlessDirPath: string;

    service: Service;
    version: string;

    resources: AwsProvider.Resources;

    configSchemaHandler: {
        defineCustomProperties(schema: unknown): void;
        defineFunctionEvent(provider: string, event: string, schema: Record<string, unknown>): void;
        defineFunctionEventProperties(provider: string, existingEvent: string, schema: unknown): void;
        defineFunctionProperties(provider: string, schema: unknown): void;
        defineProvider(provider: string, options?: Record<string, unknown>): void;
        defineTopLevelProperty(provider: string, schema: Record<string, unknown>): void;
    };
}

export = Serverless;
