var FahrenheitToCelcius = function(fa){
  var cel = Math.round((fa-32) * (5/9));
  document.getElementById("cvalue").innerHTML=cel;
}

 var CelciusToFahrenheit = function(cel){
   var fa = Math.round((cel * 9/5) + 32);
  document.getElementById("fvalue").innerHTML=fa;
}