DB.Tasks.after.insert(function(userId,  doc) {
  var proj = DB.Projects.findOne({
    _id: doc.projectId
  });
  DB.Projects.update({_id: proj._id},{
    $inc: {
      allocatedFinancial: doc.allocatedFinancial * -1
    }
  });
});

DB.Tasks.after.update(function(userId,  doc) {
  var proj = DB.Projects.findOne({
    _id: doc.projectId
  });
  DB.Projects.update({_id: proj._id}, {
    $inc: {
      allocatedFinancial: (doc.allocatedFinancial - this.previous.allocatedFinancial) * -1
    }
  });
});
