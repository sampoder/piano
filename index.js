var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var express = require('express');
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

io.on("connection", function(socket) {
  socket.on("new-sound", function(msg) {
    io.sockets.emit("new-sound", msg);
  });
});

http.listen(3000, function() {
  console.log("listening on localhost:3000");
});