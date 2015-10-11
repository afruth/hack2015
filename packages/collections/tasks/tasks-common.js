SimpleSchema.messages({
  'tooManyVolunteers': "You have allocated more volunteers than you need.",
  'tooMuchMoney': "You are going over the needed budget."
})
DB.Tasks = new Mongo.Collection('tasks');

DB.Tasks.allow({
  insert: function(userId, doc) {
    if (!Roles.userIsInRole(userId,['superAdmin'])) return false;
    return true;
  },
  update: function(userId,doc) {
    if (!Roles.userIsInRole(userId,['superAdmin'])) return false;
    return true;
  },
  remove: function(userId) {
    if (!Roles.userIsInRole(userId,['superAdmin'])) return false;
    return true;
  }
});

Schemas.TaskSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  projectId:{
    type: String,
    label: "ProjectID",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  description: {
    type: String,
    label: 'Description',
    autoform: {
      afFieldInput: {
        type: 'textarea'
      }
    }
  },
  resourcesVolunteers: {
    type: Number,
    label: 'Needed Resources - Volunteers',
    defaultValue:0,
    min: 0
  },
  allocatedVolunteers: {
    type:Number,
    label: 'Allocated Resources - volunteers',
    defaultValue: 0,
    min: 0,
    custom: function() {
      if(this.value > this.field('resourcesVolunteers').value)
        return "tooManyVolunteers"
    }
  },
  allocatedFinancial: {
    type:Number,
    label: 'Allocated Resources - financial',
    defaultValue:0,
    min: 0,
    custom: function() {
      if(this.value > this.field('resourcesFinancial').value)
        return "tooMuchMoney"

      var project = DB.Projects.findOne({
        _id: this.field('projectId').value
      });

      if(this.docId) {
        var task = DB.Tasks.findOne(this.docId);
        if(project && project.allocatedFinancial < this.value - task.allocatedFinancial)
          return 'not enough funds';
      }
      else
        if(project && project.allocatedFinancial < this.value)
          return 'not enough funds'
    }
  },
  resourcesFinancial: {
    type: Number,
    label: 'Needed Resources - Financial',
    defaultValue:0,
    min: 0
  },
  startDate: {
    type: Date,
    label: 'Start Date',
    optional: true,
  },
  durationInDays: {
    type: Number,
    label: 'Duration In Days',
    optional: true
  },
  endDate:{
    type: Date,
    label: 'EndDate',
    optional: true
    //autoValue: function() {
    //  //if (Meteor.isServer) {
    //    this.unset();
    //    if (this.field('startDate').isSet && this.field('durationInDays').isSet) {
    //      var startDate = this.field('startDate').value;
    //      var duration = this.field('durationInDays').value;
    //      return startDate.setDate(startDate.getDate() + duration);
    //    }
    //    else {
    //      return this.value;
    //    }
    //  //}
    //}
  },
  statusDone: {
    type: Number,
    label: "Status in Percentage",
    min: 0,
    max: 100
  },
  //blogEntry: {
  //  type: String,
  //  label: 'Blog Entry ID',
  //  optional:true
  //}
});

DB.Tasks.attachSchema(Schemas.TaskSchema);