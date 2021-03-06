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

    if( !isNaN(neededAmount) )
      return neededAmount;
    return 0;

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

    if( !isNaN(neededAmount) )
      return neededAmount;
    return 0;
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
  },
  startDate: function() {
    var tasks = DB.Tasks.find({
      projectId: this._id
    }).fetch();

    var startDate = (new Date()).getTime() + 1000*60*60*24*500;

    _.each(tasks, function(t) {
      if( t.startDate.getTime() < startDate )
        startDate = t.startDate.getTime();
    });

    //var returnStartDate = new Date();
    //returnStartDate.setTime(startDate);

    return startDate;
  }
})