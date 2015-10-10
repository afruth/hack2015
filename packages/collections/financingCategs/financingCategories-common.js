DB.FinancingCategories = new Mongo.Collection('financingCategories');

Schemas.FinancingCategories = new SimpleSchema({
	name: {
		type: String,
		label: 'Financing category'
	}
});

DB.FinancingCategories.attachSchema(Schemas.FinancingCategories);