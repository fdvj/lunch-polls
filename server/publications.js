Meteor.publish('restaurants', function(){
  return Restaurants.find();
});

Meteor.publish('latestPoll', function(){
  return Polls.findOne({open: true});
});