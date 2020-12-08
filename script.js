




//SEARCH A CITY
$.ajax({
  url: 'http://api.positionstack.com/v1/forward?access_key=3db36236fe6861dd9972cda7b6b33cce&query=' + localStorage.getItem('City:'),
  method: 'GET',
  success: function (response) {
  var lat = response.data[0].latitude
  var long = response.data[0].longitude
  console.log(response)
  console.log(response.data[0].name) // RETURNS NAME
  console.log(lat.toFixed(2));
  console.log(long.toFixed(2));
  return lat, long;
  }
});



//WEATHER ID INFORMATION
var weathercity = "Philadelphia";
var key = '72a27384b9e0dc5b9d8a220614591fb8';
var oneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon='+ long + '&exclude=alerts&appid=' + key
var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + weathercity + '&appid=' + key 

var citySearch = $('#citySearch')
var citySearchVal = $(citySearch).val()

$('#citySearchBtn').click(function (e) { 
  e.preventDefault();
  localStorage.setItem('City:', $(citySearch).val())
});

console.log(localStorage)

console.log(localStorage.getItem('City:'))


//MAIN TEXT INFORMATION
var mainCitytext = $('#mainCitytext')
var mainCitydate = $('#mainCitydate')
var mainCitytemp = $('#mainCitytemp')
var mainCitywind = $('#mainCitywind')
var mainCityUV = $('#mainCityUV')

//5-DAY FORECAST INFORMATION

//(5-DAY FORECAST) DAY ONE
var dayOnedate = $('#day-one-date')
var dayOnetemp = $('#day-one-temp')
var dayOnehumid = $('#day-one-humid')

//(5-DAY FORECAST) DAY TWO
var dayTwodate = $('#day-two-date')
var dayTwotemp = $('#day-two-temp')
var dayTwohumid = $('#day-two-humid')

//(5-DAY FORECAST) DAY THREE
var dayThreedate = $('#day-three-date')
var dayThreetemp = $('#day-three-temp')
var dayThreehumid = $('#day-three-humid')

//(5-DAY FORECAST) DAY FOUR
var dayFourdate = $('#day-four-date')
var dayFourtemp = $('#day-four-temp')
var dayFourhumid = $('#day-four-humid')

//(5-DAY FORECAST) DAY FIVE
var dayFivedate = $('#day-five-date')
var dayFivetemp = $('#day-five-temp')
var dayFivehumid = $('#day-five-humid')
parseFloat





//TEXT DECLERATION
$.ajax({
  url: oneCall,
  method: "GET",
  success: function (response) {
  // console.log(response);
  //MAIN HEADING DECELERATION
  var date = (response.current.dt)
  var currentdateconv = date * 1000
  var currentdate = new Date (currentdateconv)
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

 // DAY TWO
 var daytwoDateresp = (response.daily[2].dt)
 var daytwoDateconv = daytwoDateresp * 1000
 var daytwoDate = new Date(daytwoDateconv)
 $(dayTwodate).text(daytwoDate.toLocaleString())
 $(dayOnetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[2].temp.day)-273.15)*1.8)+32))
 $(dayOnehumid).text('HUMIDITY: ' + response.daily[2].humidity)

 // DAY ONE
 var daythreeDateresp = (response.daily[3].dt)
 var daythreeDateconv = daythreeDateresp * 1000
 var daythreeDate = new Date(daythreeDateconv)
 $(dayThreedate).text(daythreeDate.toLocaleString())
 $(dayThreetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[3].temp.day)-273.15)*1.8)+32))
 $(dayThreehumid).text('HUMIDITY: ' + response.daily[3].humidity)

 // DAY ONE
 var dayfourDateresp = (response.daily[4].dt)
 var dayfourDateconv = dayfourDateresp * 1000
 var dayfourDate = new Date(dayfourDateconv)
 $(dayFourdate).text(dayfourDate.toLocaleString())
 $(dayFourtemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[4].temp.day)-273.15)*1.8)+32))
 $(dayFourhumid).text('HUMIDITY: ' + response.daily[4].humidity)

 // DAY ONE
 var dayfiveDateresp = (response.daily[5].dt)
 var dayfiveDateconv = dayfiveDateresp * 1000
 var dayfiveDate = new Date(dayfiveDateconv)
 $(dayFivedate).text(dayfiveDate.toLocaleString())
 $(dayFivetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[5].temp.day)-273.15)*1.8)+32))
 $(dayFivehumid).text('HUMIDITY: ' + response.daily[5].humidity)

}  
});




