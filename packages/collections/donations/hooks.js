DB.Donations.after.insert(function(userId,  doc) {
  var moneyForProject = Math.ceil(doc.amount * 0.75);
  var moneyForOrg = doc.amount - moneyForProject;

  var org = DB.Organization.findOne();
  if(doc.project) {

    DB.Projects.update({
      _id: doc.project
    }, {
      $inc: {
        allocatedFinancial: moneyForProject
      }
    });
    DB.Organization.update({_id: org._id},{
      $inc: {
        availableFundsToOrg: moneyForOrg
      }
    });
  } else {
    DB.Organization.update({_id: org._id},{
      $inc: {
        availableFundsToSpend: moneyForProject
      }
    });
    DB.Organization.update({_id: org._id},{
      $inc: {
        availableFundsToOrg: moneyForOrg
      }
    });
  }
});