$('#citySearchBtn').click(function (e) { 
  e.preventDefault();
  var citySearch = $('#citySearch');
  var cities = []
  localStorage.setItem('City', JSON.stringify(cities));
  var searchedCity = localStorage.getItem('City')
  var savedCities = JSON.parse(searchedCity);
  cities.push(savedCities);
  localStorage.setItem('Cities', JSON.stringify(cities))
  $('ul').append('<button class="btn btn-primary">' + $(citySearch).val() + '</btn btn-primary>');
  searchCity();


});
console.log(localStorage)









//SEARCH A CITY
function searchCity(){
$.ajax({
url: 'http://api.positionstack.com/v1/forward?access_key=3db36236fe6861dd9972cda7b6b33cce&query=' + $(citySearch).val(),
method: 'GET',
success: function getCity(response) {
var latitude = response.data[0].latitude
var longitude = response.data[0].longitude
var lat = latitude.toFixed(2);
var long = longitude.toFixed(2);
console.log(response.data[0])
var key = '72a27384b9e0dc5b9d8a220614591fb8';
var oneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon='+ long + '&exclude=alerts&appid=' + key

//MAIN TEXT INFORMATION
var weathercity = response.data[0].label;
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

//TEXT DECLERATION
$.ajax({
  url: oneCall,
  method: "GET",
  success: function (response) {
  // console.log(response);
  //MAIN HEADING DECELERATION
  console.log(response)
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
 $(dayTwotemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[2].temp.day)-273.15)*1.8)+32))
 $(dayTwohumid).text('HUMIDITY: ' + response.daily[2].humidity)

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

},
error: function(ex){
  alert('cant be reached')
}
});
}
