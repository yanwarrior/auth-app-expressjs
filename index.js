var express = require("express");
var bodyParser = require("body-parser");
var auth = require('./middleware/auth.js')();
var router_user = require('./routes/routes_user.js');
var router_auth = require('./routes/routes_auth.js');

var app = express();

app.use(bodyParser.json());
app.use(auth.initialize())

app.use("/token", router_auth);
app.use("/", auth.authenticate(), router_user);

app.listen(3000, function() {
  console.log("My API is running...");
});

module.exports = app;