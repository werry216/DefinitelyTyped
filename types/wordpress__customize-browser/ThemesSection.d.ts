import { Control } from './Control';
import { Section_Params, Section } from './Section';
import { ThemeControl } from './ThemeControl';
import { Theme } from './external';

export class ThemesSection extends Section {
    currentTheme: string;
    overlay: string;
    template: string;
    screenshotQueue: null | Control[];
    $window: JQuery | null;
    $body: JQuery | null;
    loaded: number;
    loading: boolean;
    fullyLoaded: boolean;
    term: string;
    tags: string | string[];
    nextTerm: string;
    nextTags: string | string[];
    filtersHeight: number;
    headerContatiner: JQuery | null;
    updateCountDebounced: ((count: number) => void) | null;
    initialize(id?: string, options?: Section_Params): void;
    loadThemes(): void;
    loadControls(themes: ReadonlyArray<Theme>, page: number): void;
    loadMore(): void;
    filterSearch(term: string): void;
    checkTerm(section: ThemesSection): void;
    filtersChecked(): void;
    initializeNewQuery(newTerm: string, newTags: ReadonlyArray<string>): void;
    renderScreenshots(): void;
    getVisibleCount(): number;
    updateCount(count: number): void;
    nextTheme(): void;
    getNextTheme(): ThemeControl | false;
    previousTheme(): void;
    getPreviousTheme(): ThemeControl | false;
    updateLimits(): void;
    loadThemePreview(themeId: string): JQuery.Promise<any>;
    showDetails(theme: Theme, callback?: () => void): void;
    closeDetails(): void;
    containFocus(el: JQuery): void;
}
