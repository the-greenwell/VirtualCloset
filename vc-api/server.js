var express      = require('express');
var app          = express();
var closetRouter = require('./config/routes.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(closetRouter);

let port = 8080;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});
