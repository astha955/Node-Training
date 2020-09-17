"use strict";
exports.__esModule = true;
module.exports.training = function training(traineeName, duration, noOfModules, moduleList, trainingStatus) {
    var traineeName = traineeName;
    var duration = duration;
    var noOfModules = noOfModules;
    var moduleList = moduleList;
    trainingStatus = function () {
        console.log("Training Done Successfully with Modules" + moduleList);
    };
};
exports["default"] = training;
