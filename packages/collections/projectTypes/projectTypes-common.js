DB.ProjectTypes = new Mongo.Collection('projectTypes');

Schemas.ProjectTypeSchema = new SimpleSchema({
	name: String,
	label: 'Project Type'
})