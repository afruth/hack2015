Meteor.startup(() => {
  AutoForm.setDefaultTemplate("semanticUI");
});

Template.home.helpers({
  
  // TODO: returns the organization's description
  projectDescription: function () {
    return "This is a pretty cool project. You're going to want to donate your time and money."
  }

});


// *************** homeLayout Template  *****************

Template.homeLayout.helpers({
  

});