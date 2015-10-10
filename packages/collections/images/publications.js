Meteor.publish('imagesForBeneficiary', function(eid) {
  check(eid, String);

  return DB.ImageStores.find({
    _id: {
      $in: DB.Beneficiaries.findOne(eid).images
    }
  });
});

Meteor.publish('images', function() {
  return DB.ImageStores.find();
});