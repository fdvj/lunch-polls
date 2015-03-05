Template.header.events({

  'click .logout': function(evt) {
    evt.preventDefault();
    Meteor.logoutOtherClients();
    Meteor.logout();
  },

  'click .open-poll': function(evt) {
    evt.preventDefault();
    
    Meteor.call('startNewPoll', function(err, result){
      if (err) {
        console.log(err);
      }
    });
  }

});