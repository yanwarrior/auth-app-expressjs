var express = require('express');
var router = express.Router();
var users = require('../fakers/users.js');

router.get('', function(req, res) {
  var user = users.find(function(u) {
    return u.id === req.user.id;
  })
  res.json(user);
});

module.exports = router;