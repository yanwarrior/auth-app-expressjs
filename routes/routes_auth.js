var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var jwtConfig = require('../configs/jwt.js');
var users = require('../fakers/users.js');

router.post("", function(req, res) {
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });

    if (user) {
      var payload = {id: user.id};
      var token = jwt.encode(payload, jwtConfig.jwtSecret);
      res.json({
        token: token
      });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;