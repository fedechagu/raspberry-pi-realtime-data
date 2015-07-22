var express = require ('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'));

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('temp changed', { currentTemperature: Math.floor(Math.random()*100)});
    }, 1000);
});
