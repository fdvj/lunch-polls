Template.login.events({
  'click .btn-google': function(evt) {
    evt.preventDefault();
    Meteor.loginWithGoogle({
      requestPermissions: ['email','profile'],
      loginStyle: 'popup'
    }, function(err){
      console.log(err);
    });
  }
});