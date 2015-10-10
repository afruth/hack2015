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

Router.route('/me/:id/:op?', function() {
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


Router.route('/task/:id?/:op?', function() {
  console.log(this.params);
  //render project details or edit project / add project when both edit and id are missing
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
      this.render('editTask', {
        data: function() {
          //return Projects.findOne(this.params.id);
        },
        waitOn: function() {
          //this.subscribe('project',this.params.id);
        }
      });
    } else {
      //show project
      this.render('showTask', {
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
    this.render('addTask');
  }
});


Router.route('/update/:id?/:op?', function() {
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


Router.route('/beneficiary/:id?/:op?', function() {
  //render project details or edit project / add project when both edit and id are missing
  if (this.params.id) {
    if (this.params.op && this.params.op === 'edit') {
      //edit project
      this.render('editBeneficiary', {
        data: function() {
          //return Projects.findOne(this.params.id);
        },
        waitOn: function() {
          //this.subscribe('project',this.params.id);
        }
      });
    } else {
      //show project
      this.render('showBeneficiary', {
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
    this.render('addBeneficiary');
  }
});


Router.route('/lists', function() {
  //edit lists page (project types, project states, project financing categs, resource types)

});