Schemas = {};
DB = {};

DB.Projects = new Mongo.Collection('projects');

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
    label: 'Project Type'
  },
  location: {
    type: Object,
    label: 'Location',
    optional: true
  },
  "location.$.lat": {
    type: Number
  },
  "location.$.long": {
    type: Number
  },
  beneficiary: {
    type: String,
    label: 'Beneficiary'
  },
  tasks: {
    type: [String],
    label: 'Tasks'
  },
  state: {
    type: String,
    label: 'State'
  },
  visible: {
    type: Boolean,
    label: 'Visibility'
  }
});

DB.Projects.attachSchema(Schemas.ProjectSchema);