var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');

// root path:
router.get('/', function(req, res){
  res.render('index', {user: req.user});
});
router.get('/welcome', function(req, res){
  res.render('pages/welcome', {user: req.user});
});

router.get('/auth/linkedin',
  passport.authenticate('linkedin',
    function(req,res){}
  ));

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/welcome',
  failureRedirect: '/welcome'
}));

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});

// users resource paths:
router.get('/users',          usersController.index);
router.get('/users/:id',      usersController.show);
router.put('/users/:id',      usersController.edit);

module.exports = router;
