const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/fposts');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/fposts',
    failureRedirect : '/fposts'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(err){
    res.redirect('/fposts')
  });
});

module.exports = router;
