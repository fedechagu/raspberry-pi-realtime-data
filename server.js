var express = require ('express');
var app = express();
var https = require("https");
var fs = require('fs');
var path = require('path');

var server = app.listen(3000);
var io = require('socket.io')(server);
app.use(express.static('/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

io.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('temp changed', { currentTemperature: Math.floor(Math.random()*100)});
    }, 1000);
});
