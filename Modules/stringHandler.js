"use strict";
exports.__esModule = true;
exports.StringClass = void 0;
var readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('who are you ', function (name) {
    var myArgs = name.slice(2, 4);
    var arr = name.split(" ");
    var index = name.indexOf('Enzigma');
    console.log('myArgs: ', myArgs);
    console.log('index: ', index);
    console.log('arr: ', arr);
    r1.close();
});
var StringClass = /** @class */ (function () {
    function StringClass() {
    }
    StringClass.prototype.nameHandler = function (input) {
        var arr = input.split(" ");
        return arr;
    };
    return StringClass;
}());
exports.StringClass = StringClass;
exports["default"] = StringClass;
