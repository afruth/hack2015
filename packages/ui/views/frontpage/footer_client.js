Template.footer.events({

  'click #bits__footer__projects': function(){
    Router.go( '/projects' );
  },
  'click #bits__footer__donate': function(){
    if(Session.get('projectId'))
      Router.go( '/donation/' + Session.get('projectId') );
    else
      Router.go( '/donation' );
  }
});