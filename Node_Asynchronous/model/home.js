"use strict";
exports.__esModule = true;
var u = require("./user");
var register = require("./register");
var user1 = new u.User();
var obj = new register.RegisterClass();
obj.newUser(user1).then(function (userDetails) {
    console.log(userDetails);
})["catch"](function (rejectResult) {
    console.log(rejectResult);
});
