// auth.js
var passport = require("passport");
var passportJWT = require("passport-jwt");
var users = require("../fakers/users.js");
var jwtConfig = require("../configs/jwt.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
  secretOrKey: jwtConfig.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    var user = users.find(function(u) {
      return u.id === payload.id;
    }) || null;
    if (user) {
      return done(null, {id: user.id});
    } else {
      return done(new Error("User not found"), null);
    }
  });

  passport.use(strategy);

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", jwtConfig.jwtSession);
    }
  }
}
