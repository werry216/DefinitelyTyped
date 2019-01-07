// Type definitions for workbox-webpack-plugin 3.6.3
// Project: https://github.com/GoogleChrome/workbox/blob/master/packages/workbox-webpack-plugin
// Definitions by: Kevin Groat <https://github.com/kgroat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2.2

import { Loader, Plugin } from 'webpack';

/**
 * Workbox provides two webpack plugins: one that generates a complete service worker for you and one that generates a list of assets to precache that is injected into a service worker file.
 * @see https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
 */
declare namespace WorkboxWebpackPlugin {
	type ChacheStrategy = 'cacheFirst' | 'cacheOnly' | 'networkFirst' | 'networkOnly' | 'staleWhileRevalidate';

	interface ManifestEntry {
		revision: string;
		url: string;
	}

	interface RuntimeCacheOptions {
		/**
		 * Fall back to the cache after X seconds.
		 */
		networkTimeoutSeconds?: number;

		/**
		 * A custom cache name for this route.
		 */
		cacheName?: string;

		/**
		 * Custom cache expiration.
		 */
		expiration?: {
			/**
			 * Cache will only hold X entries.
			 */
			maxEntries?: number;
			/**
			 * Cache will only hold entries for X seconds.
			 */
			maxAgeSeconds?: number;
		};

		/**
		 * Configure background sync.
		 */
		backgroundSync?: {
			name: string;
			options?: {
				maxRetentionTime: number;
			};
		};

		/**
		 * Configure which responses are considered cacheable.
		 */
		cacheableResponse?: {
			/**
			 * Only cache responses with HTTP code(s) listed.
			 */
			statuses?: number[];
			/**
			 * Only cache responses with headers which match this map.
			 */
			headers?: { [header: string]: string };
		};

		/**
		 * Configure the broadcast cache update plugin.
		 */
		broadcastUpdate?: {
			channelName?: string;
		};

		/**
		 * Add in any additional plugin logic you need.
		 */
		plugins?: any[]

		/**
		 * Used to configure the handler.
		 */
		fetchOptions?: any

		/**
		 * Used to configure the handler.
		 */
		matchOptions?: any;
	}

	interface RuntimeCacheRule {
    /**
		 * Cache any same-origin request that matches the pattern.
		 */
		urlPattern?: string | RegExp;
    /**
		 * The `handler` values are strings, corresponding to names of the strategies supported by [`workbox.strategies`](https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies#methods).
		 */
		handler?: ChacheStrategy;
		/**
		 * The `options` properties can be used to configure instances of the cache expiration, cacheable response, and broadcast cache update plugins to apply to a given route.
		 */
		options?: RuntimeCacheOptions;
	}

	interface CommonOptions {
		/**
		 * The path and filename of the service worker file that will be created by the build process, relative to the webpack output directory.
		 * @default 'service-worker.js'
		 * @example swDest: 'custom-sw-name.js'
		 */
		swDest?: string;

		/**
		 * Valid values are `'cdn'`, `'local'`, and `'disabled'`.
     *  - `'cdn'`, the default, will use a URL for the Workbox runtime libraries hosted on a highly-available Google Cloud Storage instance.
     *  - `'local'` will copy all of the Workbox runtime libraries into a versioned directory alongside your generated service worker, and configure the service worker to use those local copies. This option is provided for developers who would prefer to host everything themselves and not rely on the Google Cloud Storage CDN.
     *  - `'disabled'` will opt-out automatic behavior. It's up to you to host a local copy of the Workbox libraries at your preferred URL, and to pass in the correct path to `workbox-sw.js` via the `importScripts` configuration option.
     *  - Note: In webpack, passing in a string corresponding to the webpack chunk name containing a custom Workbox runtime library bundle is also supported.
		 *
		 * @default 'cdn'
		 * @example importWorkboxFrom: 'local'
		 */
		importWorkboxFrom?: 'cdn' | 'local' | 'disabled';

