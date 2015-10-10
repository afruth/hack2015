Meteor.methods({
  'makeMeAdmin': function(password) {
    if(!this.userId) throw new Meteor.Error(403, 'You are not logged in');
    if(!password || password !== 'SecretPASS') throw new Meteor.Error(403, ' Invalid pass');

    Roles.addUsersToRoles(this.userId, ['superAdmin'], Roles.GLOBAL_GROUP);
  },
  'makeUserFinanceAdmin': function(userId) {
    if(!this.userId) throw new Meteor.Error(403,'Forbidden');

    if (!Roles.userIsInRole(this.userId,['superAdmin'])) throw new Meteor.Error(403, 'Not Allowed');

    Roles.addUsersToRoles(userId, ['financeAdmin'], Roles.GLOBAL_GROUP);
  },
  'makeProjectAdmin': function(userId, projectId) {
    if(!this.userId) throw new Meteor.Error(403,'Forbidden');

    if (
      !Roles.userIsInRole(this.userId,['superAdmin']) ||
      !Roles.userIsInRole(this.userId,['superAdmin'])
    ) throw new Meteor.Error(403, 'Not Allowed');
  }
})