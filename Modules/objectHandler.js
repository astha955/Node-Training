"use strict";
exports.__esModule = true;
var training = require('./training.ts');
var ObjectClass = /** @class */ (function () {
    function ObjectClass() {
    }
    ObjectClass.prototype.startTraining = function (task) {
        var res = (training.traineeName = task);
        return res;
    };
    return ObjectClass;
}());
console.log(new ObjectClass().startTraining("Astha"));
exports["default"] = ObjectClass;
