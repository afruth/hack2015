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

Meteor.publish('counts', function() {
  var states = DB.ProjectStates.find().fetch();
  var draft = _.find(states, function(i) {
    return i.name === 'Draft';
  });

  var funding = _.find(states, function(i) {
    return i.name === 'Funding';
  });

  var running = _.find(states, function(i) {
    return i.name === 'Running';
  });

  var finished = _.find(states, function(i) {
    return i.name === 'Finished';
  });

  Counts.publish(this, 'running', DB.Projects.find({
    state: running._id
  }));

  Counts.publish(this, 'finished', DB.Projects.find({
    state: finished._id
  }))

  Counts.publish(this, 'funding', DB.Projects.find({
    state: funding._id
  }))
  Counts.publish(this, 'draft', DB.Projects.find({
    state: draft._id
  }))

})