var express = require('express');

var app = express();

var repubData = require('../models/republican');

var demData = require('../models/democrats');

app.use(express.static(__dirname + "/public"));

app.get('/', function(request, response){
    console.log("hit empty route");
    response.sendFile(__dirname + "/public/views/index.html");
});

app.get('/getRepubData', function(request, response){
    console.log("getting repub data");
    response.send(repubData);

});

app.get('/getDemData', function(request, response){
    console.log("getting Dem data");
    response.send(demData);

});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening at port: " + port);
});