Template.currentPoll.helpers({
  currentPoll: function() {
    var poll = Poll.findOne({open: true});
    return RestaurantVotes.find({pollId: pollId});
  }
})