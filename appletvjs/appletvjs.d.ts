// Type definitions for AppleTVJS
// Reference: https://developer.apple.com/library/prerelease/tvos/documentation/TVMLJS/Reference/TVJSFrameworkReference/index.html
// Definitions by: Adam Valverde <https://github.com/brainded>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var App: AppleTVJS.App;
declare var Device: AppleTVJS.Device;
declare var navigationDocument: AppleTVJS.NavigationDocument;

declare function evaluateScripts(scripts: string[], complete: (success: boolean) => void): void;

declare module AppleTVJS {
	interface App {

		/**
		* The onError attribute is used to handle any errors sent from the device.
		* This attribute must be set to a function that accepts an “options” argument.
		* For example App.onError = function (options) {}.
		*/
		onError: (options: any) => void;

		/**
		* The onExit attribute is used to complete any actions that need to be cleaned
		* up when the app has been exited. This attribute must be set to a function that
		* accepts an “options” argument. For example App.onExit = function (options) {}.
		*/
		onExit: (options: any) => void;

		/**
		* The onLaunch attribute is used to start any required actions when the app
		* launches. This attribute must be set to a function that accepts an “options”
		* argument. For example App.onLaunch = function (options) {}.
		*/
		onLaunch: (options: any) => void;

		/**
		* This function reloads the initial JavaScript file without quitting the app.
		* The optional reloadData parameter provides developers with a way to capture
		* and restart the app in it’s current state. If the reloadData parameter is not
		* present, the app is restarted in its initial state. This attribute must be set
		* to a function that accepts an “options” argument.
		* For example App.onError = function (options) {}.
		*/
		reload(options?: any, reloadData?: any): void;
	}

	interface Device {
		/** The unique identifier for the app. */
		appIdentifier: string;

		/** The current app version. */
		appVersion: string;

		/** A string that identifies the device model. */
		model: string;

		/** The version of the product installed on the device. */
		productType: string;

		/** The operating system on the device. */
		systemVersion: string;

		/** The UUID of the device. */
		vendorIdentifier: string;
	}

	interface FeatureElement extends Element {
		getFeature(feature: string): any;
	}

	interface Highlight {
		/** The name of the highlight. */
		name: string;

		/** The description of the highlight. */
		description: string;

		/** The starttime of the highlight. */
		starttime: number;

		/** The duration of the highlight. */
		duration: number;

		/** The imageURL of the highlight. */
		imageURL: string;
	}

	interface HighlightGroup {
		/** The name of the highlight group. */
		name: string;

		/** The hightlights in the highlight group. */
		hightlights: Highlight[];
	}

	interface Interstitial {
		starttime: number;
		duration: number;
	}

	interface Keyboard {
		/** The text inside of a searchField or textField element. */
		text: string;

		/**
		* A callback function that is called when the text inside
		* of searchField or textField element changes.
		*/
		onTextChange: () => void;
	}

	interface MediaItem {
		/** Creates a new MediaItem object from the information stored in the URL location. */
		new(type: string, url?: string): MediaItem;

		/** The domain that the rating applies to. */
		contentRatingDomain: string;

		/** The rating for a video item. */
		contentRatingRanking: number;

		/** A value indicating whether the item has explicit lyrics. */
		isExplicit: boolean;

		/** The URL path to the artwork that accompanies the media item. */
		artworkImageURL: string;

		/** The description for a media item. */
		description: string;

		/** The subtitle for a the media item. */
		subtitle: string;

		/** The title of the media item. */
		title: string;

		/** The type of media item. */
		type: string;

		/** The URL path to the media item. */
		url: string;

		/** An array of highlightGroup objects. */
		highlightGroups: HighlightGroup[];

		/** An array of interstitial objects. */
		interstitials: Interstitial[];

		/** The number, in seconds, that a media item starts playing at. */
		resumeTime: number;

		/** A callback function used to load the asset identifier for an item. */
		loadAssetID: (url, callback) => void;

		/** A callback function used to load the security certificate for an item. */
		loadCertificate: (url, callback) => void;

		/** A callback function used to load the security key for an item. */
		loadKey: (url, callback) => void;
	}

	interface MenuBarDocument {
		/**
		* Retrieves the document associated with the specified menu item.
		*/
		getDocument(menuItem: Element): Document;

		/**
		* Associates a document with a menu item.
		*/
		setDocument(document: Document, menuItem: any): void;

		/**
		* Sets the focus in a menu bar to the specified menu item.
		*/
		setSelectedItem(menuItem: any): void;
	}

	interface NavigationDocument {
		/**
		* Inserts a new document directly before a document currently on the stack.
		*/
		insertBeforeDocument(document: Document, beforeDocument?: Document): void;

		/**
		* This function searches the stack for the first instance of the document
		* contained in the beforeDocument parameter and inserts the document contained
		* in the document parameter on top of it.
		*/
		pushDocument(document: Document): void;

		/**
		* Replaces a document on the stack with a new document.
		*/
		replaceDocument(document: Document, beforeDocument?: Document): void;

		/** Dismisses the document displayed in modal view. */
		dismissModal(): void;

