var fs = require('fs');
var training = require('./training');
training.traineeName = "Astha";
training.duration = "2 months";
training.noOfModules = 5;
training.moduleList = ["c", "Salesforce", "NodeJs", "Angular"];
var customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City"
};
var jsonString = JSON.stringify(training);
fs.writeFile('./newCustomer.json', jsonString, function (err) {
    if (err) {
        console.log('Error writing file', err);
    }
    else {
        console.log('Successfully wrote file');
    }
});
