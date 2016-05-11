///<reference types="tether" />

var yellowBox = document.querySelector(".yellow");
var greenBox = document.querySelector(".green");

var d = new Drop({
    position: "bottom left",
    openOn: "click",
    constrainToWindow: true,
    constrainToScrollParent: true,
    classes: "",
    tetherOptions: {},
    remove: true,
    target: yellowBox,
    content: greenBox
});

d.open();
d.close();
d.remove();
d.toggle();
d.position();
d.destroy();
d.element.appendChild(document.createElement("div"));
d.tether.position();

d.on("open", () => false);
d.on("close", () => false);
d.once("close", () => false);
d.off("close", () => false);
d.off("open");

var e = new Drop({
    target: yellowBox,
    content: () => greenBox
});

