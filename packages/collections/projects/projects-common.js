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
    
  },
  location: {
    type: Object,
    label: 'Location',
    optional: true,
    "location.$.lat": {
      type: Number
    },
    "location.$.long": {
      type: Number
    }
  },
  beneficiaries: {
    type: [BeneficiarySchema],
    label: 'Beneficiaries'
  },
  tasks: {
    
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