DB.Resources = new Mongo.Collection('resources');

Schemas.Resources = new SimpleSchema({
	name: {
		type: String,
		label: 'Resource'
	}
});

DB.Resources.attachSchema(Schemas.Resources);