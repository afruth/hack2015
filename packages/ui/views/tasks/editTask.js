Template.editTask.helpers({
    data: function() {
        return Template.instance().data;
    }
});


var editTaskHook = {
  onSuccess: function() {
    Router.go('/project/' + Session.get('projectId'));
  }
};

AutoForm.addHooks(['taskUpdate'],editTaskHook);
