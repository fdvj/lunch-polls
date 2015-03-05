Meteor.publish('restaurants', function(){
  return Restaurants.find();
});

Meteor.publishComposite('latestPoll', {
  find: function() {
    return Polls.find({open: true});
  },
  children: [{
    find: function(poll) {
      return Votes.find({pollId: poll._id});
    },
    children: [{
      find: function(votes, poll) {
        return Meteor.users.find({_id: {$in: votes.voters}});
      }
    }]
  }]
});