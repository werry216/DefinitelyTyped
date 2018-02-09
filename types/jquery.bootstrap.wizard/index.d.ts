// Type definitions for twitter-bootstrap-wizard
// Project: https://github.com/VinceG/twitter-bootstrap-wizard
// Definitions by: Blake Niemyjski <https://github.com/niemyjski>
//                 Dennis Åhlin <https://github.com/dennisahlin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface WizardOptions {
    tabClass?: string;
    nextSelector?: string;
    previousSelector?: string;
    firstSelector?: string;
    lastSelector?: string;
    onShow?: (activeTab: any, navigation: any, nextIndex: number) => void;
    onInit?: (activeTab: any, navigation: any, currentIndex: number) => void;
    onNext?: (activeTab: any, navigation: any, nextIndex: number) => boolean;
    onPrevious?: (activeTab: any, navigation: any, previousIndex: number) => boolean;
    onLast?: (activeTab: any, navigation: any, lastIndex: number) => boolean;
    onFirst?: (activeTab: any, navigation: any, firstIndex: number) => boolean;
    onTabClick?: (activeTab: any, navigation: any, currentIndex: number) => boolean;
    onTabShow?: (activeTab: any, navigation: any, currentIndex: number) => boolean;
}

interface Wizard {
    next(): void;
    previous(): void;
    first(): void;
    last(): void;
    currentIndex(): number;
    firstIndex(): number;
    lastIndex(): number;
    getIndex(element: any): number;
    nextIndex(): number;
    previousIndex(): number;
    navigationLength(): number;
    activeTab(): any;
    nextTab(): any;
    previousTab(): any;
    show(index: number): any;
}

interface JQuery {
    bootstrapWizard(method: 'next' | 'previous' | 'first' | 'last' | 'back' | 'finish'): void;
    bootstrapWizard(method: 'currentIndex' | 'navigationLength'): number;
    bootstrapWizard(method: 'show', indexOrId: number | string): void;
    bootstrapWizard(method: 'enable' | 'disable' | 'display' | 'hide', index: number): void;
    bootstrapWizard(method: 'remove', index: number, removeTabPane?: boolean): void;
    bootstrapWizard(options?: WizardOptions): Wizard;
}

interface JQueryStatic {
    bootstrapWizard: Wizard;
}
