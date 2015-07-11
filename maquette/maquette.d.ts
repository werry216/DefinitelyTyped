// Type definitions for maquette
// Project: http://maquettejs.org/
// Definitions by: Johan Gorter <https://github.com/johan-gorter>
// Definitions: https://github.com/johan-gorter/DefinitelyTyped

  /**
   * The main object in maquette is the maquette object. 
   * It is either bound to `window.maquette` or it can be obtained using {@link http://browserify.org/|browserify} or {@link http://requirejs.org/|requirejs}.
   */
declare module maquette {

  export interface VNodeProperties {
    enterAnimation?: ((element: Element, properties?: VNodeProperties) => void) | string;
    exitAnimation?: ((element: Element, removeElement: () => void, properties?: VNodeProperties) => void) | string;
    updateAnimation?: (element: Element, properties?: VNodeProperties, previousProperties?: VNodeProperties) => void;
    afterCreate?: (element: Element, projectionOptions: ProjectionOptions, vnodeSelector: string, properties: VNodeProperties,
      children: VNode[]) => void;
    afterUpdate?: (element: Element, projectionOptions: ProjectionOptions, vnodeSelector: string, properties: VNodeProperties,
      children: VNode[]) => void;
    [index: string]: Object;
  }

  export interface ProjectionOptions {
    transitions?: {
      enter: (element: Element, properties: VNodeProperties, enterAnimation: string) => void;
      exit: (element: Element, properties: VNodeProperties, exitAnimation: string, removeElement: () => void) => void; 
    }
  }

  export type VNodeChild = string|VNode|Array<string|VNode|Array<string|VNode|Array<string|VNode|Array<Object>>>>; // Array<Object> means Array<VNodeChild>

  export var dom: MaquetteDom;

    /**
     * Creates a {@link CalculationCache} object, useful for caching {@link VNode} trees. 
     * In practice, caching of {@link VNode} trees is not needed, because achieving 60 frames per second is almost never a problem.
     * @returns {CalculationCache}
     */
  export function createCache<Result>(): CalculationCache<Result>;
  
    /**
     * Creates a {@link Mapping} instance that keeps an array of result objects synchronized with an array of source objects.
     * @param {function} getSourceKey - `function(source)` that must return a key to identify each source object. The result must eather be a string or a number.
     * @param {function} createResult - `function(source, index)` that must create a new result object from a given source. This function is identical argument of `Array.map`.
     * @param {function} updateResult - `function(source, target, index)` that updates a result to an updated source.
     * @returns {Mapping} 
     */
  export function createMapping<Source, Target>(
    getSourceKey: (source: Source) => (string|number), 
    createResult: (source: Source, index:number) => Target, 
    updateResult: (source: Source, target: Target, index: number) => void): Mapping<Source, Target>;

    /**
     * Creates a {@link Projector} instance using the provided projectionOptions.
     * @param {Object} projectionOptions - Options that influence how the DOM is rendered and updated.
     * projectionOptions.transitions - A transition strategy to invoke when 
     * enterAnimation and exitAnimation properties are provided as strings.
     * The module `cssTransitions` in the provided `css-transitions.js` file provides such a strategy. 
     * A transition strategy is not needed when enterAnimation and exitAnimation properties are provided as functions.
     * @returns {Projector}
     */
  export function createProjector(projectionOptions? : ProjectionOptions) : Projector;
  
