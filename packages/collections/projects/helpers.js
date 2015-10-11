DB.Projects.helpers({
  projectType: function() {
    return DB.ProjectTypes.findOne({
      _id: this.projType
    });
  },
  projectState: function() {
    return DB.ProjectStates.findOne({
      _id: this.state
    });
  },
  beneficiaryObj: function() {
    return DB.Beneficiaries.findOne({
      _id: this.beneficiary
    })
  },
  imageObj: function() {
    return DB.ImageStores.findOne({
      _id: this.image
    })
  },
  tasks: function() {
    return DB.Tasks.find({
      projectId: this._id
    })
  },
  neededFunding: function() {
    var tasks = DB.Tasks.find({
      projectId: this._id
    }).fetch();

    var neededAmount = 0;

    _.each(tasks, function(t) {
      neededAmount += t.resourcesFinancial
    });

    return neededAmount;

  },
  neededVolunteers: function() {
    var tasks = DB.Tasks.find({
      projectId: this._id
    }).fetch();

    var neededAmount = 0;

    _.each(tasks, function(t) {
      neededAmount += t.resourcesVolunteers
    });

    return neededAmount;
  },
  allocatedFunding: function() {
    var tasks = DB.Tasks.find({
      projectId: this._id
    }).fetch();

    var neededAmount = 0;

    _.each(tasks, function(t) {
      neededAmount += t.allocatedFinancial
    });

    return neededAmount;
  },
  allocatedVolunteers: function() {
    var tasks = DB.Tasks.find({
      projectId: this._id
    }).fetch();

    var neededAmount = 0;

    _.each(tasks, function(t) {
      neededAmount += t.allocatedVolunteers
    });

    return neededAmount;
  },
  percentDone: function() {
    var tasks = DB.Tasks.find({
      projectId: this._id
    }).fetch();

    var totalDone = 0;

    _.each(tasks, function(t) {
      totalDone += t.statusDone
    });

    return (tasks.length > 0)? totalDone * 100 / (tasks.length * 100): 100;
  }
})