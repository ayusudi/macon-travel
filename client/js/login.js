if(localStorage.getItem('token')){
    $('.g-signin2').hide()
    $('.signOut').show()
    $('#loggedIn').css('filter', 'blur(0px)')
    $('fieldset').removeAttr('disabled')

    
}else {
    $('.g-signin2').show()
    $('.signOut').hide()
    $('#loggedIn').css('filter', 'blur(2px)')
    $('fieldset').attr('disabled', 'disabled')
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // localStorage.setItem('token' , googleUser.getAuthResponse().id_token)
    AddToDB(googleUser.getAuthResponse().id_token)
}

function AddToDB(token){
  event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/user/login',
    method: 'POST',
    data: {
      id_token : token,
    },
  })
  .done(function(token1) {
    // con
    $('.g-signin2').hide()
    $('.signOut').show()
    $('#loggedIn').css('filter', 'blur(0px)')
    localStorage.setItem('token' , token1.token)
    console.log(token1.token , ' ini token dia')
    $('fieldset').removeAttr('disabled')

    // WhenUserHasLogin()

  })
  .fail(function(jqXHR, textStatus) {
    console.log('Error:', textStatus);
  });
}

function SignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('sign out')
        $('.signOut').hide()
        $('.g-signin2').show()
        $('#loggedIn').css('filter', 'blur(2px)')
        $('fieldset').attr('disabled', 'disabled')
        
        localStorage.clear()
    });
}