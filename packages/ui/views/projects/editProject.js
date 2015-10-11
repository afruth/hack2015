Template.editProject.helpers({
    data: function() {
        return Template.instance().data;
    }
});

Template.editProject.onRendered(function(){
  Meteor.setTimeout(function() {
    $('.ui.dropdown')
      .dropdown()
    ;
  }, 200);
});

var editProjectHook = {
  onSuccess: function(formType, result) {
    Router.go('/project/' + this.docId);
  }
};

AutoForm.addHooks(['projectUpdate'],editProjectHook);