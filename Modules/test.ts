const fs = require('fs')
const training= require('./training')
training.traineeName="Astha";
training.duration="2 months";
training.noOfModules=5;
training.moduleList=["c","Salesforce","NodeJs","Angular"];
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
const jsonString = JSON.stringify(training)
fs.writeFile('./newCustomer.json', jsonString,err=> {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})