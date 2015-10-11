Template.editTask.helpers({
    data: function() {
        return Template.instance().data;
    }
});


var addProjectToTaskHook = {
  before: {
    insert: function(doc){
      doc.projectId = Session.get("projectId");
      console.log(doc);
      return doc;
    }
  },
  onSuccess: function() {
    Router.go('/project/' + Session.get('projectId') + '/edit');
  }
};

AutoForm.addHooks(['tasks'],addProjectToTaskHook);
