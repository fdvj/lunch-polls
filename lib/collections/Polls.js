Polls = new Meteor.Collection('polls');

Meteor.methods({
  startNewPoll: function() {
    var user = Meteor.user();
    // Close all open polls
    Polls.upsert({open: true}, {$set:{open: false}});
    var newPoll = Polls.insert({
      createdBy: Meteor.userId(),
      open: true
    });

    return {
      _id: newPoll
    };
  }
});