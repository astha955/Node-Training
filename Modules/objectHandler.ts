var training = require('./training.ts');
class ObjectClass {
startTraining(task : string):any 
{
var res=( training.traineeName=task);
return res;
}
}
console.log(new ObjectClass().startTraining("Astha"))
export default ObjectClass
