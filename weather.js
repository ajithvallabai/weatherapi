$(document).ready(function(){

    var far,cel,storage;

                 $.getJSON("http://ip-api.com/json",function(data){
  
             var city=data.city;
             console.log(city);
            var country=data.country;
                   $("#location").text(city+","+country);
   var domain = "https://query.yahooapis.com/v1/public/yql?q=";
        var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"" + city + "\"" + ")";
        var parameters = "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
        var url = domain + query + parameters;
        console.log(url);
        //weather data...
        $.getJSON(url, function(weatherData) {
            storage=weatherData;
          var temperature = Number(weatherData.query.results.channel.item.condition.temp);
          var farenheit=temperature;
          //console.log(weatherData.query.results.channel);
          far=farenheit;
          var celsius = (temperature - 32) * (5/9);
          $("#temperature").text(Math.round(celsius) + "°C" +"/"+ farenheit + "°F");
          cel=celsius;

          $("#climate").text(storage.query.results.channel.item.condition.text);

         
            $("#sunrise").text(storage.query.results.channel.astronomy.sunrise);
             $("#sunset").text(storage.query.results.channel.astronomy.sunset);
              $("#humidity").text(storage.query.results.channel.atmosphere.humidity);
               $("#visibility").text(storage.query.results.channel.atmosphere.visibility);

    /*    if(celsius<25)
          {
            $("#climate").text("its  cold buddy!");
          }else
            
            {
              $("#climate").text("its a sunny day!");
            }
          */

   //       var weather = weatherData.query.results.channel.item.condition.text;
     //    $("#weather").text(weather);

      });
});
  
  $("#farh").click(function(){
     
 $("#temperature").text( far + "°F");

  });
    $("#cel").click(function(){
        
     $("#temperature").text(Math.round(cel) + "°C");

  });
                 
} );

