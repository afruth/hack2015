Router.configure({ layoutTemplate: 'layout', notFoundTemplate: 'notFound', loadingTemplate: 'loading'});

Router.route('/', {
  waitOn: function () {
    this.subscribe('projects');
    this.subscribe('projectStates');
  },
  name: 'home',
  action: function () {
    //render project overview
    this.render('home');
  }
});


Router.route('/projects', {
  waitOn: function () {
    this.subscribe('projects');
 //   this.subscribe('images');
  },
  action: function () {
    //render project overview
    this.render('listProjects', {
      data: function () {
        return DB.Projects.find();
      }
    });
  }
});


Router.route('/login', function() {
  //render project lists. Subscriptions will happen at a template level
  if (!Meteor.user() || !Meteor.loggingIn())
    this.render('login');
  else
    this.go('/');
});

Router.route('/project/:id?/:op?', {
  waitOn: function () {
    this.subscribe('projectTypes');
    this.subscribe('projectStates');
    this.subscribe('beneficiaries');

    if(this.params.id) {
      this.subscribe('project', this.params.id);
      Session.setPersistent('projectId', this.params.id);
    }
    else
      this.subscribe('images');
  },
  action: function () {
    //render project details or edit project / add project when both edit and id are missing
    if (this.params.id) {
      if (this.params.op && this.params.op === 'edit') {
        if (!Roles.userIsInRole(Meteor.userId(),['superAdmin'])) this.render('notAuthorized');
        //edit project
        else
          this.render('editProject', {
            data: function () {
              return DB.Projects.findOne(this.params.id);
            }
          });
      } else {
        //show project
        this.render('showProject', {
          data: function () {
            return DB.Projects.findOne(this.params.id);
          }
        });
      }
    } else {
      //add project
      if (!Roles.userIsInRole(Meteor.userId(),['superAdmin'])) this.render('notAuthorized');
      else
        this.render('addProject');
    }
  }
});

Router.route('/donation/:id?', {
  action: function () {
    //render donation page. Id is the project id
    if(this.params.id) {
      Session.set('projectId', this.params.id);
    } else {
      Session.set('projectId', null);
    }
    this.render('donation', {
      data: function () {
        return DB.Projects.findOne(this.params.id)
      }
    });
  },
  waitOn: function () {
    if (this.params.id) {
      this.subscribe('project', this.params.id);
    }
  }
});

Router.route('/user/:id/:op?', {
  action: function () {
    //render user profile page
    if (this.params.op && this.params.op === 'edit') {
      //TODO: check if this user is also logged in
      if (Meteor.userId() === this.params.id)
      //edit user
        this.render('editUser', {
          data: function () {
            return Meteor.user();
          }
        });
      else
        this.render('notAuthorized');
    } else {
      //show profile
      this.render('profile', {
        data: function () {
          return Meteor.users.findOne(this.params.id);
        }
      })
    }
  },
  waitOn: function () {
    this.subscribe('users', this.params.id);
  }
});

Router.route('/tasks/:id?/:op?', {

  waitOn: function () {
    this.subscribe('resources');
    this.subscribe('financingCategories');

    if(this.params.id)
      this.subscribe('tasks',this.params.id);

    if(Session.get('projectId'))
      this.subscribe('project',Session.get('projectId'));
  },
  action: function () {
    //render tasks page / edit tasks page / add tasks (when both edit and id are missing)

    if (this.params.id) {
      if (this.params.op && this.params.op === 'edit') {
        //edit project
        this.render('editTask', {
          data: function () {
            return DB.Tasks.findOne(this.params.id);
          }

        });
      } else {
        //show project
        this.render('showTask', {
          data: function () {
            return DB.Tasks.findOne(this.params.id);
          }
        });
      }
    } else {
      //add project
      if(Session.get('projectId'))
        this.render('addTask');
      else
        this.render('notFound');
    }
  }
});

Router.route('/update/:id?/:op?', {
  action: function () {
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
  },
  waitOn: function() {
    if (this.params.id)
      this.subscribe('update',this.params.id);
  }
});

Router.route('/beneficiary/:id?/:op?', {
  waitOn: function () {
    if (this.params.id) {
      this.subscribe('beneficiary', this.params.id);
    } else {
      this.subscribe('images');
    }
  },
  action: function () {
    //render beneficiary page / edit beneficiary / add beneficiary (when both edit and id are missing)
    if (this.params.id) {
      if (this.params.op && this.params.op === 'edit') {
        //edit beneficiary
        this.render('editBeneficiary', {
          data: function () {
            return DB.Beneficiaries.findOne(this.params.id);
          }
        });
      } else {
        //show beneficiary
        this.render('showBeneficiary', {
          data: function () {
            return DB.Beneficiaries.findOne(this.params.id);
          }
        });
      }
    } else {
      //add beneficiary
      this.render('addBeneficiary');
    }
  }
});


Router.route('/lists/:list?', function() {
  //edit lists page (project types, project states, project financing categs, resource types)

});

Router.route('/thankyou', function() {
  this.render('thankyou', {
    data: function() {
      return Session.get('projectId');
    }
  });
})