    /**
     * The `h` method is used to create a virtual DOM node. 
     * This function is largely inspired by the mercuryjs and mithril frameworks.
     * The `h` stands for (virtual) hyperscript.
     * 
     * @param {string} selector - Contains the tagName, id and fixed css classnames in CSS selector format. 
     * It is formatted as follows: `tagname.cssclass1.cssclass2#id`. 
     * @param {Object} properties - An object literal containing properties that will be placed on the DOM node.
     * Properties with functions values like `onclick:handleClick` are registered as event handlers.
     * Properties with string values, like `href:"/"` are used as attributes.
     * All non-string values are put on the DOM node as properties.
     * Property 'key' is used to uniquely identify a DOM node among siblings. 
     * A key is required when there are more children with the same selector and these children are added or removed dynamically.
     * Property classes is an object literal like `{important:true}` which allows css classes, like `important` to be added and removed dynamically.
     * Property styles is an object literal like `{height:"100px"}` which allows styles to be changed dynamically. All values must be strings.
     * Property enterAnimation is the animation to perform when this node is added to an already existing parent. 
     * {@link http://maquettejs.org/docs/animations.html|More about animations}.
     * When this value is a string, you must pass a `projectionOptions.transitions` object when creating the projector {@link module:maquette.createProjector}. 
     * Properties exitAnimation is the animation to perform when this node is removed while its parent remains.
     * When this value is a string, you must pass a `projectionOptions.transitions` object when creating the projector {@link module:maquette.createProjector}. 
     * {@link http://maquettejs.org/docs/animations.html|More about animations}.
     * Property updateAnimation is the animation to perform when the properties of this node change. 
     * This also includes attributes, styles, css classes. This callback is also invoked when node contains only text and that text changes.
     * {@link http://maquettejs.org/docs/animations.html|More about animations}.
     * property afterCreate is the callback that is executed after this node is added to the DOM. Childnodes and properties have already been applied.
     * property afterUpdate is the callback that is executed every time this node may have been updated. Childnodes and properties have already been updated. 
     * @param {Array<VNodeChild>} children - An array of virtual DOM nodes and strings to add as child nodes. 
     * This array may contain nested arrays, `null` or `undefined` values.
     * Nested arrays are flattened, `null` and `undefined` will be skipped.
     * 
     * @returns {VNode} A VNode object, used to render a real DOM later. NOTE: There are {@link http://maquettejs.org/docs/rules.html|three basic rules} you should be aware of when updating the virtual DOM.
     */
  export function h(selector: string, properties: VNodeProperties, children: Array<VNodeChild>): VNode;
  export function h(selector: string, children: Array<VNodeChild>): VNode;
  export function h(selector: string, properties: VNodeProperties): VNode;
  export function h(selector: string): VNode;

  /**
   * A virtual representation of a DOM Node. Maquette assumes that {@link VNode} objects are never modified externally.
   * Instances of {@link VNode} can be created using {@link module:maquette.h}.
   */
  export interface VNode {
    vnodeSelector: string;
    properties: VNodeProperties;
    children: Array<VNode>;
  }

  // Not used anywhere in the maquette sourcecode, but it is a widely used pattern.
  export interface Component {
    renderMaquette() : VNode;
  }

  /**
   * A CalculationCache object remembers the previous outcome of a calculation along with the inputs. 
   * On subsequent calls the previous outcome is returned if the inputs are identical. 
   * This object can be used to bypass both rendering and diffing of a virtual DOM subtree.
   * Instances of {@link CalculationCache} can be created using {@link module:maquette.createCache}.
   */
  export interface CalculationCache<Result> {
        /**
         * Manually invalidates the cached outcome.
         */
    invalidate(): void;
        /**
         * If the inputs array matches the inputs array from the previous invocation, this method returns the result of the previous invocation.
         * Otherwise, the calculation function is invoked and its result is cached and returned. 
         * Objects in the inputs array are compared using ===.
         * @param {Object[]} inputs - Array of objects that are to be compared using === with the inputs from the previous invocation. 
         * These objects are assumed to be immutable primitive values.
         * @param {function} calculation - Function that takes zero arguments and returns an object (A {@link VNode} assumably) that can be cached.
         */
    result(inputs: Array<Object>, calculation: () => Result):Result;
  }

  /**
   * Keeps an array of result objects synchronized with an array of source objects.
   * Mapping provides a {@link Mapping#map} function that updates the {@link Mapping#results}. 
   * The {@link Mapping#map} function can be called multiple times and the results will get created, removed and updated accordingly.
   * A {@link Mapping} can be used to keep an array of components (objects with a `renderMaquette` method) synchronized with an array of data.
   * Instances of {@link Mapping} can be created using {@link module:maquette.createMapping}.
   */
  export interface Mapping<Source, Target> {
        /**
         * The array of results. These results will be synchronized with the latest array of sources that were provided using {@link Mapping#map}.
         * @type {Object[]}
         */
    results: Array<Target>;
        /**
         * Maps a new array of sources and updates {@link Mapping#results}.
         * @param {Object[]} newSources - The new array of sources.
         */
    map(newSources: Array<Source>): void;
  }

