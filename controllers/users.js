// Require resource's model(s).
var User = require("../models/user");

var index = function(req, res, next){
  User.find({}, function(err, users) {
    if (err) {
      res.json({message: err});
    } else {
      res.json(users);
    }
  });
};

var show = function(req, res, next){
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.json({message: 'Could not find user because ' + err});
    } else if (!user) {
      res.json({message: 'No user with this id.'});
    } else {
      res.render('users/show', {user: user});
    }
  });
};

var edit = function(req, res, next){
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.json({message: 'Could not find user because ' + err});
    } else if (!user) {
      res.json({message: 'No user with this id.'});
    } else {
      console.log("EDIT CONTROLLER", user);
      res.json(user);
    }
  });
};



module.exports = {
  index: index,
  show:  show,
  edit:  edit
};
