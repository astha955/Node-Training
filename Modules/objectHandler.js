"use strict";
exports.__esModule = true;
var training = require('./training.ts');
var ObjectClass = /** @class */ (function () {
    function ObjectClass() {
    }
    ObjectClass.prototype.startTraining = function () {
        training.traineeName = "Astha";
        training.duration = "2 months";
        training.noOfModules = 5;
        training.moduleList = ["c", "Salesforce", "NodeJs", "Angular"];
    };
    ObjectClass.prototype.newModule = function (callback) {
        training.moduleList.push(".net");
        if (training.moduleList.length == training.noOfModules) {
            callback();
        }
        else {
            console.log("Training not completed");
        }
    };
    return ObjectClass;
}());
exports["default"] = ObjectClass;
var obj = new ObjectClass();
obj.startTraining();
obj.newModule(training.trainingStatus);