  /**
   * Contains simple low-level utility functions to manipulate the real DOM. The singleton instance is available under {@link module:maquette.dom}.
   */
  export interface MaquetteDom {
      /**
       * Appends a new childnode to the DOM which is generated from a {@link VNode}. 
       * This is a low-level method. Users wil typically use a {@link Projector} instead. 
       * @param {Element} parentNode - The parent node for the new childNode.
       * @param {VNode} vnode - The root of the virtual DOM tree that was created using the {@link module:maquette.h} function. NOTE: {@link VNode} objects may only be rendered once.
       * @param {Object} projectionOptions - Options to be used to create and update the projection, see {@link module:maquette.createProjector}. 
       * @returns {Projection} The {@link Projection} that was created.
       */
    append(parentNode: Element, vnode: VNode, projectionOptions?: ProjectionOptions): Projection;
      /**
       * Creates a real DOM tree from a {@link VNode}. The {@link Projection} object returned will contain the resulting DOM Node under the {@link Projection#domNode} property. 
       * This is a low-level method. Users wil typically use a {@link Projector} instead. 
       * @param {VNode} vnode - The root of the virtual DOM tree that was created using the {@link module:maquette.h} function. NOTE: {@link VNode} objects may only be rendered once.
       * @param {Object} projectionOptions - Options to be used to create and update the projection, see {@link module:maquette.createProjector}. 
       * @returns {Projection} The {@link Projection} which contains the DOM Node that was created.
       */
    create(vnode: VNode, projectionOptions?: ProjectionOptions): Projection;
      /**
       * Inserts a new DOM node which is generated from a {@link VNode}. 
       * This is a low-level method. Users wil typically use a {@link Projector} instead. 
       * @param {Element} beforeNode - The node that the DOM Node is inserted before.
       * @param {VNode} vnode - The root of the virtual DOM tree that was created using the {@link module:maquette.h} function. NOTE: {@link VNode} objects may only be rendered once.
       * @param {Object} projectionOptions - Options to be used to create and update the projection, see {@link module:maquette.createProjector}. 
       * @returns {Projection} The {@link Projection} that was created.
       */
    insertBefore(beforeNode: Element, vnode: VNode): Projection;
      /**
       * Merges a new DOM node which is generated from a {@link VNode} with an existing DOM Node.
       * This means that the virtual DOM and real DOM have one overlapping element. 
       * Therefore the selector for the root {VNode} will be ignored, but its properties and children will be applied to the Element provided 
       * This is a low-level method. Users wil typically use a {@link Projector} instead. 
       * @param {Element} domNode - The existing element to adopt as the root of the new virtual DOM. Existing attributes and childnodes are preserved.  
       * @param {VNode} vnode - The root of the virtual DOM tree that was created using the {@link module:maquette.h} function. NOTE: {@link VNode} objects may only be rendered once.
       * @param {Object} projectionOptions - Options to be used to create and update the projection, see {@link module:maquette.createProjector}. 
       * @returns {Projection} The {@link Projection} that was created.
       */
    merge(domNode: Element, vnode: VNode): Projection;
  }

