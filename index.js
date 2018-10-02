$( document ).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      
      lat=position.coords.latitude;
      long=position.coords.longitude;
      console.log(lat,long);
      document.write("Lattitude : ",lat);
      document.write("<br>");
      document.write("Longitude : ",long);
      newfn();
     
    });
  }

function newfn(){
  $.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +long +"&units=metric"+ "&appid=152ee5c94fde368ff8fd1c012f591551" , function(json){

    temperatureC=Math.round(json.main.temp);
    temperatureF=Math.round(temperatureC*9/5+32);
    conditions=json.weather[0]["main"];
    humidity=json.main.humidity;
    id=json.weather[0]["id"]
    city=json.name;
    countr=json.sys.country;
    console.log(city,countr);
    console.log(json.main.temp);
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write(city,countr);
    document.write("<br>");
    document.write("Temperature : ",json.main.temp,"&degC");  
    weatherIcon = json.weather[0]["icon"];
    iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

    $("#city").html(city);
    $("#country").html(countr);

    $("#temperatureC").html(temperatureC+"&degC");
    $("#temperatureF").html(temperatureF+"&degF");
    $("#conditions").html(conditions);
    $("#humidity").html(humidity);
  }); 
  } 
  //

  $("#temperature").on("click",function(){
    $("#temperatureC").toggleClass("hideTemp");
    $("#temperatureF").toggleClass("hideTemp");

  });

});
