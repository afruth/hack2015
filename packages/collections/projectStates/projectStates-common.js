DB.ProjectStates = new Mongo.Collection('projectStates');

Schemas.ProjectStates = new SimpleSchema({
	name: {
		type: String,
		label: 'Project States'
	}
});

DB.ProjectStates.attachSchema(Schemas.ProjectStates);

