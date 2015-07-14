var express = require ('express');
var app = express();
var https = require("https");
var fs = require('fs');
var path = require('path');

var server = app.listen(3000);
var io = require('socket.io')(server);
app.use(express.static('/client'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

io.on('connection', function (socket) {
    socket.on('userTyping', function (data) {
        console.log(data);
    });
});
