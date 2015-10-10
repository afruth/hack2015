Meteor.publish('projectTypes', function() {
  return DB.ProjectTypes.find();
})