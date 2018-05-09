//******************************************************************************
//          AUTHENTICATION ROUTES
//******************************************************************************

var mongoose = require('mongoose'),
    passport = require('passport'),
    express = require('express'),
    router = express.Router();

router.post("/login", passport.authenticate("local", {failureRedirect: "/contacts"}), function(req, res) {
  console.log("[auth]", req.url);
  res.redirect("/");
});

router.get("/logout", function(req, res) {
  console.log("user logged out");
  req.logout();
  res.redirect("/");
});

module.exports = router;
