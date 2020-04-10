import MarkdownIt = require('.');
import Ruler = require('./ruler');
import Token = require('./token');
import StateCore = require('./rules_core/state_core');

declare namespace Core {
    type RuleCore = (state: StateCore) => boolean;
}

declare class Core {
    ruler: Ruler<Core.RuleCore>;

    /**
     * Executes core chain rules.
     */
    process(state: StateCore): void;

    State: typeof StateCore;
}

export = Core;
