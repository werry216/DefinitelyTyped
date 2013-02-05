// Type definitions for Sinon 1.5
// Project: http://sinonjs.org/
// Definitions by: William Sears <https://github.com/mrbigdog2u>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

interface SinonSpyCallApi {
	// Properties
	thisValue: any;
	args: any[];
	exception: any;
	returnValue: any;

	// Methods
	calledOn(obj: any): bool;
	calledWith(...args: any[]): bool;
	calledWithExactly(...args: any[]): bool;
	calledWithMatch(...args: SinonMatcher[]): bool;
	notCalledWith(...args: any[]): bool;
	notCalledWithMatch(...args: SinonMatcher[]): bool;
	returned(value: any): bool;
	threw(): bool;
	threw(type: string): bool;
	threw(obj: any): bool;
	callArg(pos: number): void;
	callArgOn(pos: number, obj: any, ...args: any[]): void;
	callArgWith(pos: number, ...args: any[]): void;
	callArgOnWith(pos: number, obj: any, ...args: any[]): void;
	yield(...args: any[]): void;
	yieldOn(obj: any, ...args: any[]): void;
	yieldTo(property: string, ...args: any[]): void;
	yieldToOn(property: string, obj: any, ...args: any[]): void;
}

interface SinonSpyCall extends SinonSpyCallApi {
	calledBefore(call: SinonSpyCall): bool;
	calledAfter(call: SinonSpyCall): bool;
	calledWithNew(call: SinonSpyCall): bool;
}

interface SinonSpy extends SinonSpyCallApi {
	// Properties
	callCount: number;
	called: bool;
	notCalled: bool;
	calledOnce: bool;
	calledTwice: bool;
	calledThrice: bool;
	firstCall: SinonSpyCall;
	secondCall: SinonSpyCall;
	thirdCall: SinonSpyCall;
	lastCall: SinonSpyCall;
	thisValues: any[];
	args: any[][];
	exceptions: any[];
	returnValues: any[];

	// Methods
	(...args: any[]): any;
	calledBefore(anotherSpy: SinonSpy): bool;
	calledAfter(anotherSpy: SinonSpy): bool;
	calledWithNew(spy: SinonSpy): bool;
	withArgs(...args: any[]): void;
	alwaysCalledOn(obj: any);
	alwaysCalledWith(...args: any[]);
	alwaysCalledWithExactly(...args: any[]);
	alwaysCalledWithMatch(...args: SinonMatcher[]);
	neverCalledWith(...args: any[]);
	neverCalledWithMatch(...args: SinonMatcher[]);
	alwaysThrew(): bool;
	alwaysThrew(type: string);
	alwaysThrew(obj: any);
	alwaysReturned(): bool;
	invokeCallback(...args: any[]): void;
	getCall(n: number): SinonSpyCall;
	reset(): void;
	printf(format: string, ...args: any[]);
	restore(): void;
}

interface SinonSpyStatic {
	(): SinonSpy;
	(func: any): SinonSpy;
	(obj: any, method: string): SinonSpy;
}

interface SinonStatic {
	spy: SinonSpyStatic;
}

interface SinonStub extends SinonSpy {
	resetBehavior(): void;
	returns(obj: any): SinonStub;
	returnsArg(index: number): SinonStub;
	throws(type?: string): SinonStub;
	throws(obj: any): SinonStub;
	callsArg(index: number): SinonStub;
	callsArgOn(index: number, context: any): SinonStub;
	callsArgWith(index: number, ...args: any[]): SinonStub;
	callsArgOnWith(index: number, context: any, ...args: any[]): SinonStub;
	callsArgAsync(index: number): SinonStub;
	callsArgOnAsync(index: number, context: any): SinonStub;
	callsArgWithAsync(index: number, ...args: any[]): SinonStub;
	callsArgOnWithAsync(index: number, context: any, ...args: any[]): SinonStub;
	yields(...args: any[]): SinonStub;
	yieldsOn(context: any, ...args: any[]): SinonStub;
	yieldsTo(property: string, ...args: any[]): SinonStub;
	yieldsToOn(property: string, context: any, ...args: any[]): SinonStub;
	yieldsAsync(...args: any[]): SinonStub;
	yieldsOnAsync(context: any, ...args: any[]): SinonStub;
	yieldsToAsync(property: string, ...args: any[]): SinonStub;
	yieldsToOnAsync(property: string, context: any, ...args: any[]): SinonStub;
}

