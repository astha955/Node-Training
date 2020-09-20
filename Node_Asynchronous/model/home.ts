import * as u from './user'
import * as register from './register'
let user1= new u.User();
let obj= new register.RegisterClass();
obj.newUser(user1).then(function(userDetails:any){
  console.log(userDetails);
}).catch(function(rejectResult:any){
  console.log(rejectResult);
});