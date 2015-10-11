Template.mainBody.helpers({


// TODO: Returns an array of Funding Open projects for the front page
  frontPageProjectsFundingOpen: function (){
    var idTyp = DB.ProjectStates.findOne({name:"Funding"});
    if(!idTyp)
      return [];
    return DB.Projects.find({state:idTyp._id}, {skip:0, limit:3});
  },

  frontPageProjectsFundingOpenCountAll: function (){
    var idTyp = DB.ProjectStates.findOne({name:"Funding"});
    console.log(idTyp);
    return DB.Projects.find({state:idTyp._id}).count();
  },
  
  // TODO: Returns an array of projects in Progress for the front page
  frontPageProjectsInProgress: function (){
    var idTyp = DB.ProjectStates.findOne({name:"Running"});
    if(!idTyp)
      return [];
    return DB.Projects.find({state:idTyp._id}, {skip:0, limit:3});
  },

  frontPageProjectsInProgressCountAll: function (){
    var idTyp = DB.ProjectStates.findOne({name:"Running"});
    console.log(idTyp);
    return DB.Projects.find({state:idTyp._id}).count();
  },
  
  // TODO: Returns an array of Completed projects for the front page
  frontPageProjectsCompleted: function (){
    var idTyp = DB.ProjectStates.findOne({name:"Finished"});
    if(!idTyp)
      return [];
    return DB.Projects.find({state:idTyp._id}, {skip:0, limit:3});
  },

  frontPageProjectsCompletedCountAll: function (){
    var idTyp = DB.ProjectStates.findOne({name:"Finished"});
    if(!idTyp)
      return 0;
    return DB.Projects.find({state:idTyp._id}).count();
  },
  
  // TODO: Returns the number of projects that are in the funding stage - 3
  fundingProjects: function () {
    return Math.max(0,Counts.get('funding') - 3);
  },
  
  // TODO: Returns the number of projects that are in the progress stage - 3
  progressProjects: function () {
    return Math.max(0,Counts.get('running') - 3);
  },
  
  // TODO: Returns the number of projects that are in the completed stage - 2
  completedProjects: function () {
    return Math.max(0,Counts.get('finished') - 3);
  }
});

Template.mainBody.onCreated(function() {
  this.subscribe('counts');
})