const trainees=['Astha', 'Priyanka', 'Ankita'];

export class ArrayClass {
    
    public newTrainees(newJoinser : string) : string[]
    {
        trainees.push(newJoinser);
      
        return trainees;
    }
    public noOfTrainees() : number{
        return trainees.length;
    }
    public addAtTop(trainee : string) : string[]{
        trainees.unshift(trainee);
        return trainees;
    }
    public addTrainee(trainee : string) : any {
        if(trainees.includes(trainee))
        {
            console.log('Trainee already exist');
        }
        else{
        trainees.push(trainee);
        return trainees;
        }
    }
    public removeTrainee() : String[]{
       trainees.slice(1,2);
       return trainees;
    }
    public sortTrainee() : String[]
    {
     trainees.sort();
     return trainees;
    }

}
export default ArrayClass