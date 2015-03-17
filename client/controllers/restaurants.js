Template.restaurantList.events({

  "change .restaurant-selected": function(evt) {
    evt.preventDefault();

    var data = {
      poll: Polls.findOne({open: true})._id,
      restaurant: this._id
    };
    

    if (evt.currentTarget.checked) {
      Meteor.call('upvote', data);
    } else {
      Meteor.call('downvote', data);
    }
  }

});

Template.restaurantList.helpers({

  restaurants: function() {
    return Restaurants.find({}, {sort: {name: 1}});
  },

  isPollOpen: function() {
    return !! Polls.findOne({open: true}) && /@admios/.test(Meteor.user().profile.email);
  },

  checked: function() {
    var poll = Polls.findOne({open: true});
    var vote = Votes.findOne({restaurantId: this._id, pollId: poll._id, voters: {$in: [Meteor.userId()]}});

    return (vote) ? 'checked' : '';
  }

});