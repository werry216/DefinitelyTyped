// Type definitions for webpack-dev-middleware 1.9
// Project: https://github.com/webpack/webpack-dev-middleware
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { NextHandleFunction } from 'connect';
import * as webpack from 'webpack';

export = WebpackDevMiddleware;

declare function WebpackDevMiddleware(
	compiler: webpack.ICompiler,
	options?: WebpackDevMiddleware.Options
): WebpackDevMiddleware.WebpackDevMiddleware & NextHandleFunction;

declare namespace WebpackDevMiddleware {
	interface Options {
		noInfo?: boolean;
		quiet?: boolean;
		lazy?: boolean;
		watchOptions?: webpack.Options.WatchOptions;
		publicPath: string;
		index?: string;
		headers?: {
			[name: string]: string;
		};
		stats?: webpack.Options.Stats;
		reporter?: Reporter | null;
		serverSideRender?: boolean;

		log?: Logger;
		warn?: Logger;
		error?: Logger;
		filename?: string;
	}

	interface ReporterOptions {
		state: boolean;
		stats: webpack.Stats;
		options: Options;
	}

	type Reporter = (reporterOptions: ReporterOptions) => void;

	type Logger = (message?: any, ...optionalParams: any[]) => void;

	interface WebpackDevMiddleware {
		close(callback?: () => void): void;
		invalidate(callback?: (stats: webpack.Stats) => void): void;
		waitUntilValid(callback?: (stats: webpack.Stats) => void): void;
	}
}
