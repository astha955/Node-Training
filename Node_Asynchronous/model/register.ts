import * as fs from 'fs';
import * as u from './user';
import * as readline from 'readline';
const r1 = readline.createInterface({
input : process.stdin,
output : process.stdout
});
export class RegisterClass {
newUser(user:any){
  let promise:any = new Promise(function(resolve, reject) { 
r1.question("username", (uname:any)=> {
r1.question("password", (pwd:any)=> {
r1.question("firstname", (fname:any)=> {
r1.question("lastname", (lname:any)=> {
  r1.question("Address", (ads:any)=> {
user.username=uname;
user.password=pwd;
user.firstName=fname;
user.lastName=lname;
user.Address=ads;
  if(user instanceof u.User){
  resolve(user);
  }
  else{
  reject('invalid input type');
  }
  
var myJson= JSON.stringify(user);
fs.appendFileSync('userDetails.json','\n'+myJson);
//fs.writeFileSync('userDetails.json',myJson);
r1.close
})
})
})
})
})


});
return promise;
}
}

export default RegisterClass



