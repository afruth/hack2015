Router.configure({ layoutTemplate: 'layout', notFoundTemplate: 'notFound', loadingTemplate: 'loading'});
Router.route('/', function() {
  this.render('home');
});

Router.route('/projects', function() {
  //render project lists. Subscriptions will happen at a template level
  this.render('listProjects');
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
  this.render('donation', {
    data: function() {
      return this.params.id
      //return Projects.findOne(this.params.id)
    },
    waitOn: function() {
      if (this.params.id) {
        this.subscribe('project',this.params.id);
      }
    }
  });
});

Router.route('/user/:id/:op?', function() {
  //render user profile page
    if (this.params.op && this.params.op === 'edit') {
      //TODO: check if this user is also logged in
      if(Meteor.userId() === this.params.id)
      //edit user
        this.render('editUser', {
          data: function() {
            return Meteor.user();
          }
        });
      else
        this.render('notAuthorized');
    } else {
      //show profile
      this.render('profile', {
        data: function() {
          return Meteor.users.findOne(this.params.id);
        },
        waitOn: function() {
          this.subscribe('users', this.params.id);
        }
      })
    }
});

Router.route('/task/:id?/:op?', function() {
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