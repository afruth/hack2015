Router.configure({ layoutTemplate: 'layout'});
Router.route('/', function() {
  this.render('home');
});

Router.route('/projects', function() {
  //render project lists
});

Router.route('/project/:id?/:op?', function() {
  //render project details or edit project / add project when both edit and id are missing
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
      this.render('editProject', {
        data: function() {
          //return Projects.findOne(this.params.id);
        },
        waitOn: function() {
          //this.subscribe('project',this.params.id);
        }
      });
    } else {
      //show project
      this.render('showProject', {
        data: function() {
          //return Projects.findOne(this.params.id);
        },
        waitOn: function() {
          //this.subscribe('project',this.params.id);
        }
      });
    }
  } else {
    //add project
    this.render('addProject');
  }
});

Router.route('/donation/:id?', function() {
  //render donation page. Id is the project id
});

Router.route('/me/:_id/:op?', function() {
  //render user profile page
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
    } else {
      //show project
    }
  } else {
    //add project
  }

});

Router.route('/task/:_id?/:op?', function() {
  //render task page / edit task page / add task (when both edit and id are missing)
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
    } else {
      //show project
    }
  } else {
    //add project
  }
});

Router.route('/update/:_id?/:op?', function() {
  //render update page / edit update / add update (when both edit and id are missing)
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
    } else {
      //show project
    }
  } else {
    //add project
  }
});

Router.route('/beneficiary/:_id?/:op?', function() {
  //render beneficiary page / edit beneficiary / add beneficiary (when both edit and id are missing)
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
    } else {
      //show project
    }
  } else {
    //add project
  }
});

Router.route('/lists', function() {
  //edit lists page (project types, project states, project financing categs, resource types)

});