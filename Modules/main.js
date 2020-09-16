"use strict";
exports.__esModule = true;
var arrayHandler = require("./arrayHandler");
var readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var obj = new arrayHandler.ArrayClass();
var yargs = require('yargs');
var myArgs = String(yargs.argv._);
r1.question("enter your choice 1.newTrainees 2.numberOfTrainee 3.addAtTop 4.addAtEnd 5.RemoveTrainee 6.sortTrainee", function (choice) {
    var ch = choice;
    switch (Number(choice)) {
        case 1:
            console.log(obj.newTrainees(myArgs));
            break;
        case 2:
            console.log(obj.noOfTrainees());
            break;
        case 3:
            r1.question("enter the name", function (trainee) {
                var t = trainee;
                console.log(obj.addAtTop(t));
            });
            break;
        case 4:
            r1.question("enter the name", function (trainee) {
                var t = trainee;
                console.log(obj.addTrainee(trainee));
            });
            break;
        case 5:
            console.log(obj.removeTrainee());
            break;
        case 6:
            console.log(obj.sortTrainee());
            break;
        default:
            console.log("Invalid choice!");
            break;
    }
    r1.close();
});
