/// <reference path="./mozilla-spidermonkey-parser-api.d.ts" />

import Syntax = spiderMonkeyParserAPI.Syntax;

var literal:Syntax.Literal = {
    loc: {
        source: null,
        start: {
            line: 1,
            column: 10
        },
        end: {
            line: 1,
            column: 12
        }
    },
    type: "Literal",
    value: 42
};

// generated by http://esprima.org/demo/parse.html?code=%22use%20strict%22%3B%0A%0Afunction%20Test%20()%20%7B%0A%7D%0A%0ATest.prototype.hello%20%3D%20function(word)%20%7B%0A%09word%20%3D%20word%20%7C%7C%20%22TypeScript%22%3B%0A%09return%20word%3B%0A%7D%3B%0A
var program:Syntax.Program = {
    "type": "Program",
    "body": [
        <Syntax.Expression>{
            "type": "ExpressionStatement",
            "expression": <Syntax.Literal>{
                "type": "Literal",
                "value": "use strict",
                "raw": "\"use strict\""
            }
        },
        <Syntax.FunctionDeclaration>{
            "type": "FunctionDeclaration",
            "id": <Syntax.Identifier>{
                "type": "Identifier",
                "name": "Test"
            },
            "params": [],
            "defaults": [],
            "body": <Syntax.BlockStatement>{
                "type": "BlockStatement",
                "body": []
            },
            "rest": null,
            "generator": false,
            "expression": false
        },
        <Syntax.Expression>{
            "type": "ExpressionStatement",
            "expression": <Syntax.AssignmentExpression>{
                "type": "AssignmentExpression",
                "operator": "=",
                "left": <Syntax.MemberExpression>{
                    "type": "MemberExpression",
                    "computed": false,
                    "object": <Syntax.MemberExpression>{
                        "type": "MemberExpression",
                        "computed": false,
                        "object": <Syntax.Identifier>{
                            "type": "Identifier",
                            "name": "Test"
                        },
                        "property": <Syntax.Identifier>{
                            "type": "Identifier",
                            "name": "prototype"
                        }
                    },
                    "property": <Syntax.Identifier>{
                        "type": "Identifier",
                        "name": "hello"
                    }
                },
                "right": <Syntax.FunctionExpression>{
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        <Syntax.Identifier>{
                            "type": "Identifier",
                            "name": "word"
                        }
                    ],
                    "defaults": [],
                    "body": <Syntax.BlockStatement>{
                        "type": "BlockStatement",
                        "body": [
                            <Syntax.Expression>{
                                "type": "ExpressionStatement",
                                "expression": <Syntax.AssignmentExpression>{
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": <Syntax.Identifier>{
                                        "type": "Identifier",
                                        "name": "word"
                                    },
                                    "right": <Syntax.LogicalExpression>{
                                        "type": "LogicalExpression",
                                        "operator": "||",
                                        "left": <Syntax.Identifier>{
                                            "type": "Identifier",
                                            "name": "word"
                                        },
                                        "right": <Syntax.Literal>{
                                            "type": "Literal",
                                            "value": "TypeScript",
                                            "raw": "\"TypeScript\""
                                        }
                                    }
                                }
                            },
                            <Syntax.ReturnStatement>{
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "word"
                                }
                            }
                        ]
                    },
                    "rest": null,
                    "generator": false,
                    "expression": false
                }
            }
        }
    ]
};
