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
  }
})