		/**
		 * By default, Workbox will precache assets regardless of which chunk the asset is part of.
     * If you would like to override this behavior via a whitelist, specify one or more chunk names. Only assets belonging to those chunks will be precached; any assets belonging to another chunk or without a chunk association will be skipped.
		 * @default []
		 * @example chunks: ['chunk-name-1', 'chunk-name-2']
		 */
		chunks?: string[];

		/**
		 * By default, Workbox will precache all assets generated by the webpack compilation, regardless of which chunk the asset is part of.
     * If you would like to override this behavior via a blacklist, specify one or more chunk names. Any assets belonging to those chunks will be skipped.
		 * @default []
		 * @example excludeChunks: ['chunk-name-1', 'chunk-name-2']
		 */
		excludeChunks?: string[];

		/**
		 * This allows you to only include assets matching any of the provided criteria when creating the precache manifest. It provides a filename-based approach to filtering.
     * This filtering takes place after any chunk-based filtering is applied.
     * In keeping with [webpack convention](https://webpack.js.org/configuration/module/#condition), the option `test` can be used as an alias/alternative to `include`.
		 * @default []
		 * @example include: [/\.html$/, /\.js$/]
		 * @alias test
		 */
		include?: (string|RegExp)[];
		test?: (string|RegExp)[];

		/**
		 * This allows you to specifically omit assets matching any of the provided criteria from being included in the precache manifest. It provides a filename-based approach to filtering.
     * This filtering takes place after any chunk-based filtering is applied.
		 * @default [/\.map$/, /^manifest.*\.js(?:on)?$/]
		 * @example exclude: [/\.jpg$/, /\.png$/]
		 */
		exclude?: (string|RegExp)[];

		/**
		 * Workbox creates assets as part of your webpack build process: a precache manifest file, and potentially a local copy of the Workbox libraries (if `importWorkboxFrom` is set to `'local'`).
     * These assets will, by default, be created at the root of your webpack build directory, i.e. `output.path`. You can set the `importsDirectory` option if you want these assets to be created in a subdirectory of `output.path` instead of at the top-level.
     * Note: This option does not effect where the main service worker JavaScript file is created. That is determined by the `swDest` option.
		 * @default ''
		 * @example importsDirectory: 'wb-assets'
		 */
		importsDirectory?: string;

		/**
		 * Workbox automatically creates a JavaScript file that contains information about URLs that need to be precached. By default, this file is called `precache-manifest.[manifestHash].js`, where `[manifestHash]` is automatically replaced by a unique value that identifies the contents of the file.
     * `precacheManifestFilename` can be used to override this default filename. You must include the string `[manifestHash]` somewhere as part of the filename.
     * If you'd like to change the output directory to which the precache manifest is written, you can configure the `importsDirectory` option.
		 * @default 'precache-manifest.[manifestHash].js'
		 * @example precacheManifestFilename: 'wb-manifest.[manifestHash].js'
		 */
		precacheManifestFilename?: string;

		/**
		 * The base directory you wish to match `globPatterns` against, relative to the current working directory.
     * If you do set this, make sure to also configure `globPatterns`.
		 * @default undefined
		 * @example globDirectory: '.'
		 */
		globDirectory?: string;

		/**
		 * Determines whether or not symlinks are followed when generating the precache manifest.
     * For more information, see the definition of `follow` in the `glob` [documentation](https://github.com/isaacs/node-glob#options).
		 * @default true
		 * @example globFollow: false
		 */
		globFollow?: boolean;

		/**
		 * A set of patterns matching files to always exclude when generating the precache manifest.
     * For more information, see the definition of `ignore` in the `glob` [documentation](https://github.com/isaacs/node-glob#options).
		 * @default ['node_modules/**\/*']
		 * @example globIgnores: ['**\/ignored.html']
		 */
		globIgnores?: string[]

		/**
		 * Files matching against any of these patterns will be included in the precache manifest.
     * For more information, see the [glob primer](https://github.com/isaacs/node-glob#glob-primer).
     * Note: Setting `globPatterns` is often unnecessary when using the `workbox-webpack-plugin`, which will automatically precache files that are part of the webpack build pipeline by default. When using the webpack plugin, only set it when you need to cache [non-webpack assets](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#cache_additional_non-webpack_assets).
		 * @default []
		 * @example globPatterns: ['dist/*.{js,png,html,css}']
		 */
		globPatterns?: string[]

