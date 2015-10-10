DB.ProjectTypes = new Mongo.Collection('projectTypes');

Schemas.ProjectTypeSchema = new SimpleSchema({
  projectType :{
    type: String,
    label: 'Project Type'
  }
});

DB.ProjectTypes.attachSchema(Schemas.ProjectTypeSchema);