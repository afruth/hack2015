Meteor.publish('beneficiary', function(beneficiaryId) {
  check(beneficiaryId, String);
  return DB.Beneficiaries.find({
    _id: beneficiaryId
  })
});