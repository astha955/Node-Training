"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(first, second) {
        this.first = first;
        this.second = second;
        this.firstNumber = first;
        this.secondNumber = second;
    }
    Calculator.prototype.Addition = function () {
        return this.firstNumber + this.secondNumber;
    };
    Calculator.prototype.Subtraction = function () {
        return this.firstNumber - this.secondNumber;
    };
    Calculator.prototype.Multiplication = function () {
        return this.firstNumber * this.secondNumber;
    };
    Calculator.prototype.Division = function () {
        return this.firstNumber / this.secondNumber;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
exports["default"] = Calculator;
