Meteor.publishComposite('project', function(projectId) {
    check(projectId, String);
    return {
      find: function() {
        return DB.Projects.find({
          _id: projectId
        });
      },
      children: [
        {
          find: function(project) {
            return DB.ImageStores.find({
              _id: project.image || null
            });
          }
        },
        {
          find: function(project) {
            return DB.Tasks.find({
              projectId: project._id
            });
          }
        },
      ]
    }

});