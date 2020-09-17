var request = require('request');
//url?access_key=xyzhvjhv&query=hkxjs
var url = 'http://api.weatherstack.com/current?access_key=c604d5cfe3882a9d982662f3588255e9&query=India';
// request({url: url}, ( error, response ) =>{
// const data= JSON.parse(response.body);
// console.log(data);
//})
request({ url: url, json: true }, function (error, response) {
    //console.log(response.body.current);
    //console.log(response.body.location);
    var fs = require('fs');
    var data = JSON.stringify(response.body);
    fs.writeFile('./weather_data.json', data, function (err) {
        if (err) {
            console.log('Error writing file', err);
        }
        else {
            console.log('Successfully wrote file');
        }
    });
    console.log("city " + response.body.location.region + " of Country " + response.body.location.country);
});
