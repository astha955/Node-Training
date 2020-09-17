import { response } from "express";

const request = require('request');
//https://account.mapbox.com/account/access-tokens
//Mapbox APIs are divided into four distinct services: Maps, Navigation, Search, and Accounts.
//search service--->Geocoding API----> does two things: forward geocoding and reverse geocoding.
//Forward geocoding-->location text into geographic coordinates
//Reverse geocoding-->geographic coordinates into place names
const geocodeUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXN0aGE5NTUiLCJhIjoiY2tmNnJ2aGhqMHpoaDJxbnk3MW50NGJ5cyJ9.h2ckTXbZycZRssemv8frEg';
request({url: geocodeUrl,json: true},(error,response)=>{
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  console.log(latitude , longitude);
})