import './show-hint';

declare module '../../' {
    interface HintHelpers {
        sql: HintFunction;
    }

    interface SqlHintTable {
        columns: string[];
    }

    interface ShowHintOptions {
        tables?: ReadonlyArray<string | { text: string, columns: string[] }> | Record<string, string[] | { columns: string[] }>;
        defaultTable?: string;
        disableKeywords?: boolean;
    }
}
