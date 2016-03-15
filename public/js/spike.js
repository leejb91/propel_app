var request = require('request');


function editData() {
  var user = {
    firstName:   $("#edit-fn").val(),
    lastName:    $("#edit-ln").val(),
    email:       $("#edit-email").val(),
    institution: $("#edit-institution").val(),
    location:    $("#edit-location").val()
  }
  return user;
}

function editUser(user) {
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/users/' + user.id ,
    data: {editData}
  }).then(function(user){
    console.log(user);
  })
}

// jQuery
$(function() {
  $('#submit-edit').on('submit', editUser);
})
