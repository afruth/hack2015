DB.ProjectStates = new Mongo.Collection('projectStates');

DB.ProjectStates = new ProjectStates({
	name: {
		type: String,
		label: 'Project States'
	}
});