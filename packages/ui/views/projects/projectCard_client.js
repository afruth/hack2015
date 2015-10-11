Template.projectCard.helpers({
  // TODO: return project's title
  //title: function () {
  //  return name;
  //},
  //// TODO: return project's description
  //description: function () {
  //  return description;
  //}
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