		/**
		 * If `true`, an error reading a directory when generating a precache manifest will cause the build to fail. If `false`, the problematic directory will be skipped.
     * For more information, see the definition of `strict` in the `glob` [documentation](https://github.com/isaacs/node-glob#options).
		 * @default true
		 * @example globStrict: false
		 */
		globStrict?: boolean;

		/**
		 * If a URL is rendered generated based on some server-side logic, its contents may depend on multiple files or on some other unique string value.
		 * If used with an array of strings, they will be interpreted as glob patterns, and the contents of any files matching the patterns will be used to uniquely version the URL.
		 * If used with a single string, it will be interpreted as unique versioning information that you've generated out of band for a given URL.
		 * @default null
		 */
		templatedUrls?: { [url: string]: string | (string[]) } | null;

		/**
		 * This value can be used to determine the maximum size of files that will be precached. This prevents you from inadvertantly precaching very large files that might have accidentally matched one of your patterns.
		 * @default 2097152
		 * @example maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
		 */
		maximumFileSizeToCacheInBytes?: number;

		/**
		 * Assets that match this regex will be assumed to be uniquely versioned via their URL, and exempted from the normal HTTP cache-busting that's done when populating the precache.
     * While not required, it's recommended that if your existing build process already inserts a `[hash]` value into each filename, you provide a RegExp that will detect those values, as it will reduce the amount of bandwidth consumed when precaching.
		 * @default null
		 * @example dontCacheBustUrlsMatching: /\.\w{8}\./
		 */
		dontCacheBustUrlsMatching?: RegExp | null;

		/**
		 * A mapping of prefixes that, if present in an entry in the precache manifest, will be replaced with the corresponding value.
     * This can be used to, for example, remove or add a path prefix from a manifest entry if your web hosting setup doesn't match your local filesystem setup.
     * As an alternative with more flexibility, you can use the `manifestTransforms` option and provide a function that modifies the entries in the manifest using whatever logic you provide.
		 * @default null
		 * @example modifyUrlPrefix: { '/dist': '' }
		 */
		modifyUrlPrefix?: { [url: string]: string } | null;

		/**
		 * One or more [`ManifestTransform`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.ManifestTransform) functions, which will be applied sequentially against the generated manifest.
     * If `modifyUrlPrefix` or `dontCacheBustUrlsMatching` are also specified, their corresponding transformations will be applied first.
		 */
		manifestTransforms?: ((originalManifest: ReadonlyArray<ManifestEntry>) => { manifest: ManifestEntry[], warnings?: string[] })[] | null;
	}

	export interface GenerateSWOptions extends CommonOptions {
		/**
		 * Whether or not the service worker should skip over the waiting lifecycle stage. Normally this is used with `clientsClaim: true`.
		 * @default false
		 * @example skipWaiting: true
		 */
		skipWaiting?: boolean;

		/**
		 * Whether or not the service worker should [start controlling](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim) any existing clients as soon as it activates.
		 * @default false
		 * @example clientsClaim: true
		 */
		clientsClaim?: boolean;

		/**
		 * Passing in an array of objects containing `urlPatterns`, `handlers`, and potentially `options` will add the appropriate code to the generated service worker to handle runtime caching.
     * Requests for precached URLs that are picked up via `globPatterns` are handled by default, and don't need to be accommodated in `runtimeCaching`.
		 * @default []
		 */
		runtimeCaching?: RuntimeCacheRule[];

		/**
		 * This will be used to create a [`NavigationRoute`](https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.routing.NavigationRoute) that will respond to [navigation requests](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests) for URLs that that aren't precached.
     * This is meant to be used in a [Single Page App](https://en.wikipedia.org/wiki/Single-page_application) scenario, in which you want all navigations to use common App Shell HTML.
     * It's not intended for use as a fallback that's displayed when the browser is offline.
		 * @default undefined
		 * @example navigateFallback: '/app-shell'
		 */
		navigateFallback?: string

