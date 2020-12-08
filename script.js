//WEATHER ID INFORMATION
var weathercity = "Philadelphia";
var key = '72a27384b9e0dc5b9d8a220614591fb8';
var oneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.95&lon=-75.16&exclude=alerts&appid=' + key
var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + weathercity + '&appid=' + key 

//TEXT INFORMATION
var mainCitytext = $('#mainCitytext')
var mainCitytemp = $('#mainCitytemp')
var mainCitywind = $('#mainCitywind')
var mainCityUV = $('#mainCityUV')



$.ajax({
  url: oneCall,
  method: "GET",
  success: function (response) {
  console.log(response);
  //MAIN HEADING DECELERATION
  $(mainCitytext).text(response.name)
  $(mainCitytemp).text(Math.round(((parseFloat(response.current.temp)-273.15)*1.8)+32)); // CURRENT TEMP
  $(mainCitywind).text(response.current.wind_speed); // CURRENT WINDSPEED
  $(mainCityUV).text(response.current.uvi); 
  }

  //5-DAY FORECAST DECELERATION
  
});




