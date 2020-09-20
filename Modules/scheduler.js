"use strict";
exports.__esModule = true;
exports.SchedularClass = void 0;
var SchedularClass = /** @class */ (function () {
    function SchedularClass() {
    }
    SchedularClass.prototype.scheduleTask = function (task, callback) {
        setTimeout(function () {
            callback('Task ' + task + ' completed');
        }, 2000);
    };
    SchedularClass.prototype.startTask = function () {
        console.log('Task started');
        this.scheduleTask('xyz', function (status) {
            console.log(status);
        });
    };
    return SchedularClass;
}());
exports.SchedularClass = SchedularClass;
exports["default"] = SchedularClass;
var obj = new SchedularClass();
obj.startTask();
