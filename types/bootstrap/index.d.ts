// Type definitions for bootstrap 5.0
// Project: https://v5.getbootstrap.com/
// Definitions by: denisname <https://github.com/denisname>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

export as namespace bootstrap;

import Alert from "./js/dist/alert";
import Button from "./js/dist/button";
import Carousel from "./js/dist/carousel";
import Collapse from "./js/dist/collapse";
import Dropdown from "./js/dist/dropdown";
import Tab from "./js/dist/tab";
import Modal from "./js/dist/modal";
import Offcanvas from "./js/dist/offcanvas";
import Popover from "./js/dist/popover";
import ScrollSpy from "./js/dist/scrollspy";
import Toast from "./js/dist/toast";
import Tooltip from "./js/dist/tooltip";

declare global {
    interface JQuery {
        alert: Alert.jQueryInterface;
        button: Button.jQueryInterface;
        carousel: Carousel.jQueryInterface;
        collapse: Collapse.jQueryInterface;
        dropdown: Dropdown.jQueryInterface;
        tab: Tab.jQueryInterface;
        modal: Modal.jQueryInterface;
        offcanvas: Offcanvas.jQueryInterface;
        [Popover.NAME]: Popover.jQueryInterface;
        scrollspy: ScrollSpy.jQueryInterface;
        toast: Toast.jQueryInterface;
        [Tooltip.NAME]: Tooltip.jQueryInterface;
    }

    interface Element {
        addEventListener(
            type: Carousel.Events,
            listener: (this: Element, ev: Carousel.Event) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
    }
}

export { Alert, Button, Carousel, Collapse, Dropdown, Tab, Modal, Offcanvas, Popover, ScrollSpy, Toast, Tooltip };