interface SinonStubStatic {
	(): SinonStub;
	(obj: any): SinonStub;
	(obj: any, method: string): SinonStub;
	(obj: any, method: string, func: any): SinonStub;
}

interface SinonStatic {
	stub: SinonStubStatic;
}

interface SinonExpectation {
	atLeast(n: number): SinonExpectation;
	atMost(n: number): SinonExpectation;
	never(): SinonExpectation;
	once(): SinonExpectation;
	twice(): SinonExpectation;
	thrice(): SinonExpectation;
	exactly(n: number): SinonExpectation;
	withArgs(...args: any[]): SinonExpectation;
	withExactArgs(...args: any[]): SinonExpectation;
	on(obj: any): SinonExpectation;
	verify(): SinonExpectation;
	restore(): void;
}

interface SinonExpectationStatic {
	create(methodName?: string): SinonExpectation;
}

interface SinonMock {
	expects(method: string): SinonExpectationStatic;
	restore(): void;
	verify(): void;
}

interface SinonMockStatic {
	(): SinonExpectation;
	(obj: any): SinonMock;
}

interface SinonStatic {
	expectation: SinonExpectationStatic;
	mock: SinonMockStatic;
}

interface SinonFakeTimers {
	now: number;
	create(now: number): SinonFakeTimers;
	setTimeout(callback: (...args: any[]) => void , timeout: number, ...args: any[]): number;
	clearTimeout(id: number): void;
	setInterval(callback: (...args: any[]) => void , timeout: number, ...args: any[]): number;
	clearInterval(id: number): void;
	tick(ms: number): number;
	reset(): void;
	Date(): Date;
	Date(year: number): Date;
	Date(year: number, month: number): Date;
	Date(year: number, month: number, day: number): Date;
	Date(year: number, month: number, day: number, hour: number): Date;
	Date(year: number, month: number, day: number, hour: number, minute: number): Date;
	Date(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
	Date(year: number, month: number, day: number, hour: number, minute: number, second: number, ms: number): Date;
	restore(): void;
}

interface SinonFakeTimersStatic {
	(): SinonFakeTimers;
	(...timers: string[]): SinonFakeTimers;
	(now: number, ...timers: string[]): SinonFakeTimers;
}

interface SinonStatic {
	useFakeTimers: SinonFakeTimersStatic;
	clock: SinonFakeTimers;
}

interface SinonFakeXMLHttpRequest {
	// Properties
	onCreate: (xhr: SinonFakeXMLHttpRequest) => void;
	url: string;
	method: string;
	requestHeaders: any;
	requestBody: string;
	status: number;
	statusText: string;
	async: bool;
	username: string;
	password: string;
	responseXML: Document;
	getResponseHeader(header: string): string;
	getAllResponseHeaders(): any;

	// Methods
	restore(): void;
	useFilters: bool;
	addFilter(filter: (method, url, async, username, password) => bool): void;
	setResponseHeaders(headers: any): void;
	setResponseBody(body: string): void;
	respond(status: number, headers: any, body: string): void;
	autoRespond(ms: number): void;
}

interface SinonFakeXMLHttpRequestStatic {
	(): SinonFakeXMLHttpRequest;
}

interface SinonStatic {
	useFakeXMLHttpRequest: SinonFakeXMLHttpRequestStatic;
	FakeXMLHttpRequest: SinonFakeXMLHttpRequest;
}

interface SinonFakeServer {
	// Properties
	autoRespond: bool;
	autoRespondAfter: number;
	fakeHTTPMethods: bool;
	getHTTPMethod: (request: SinonFakeXMLHttpRequest) => string;

