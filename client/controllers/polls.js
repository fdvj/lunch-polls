Template.currentPoll.helpers({
  currentPoll: function() {
    return Polls.findOne({open: true});
  },

  restaurants: function() {
    return Votes.find({}, {sort: {votes: -1}});
  },

  restaurant: function() {
    return Restaurants.findOne({_id: this.restaurantId});
  },

  voters: function() {
    return Meteor.users.find({
      _id: {
        $in: this.voters
      }
    });
  },

  votes: function() {
    return this.votes;
  },

  anyVotes: function() {
    return this.voters.length > 0;
  }
})