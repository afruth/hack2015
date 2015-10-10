Meteor.publish('financingCategories', function() {
  return DB.FinancingCategories.find();
})
