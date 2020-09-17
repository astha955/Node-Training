setTimeout(function () {
    console.log("two seconds later");
}, 2000);
// const geocode =(address,callback)=>{
//     const data = {
//         latitude:0,
//         longitude:0
//     }
//     return data
// }
var geocode = function (address, callback) {
    setTimeout(function () {
        var data = {
            latitude: 0,
            longitude: 0
        };
        return data;
    }, 2000);
};
var data = geocode('Philadelphia', '');
console.log(data);
