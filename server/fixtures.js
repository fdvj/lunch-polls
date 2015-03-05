if (Restaurants.find().count() === 0) {
  Restaurants.insert({
    name: 'Don Lee',
    website: 'url',
    menu: 'menu',
    description: 'Comida China'
  });
}