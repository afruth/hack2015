DB.Projects = new Mongo.Collection('projects');

DB.Projects.allow({
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
        })
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
        width: '50%',
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
    label: 'Beneficiary'
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
        })
      }
    }
  },
  visible: {
    type: Boolean,
    label: 'Visibility'
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
  }
});

DB.Projects.attachSchema(Schemas.ProjectSchema);