Meteor.publish('projectStates', function() {
  return DB.ProjectStates.find();
});