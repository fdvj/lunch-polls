Template.restaurantList.events({

  "change .restaurant-selected": function(evt) {
    evt.preventDefault();
    
    var restaurant = {
      _id: this._id,
      name: this.name
    };

    Meteor.call('upvote', restaurant);
  }

});

Template.restaurantList.helpers({

  restaurants: function() {
    return Restaurants.find();
  }

});