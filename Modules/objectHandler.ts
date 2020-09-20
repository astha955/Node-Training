import * as training from './training';
export class ObjectClass {
public obj:training.Training;
constructor(){
this.obj=new training.Training();
this.obj.traineeName='Astha';
this.obj.duration='4 months';
this.obj.noOfModules=4;
this.obj.moduleList=['c','Salesforce','NodeJs'];
}
startTraining():any 
{

console.log(this.obj);
}
newModule(name,callback)
{
this.obj.moduleList.push(name);
if(this.obj.noOfModules==this.obj.moduleList.length)
{
callback(this.obj.trainingStatus());
}
else{
callback("More modules to be covered");
}

}
}
export default ObjectClass
let o=new ObjectClass();
o.startTraining();
o.newModule('.net',(status)=>{
console.log(status);
})

