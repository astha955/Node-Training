import * as readline from 'readline';
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
var myArgs;
var arr;
var index;
export class StringClass {
    
    public nameHandler(name:String) : any {
        myArgs =name.slice(2,4);
        arr=name.split(" ");
        index =name.indexOf('Enzigma');
        console.log('myArgs: ',myArgs);
        console.log('index: ', index);
        console.log('arr: ', arr);
        r1.close()
       
    }
}
export default StringClass
var obj= new StringClass ();
r1.question('who are you ', async (name)=> {
    var args=name;
    await obj.nameHandler(String(args));
    r1.close
})
