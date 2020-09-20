var path = require('path');
var express = require('express');
var app = express();
console.log(__dirname);
console.log(__filename);
var loginDirectoryPath = path.join(__dirname, '../views');
app.use(express.static(loginDirectoryPath));
app.listen(3000, function () {
    console.log('server is upon port 3000');
});
