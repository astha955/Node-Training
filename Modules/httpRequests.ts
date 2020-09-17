const request =require('request');
//url?access_key=xyzhvjhv&query=hkxjs
const url='http://api.weatherstack.com/current?access_key=c604d5cfe3882a9d982662f3588255e9&query=India';

// request({url: url}, ( error, response ) =>{
  
// const data= JSON.parse(response.body);
// console.log(data);
//})
request({url: url,json:true}, ( error, response ) =>{
    //console.log(response.body.current);
    //console.log(response.body.location);
    const fs = require('fs')
    const data= JSON.stringify(response.body);
    fs.writeFile('./weather_data.json', data,err=> {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    console.log("city " +response.body.location.region +" of Country "+response.body.location.country );
    })