Template.header.helpers({
  
  // returns 'home' if the current route is home
  isHome: function(){
    var routeName = Router.current().route.getName();
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
    if(Session.get('projectId'))
      Router.go( '/donation/' + Session.get('projectId') );
    else
      Router.go( '/donation' );
  },
  'click .logout': function(event) {
    event.preventDefault();

    Meteor.logout();
  },
  'click .login': function(event) {
    event.preventDefault();

    Router.go('/login');
  }
  
});