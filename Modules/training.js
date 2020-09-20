"use strict";
exports.__esModule = true;
exports.Training = void 0;
var Training = /** @class */ (function () {
    function Training() {
        this.traineeName = '';
        this.duration = '';
        this.noOfModules = 0;
        this.moduleList = [];
    }
    Training.prototype.trainingStatus = function () {
        return "Training Done Successfully with Modules " + this.moduleList;
    };
    return Training;
}());
exports.Training = Training;
exports["default"] = Training;
