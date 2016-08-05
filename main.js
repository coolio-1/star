
'use strict';

var express = require('express'),
      app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Your server is running...");
});
