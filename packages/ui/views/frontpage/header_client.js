Template.header.helpers({
  
  // returns 'home' if the current route is home
  isHome: function(){
    var routeName = Router.current().route.getName();
    console.log( routeName )
    if( routeName === 'home' ){
      return "home";
    }
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