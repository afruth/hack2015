DB.Projects.after.insert(function(userId,  doc) {
  var org = DB.Organization.findOne();
  DB.Organization.update({_id: org._id},{
    $inc: {
      availableFundsToSpend: doc.allocatedFinancial * -1
    }
  });
});

DB.Projects.after.update(function(userId,  doc, fn, modifier) {
  if(!modifier.$inc) {
    var org = DB.Organization.findOne();
    DB.Organization.update({_id: org._id}, {
      $inc: {
        availableFundsToSpend: (doc.allocatedFinancial - this.previous.allocatedFinancial) * -1
      }
    });
  }
});
