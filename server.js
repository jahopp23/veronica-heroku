var express = require('express');
var app = express(); 
var path = require('path'); 



app.use(express.static(__dirname + '/'));

app.use(express.static(__dirname + '/public'));




app.get('/', function(req, res) { 
  res.sendFile(path.join(__dirname + '/views/index.html'));
}); 

app.listen(process.env.PORT || 3000);
console.log('Running Port 3000');



