interface EventListener {
  // tslint:disable-next-line: callable-types
  (evt: Event): void;
}

/**
 * The Event interface represents any event which takes place in the DOM; some are user-generated (such as mouse or keyboard events), while others are generated by APIs (such as
 * events that indicate an animation has finished running, a video has been paused, and so forth). While events are usually triggered by such "external" sources, they can also be
 * triggered programmatically, such as by calling the HTMLElement.click() method of an element, or by defining the event, then sending it to a specified target using
 * EventTarget.dispatchEvent(). There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and
 * methods which are common to all events.
 */
interface Event {
  /**
   * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
   */
  readonly bubbles: boolean;
  cancelBubble: boolean;
  readonly cancelable: boolean;
  /**
   * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
   */
  readonly composed: boolean;
  readonly defaultPrevented: boolean;
  readonly eventPhase: number;
  /**
   * Returns true if event was dispatched by the user agent, and
   * false otherwise.
   */
  readonly isTrusted: boolean;
  returnValue: boolean;
  /**
   * Returns the event's timestamp as the number of milliseconds measured relative to
   * the time origin.
   */
  readonly timeStamp: number;
  /**
   * Returns the type of event, e.g.
   * "click", "hashchange", or
   * "submit".
   */
  readonly type: string;
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
  readonly NONE: number;
  composedPath(): any[];
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
  preventDefault(): void;
  /**
   * Invoking this method prevents event from reaching
   * any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any
   * other objects.
   */
  stopImmediatePropagation(): void;
  /**
   * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
   */
  stopPropagation(): void;
}

interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

interface MessageEventInit<T = any> extends EventInit {
  data?: T;
  lastEventId?: string;
  origin?: string;
}

/** The MessageEvent interface represents a message received by a target object. */
interface MessageEvent<T = any> extends Event {
  /**
   * Returns the data of the message.
   */
  readonly data: T;
  /**
   * Returns the last event ID string, for server-sent events.
   */
  readonly lastEventId: string;
  /**
   * Returns the origin of the message, for server-sent events and
   * cross-document messaging.
   */
  readonly origin: string;
}
declare var MessageEvent: {
  prototype: MessageEvent;
  new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};
