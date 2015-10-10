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
  }
});

DB.Projects.attachSchema(Schemas.ProjectSchema);