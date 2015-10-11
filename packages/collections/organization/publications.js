DB.Organization.allow({
  insert: function(userId) {
    if(DB.Organization.find().count() > 0 || !Roles.userIsInRole(userId,['superAdmin'])) return false

    return true;
  },
  update: function(userId) {
    if(!Roles.userIsInRole(userId,['superAdmin'])) return false

    return true;
  },
  remove: function(userId) {
    if(DB.Organization.find().count() <= 1 || !Roles.userIsInRole(userId,['superAdmin'])) return false

    return true;
  },
});

Meteor.publish(null, function() {
  return DB.Organization.find();
})