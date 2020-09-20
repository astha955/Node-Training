"use strict";
exports.__esModule = true;
exports.RegisterClass = void 0;
var fs = require("fs");
var u = require("./user");
var readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var RegisterClass = /** @class */ (function () {
    function RegisterClass() {
    }
    RegisterClass.prototype.newUser = function (user) {
        var promise = new Promise(function (resolve, reject) {
            r1.question("username", function (uname) {
                r1.question("password", function (pwd) {
                    r1.question("firstname", function (fname) {
                        r1.question("lastname", function (lname) {
                            r1.question("Address", function (ads) {
                                user.username = uname;
                                user.password = pwd;
                                user.firstName = fname;
                                user.lastName = lname;
                                user.Address = ads;
                                if (user instanceof u.User) {
                                    resolve(user);
                                }
                                else {
                                    reject('invalid input type');
                                }
                                var myJson = JSON.stringify(user);
                                fs.appendFileSync('userDetails.json', '\n' + myJson);
                                //fs.writeFileSync('userDetails.json',myJson);
                                r1.close;
                            });
                        });
                    });
                });
            });
        });
        return promise;
    };
    return RegisterClass;
}());
exports.RegisterClass = RegisterClass;
exports["default"] = RegisterClass;
