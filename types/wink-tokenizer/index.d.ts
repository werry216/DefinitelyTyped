// Type definitions for wink-tokenizer 4.0
// Project: http://winkjs.org/
// Definitions by: Luca Lindhorst <https://github.com/lal12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Tokenizer {
	/**
	 * create a tokenizer instance
	 */
	constructor();

	/**
	 * Tokenize a string
	 * @param sentence to be tokenized
	 * @returns tokens
	 */
	tokenize(sentence: string): Tokenizer.Token[];

	/**
	 * Defines the configuration in terms of the types of token that will be extracted by tokenize() method.
	 * Note by default, all types of tokens will be detected and tagged automatically.
	 * @param config configuration object
	 * @returns number of true parameters
	 */
	defineConfig(config: Tokenizer.Config): number;

	/**
	 * Returns the finger print of the tokens generated by the last call to tokenize().
	 * A finger print is a string created by sequentially joining the unique code of each token's type.
	 *
	 * currency: 'r', email: 'e', emoji: 'j', emoticon: 'c',
	 * hashtag: 'h', number: 'n', ordinal: 'o',
	 * punctuation: token becomes fingerprint,
	 * quoted_phrase: 'q', symbol: token becomes fingerprint,
	 * time: 't', mention: 'm', url: 'u', word: 'w',
	 * @return string of token types
	 */
	getTokensFP(): string;

	/**
	 * Adds a regex for parsing a new type of token.
	 * This regex can either be mapped to an existing tag or it allows creation of a new tag along with its finger print.
	 * The uniqueness of the finger prints have to ensured by the user.
	 * @param regex the new regular expression
	 * @param tag tokens matching the regex will be assigned this tag
	 * @param fingerprintCode
	 */
	addRegex(regex: RegExp, tag: string, fingerprintCode?: string): void;
}

declare namespace Tokenizer {
	type Tag = "word" | "email" | "emoji" | "punctuation"
		| "number" | "time" | "hashtag" | "mention" | "emoticon" | "ordinal"
		| "quoted_phrase" | "url" | "symbol" | "currency" | "alien";

	interface Token {
		value: string;
		tag: Tag;
	}

	/**
	 * It defines 0 or more properties from the list of 14 properties.
	 * A true value for a property ensures tokenization for that type of text;
	 * whereas false value will mean that the tokenization of that type of text will not be attempted.
	 *
	 * An empty config object is equivalent to splitting on spaces.
	 * Whatever tokens are created like this are tagged as alien
	 * and z is the finger print code of this token type.
	 */
	interface Config {
		/**
		 * such as $ or £ symbols
		 * @default true
		 */
		currency?: boolean;

		/**
		 * @default true
		 */
		email?: boolean;

		/**
		 * @default true
		 */
		emoji?: boolean;

		/**
		 * @default true
		 */
		emoticon?: boolean;

		/**
		 * @default true
		 */
		hashtag?: boolean;

		/**
		 * @default true
		 */
		number?: boolean;

		/**
		 * ordinals like 1st , 2nd , 3rd , 4th or 12th or 91st
		 * @default true
		 */
		ordinal?: boolean;

		/**
		 * @default true
		 */
		punctuation?: boolean;

		/**
		 * @default true
		 */
		quoted_phrase?: boolean;

		/**
		 * @default true
		 */
		symbol?: boolean;

		/**
		 * @default true
		 */
		time?: boolean;

		/**
		 * @default true
		 */
		mention?: boolean;

		/**
		 * @default true
		 */
		url?: boolean;

		/**
		 * @default true
		 */
		word?: boolean;
	}
}

export = Tokenizer;
