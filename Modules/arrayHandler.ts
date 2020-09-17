export class ArrayClass {
    private  trainees : string[];
constructor(){
    this.trainees=['Astha', 'Priyanka', 'Ankita'];
}
    
    public newTrainees(newJoinser : string) : string[]
    {
        this.trainees.push(newJoinser )
      
        return this.trainees;
    }
    public noOfTrainees() : number{
        return this.trainees.length;
    }
    public addAtTop(trainee : string) : string[]{
        this.trainees.unshift(trainee);
        return this.trainees;
    }
    public addTrainee(trainee : string) : any {
        if(this.trainees.includes(trainee))
        {
            console.log('Trainee already exist');
        }
        else{
        this.trainees.push(trainee);
        return this.trainees;
        }
    }
    public removeTrainee() : String[]{
       this.trainees.splice(1,2);
       return this.trainees;
    }
    public sortTrainee() : String[]
    {
     this.trainees.sort();
     return this.trainees;
    }

}
export default ArrayClass

let obj =new ArrayClass();
console.log("new trainees    ::" + obj.newTrainees('shina'));
console.log("no of trainees  ::" + obj.noOfTrainees());
console.log("add at begin    ::" + obj.addAtTop('malini'));
console.log("add at end      ::" + obj.addTrainee('krishna'));
console.log("remove          ::" + obj.removeTrainee());
console.log("sort trainees   ::" + obj.sortTrainee());