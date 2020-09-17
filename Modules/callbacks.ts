setTimeout(()=>{
    console.log("two seconds later")},
    2000)
//case 1----->will return data
// const geocode =(address,callback)=>{
//     const data = {
//         latitude:0,
//         longitude:0
//     }
//     return data
// }
// const data = geocode('Philadelphia', '')
// console.log(data);

////////////////////////////////////////////////////////////////////////////////////////
//case 2---->below code will return undefined
// const geocode =(address,callback)=>{
//     setTimeout(()=>{
        
//     const data = {
//         latitude:0,
//         longitude:0
//     }
//     return data},
//  2000)
// }
// const data = geocode('Philadelphia', '')
// console.log(data);
/////////////////////////////////////////////////////////////////////////////////////////////
//case 3----->using callback function so it works asynchronously
const geocode =(address,callback)=>{
    setTimeout(()=>{
        
    const data = {
        latitude:0,
        longitude:0
      
    }
    callback(data);
    },
 2000)
}
 geocode('Philadelphia', (dataGotFromCallback)=>{
console.log(dataGotFromCallback);
 })