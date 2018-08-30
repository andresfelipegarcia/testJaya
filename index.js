const express = require('express');
const app = express();
const mod = require('./model');

app.listen(3000, function () {
  console.log('listening on port 3000')
})

app.get('/weather/:cityName', function (req, res) {
  console.log(req.url);
  var str = req.url;
  var res = str.substring(1);
  if(res!=0){
    cityName = res;
    mod.getCurrentWeather(cityName);
  }
});