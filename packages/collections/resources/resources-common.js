DB.Resources = new Mongo.Collection('resources');

DB.Resources = new Resources({
	name: {
		type: String,
		label: 'Resource'
	}
});