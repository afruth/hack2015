Meteor.publish('resources', function() {
  return DB.Resources.find();
})