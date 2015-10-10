Router.route('/', function() {
  this.render('home');
});

Router.route('/projects', function() {
  //render project lists
});

Router.route('/project/:id/edit?', function() {
  //render project details or edit project / add project when both edit and id are missing
});

Router.route('/donation/:id?', function() {
  //render donation page. Id is the project id
});

Router.route('/me/:_id/edit?', function() {
  //render user profile page

});

Router.route('/task/:_id?/edit?', function() {
  //render task page / edit task page / add task (when both edit and id are missing)

});

Router.route('/update/:_id?/edit?', function() {
  //render update page / edit update / add update (when both edit and id are missing)

});

Router.route('/beneficiary/:_id?/edit?', function() {
  //render beneficiary page / edit beneficiary / add beneficiary (when both edit and id are missing)

});

Router.route('/lists', function() {
  //edit lists page (project types, project states, project financing categs, resource types)

});