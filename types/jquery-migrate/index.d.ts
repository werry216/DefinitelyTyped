// Type definitions for jquery-migrate 3.3
// Project: https://github.com/jquery/jquery-migrate
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

interface JQueryStatic {
    /**
     * By default, Migrate only gives a specific warning once.
     * If you set this property to false it will give a warning for every occurrence each time it happens.
     * Note that this can generate a lot of output, for example when a warning occurs in a loop.
     * @default true
     */
    migrateDeduplicateWarnings?: boolean;
    /**
     * An array of string warning messages that have been generated by the code on the page,
     * in the order they were generated. Messages appear in the array only once,
     * even if the condition has occurred multiple times, unless jQuery.migrateReset() is called
     * @default []
     */
    migrateWarnings: string[];

    /**
     * Set this property to `true` to prevent console warnings from being generated in the development version.\
     * The `jQuery.migrateWarnings` array is still maintained when this property is set,
     * which allows programmatic inspection without console output
     * @default false
     */
    migrateMute: boolean;

    /**
     * Set this property to `false` if you want warnings
     * but do not want stack traces to appear on the console.
     * @default true
     */
    migrateTrace: boolean;

    /**
     * Indicates the version of Migrate in use
     */
    readonly migrateVersion: string;

    /**
     * This method clears the `jQuery.migrateWarnings` array and "forgets" the list of messages
     * that have been seen already.
     */
    migrateReset(): void;
    /**
     * If you want to upgrade to jQuery 3.5.0 or newer and don't have time to deal with breaking changes at the moment
     * and you use jQuery Migrate 3.2.0 or newer, you can revert to the previous behavior.
     * @see {@link https://jquery.com/upgrade-guide/3.5/}
     */
    UNSAFE_restoreLegacyHtmlPrefilter(): void;
}
