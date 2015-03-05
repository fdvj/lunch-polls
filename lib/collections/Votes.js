Votes = new Meteor.Collection('votes');

Meteor.methods({
  upvote: function(data) {
    
    var filtered = {
      restaurantId: data.restaurant,
      pollId: data.poll
    };

    var votes = Votes.findOne(filtered);
    if (!votes) {
      filtered.votes = 0;
      votes = Votes.insert(filtered);
    }
    
    return Votes.update(filtered, {
      $addToSet: {voters: Meteor.userId()},
      $inc: {votes: 1}
    });
  },

  downvote: function(data) {
    
    var filtered = {
      restaurantId: data.restaurant,
      pollId: data.poll
    };    
    
    var votes = Votes.findOne(filtered);

    if (!votes) {
      return false;
    }

    return Votes.update(votes._id, {
      $pull: {voters: Meteor.userId()},
      $inc: {votes: -1}
    });
  }
});