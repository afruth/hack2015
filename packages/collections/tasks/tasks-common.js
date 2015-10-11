DB.Tasks = new Mongo.Collection('tasks');

DB.Tasks.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
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
    label: 'Description'
  },
  resourcesVolunteers: {
    type: String,
    label: 'Resources - Volunteers'
  },
  resourcesFinancial: {
    type: Number,
    label: 'Resources - Financial'
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
  statusDone:{
    type: Number,
    label: "Status in Percentage"
  },
  blogEntry: {
    type: String,
    label: 'Blog Entry ID'
  }
});

DB.Tasks.attachSchema(Schemas.TaskSchema);