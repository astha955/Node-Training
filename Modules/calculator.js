 var Calculator = (function () {
    function Calculator() {
    }
    Calculator.Addition = function () {
        return this.FirstNumber + this.SecondNumber;
    };
    Calculator.Subtraction = function () {
        return this.FirstNumber - this.SecondNumber;
    };
    Calculator.Multiplication = function () {
        return this.FirstNumber * this.SecondNumber;
    };
    Calculator.Division = function () {
        return this.FirstNumber / this.SecondNumber;
    };
    return Calculator;
})();

Calculator.FirstNumber = 10;
Calculator.SecondNumber = 30;
console.log(Calculator.Addition());
console.log(Calculator.Subtraction());
console.log(Calculator.Multiplication());
console.log(Calculator.Division());
