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
  },

  'click .add-restaurant': function(evt) {
    evt.preventDefault();
    var form = $(evt.currentTarget).parents('form');

    var formData = {};
    _.each(form.serializeArray(), function(entry){
      formData[entry.name] = entry.value
    });

    if (_.isEmpty(formData.name)) {
      return false;
    }

    Meteor.call('addRestaurant', formData, function(err, results){
      $('#new-restaurant').modal('hide');
    });

  }

});