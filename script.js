//WEATHER ID INFORMATION
var weathercity = "Philadelphia";
var key = '72a27384b9e0dc5b9d8a220614591fb8';
var oneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.95&lon=-75.16&exclude=alerts&appid=' + key
var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + weathercity + '&appid=' + key 




//MAIN TEXT INFORMATION
var mainCitytext = $('#mainCitytext')
var mainCitydate = $('#mainCitydate')
var mainCitytemp = $('#mainCitytemp')
var mainCitywind = $('#mainCitywind')
var mainCityUV = $('#mainCityUV')

//5-DAY FORECAST INFORMATION
var dayOnedate = $('#day-one-date')
var dayOnetemp = $('#day-one-temp')
var dayOnehumid = $('#day-one-humid')



$.ajax({
  url: oneCall,
  method: "GET",
  success: function (response) {
  console.log(response);
  //MAIN HEADING DECELERATION
  var date = (response.current.dt)
  var currentdateconv = date * 1000
  var currentdate = new Date (currentdateconv)
  console.log(currentdateconv)
  console.log(currentdate)
  $(mainCitydate).text(currentdate.toLocaleString())
  $(mainCitytext).text('City Selected: ' + weathercity)
  $(mainCitytemp).text('Current Temp: ' + Math.round(((parseFloat(response.current.temp)-273.15)*1.8)+32)); // CURRENT TEMP
  $(mainCitywind).text('Current Wind Speed: ' + response.current.wind_speed); // CURRENT WINDSPEED
  $(mainCityUV).text('Current UV Index: ' + response.current.uvi); 

  //5-DAY FORECAST DECELERATION

  // DAY ONE
  var dayoneDateresp = (response.daily[1].dt)
  var dayoneDateconv = dayoneDateresp * 1000
  var dayoneDate = new Date(dayoneDateconv)
  $(dayOnedate).text(dayoneDate.toLocaleString())
  $(dayOnetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[1].temp.day)-273.15)*1.8)+32))
  $(dayOnehumid).text('HUMIDITY: ' + response.daily[1].humidity)




}

  
  
});