		/**
		* Displays the passed document on top of the current document.
		*/
		presentModal(document: Document): void;

		/** The documents currently on the stack. */
		documents: Document[];

		/**
		* Removes all documents currently on the stack.
		*/
		clear(): void;

		/**
		* Removes the top most document from the stack.
		*/
		popDocument(): void;

		/**
		* Removes all of the documents on the stack that are above the passed document.
		*/
		popToDocument(document: Document): void;

		/**
		* Removes all documents from the stack except for the bottom most document.
		*/
		popToRootDocument(): void;

		/**
		* Removes the specified document from the stack.
		*/
		removeDocument(document: Document): void;
	}

	interface Player {
		/** Creates a new player object. */
		new(): Player;

		/** The annotations for a video created by placing a DOM document over the video. */
		overlayDocument: Document;

		/** The play list for a player. */
		playlist: Playlist;

		/** Shows the player UI if it is not currently visible. */
		present(): void;

		/** Pauses the currently playing media item. */
		pause(): void;

		/** Plays the currently selected media item. */
		play(): void;

		/**
		* The current state of the player.
		*
		* This property can contain the following valid values:
		* begin
		* end
		* loading
		* playing
		* paused
		* scanning
		*/
		playbackState: string;

		/** Sets the playback point to a specified time. */
		seekToTime(time: number): void;

		/** Sets the playback speed. */
		setPlaybackRate(playbackRate: number): void;

		/** Stops the currently playing item and dismisses the player UI. */
		stop(): void;

		/** The currently selected media item in the playlist. */
		currentMediaItem: MediaItem;

		/** The next media item in the playlist. */
		nextMediaItem: MediaItem;

		/** The previous MediaItem object in the playlist. */
		previousMediaItem: MediaItem;

		/**
		* An event notifying the listener that the player is about to change media items.
		*
		* Valid values are:
		* errorDidOccur
		* fastForwardedToEndOfMediaItem
		* mannuallyChanged
		* newPlaylist
		* playerInvalidated
		* playedToEndOfMediaItem
		*/
		mediaItemDidChange: (reason: string) => void;

		/**
		* An event that indicates if a seek to time request was accomplished.
		*
		* The values for this attribute can be one of the following:
		* true — The seek performed as requested.
		* false or null— The seek was not performed.
		* An integer value — The seek will be performed to the stated value and not the initial requested value.
		*/
		requestSeekToTime: (result?: any) => void;

		/** An event that indicates a state change request has occurred. */
		shouldHandleStateChange: (result: boolean) => void;

		/** An event that indicates the state has changed. */
		stateDidChange: () => void;

		/** An event that indicates the state is about to change. */
		stateWillChange: () => void;

		/** An event that indicates a particular playback time has been crossed. */
		timeBoundaryDidCross: () => void;

		/** An event that happens at a specified interval. */
		timeDidChange: () => void;

		/** An event that happens whenever a specified piece of metadata occurs. */
		timedMetadata: () => void;
	}

	interface Playlist extends Array<MediaItem> {
		/** Creates a new playlist object. */
		new(): Playlist;

		/** Returns the MediaItem located in the indicated array index. */
		item(index: number): MediaItem;
	}

	interface Restrictions {
		/** A boolean value that indicates if explicit media is allowed. */
		allowsExplicit: boolean;

		/** The maximum movie ranking allowed. */
		maxMovieRank: number;

		/** The maximum movie rating allowed for the specified country. */
		maxMovieRatingForCountry(countryCode: string): string;

		/** The maximum television show ranking allowed. */
		maxTVShowRank: number

		/** Sets the maximum television show rating allowed for the specified country. */
		maxTVShowRatingForCountry(countryCode: string): string;
	}

	interface Settings {
		/** Contains the restriction information on the device. */
		restrictions: Restrictions;

		/** Contains the language the device displays information in. */
		language: string;

		/** Contains the country code used by the store on this device. */
		storefrontCountryCode: string;

		/**
		* Called when changes to a device’s restriction information changes.
		*/
		onRestrictionsChange: () => void;
	}

	interface TVError {
		/** The error code. */
		code: string;

		/** A string containing the description of the error. */
		description: string;

		/**
		* A string containing the error domain.
		*
		* The predefined error domains:
		* NSPOSIXErrorDomain - POSIX/BSD errors
		* NSOSStatusErrorDomain - OS X/Carbon errors
		* NSMachErrorDomain - Mach errors
		*/
		domain: string;

		/**
		* The user info dictionary.
		*
		* These keys may exist in the user info dictionary:
		* NSLocalizedDesciptionKey
		* NSFilePathErrorKey
		* NSStringEncodingErrorKey
		* NSUnderlyingErrorKey
		* NSURLErrorKey
		* NSLocalizedFailureReasonErrorKey
		* NSLocalizedRecoverySuggestionErrorKey
		* NSLocalizedRecoveryOptionsErrorKey
		* NSRecoveryAttempterErrorKey
		* NSHelpAnchorErrorKey
		* NSURLErrorFailingURLErrorKey
		* NSURLErrorFailingURLStringErrorKey
		* NSURLErrorFailingURLPeerTrustErrorKey
		*/
		userInfo: any;
	}
}
