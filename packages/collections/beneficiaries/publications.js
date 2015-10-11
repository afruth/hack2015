Meteor.publishComposite('beneficiary', function(beneficiaryId) {
  check(beneficiaryId, String);
  return {
    find: function() {
      return DB.Beneficiaries.find({
        _id: beneficiaryId
      });
    },
    children: [
      {
        find: function (benef) {
          return DB.ImageStores.find({
            _id: {
              $in: benef.images || []
            }
          })
        }
      }
    ]
  }
});

Meteor.publish('beneficiaries', function() {
  return DB.Beneficiaries.find();
})