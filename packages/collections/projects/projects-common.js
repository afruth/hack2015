SimpleSchema.messages({
  'not enough funds': 'You dont have enough available funds'
})
DB.Projects = new Mongo.Collection('projects');

DB.Projects.allow({
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

Schemas.ProjectSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  description: {
    type: String,
    label: 'Description'
  },
  projType: {
    type: String,
    label: 'Project Type',
    autoform: {
      options: function() {
        var pTypes = DB.ProjectTypes.find().fetch();
        return _.map(pTypes, function(doc) {
          return {
            label: doc.projectType,
            value: doc._id
          }
        });
      }
    }
  },
  location: {
    type: Object,
    label: 'Location',
    optional: true,
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: true,
        searchBox: true,
        height: '400px',
        width: '100%',
        zoom: 5,
        defaultLat:27.858807,
        defaultLng:84.660645
      }
    }
  },
  'location.lat': {
    type: Number,
    decimal: true
  },
  'location.lng': {
    type: Number,
    decimal: true
  },

  beneficiary: {
    type: String,
    label: 'Beneficiary',
    autoform: {
      options: function() {
        return DB.Beneficiaries.find().map(function(b) {
          return {
            label: b.name,
            value: b._id
          }
        })
      }
    }
  },
  tasks: {
    type: [String],
    label: 'Tasks',
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    },
  },
  state: {
    type: String,
    label: 'State',
    autoform: {
      options: function() {
        var pTypes = DB.ProjectStates.find().fetch();
        return _.map(pTypes, function(doc) {
          return {
            label: doc.name,
            value: doc._id
          }
        });
      }
    }
  },
  visible: {
    type: Boolean,
    label: 'Hide this project'
  },
  image: {
    type: String,
    label: 'Project Image',
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: "imageStore",
        accept: 'image/*'
      }
    }
  },
  allocatedFinancial: {
    type: Number,
    label: function() {
      return 'Finances allocated to this project'
    },
    defaultValue: 0,
    min: 0,
    custom: function() {
      if (this.operator !== '$inc') {
        var org = DB.Organization.findOne();
        if (this.docId) {
          var documentInDB = DB.Projects.findOne(this.docId);
          if (org && org.availableFundsToSpend < this.value - documentInDB.allocatedFinancial)
            return 'not enough funds';
        } else if (org && org.availableFundsToSpend < this.value)
          return 'not enough funds';
      }
    }
  },
  allocatedVolunteers: {
    type: Number,
    label: 'Volunteers allocated to this project',
    defaultValue: 0,
    min: 0
  }
});

DB.Projects.attachSchema(Schemas.ProjectSchema);