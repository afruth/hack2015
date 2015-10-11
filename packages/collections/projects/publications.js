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
              _id: project.image
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
        {
          find: function() {
            return DB.ProjectStates.find();
          }
        },
        {
          find: function() {
            return DB.ProjectTypes.find();
          }
        }
      ]
    }
});


Meteor.publishComposite('projects', function() {
  return {
    find: function() {
      return DB.Projects.find();
    },
    children: [
      {
        find: function(project) {
          console.log(project);
          return DB.ImageStores.find({
            _id: project.image || null
          });
        }
      }
    ]
  }
});