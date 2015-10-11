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
      },
      {
        find: function(project) {
          return DB.Tasks.find({
            projectId: project._id
          });
        }
      }
    ]
  }
});