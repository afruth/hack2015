Meteor.methods({
  'populateLists': function() {
    var projectTypes = [
      {projectType: 'Building projects'},
      {projectType: 'Education sponsorship'},
      {projectType: 'Local business'},
      {projectType: 'Trade help'}
    ];

    var projectStatuses = [
      {name: 'Draft'},
      {name: 'Funding'},
      {name: 'Running'},
      {name: 'Finished'}
    ];

    var financingCategories = [
      {name: 'Workforce'},
      {name: 'Materials'},
      {name: 'Project Management'},
    ];

    var resources = [
      {name: 'Money'},
      {name: 'Volunteers'}
    ];

    DB.FinancingCategories.remove({});

    _.each(financingCategories, function(item) {
      DB.FinancingCategories.insert(item);
    });

    DB.ProjectTypes.remove({});

    _.each(projectTypes, function(item) {
      DB.ProjectTypes.insert(item);
    });

    DB.ProjectStates.remove({});

    _.each(projectStatuses, function(item) {
      DB.ProjectStates.insert(item);
    });

    DB.Resources.remove({});

    _.each(resources, function(item) {
      DB.Resources.insert(item);
    });
  }
});