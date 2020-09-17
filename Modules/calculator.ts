export class Calculator {

    private  firstNumber: number;
    private  secondNumber: number;
    public constructor(public first :number, public second :number){
        this.firstNumber=first;
         this.secondNumber=second;

    }

    public  Addition(): number {
        return this.firstNumber + this.secondNumber;
    }
    public  Subtraction(): number {
        return this.firstNumber - this.secondNumber;
    }
    public  Multiplication (): number {
        return this.firstNumber * this.secondNumber;
    }
    public  Division (): number {
        return this.firstNumber / this.secondNumber;
    }
}

export default Calculator