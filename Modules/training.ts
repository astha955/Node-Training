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

public trainingStatus():any
{
return "Training Done Successfully with Modules "+this.moduleList;
}

}
export default Training
