module.exports.training=function training (traineeName: string,  duration: string , noOfModules: number,moduleList: Array<String>,trainingStatus :Function )
{
var traineeName = traineeName;
var duration = duration;
var noOfModules = noOfModules;
var moduleList =moduleList
trainingStatus=function()
{
    console.log("Training Done Successfully with Modules"+moduleList);
}

}
export default training
