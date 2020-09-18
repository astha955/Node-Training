export class Training {
traineeName : string;
duration :string;
noOfModules :number;
moduleList :string[];
constructor(){        
this.traineeName = '';
this.duration = '';
this.noOfModules = 0;
this.moduleList =[];
}
trainingStatus=function(moduleList)
{

console.log("Training Done Successfully with Modules"+moduleList);
}

}
export default training
