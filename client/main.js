
// counter starts at 0 WORK WITH SESSIONS...
Session.setDefault('counter', 0);

Template.homeContent.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.homeCover.events({
  'click button': function () {
    // increment the counter when button is clicked
    //this.layout('shop-layout')
    Router.go('/newArrivals') // goes into {{ > yield }} of home layout
    // Session.set('counter', Session.get('counter') + 1);
  }
});