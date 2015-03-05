RestaurantVotes = new Meteor.Collection('restaurantVotes');

Meteor.methods({
  upvote: function(restaurantId) {
    var currentPoll = Polls.findOne({open: true});
    var restaurant = RestaurantVotes.upsert({
      restaurantId: restaurant._id,
      pollId: currentPoll._id
    }, {
      $addToSet: {upvoters: this.userId},
      $inc: {votes: 1},
      name: restaurant.name
    });
    return true;
  }
});