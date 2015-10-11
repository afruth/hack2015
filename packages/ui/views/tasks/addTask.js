Template.addTask.helpers({
  projectName: function() {
    var project = DB.Projects.findOne(Session.get('projectId'));
    return (project) ? project.name : '';
  }
})


var addProjectToTaskHook = {
  before: {
    insert: function(doc){
      doc.projectId = Session.get("projectId");
      console.log(doc);
      return doc;
    }
  },
  onSuccess: function() {
    Router.go('/project/' + Session.get('projectId'));
  }
};

AutoForm.addHooks(['tasks'],addProjectToTaskHook);