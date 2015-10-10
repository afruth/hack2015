Meteor.publish('imagesForBeneficiary', function(bid) {
  check(bid, String);
  var beneficiary = DB.Beneficiaries.findOne(bid);

  if(beneficiary)
    return DB.ImageStores.find({
      _id: {
        $in: beneficiary.images
      }
    });
});