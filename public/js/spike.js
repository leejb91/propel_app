console.log("LOADED SPIKE")


function editUser(user) {
  console.log("CLICK");
  $.ajax({
    type: 'PUT',
    url: "/users/" + userId,
    data: user
  }).then(function(user){
    console.log(user);
  })
}

// jQuery
$(function() {
  $divEl = $('div');
  $('#submit-edit').on('click', function() {
    var user = {
      firstName:   $("#edit-fn").val(),
      lastName:    $("#edit-ln").val(),
      email:       $("#edit-email").val(),
      institution: $("#edit-institution").val(),
      location:    $("#edit-location").val()
    };

    editUser(user);
  });
})
