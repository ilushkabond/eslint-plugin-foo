/**
 * @fileoverview rule
 * @author foo
 */

 "use strict";

module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        }
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === "foo") {
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {
                            name: "foo",
                        },
                    });
                }
            }
        };
    }
};

// in the file to lint:

// var foo = 2;
// //  ^ error: Avoid using variables named 'foo'

// // In your tests:
// // var rule = require("../../../lib/rules/my-rule");
// var RuleTester = require("eslint").RuleTester

// var ruleTester = new RuleTester();
// ruleTester.run("my-rule", rule, {
//     valid: ["bar", "baz"],
//     invalid: [
//         {
//             code: "foo",
//             errors: [
//                 {
//                     messageId: "avoidName"
//                 }
//             ]
//         }
//     ]
// });