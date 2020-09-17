var training = require('./training.ts');
class ObjectClass {
startTraining():any 
{
training.traineeName="Astha";
training.duration="2 months";
training.noOfModules=5;
training.moduleList=["c","Salesforce","NodeJs","Angular"];
}
newModule(callback:Function)
{
    training.moduleList.push(".net");
    if(training.moduleList.length==training.noOfModules)
    {
        callback();
    }
    else{
        console.log("Training not completed");
    }
}
}
export default ObjectClass
let obj=new ObjectClass();
obj.startTraining();
obj.newModule(training.trainingStatus);

