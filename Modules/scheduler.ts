export class SchedularClass{
public scheduleTask(task:string,callback:any)
{
setTimeout(function(){
callback('Task '+task+ ' completed');
},2000)
}
public startTask(){
        console.log('Task started');
        this.scheduleTask('xyz',(status)=>{
                console.log(status);
        })
}
}
export default SchedularClass

let obj= new SchedularClass();
obj.startTask();