	// Methods
	respondWith(body: string): void;
	respondWith(response: any[]): void;
	respondWith(fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(url: string, body: string): void;
	respondWith(url: string, response: any[]): void;
	respondWith(url: string, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(method: string, url: string, body: string): void;
	respondWith(method: string, url: string, response: any[]): void;
	respondWith(method: string, url: string, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(url: RegExp, body: string): void;
	respondWith(url: RegExp, response: any[]): void;
	respondWith(url: RegExp, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(method: string, url: RegExp, body: string): void;
	respondWith(method: string, url: RegExp, response: any[]): void;
	respondWith(method: string, url: RegExp, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respond(): void;
	restore(): void;
}

interface SinonFakeServerStatic {
	create(): SinonFakeServer;
}

interface SinonStatic {
	fakeServer: SinonFakeServerStatic;
	fakeServerWithClock: SinonFakeServerStatic;
}

interface SinonExposeOptions {
	prefix?: string;
	includeFail?: bool;
}

interface SinonAssert {
	// Properties
	failException: string;
	fail: (message?: string) => void;		// Overridable
	pass: (assertion: any) => void;			// Overridable

	// Methods
	notCalled(spy: SinonSpy): void;
	called(spy: SinonSpy): void;
	calledOnce(spy: SinonSpy): void;
	calledTwice(spy: SinonSpy): void;
	calledThrice(spy: SinonSpy): void;
	callCount(spy: SinonSpy, count: number): void;
	callOrder(...spies: SinonSpy[]): void;
	calledOn(spy: SinonSpy, obj: any): void;
	alwaysCalledOn(spy: SinonSpy, obj: any): void;
	calledWith(spy: SinonSpy, ...args: any[]): void;
	alwaysCalledWith(spy: SinonSpy, ...args: any[]): void;
	neverCalledWith(spy: SinonSpy, ...args: any[]): void;
	calledWithExactly(spy: SinonSpy, ...args: any[]): void;
	alwaysCalledWithExactly(spy: SinonSpy, ...args: any[]): void;
	calledWithMatch(spy: SinonSpy, ...args: SinonMatcher[]): void;
	alwaysCalledWithMatch(spy: SinonSpy, ...args: SinonMatcher[]): void;
	neverCalledWithMatch(spy: SinonSpy, ...args: SinonMatcher[]): void;
	threw(spy: SinonSpy): void;
	threw(spy: SinonSpy, exception: string): void;
	threw(spy: SinonSpy, exception: any): void;
	alwaysThrew(spy: SinonSpy): void;
	alwaysThrew(spy: SinonSpy, exception: string): void;
	alwaysThrew(spy: SinonSpy, exception: any): void;
	expose(obj: any, options?: SinonExposeOptions): void;
}

interface SinonStatic {
	assert: SinonAssert;
}

interface SinonMatcher {
	and(expr: SinonMatch): SinonMatcher;
	or(expr: SinonMatch): SinonMatcher;
}

interface SinonMatch {
	(value: number): SinonMatcher;
	(value: string): SinonMatcher;
	(expr: RegExp): SinonMatcher;
	(obj: any): SinonMatcher;
	(callback: (value: any) => bool): SinonMatcher;
	any: SinonMatcher;
	defined: SinonMatcher;
	truthy: SinonMatcher;
	falsy: SinonMatcher;
	bool: SinonMatcher;
	number: SinonMatcher;
	string: SinonMatcher;
	object: SinonMatcher;
	func: SinonMatcher;
	array: SinonMatcher;
	regexp: SinonMatcher;
	date: SinonMatcher;
	same(obj: any): SinonMatcher;
	typeOf(type: string): SinonMatcher;
	instanceOf(type: any): SinonMatcher;
	has(property: string, expect?: any): SinonMatcher;
	hasOwn(property: string, expect?: any): SinonMatcher;
}

interface SinonStatic {
	match: SinonMatch;
}

interface SinonSandboxConfig {
	injectInto?: any;
	properties?: string[];
	useFakeTimers?: any;
	useFakeServer?: any;
}

interface SinonSandbox {
	clock: SinonFakeTimers;
	requests: SinonFakeXMLHttpRequest;
	server: SinonFakeServer;
	spy(): SinonSpy;
	stub(): SinonStub;
	mock(): SinonMock;
	useFakeTimers: SinonFakeTimers;
	useFakeXMLHttpRequest: SinonFakeXMLHttpRequest;
	restore(): void;
}

interface SinonSandboxStatic {
	create(): SinonSandbox;
	create(config: SinonSandboxConfig): SinonSandbox;
}

interface SinonStatic {
	sandbox: SinonSandboxStatic;
}

interface SinonTestConfig {
	injectIntoThis?: bool;
	injectInto?: any;
	properties?: string[];
	useFakeTimers?: bool;
	useFakeServer?: bool;
}

interface SinonTestWrapper extends SinonSandbox {
	(...args: any[]): any;
}

interface SinonStatic {
	config: SinonTestConfig;
	test(fn: (...args: any[]) => any): SinonTestWrapper;
	testCase(tests: any): any;
}

// Utility overridables
interface SinonStatic {
	format: (obj: any) => string;
	log: (message: string) => void;
}

var sinon: SinonStatic;
