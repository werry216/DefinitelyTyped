// Type definitions for FlexSlider 2 jquery plugin
// Project: https://github.com/woothemes/FlexSlider
// Definitions by: Diullei Gomes <https://github.com/diullei>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface SliderObject { //Object: The slider element itself
	container: Object;              //Object: The ul.slides within the slider
	slides: Object;                 //Object: The slides of the slider
	count: number;                  //Int: The total number of slides in the slider
	currentSlide: number;           //Int: The slide currently being shown
	animatingTo: number;            //Int: Useful in .before(), the slide currently animating to
	animating: bool;              //Boolean: is slider animating?
	atEnd: bool;                  //Boolean: is the slider at either end?
	manualPause: bool;            //Boolean: force slider to stay paused during pauseOnHover event
	controlNav: Object;             //Object: The slider controlNav
	directionNav: Object;            //Object: The slider directionNav
	controlsContainer: Object;      //Object: The controlsContainer element of the slider
	manualControls: Object;         //Object: The manualControls element of the slider
	flexAnimate(target, pause?);    //Function: Move slider - (target, pause) parameters
	pause();                //Function: Pause slider slideshow interval
	resume();               //Function: Resume slider slideshow interval
	canAdvance(target);     //Function: returns boolean if slider can advance - (target) parameter
	getTarget(dir);         //Function: get target given a direction - "next" or "prev" parameter
}

interface FlexSliderOptions {
	namespace?: string;             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
	selector?: string;       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
	animation?: string;              //String: Select your animation type, "fade" or "slide"
	easing?: string;               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
	direction?: string;        //String: Select the sliding direction, "horizontal" or "vertical"
	reverse?: bool;                 //{NEW} Boolean: Reverse the animation direction
	animationLoop?: bool;             //Boolean: Should the animation loop? If bool; directionNav will received "disable" classes at either end
	smoothHeight?: bool;            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
	startAt?: number;                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
	slideshow?: bool;                //Boolean: Animate slider automatically
	slideshowSpeed?: number;           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed?: number;            //Integer: Set the speed of animations, in milliseconds
	initDelay?: number;                   //{NEW} Integer: Set an initialization delay, in milliseconds
	randomize?: bool;               //Boolean: Randomize slide order
	 
	// Usability features
	pauseOnAction?: bool;            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover?: bool;            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
	useCSS?: bool;                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	touch?: bool;                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
	video?: bool;                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
	 
	// Primary Controls
	controlNav?: any;               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
	directionNav?: bool;             //Boolean: Create navigation for previous/next navigation? (true/false)
	prevText?: string;           //String: Set the text for the "previous" directionNav item
	nextText?: string;               //String: Set the text for the "next" directionNav item
	 
	// Secondary Navigation
	keyboard?: bool;                 //Boolean: Allow slider navigating via keyboard left/right keys
	multipleKeyboard?: bool;        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
	mousewheel?: bool;              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
	pausePlay?: bool;               //Boolean: Create pause/play dynamic element
	pauseText?: string;             //String: Set the text for the "pause" pausePlay item
	playText?: string;               //String: Set the text for the "play" pausePlay item
	 
	// Special properties
	controlsContainer?: string;          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
	manualControls?: string;             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
	sync?: string;                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
	asNavFor?: string;                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
	 
	// Carousel Options
	itemWidth?: number;                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
	itemMargin?: number;                  //{NEW} Integer: Margin between carousel items.
	minItems?: number;                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
	maxItems?: number;                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
	move?: number;                        //{NEW} Integer: Number of carousel items that should move on animation. If number; slider will move all visible items.
	 
	// Callback API
	start?: (slider: SliderObject) => any;            //Callback: function(slider) - Fires when the slider loads the first slide
	before?: (slider: SliderObject) => any;           //Callback: function(slider) - Fires asynchronously with each slider animation
	after?: () => any;            //Callback: function(slider) - Fires after each slider animation completes
	end?: () => any;              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
	added?: () => any;            //{NEW} Callback: function(slider) - Fires after a slide is added
	removed?: () => any;
}


interface JQuery {
    flexslider(options?: FlexSliderOptions);
}
