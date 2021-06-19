import { Answers, CheckboxChoiceOptions, ExpandChoiceOptions, ListChoiceOptions } from "../..";

/**
 * Represents a choice for several question-types.
 *
 * @template T
 * The type of the answers.
 */
declare class Choice<T extends Answers = Answers> implements
    ListChoiceOptions<T>,
    CheckboxChoiceOptions<T>,
    ExpandChoiceOptions {
    /**
     * @inheritdoc
     */
    type?: "choice";

    /**
     * @inheritdoc
     */
    name: string;

    /**
     * @inheritdoc
     */
    short: string;

    /**
     * @inheritdoc
     */
    value: any;

    /**
     * @inheritdoc
     */
    checked?: boolean;

    /**
     * @inheritdoc
     */
    disabled: boolean;

    /**
     * The key to press for selecting the choice.
     *
     * @inheritdoc
     */
    key?: string;

    /**
     * @inheritdoc
     */
    extra?: any;

    /**
     * Initializes a new instance of the `Choice` class.
     *
     * @param value
     * The value of the choice.
     *
     * @param answers
     * An object which contains the answers to the questions.
     */
    constructor(value: any, answers: T);
}

export = Choice;
