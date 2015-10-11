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
        //{
        //  find: function(project) {
        //    console.log('child2')
        //    return DB.Tasks.find({
        //      _id: {
        //        $in: project.tasks
        //      }
        //    });
        //  }
        //},
      ]
    }

});