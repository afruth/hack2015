Template.addTask.helpers({
  projectName: function() {
    var project = DB.Projects.findOne(Session.get('projectId'));
    return (project) ? project.name : '';
  }
})