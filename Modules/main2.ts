import * as calculator from './calculator';
import * as readline from 'readline';
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


r1.question("enter your choice 1.Addition 2.Subtraction 3.Multiplication 4.Division", (choice)=> {
var ch = choice;
r1.question("enter first number", first=>{
    var f= Number(first);

r1.question("enter second number", second=>{
    var s= Number(second);

    let obj= new calculator.Calculator(f,s);

switch (Number(choice)) {
    case 1:
        console.log(obj.Addition());
        break;
    case 2:
        console.log(obj.Subtraction());
        break;
    case 3:
        console.log(obj.Multiplication());
        break;
    case 4:
        console.log(obj.Division());
        break;
    
    default:
        console.log("Invalid choice!");
        break;
}
r1.close()

})
})
})
