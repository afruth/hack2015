DB.FinancingCategories = new Mongo.Collection('financingCategories');

DB.FinancingCategories = new FinancingCategories({
	name: {
		type: String,
		label: 'Financing category'
	}
})