Meteor.startup(() => {
  AutoForm.setDefaultTemplate("semanticUI");
});

Template.home.helpers({
  


});


Template.home.events({
  
  'click #home__main__banner-btn': function () {
    Router.go( '/projects' );
  }

});


