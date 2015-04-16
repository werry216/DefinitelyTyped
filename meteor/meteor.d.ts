// Type definitions for Meteor 1.1.0.1
// Project: http://www.meteor.com/
// Definitions by: Dave Allen <https://github.com/fullflavedave>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * These are the modules and interfaces that can't be automatically generated from the Meteor data.js file
 */

interface EJSONable {
	[key: string]: number | string | boolean | Object | number[] | string[] | Object[] | Date | Uint8Array | EJSON.CustomType;
}
interface JSONable {
	[key: string]: number | string | boolean | Object | number[] | string[] | Object[];
}
interface EJSON extends EJSONable {}

declare module Match {
	var Any;
	var String;
	var Integer;
	var Boolean;
	var undefined;
	//function null();  // not allowed in TypeScript
	var Object;
	function Optional(pattern):boolean;
	function ObjectIncluding(dico):boolean;
	function OneOf(...patterns);
	function Where(condition);
}

declare module Meteor {
	/** Start definitions for Template **/
	interface Event {
		type:string;
		target:HTMLElement;
		currentTarget:HTMLElement;
		which: number;
		stopPropagation():void;
		stopImmediatePropagation():void;
		preventDefault():void;
		isPropagationStopped():boolean;
		isImmediatePropagationStopped():boolean;
		isDefaultPrevented():boolean;
	}

	interface EventHandlerFunction extends Function {
		(event?:Meteor.Event):void;
	}

	interface EventMap {
		[id:string]:Meteor.EventHandlerFunction;
	}
	/** End definitions for Template **/

	interface LoginWithExternalServiceOptions {
		requestPermissions?: string[];
		requestOfflineToken?: Boolean;
		forceApprovalPrompt?: Boolean;
		userEmail?: string;
		loginStyle?: string;
	}

