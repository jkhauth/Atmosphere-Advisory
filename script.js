savedCities();

function savedCities(){
var saveCities = JSON.parse(localStorage.getItem('Cities'))
    if (saveCities == null){
      saveCities = [];
    };

for (var i = 0; i < saveCities.length; i++){
  var saveCityButton = $('<button>')
  $('#savedCities').prepend(saveCityButton);
  $(saveCityButton).text(saveCities[i])
  $(saveCityButton.attr('class', 'city'))
  $(saveCityButton.attr('id', saveCities[i]))
  $(saveCityButton).addClass('align-center')
  $(saveCityButton).addClass('btn btn-primary mt-2')
}

$('#citySearchBtn').click(function (e) { 
e.preventDefault();
var saveCityButton = $('<button>')
var searchedCity = $('#citySearch').val().trim();
if ($('#citySearch').val() === ''){
  alert("please enter a valid city")
}else{
$(this).attr('id', searchedCity)
$(this).addClass('city');
saveCities.push(searchedCity);
$('#savedCities').append(saveCityButton)
$(saveCityButton).text(searchedCity)
$(saveCityButton).attr('class', 'city')
$(saveCityButton).attr('id', searchedCity)
localStorage.setItem('Cities', JSON.stringify(saveCities));
}
});

//WHEN CITY SEARCH CLICKED
$(document).on('click', '#citySearchBtn', searchCity)
//WHEN SAVED CITY IS CLICKED
$(document).on('click', '.city', searchCity)

//SEARCH A CITY
function searchCity(e){
  e.preventDefault();
var city = $(this).attr('id')
var queryURL = 'http://api.positionstack.com/v1/forward?access_key=3db36236fe6861dd9972cda7b6b33cce&query='+city

$.ajax({
url: queryURL,
method: 'GET',
success: function getCity(response) {
var latitude = response.data[0].latitude
var longitude = response.data[0].longitude
var lat = latitude.toFixed(2);
var long = longitude.toFixed(2);
var key = '72a27384b9e0dc5b9d8a220614591fb8';
var oneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon='+ long + '&exclude=alerts&appid=' + key

//MAIN TEXT INFORMATION
var weathercity = response.data[0].label;
var mainCitytext = $('#mainCitytext')
var mainCityImg = $('#mainCityIcon')
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
  var date = (response.current.dt)
  var currentdateconv = date * 1000
  var currentdate = new Date (currentdateconv)
  $(mainCitydate).text(currentdate.toLocaleString())
  $(mainCitytext).text(weathercity)
  $(mainCityImg).attr('src', 'http://openweathermap.org/img/wn/'+ response.current.weather[0].icon+'.png')
  $(mainCitytemp).text('Current Temp: ' + Math.round(((parseFloat(response.current.temp)-273.15)*1.8)+32)); // CURRENT TEMP
  $(mainCitywind).text('Current Wind Speed: ' + response.current.wind_speed); // CURRENT WINDSPEED
  $(mainCityUV).text('Current UV Index: ' + response.current.uvi); 
  console.log(response)
  //5-DAY FORECAST DECELERATION

  // DAY ONE
  var dayoneDateresp = (response.daily[1].dt)
  var dayoneDateconv = dayoneDateresp * 1000
  var dayoneDate = new Date(dayoneDateconv)
  var dayoneimg = ('#day-one-img')
  $(dayOnedate).text(dayoneDate.toLocaleString())
  $(dayoneimg).attr('src','http://openweathermap.org/img/wn/'+ response.daily[1].weather[0].icon+'.png')
  $(dayOnetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[1].temp.day)-273.15)*1.8)+32))
  $(dayOnehumid).text('HUMIDITY: ' + response.daily[1].humidity)

 // DAY TWO
 var daytwoDateresp = (response.daily[2].dt)
 var daytwoDateconv = daytwoDateresp * 1000
 var daytwoDate = new Date(daytwoDateconv)
 var daytwoimg = ('#day-two-img')
 $(dayTwodate).text(daytwoDate.toLocaleString())
 $(daytwoimg).attr('src','http://openweathermap.org/img/wn/'+ response.daily[2].weather[0].icon+'.png')
 $(dayTwotemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[2].temp.day)-273.15)*1.8)+32))
 $(dayTwohumid).text('HUMIDITY: ' + response.daily[2].humidity)

 // DAY THREE
 var daythreeDateresp = (response.daily[3].dt)
 var daythreeDateconv = daythreeDateresp * 1000
 var daythreeimg = ('#day-three-img')
 var daythreeDate = new Date(daythreeDateconv)
 $(dayThreedate).text(daythreeDate.toLocaleString())
 $(daythreeimg).attr('src','http://openweathermap.org/img/wn/'+ response.daily[3].weather[0].icon+'.png')
 $(dayThreetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[3].temp.day)-273.15)*1.8)+32))
 $(dayThreehumid).text('HUMIDITY: ' + response.daily[3].humidity)

 // DAY FOUR
 var dayfourDateresp = (response.daily[4].dt)
 var dayfourDateconv = dayfourDateresp * 1000
 var dayfourDate = new Date(dayfourDateconv)
 var dayfourimg = ('#day-four-img')
 $(dayFourdate).text(dayfourDate.toLocaleString())
 $(dayfourimg).attr('src','http://openweathermap.org/img/wn/'+ response.daily[4].weather[0].icon+'.png')
 $(dayFourtemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[4].temp.day)-273.15)*1.8)+32))
 $(dayFourhumid).text('HUMIDITY: ' + response.daily[4].humidity)

 // DAY FIVE
 var dayfiveDateresp = (response.daily[5].dt)
 var dayfiveDateconv = dayfiveDateresp * 1000
 var dayfiveimg = ('#day-five-img')
 var dayfiveDate = new Date(dayfiveDateconv)
 $(dayFivedate).text(dayfiveDate.toLocaleString())
 $(dayfiveimg).attr('src','http://openweathermap.org/img/wn/'+ response.daily[5].weather[0].icon+'.png')
 $(dayFivetemp).text('TEMP: ' + Math.round(((parseFloat(response.daily[5].temp.day)-273.15)*1.8)+32))
 $(dayFivehumid).text('HUMIDITY: ' + response.daily[5].humidity)
}});},});}};