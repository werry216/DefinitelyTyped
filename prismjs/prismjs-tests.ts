var element = document.createElement("code");
var callback = (element: Element) => console.log(element);

Prism.highlightElement(element, false, callback);
Prism.highlightElement(element, false);
Prism.highlightAll(true, callback);
Prism.highlightAll(true);

const hookCallback: PrismJS.HookCallback = env => null;
Prism.hooks.add("before-highlightall", hookCallback);
Prism.hooks.add("future-hook", hookCallback);

var language = "js";
var tokens = Prism.tokenize("var n = 1;", Prism.languages[language]);
(function visit(token: PrismJS.TokenNode): PrismJS.TokenNode {
    if (typeof token === "string") {
        return token;
    } else if (Array.isArray(token)) {
        return token.map(visit) as PrismJS.TokenNode;
    } else {
        token.alias += "visited";
        return token;
    }
})(tokens);
