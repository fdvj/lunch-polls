Restaurants = new Mongo.Collection('restaurants');

Meteor.methods({
  addRestaurant: function(data) {
    return Restaurants.insert(data);
  }
});