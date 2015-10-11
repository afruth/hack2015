Template.projectCard.helpers({

  // // TODO: return project's progress percent
  // // Should be funding for funding status projects
  // // Should be progress for progress status projects
  // progressPercent: function () {
  //  return '58';
  // },

  // // TODO: Return funding goal
  // fundingGoal: function () {
  //  return '2500';
  // },

  // TODO: Return funding gained
  fundingGained: function () {
   return '1708';
  },

  // TODO: Returns start date, formatted "month day"
  startDate: function () {
   return 'April 11';
  },

  fundingCompletePercentage: function() {
    console.log(this.neededFunding(), this.allocatedFunding());
    console.log(100.0 * ( this.allocatedFunding() / this.neededFunding()));
    if (this.neededFunding() <= 0) {
      return 0;
    }
    else {
      console.log(Math.round(100.0 * (this.allocatedFunding() / this.neededFunding())));
      return Math.min(100, Math.round(100.0 * (this.allocatedFunding() / this.neededFunding())));
    }
  }

});