var Classroom = require('../models/classroom');
var User = require('../models/user');


module.exports = {
  questionIndex: questionIndex,
  questionCreate: questionCreate,
  questionDelete: questionDelete
};


function questionIndex(req, res, next){
  console.log(req.params.id);
  Classroom.findById(req.params.id, function(err, classroom){
    if (err) {
      res.send(err);
    } else {
      console.log(classroom);
      // var questions = classroom.questions
      res.json(classroom);
    }
  });
}

function questionCreate(req, res, next) {}

function questionDelete(req, res){
  Classroom.findByIdAndUpdate(this._id, {
    $pull: {
      questions: {_id: questions._id}
    }
  }, cb);
}