  /**
   * Represents a {@link VNode} tree that has been rendered to a real DOM tree.
   */
  export interface Projection {
      /**
       * Updates the projection with the new virtual DOM tree.
       * @param {VNode} updatedVnode - The updated virtual DOM tree. Note: The selector for the root of the tree must remain constant. 
       */
    update(updatedVnode:VNode): void;
      /**
       * The DOM node that is used as the root of this {@link Projection}.
       * @type {Element}
       */
    domNode: Element;
  }

  
  /**
   * Used to create and update the DOM.
   * Use {@link Projector#append}, {@link Projector#merge}, {@link Projector#insertBefore} and {@link Projector#replace} 
   * to create the DOM.
   * The `renderMaquetteFunction` callbacks will be called immediately to create the DOM. Afterwards, these functions 
   * will be called again to update the DOM on the next animation-frame after:
   * 
   *  - The {@link Projector#scheduleRender} function  was called
   *  - An event handler (like `onclick`) on a rendered {@link VNode} was called.
   * 
   * The projector stops when {@link Projector#stop} is called or when an error is thrown during rendering. 
   * It is possible to use `window.onerror` to handle these errors.
   * Instances of {@link Projector} can be created using {@link module:maquette.createProjector}.
   */
  export interface Projector {
        /**
         * Appends a new childnode to the DOM using the result from the provided `renderMaquetteFunction`.
         * The `renderMaquetteFunction` will be invoked again to update the DOM when needed.
         * @param {Element} parentNode - The parent node for the new childNode.
         * @param {function} renderMaquetteFunction - Function with zero arguments that returns a {@link VNode} tree.
         */
    append(parentNode: Element, renderMaquetteFunction: () => VNode): void;
        /**
         * Scans the document for `<script>` tags with `type="text/hyperscript"`.
         * The content of these scripts are registered as `renderMaquette` functions.
         * The result of evaluating these functions will be inserted into the DOM after the script.
         * These scripts can make use of variables that come from the `parameters` parameter.
         * @param {Element} rootNode - Element to start scanning at, example: `document.body`.
         * @param {Object} parameters - Variables to expose to the scripts. format: `{var1:value1, var2: value2}`
         */
    evaluateHyperscript(rootNode: Element, parameters: {[index: string]: Object}): void;
        /**
         * Inserts a new DOM node using the result from the provided `renderMaquetteFunction`.
         * The `renderMaquetteFunction` will be invoked again to update the DOM when needed.
         * @param {Element} beforeNode - The node that the DOM Node is inserted before.
         * @param {function} renderMaquetteFunction - Function with zero arguments that returns a {@link VNode} tree.
         */
    insertBefore(beforeNode: Element, renderMaquetteFunction: () => VNode): void;
        /**
         * Merges a new DOM node using the result from the provided `renderMaquetteFunction` with an existing DOM Node.
         * This means that the virtual DOM and real DOM have one overlapping element. 
         * Therefore the selector for the root {VNode} will be ignored, but its properties and children will be applied to the Element provided
         * The `renderMaquetteFunction` will be invoked again to update the DOM when needed.
         * @param {Element} domNode - The existing element to adopt as the root of the new virtual DOM. Existing attributes and childnodes are preserved.  
         * @param {function} renderMaquetteFunction - Function with zero arguments that returns a {@link VNode} tree.
         */
    merge(domNode: Element, renderMaquetteFunction: () => VNode): void;
        /**
         * Replaces an existing DOM node with the result from the provided `renderMaquetteFunction`.
         * The `renderMaquetteFunction` will be invoked again to update the DOM when needed.
         * @param {Element} domNode - The DOM node to replace.
         * @param {function} renderMaquetteFunction - Function with zero arguments that returns a {@link VNode} tree.
         */
    replace(domNode: Element, renderMaquetteFunction: () => VNode): void;
        /**
         * Resumes the projector. Use this method to resume rendering after stop was called or an error occurred during rendering.
         */
    resume(): void;
        /**
         * Instructs the projector to re-render to the DOM at the next animation-frame using the registered `renderMaquette` functions.
         * This method is automatically called for you when event-handlers that are registered in the {@link VNode}s are invoked.
         * You need to call this method for instance when timeouts expire or AJAX responses arrive.
         */
    scheduleRender(): void;
        /**
         * Stops the projector. This means that the registered `renderMaquette` functions will not be called anymore.
         * Note that calling {@link Projector#stop} is not mandatory. A projector is a passive object that will get garbage collected as usual if it is no longer in scope.
         */
    stop(): void;
  }
}

declare module 'maquette' {
  export = maquette;
}
