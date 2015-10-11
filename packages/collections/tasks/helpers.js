DB.Tasks.helpers({
  project: function() {
    return DB.Projects.findOne(this.projectId)
  }
})