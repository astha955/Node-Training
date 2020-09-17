"use strict";
exports.__esModule = true;
exports.ArrayClass = void 0;
var ArrayClass = /** @class */ (function () {
    function ArrayClass() {
        this.trainees = ['Astha', 'Priyanka', 'Ankita'];
    }
    ArrayClass.prototype.newTrainees = function (newJoinser) {
        this.trainees = newJoinser.split(" ");
        return this.trainees;
    };
    ArrayClass.prototype.noOfTrainees = function () {
        return this.trainees.length;
    };
    ArrayClass.prototype.addAtTop = function (trainee) {
        this.trainees.unshift(trainee);
        return this.trainees;
    };
    ArrayClass.prototype.addTrainee = function (trainee) {
        if (this.trainees.includes(trainee)) {
            console.log('Trainee already exist');
        }
        else {
            this.trainees.push(trainee);
            return this.trainees;
        }
    };
    ArrayClass.prototype.removeTrainee = function () {
        this.trainees = this.trainees.slice(1, 2);
        return this.trainees;
    };
    ArrayClass.prototype.sortTrainee = function () {
        this.trainees = this.trainees.sort();
        return this.trainees;
    };
    return ArrayClass;
}());
exports.ArrayClass = ArrayClass;
exports["default"] = ArrayClass;