	function loginWithMeteorDeveloperAccount(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
	function loginWithFacebook(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
	function loginWithGithub(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
	function loginWithGoogle(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
	function loginWithMeetup(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
	function loginWithTwitter(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;
	function loginWithWeibo(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void;

	interface UserEmail {
		address:string;
		verified:boolean;
	}

	interface User {
		_id?:string;
		username?:string;
		emails?:Meteor.UserEmail[];
		createdAt?: number;
		profile?: any;
		services?: any;
	}

	interface SubscriptionHandle {
		stop(): void;
		ready(): boolean;
	}

	interface Tinytest {
		add(name:string, func:Function);
		addAsync(name:string, func:Function);
	}

	enum StatusEnum {
		connected,
		connecting,
		failed,
		waiting,
		offline
	}

	interface LiveQueryHandle {
		stop(): void;
	}

	interface EmailFields {
		subject?: Function;
		text?: Function;
	}

	interface EmailTemplates {
		from: string;
		siteName: string;
		resetPassword: Meteor.EmailFields;
		enrollAccount:  Meteor.EmailFields;
		verifyEmail:  Meteor.EmailFields;
	}

	interface Error {
		error: number;
		reason?: string;
		details?: string;
	}

	interface Connection {
		id: string;
		close: Function;
		onClose: Function;
		clientAddress: string;
		httpHeaders: Object;
	}
}

declare module Mongo {
	interface Selector extends Object {}
	interface Modifier {}
	interface SortSpecifier {}
	interface FieldSpecifier {
		[id: string]: Number;
	}
	enum IdGenerationEnum {
		STRING,
		MONGO
	}
	interface AllowDenyOptions {
		insert?: (userId:string, doc) => boolean;
		update?: (userId, doc, fieldNames, modifier) => boolean;
		remove?: (userId, doc) => boolean;
		fetch?: string[];
		transform?: Function;
	}
}

declare module HTTP {

	interface HTTPRequest {
		content?:string;
		data?:any;
		query?:string;
		params?:{[id:string]:string};
		auth?:string;
		headers?:{[id:string]:string};
		timeout?:number;
		followRedirects?:boolean;
	}

	interface HTTPResponse {
		statusCode?:number;
		headers?:{[id:string]: string};
		content?:string;
		data?:any;
	}

	function call(method: string, url: string, options?: HTTP.HTTPRequest, asyncCallback?:Function):HTTP.HTTPResponse;
	function del(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;
	function get(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;
	function post(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;
	function put(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function): HTTP.HTTPResponse;

}

declare module Email {
	interface EmailMessage {
		from: string;
		to: any;  // string or string[]
		cc?: any; // string or string[]
		bcc?: any; // string or string[]
		replyTo?: any; // string or string[]
		subject: string;
		text?: string;
		html?: string;
		headers?: {[id: string]: string};
	}
}

declare module DDP {
	interface DDPStatic {
		subscribe(name, ...rest);
		call(method:string, ...parameters):void;
		apply(method:string, ...parameters):void;
		methods(IMeteorMethodsDictionary);
		status():DDPStatus;
		reconnect();
		disconnect();
		onReconnect();
	}

	interface DDPStatus {
		connected: boolean;
		status: Meteor.StatusEnum;
		retryCount: number;
		//To turn this into an interval until the next reconnection, use retryTime - (new Date()).getTime()
		retryTime?: number;
		reason?: string;
	}
}

declare module Random {
	function id(numberOfChars?: number): string;
	function secret(numberOfChars?: number): string;
	function fraction():number;
	function hexString(numberOfDigits:number):string; // @param numberOfDigits, @returns a random hex string of the given length
	function choice(array:any[]):string; // @param array, @return a random element in array
	function choice(str:string):string; // @param str, @return a random char in str
}

declare module Blaze {
	interface View {
		name: string;
		parentView: Blaze.View;
		isCreated: boolean;
		isRendered: boolean;
		isDestroyed: boolean;
		renderCount: number;
		autorun(runFunc: Function): void;
		onViewCreated(func: Function): void;
		onViewReady(func: Function): void;
		onViewDestroyed(func: Function): void;
		firstNode(): Node;
		lastNode(): Node;
		template: Blaze.Template;
		templateInstance(): any;
	}
	interface Template {
		viewName: string;
		renderFunction: Function;
		constructView(): Blaze.View;
	}
}

declare module BrowserPolicy {

	interface framing {
		disallow():void;
		restrictToOrigin(origin:string):void;
		allowAll():void;
	}
	interface content {
		allowEval():void;
		allowInlineStyles():void;
		allowInlineScripts():void;
		allowSameOriginForAll():void;
		allowDataUrlForAll():void;
		allowOriginForAll(origin:string):void;
		allowImageOrigin(origin:string):void;
		allowFrameOrigin(origin:string):void;
		allowContentTypeSniffing():void;
		allowAllContentOrigin():void;
		allowAllContentDataUrl():void;
		allowAllContentSameOrigin():void;

		disallowAll():void;
		disallowInlineStyles():void;
		disallowEval():void;
		disallowInlineScripts():void;
		disallowFont():void;
		disallowObject():void;
		disallowAllContent():void;
		//TODO: add the basic content types
		// allow<content type>Origin(origin)
		// allow<content type>DataUrl()
		// allow<content type>SameOrigin()
		// disallow<content type>()
	}
}

declare module Tracker {
	export var ComputationFunction: (computation: Tracker.Computation) => void;

}

declare var IterationCallback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void;

/**
 * These modules and interfaces are automatically generated from the Meteor api.js file
 */
declare module Accounts {
	function changePassword(oldPassword: string, newPassword: string, callback?: Function): void;
	function config(options: {
		sendVerificationEmail?: boolean;
		forbidClientAccountCreation?: boolean;
		restrictCreationByEmailDomain?: string | Function;
		loginExpirationInDays?: number;
		oauthSecretKey?: string;
	}): void;
	function createUser(options: {
		username?: string;
		email?: string;
		password?: string;
		profile?: Object;
	}, callback?: Function): string;
	var emailTemplates: Meteor.EmailTemplates;
	function forgotPassword(options: {
		email?: string;
	}, callback?: Function): void;
	function onCreateUser(func: Function): void;
	function onEmailVerificationLink(callback: Function): void;
	function onEnrollmentLink(callback: Function): void;
	function onLogin(func: Function): {stop: Function};
	function onLoginFailure(func: Function): {stop: Function};
	function onResetPasswordLink(callback: Function): void;
	function resetPassword(token: string, newPassword: string, callback?: Function): void;
	function sendEnrollmentEmail(userId: string, email?: string): void;
	function sendResetPasswordEmail(userId: string, email?: string): void;
	function sendVerificationEmail(userId: string, email?: string): void;
	function setPassword(userId: string, newPassword: string, options?: {
		logout?: Object;
	}): void;
	var ui: {
		config(options: {
			requestPermissions?: Object;
			requestOfflineToken?: Object;
			forceApprovalPrompt?: Object;
			passwordSignupFields?: string;
		}): void;
	};
	function validateLoginAttempt(func: Function): {stop: Function};
	function validateNewUser(func: Function): void;
	function verifyEmail(token: string, callback?: Function): void;
}

declare module App {
	function accessRule(domainRule: string, options?: {
		launchExternal?: boolean;
	}); /** TODO: add return value **/
function configurePlugin(pluginName: string, config: Object): void;
	function icons(icons: Object): void;
	function info(options: {
		id?: string;
		version?: string;
		name?: string;
		description?: string;
		author?: string;
		email?: string;
		website?: string;
	}): void;
	function launchScreens(launchScreens: Object): void;
	function setPreference(name: string, value: string): void;
}

declare module Assets {
	function getBinary(assetPath: string, asyncCallback?: Function): EJSON;
	function getText(assetPath: string, asyncCallback?: Function): string;
}

declare module Blaze {
	function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View;
	function If(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View;
	var Template: TemplateStatic;
	interface TemplateStatic {
		new(viewName?: string, renderFunction?: Function): Template;
		// It should be [templateName: string]: TemplateInstance but this is not possible -- user will need to cast to TemplateInstance
		[templateName: string]: any | Template; // added "any" to make it work
		head: Template;
		find(selector:string):Blaze.Template;
		findAll(selector:string):Blaze.Template[];
		$:any;
	}
	interface Template {
	}

	var TemplateInstance: TemplateInstanceStatic;
	interface TemplateInstanceStatic {
		new(view: Blaze.View): TemplateInstance;
	}
	interface TemplateInstance {
		$(selector: string): any;
		autorun(runFunc: Function): Object;
		data: Object;
		find(selector?: string): Blaze.TemplateInstance;
		findAll(selector: string): Blaze.TemplateInstance[];
		firstNode: Object;
		lastNode: Object;
		subscribe(name: string, ...args): Meteor.SubscriptionHandle;
		subscriptionsReady(): boolean;
		view: Object;
	}

	function Unless(conditionFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View;
	var View: ViewStatic;
	interface ViewStatic {
		new(name?: string, renderFunction?: Function): View;
	}
	interface View {
	}

	function With(data: Object | Function, contentFunc: Function): Blaze.View;
	var currentView: Blaze.View;
	function getData(elementOrView?: HTMLElement | Blaze.View): Object;
	function getView(element?: HTMLElement): Blaze.View;
	function isTemplate(value: any): boolean;
	function remove(renderedView: Blaze.View): void;
	function render(templateOrView: Template | Blaze.View, parentNode: Node, nextNode?: Node, parentView?: Blaze.View): Blaze.View;
	function renderWithData(templateOrView: Template | Blaze.View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: Blaze.View): Blaze.View;
	function toHTML(templateOrView: Template | Blaze.View): string;
	function toHTMLWithData(templateOrView: Template | Blaze.View, data: Object | Function): string;
}

declare module Cordova {
	function depends(dependencies:{[id:string]:string}): void;
}

declare module DDP {
	function connect(url: string): DDP.DDPStatic;
}

declare module EJSON {
	var CustomType: CustomTypeStatic;
	interface CustomTypeStatic {
		new(): CustomType;
	}
	interface CustomType {
		clone(): EJSON.CustomType;
		equals(other: Object): boolean;
		toJSONValue(): JSON;
		typeName(): string;
	}

	function addType(name: string, factory: (val: EJSONable) => JSONable): void;
	function clone<T>(val:T): T;
	function equals(a: EJSON, b: EJSON, options?: {
		keyOrderSensitive?: boolean;
	}): boolean;
	function fromJSONValue(val: JSON): any;
	function isBinary(x: Object): boolean;
	var newBinary: any;
	function parse(str: string): EJSON;
	function stringify(val: EJSON, options?: {
		indent?: boolean | number | string;
		canonical?: boolean;
	}): string;
	function toJSONValue(val: EJSON): JSON;
}

declare module Match {
	function test(value: any, pattern: any): boolean;
}

declare module Meteor {
	var Error: ErrorStatic;
	interface ErrorStatic {
		new(error: string, reason?: string, details?: string): Error;
	}
	interface Error {
	}

	function absoluteUrl(path?: string, options?: {
		secure?: boolean;
		replaceLocalhost?: boolean;
		rootUrl?: string;
	}): string;
	function apply(name: string, args: EJSONable[], options?: {
		wait?: boolean;
		onResultReceived?: Function;
	}, asyncCallback?: Function): any;
	function call(name: string, ...args): any;
	function clearInterval(id: number): void;
	function clearTimeout(id: number): void;
	function disconnect(): void;
	var isClient: boolean;
	var isCordova: boolean;
	var isServer: boolean;
	function loggingIn(): boolean;
	function loginWith<ExternalService>(options?: {
		requestPermissions?: string[];
		requestOfflineToken?: boolean;
		forceApprovalPrompt?: boolean;
		userEmail?: string;
		loginStyle?: string;
	}, callback?: Function): void;
	function loginWithPassword(user: Object | string, password: string, callback?: Function): void;
	function logout(callback?: Function): void;
	function logoutOtherClients(callback?: Function): void;
	function methods(methods: Object): void;
	function onConnection(callback: Function): void;
	function publish(name: string, func: Function): void;
	function reconnect(): void;
	var release: string;
	function setInterval(func: Function, delay: number): number;
	function setTimeout(func: Function, delay: number): number;
	var settings: {[id:string]: any};
	function startup(func: Function): void;
	function status(): Meteor.StatusEnum;
	function subscribe(name: string, ...args): Meteor.SubscriptionHandle;
	function user(): Meteor.User;
	function userId(): string;
	var users: Mongo.Collection<User>;
	function wrapAsync(func: Function, context?: Object): any;
}

declare module Mongo {
	var Collection: CollectionStatic;
	interface CollectionStatic {
		new<T>(name: string, options?: {
			connection?: Object;
			idGeneration?: string;
			transform?: Function;
		}): Collection<T>;
	}
	interface Collection<T> {
		allow(options: {
			insert?: (userId:string, doc) => boolean;
			update?: (userId, doc, fieldNames, modifier) => boolean;
			remove?: (userId, doc) => boolean;
			fetch?: string[];
			transform?: Function;
		}): boolean;
		deny(options: {
			insert?: (userId:string, doc) => boolean;
			update?: (userId, doc, fieldNames, modifier) => boolean;
			remove?: (userId, doc) => boolean;
			fetch?: string[];
			transform?: Function;
		}): boolean;
		find(selector?: Mongo.Selector, options?: {
			sort?: Mongo.SortSpecifier;
			skip?: number;
			limit?: number;
			fields?: Mongo.FieldSpecifier;
			reactive?: boolean;
			transform?: Function;
		}): Mongo.Cursor<T>;
		findOne(selector?: Mongo.Selector, options?: {
			sort?: Mongo.SortSpecifier;
			skip?: number;
			fields?: Mongo.FieldSpecifier;
			reactive?: boolean;
			transform?: Function;
		}): T;
		insert(doc: Object, callback?: Function): string;
		remove(selector: Mongo.Selector, callback?: Function): void;
		update(selector: Mongo.Selector, modifier: Mongo.Modifier, options?: {
			multi?: boolean;
			upsert?: boolean;
		}, callback?: Function): number;
		upsert(selector: Mongo.Selector, modifier: Mongo.Modifier, options?: {
			multi?: boolean;
		}, callback?: Function): {numberAffected?: number; insertedId?: string;};
		_ensureIndex(indexName: string, options?: {[key: string]: any}): void;
	}

	var Cursor: CursorStatic;
	interface CursorStatic {
		new<T>(): Cursor<T>;
	}
	interface Cursor<T> {
		count(): number;
		fetch(): Array<T>;
		forEach(callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any): void;
		map(callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any): Array<T>;
		observe(callbacks: Object): Meteor.LiveQueryHandle;
		observeChanges(callbacks: Object): Meteor.LiveQueryHandle;
	}

	var ObjectID: ObjectIDStatic;
	interface ObjectIDStatic {
		new(hexString: string): ObjectID;
	}
	interface ObjectID {
	}

}

declare module Npm {
	function depends(dependencies:{[id:string]:string}): void;
	function require(name: string): any;
}

declare module Package {
	function describe(options: {
		summary?: string;
		version?: string;
		name?: string;
		git?: string;
		documentation?: string;
	}): void;
	function onTest(func: Function): void;
	function onUse(func: Function): void;
	function registerBuildPlugin(options?: {
		name?: string;
		use?: string | string[];
		sources?: string[];
		npmDependencies?: Object;
	}): void;
}

declare module Tracker {
	function Computation(): void;
	interface Computation {
		firstRun: boolean;
		invalidate(): void;
		invalidated: boolean;
		onInvalidate(callback: Function): void;
		stop(): void;
		stopped: boolean;
	}

	var Dependency: DependencyStatic;
	interface DependencyStatic {
		new(): Dependency;
	}
	interface Dependency {
		changed(): void;
		depend(fromComputation?: Tracker.Computation): boolean;
		hasDependents(): boolean;
	}

	var active: boolean;
	function afterFlush(callback: Function): void;
	function autorun(runFunc: (computation: Tracker.Computation) => void, options?: {
		onError?: Function;
	}): Tracker.Computation;
	var currentComputation: Tracker.Computation;
	function flush(): void;
	function nonreactive(func: Function): void;
	function onInvalidate(callback: Function): void;
}

declare module Session {
	function equals(key: string, value: string | number | boolean | any /** Null **/ | any /** Undefined **/): boolean;
	function get(key: string): any;
	function set(key: string, value: EJSONable | any /** Undefined **/): void;
	function setDefault(key: string, value: EJSONable | any /** Undefined **/): void;
}

declare module HTTP {
	function call(method: string, url: string, options?: {
		content?: string;
		data?: Object;
		query?: string;
		params?: Object;
		auth?: string;
		headers?: Object;
		timeout?: number;
		followRedirects?: boolean;
		npmRequestOptions?: Object;
	}, asyncCallback?: Function): HTTP.HTTPResponse;
	function del(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
	function get(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
	function post(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
	function put(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse;
}

declare module Email {
	function send(options: {
		from?: string;
		to?: string | string[];
		cc?: string | string[];
		bcc?: string | string[];
		replyTo?: string | string[];
		subject?: string;
		text?: string;
		html?: string;
		headers?: Object;
		attachments?: Object[];
	}): void;
}

declare var CompileStep: CompileStepStatic;
interface CompileStepStatic {
	new(): CompileStep;
}
interface CompileStep {
	addAsset(options: {
	}, path: string, data: any /** Buffer **/ | string); /** TODO: add return value **/
	addHtml(options: {
		section?: string;
		data?: string;
	}); /** TODO: add return value **/
	addJavaScript(options: {
		path?: string;
		data?: string;
		sourcePath?: string;
	}); /** TODO: add return value **/
	addStylesheet(options: {
	}, path: string, data: string, sourceMap: string); /** TODO: add return value **/
	arch; /** TODO: add return value **/
	declaredExports; /** TODO: add return value **/
	error(options: {
	}, message: string, sourcePath?: string, line?: number, func?: string); /** TODO: add return value **/
	fileOptions; /** TODO: add return value **/
	fullInputPath; /** TODO: add return value **/
	inputPath; /** TODO: add return value **/
	inputSize; /** TODO: add return value **/
	packageName; /** TODO: add return value **/
	pathForSourceMap; /** TODO: add return value **/
	read(n?: number): any;
	rootOutputPath; /** TODO: add return value **/
}

declare var PackageAPI: PackageAPIStatic;
interface PackageAPIStatic {
	new(): PackageAPI;
}
interface PackageAPI {
	addFiles(filename: string | string[], architecture?: string): void;
	export(exportedObject: string, architecture?: string): void;
	imply(packageSpecs: string | string[]): void;
	use(packageNames: string | string[], architecture?: string, options?: {
		weak?: boolean;
		unordered?: boolean;
	}): void;
	versionsFrom(meteorRelease: string | string[]): void;
}

declare var ReactiveVar: ReactiveVarStatic;
interface ReactiveVarStatic {
	new<T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
}
interface ReactiveVar<T> {
	get(): T;
	set(newValue: T): void;
}

declare var Subscription: SubscriptionStatic;
interface SubscriptionStatic {
	new(): Subscription;
}
interface Subscription {
	added(collection: string, id: string, fields: Object): void;
	changed(collection: string, id: string, fields: Object): void;
	connection: Meteor.Connection;
	error(error: Error): void;
	onStop(func: Function): void;
	ready(): void;
	removed(collection: string, id: string): void;
	stop(): void;
	userId: string;
}

declare var Template: TemplateStatic;
interface TemplateStatic {
	new(): Template;
	// It should be [templateName: string]: TemplateInstance but this is not possible -- user will need to cast to TemplateInstance
	[templateName: string]: any | Template; // added "any" to make it work
	head: Template;
	find(selector:string):Blaze.Template;
	findAll(selector:string):Blaze.Template[];
	$:any;
	body: Template;
	currentData(): {};
	instance(): Blaze.TemplateInstance;
	parentData(numLevels?: number): {};
	registerHelper(name: string, helperFunction: Function): void;
}
interface Template {
	created: Function;
	destroyed: Function;
	events(eventMap: {[actions: string]: Function}): void;
	helpers(helpers:{[id:string]: any}): void;
	onCreated: Function;
	onDestroyed: Function;
	onRendered: Function;
	rendered: Function;
}

declare function MethodInvocation(options: {
}); /** TODO: add return value **/
declare function check(value: any, pattern: any): void;
