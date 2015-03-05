Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'currentPoll'});
Router.route('/login', {name: 'login'});

Router.onBeforeAction(function() {
  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next(); 
  }
})