		/**
		 * An optional array of regular expressions that restricts which URLs the configured navigateFallback behavior applies to.
     * This is useful if only a subset of your site's URLs should be treated as being part of a Single Page App.
     * If both navigateFallbackBlacklist and navigateFallbackWhitelist are configured, the blacklist takes precedent.
		 * @default []
		 * @example navigateFallbackBlacklist: [/^\/_/, /admin/]
		 */
		navigateFallbackBlacklist?: RegExp[]

		/**
		 * An optional array of regular expressions that restricts which URLs the configured navigateFallback behavior applies to.
     * This is useful if only a subset of your site's URLs should be treated as being part of a Single Page App.
     * If both navigateFallbackBlacklist and navigateFallbackWhitelist are configured, the blacklist takes precedent.
		 * @default []
		 * @example navigateFallbackWhitelist: [/^\/pages/]
		 */
		navigateFallbackWhitelist?: RegExp[]

		/**
		 * An required list of JavaScript files that should be passed to [`importScripts()`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts) inside the generated service worker file.
     * If one of the imported files sets the `self.__precacheManifest` variable to an array of [`ManifestEntrys`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.ManifestEntry), those entries will be automatically precached in the generated service worker.
     * This is also useful when you want to let Workbox create your top-level service worker file, but want to include some additional code, such as a `push` event listener.
		 * @default []
		 * @example importScripts: ['push-notifications.abcd1234.js']
		 */
		importScripts?: string[]

		/**
		 * Any search parameter names that match against one of the regex's in this array will be removed before looking for a precache match.
     * This is useful if your users might request URLs that contain, for example, URL parameters used to track the source of the traffic. Those URL parameters would normally cause the cache lookup to fail, since the URL strings used as cache keys would not be expected to include them.
		 * @default [/^utm_/]
		 * @example ignoreUrlParametersMatching: [/./]
		 */
		ignoreUrlParametersMatching?: RegExp[]

		/**
		 * If a [navigation request](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests) for a URL ending in `/` fails to match a precached URL, this value will be appended to the URL and that will be checked for a precache match.
     * This should be configured to whatever your web server is using, if anything, for its [directory index](https://httpd.apache.org/docs/2.0/mod/mod_dir.html).
		 * @default 'index.html'
		 * @example directoryIndex: 'index.html'
		 */
		directoryIndex?: string;

		/**
		 * An optional ID to be prepended to cache names used by Workbox.
     * This is primarily useful for local development where multiple sites may be served from the same `http://localhost:port` origin.
		 * @default null
		 * @example cacheId: 'my-app'
		 */
		cacheId?: string | null;

		/**
		 * Controls whether or not to include support for [offline Google Analytics](https://developers.google.com/web/tools/workbox/guides/enable-offline-analytics).
     * When `true`, `workbox.googleAnalytics.initialize()` will be added to your new service worker file.
		 * @default false
		 * @example offlineGoogleAnalytics: true
		 */
		offlineGoogleAnalytics?: boolean;
	}

	export interface InjectManifestOptions extends CommonOptions {
		/**
		 * The path to the source service worker file that can contain your own customized code, in addition to containing a match for `injectionPointRegexp`.
     * Your service worker file should reference the `self.__precacheManifest` variable to obtain a list of [`ManifestEntrys`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.ManifestEntry) obtained as part of the compilation: `workbox.precaching.precacheAndRoute(self.__precacheManifest)`.
		 * @example swSrc: path.join('src', 'sw.js')
		 */
		swSrc: string;
	}

	/**
	 * The `GenerateSW` plugin will create a service worker file for you and add it to the webpack asset pipeline.
	 * @see https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
	 */
	export class GenerateSW extends Plugin {
		constructor (opts?: GenerateSWOptions);
	}

	/**
	 * The `InjectManifest` plugin will generate a list of URLs to precache and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.
	 * @see https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
	 */
	export class InjectManifest extends Plugin {
		constructor (opts?: InjectManifestOptions);
	}
}

export = WorkboxWebpackPlugin
