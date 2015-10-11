Template.header.helpers({
  
  // TODO: Return Organization's Name
  orgName: function(){
    return "Nepal Support";
  }
  
});




Template.header.events({
  
  // Header route link
  'click #bits__header__logo': function(){
    Router.go( '/' );
  },
  'click #bits__header__projects': function(){
    Router.go( '/projects' );
  },
  'click #bits__header__donate': function(){
    Router.go( '/donation' );
  }
  
});