import * as readline from 'readline';
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question('who are you ', (name)=> {
    var myArgs =name.slice(2,4);
    var arr=name.split(" ");
    var index =name.indexOf('Enzigma');
    console.log('myArgs: ',myArgs);
    console.log('index: ', index);
    console.log('arr: ', arr);
    r1.close()


})
export class StringClass {
    
    public nameHandler(input:String) : String[] {
        var arr= input.split(" ");
        return arr;
    }
}
export default StringClass