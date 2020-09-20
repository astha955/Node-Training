"use strict";
exports.__esModule = true;
exports.ObjectClass = void 0;
var training = require("./training");
var ObjectClass = /** @class */ (function () {
    function ObjectClass() {
        this.obj = new training.Training();
        this.obj.traineeName = 'Astha';
        this.obj.duration = '4 months';
        this.obj.noOfModules = 4;
        this.obj.moduleList = ['c', 'Salesforce', 'NodeJs'];
    }
    ObjectClass.prototype.startTraining = function () {
        console.log(this.obj);
    };
    ObjectClass.prototype.newModule = function (name, callback) {
        this.obj.moduleList.push(name);
        if (this.obj.noOfModules == this.obj.moduleList.length) {
            callback(this.obj.trainingStatus());
        }
        else {
            callback("More modules to be covered");
        }
    };
    return ObjectClass;
}());
exports.ObjectClass = ObjectClass;
exports["default"] = ObjectClass;
var o = new ObjectClass();
o.startTraining();
o.newModule('.net', function (status) {
    console.log(status);
});
