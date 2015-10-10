Router.configure({ layoutTemplate: 'layout', notFoundTemplate: 'notFound', loadingTemplate: 'loading'});
Router.route('/', function() {
  this.render('home');
});

Router.route('/projects', function() {
  //render project lists. Subscriptions will happen at a template level
  this.render('listProjects');
});

Router.route('/project/:id?/:op?', {
  waitOn: function () {
    if(this.params.id)
      this.subscribe('project',this.params.id);
  },
  action: function () {
    //render project details or edit project / add project when both edit and id are missing
    if (this.params.id) {
      if (this.params.op && this.params.op === 'edit') {
        //edit project
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
      this.render('addProject');
    }
  }
});

Router.route('/donation/:id?', {
  action: function () {
    //render donation page. Id is the project id
    this.render('donation', {
      data: function () {
        return this.params.id
        //return Projects.findOne(this.params.id)
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

Router.route('/task/:id?/:op?', {
  action: function () {
    //render task page / edit task page / add task (when both edit and id are missing)

    if (this.params.id) {
      if (this.params.op && this.params.op === 'edit') {
        //edit project
        this.render('editTask', {
          data: function () {
            //return Projects.findOne(this.params.id);
          },
          waitOn: function () {
            //this.subscribe('project',this.params.id);
          }
        });
      } else {
        //show project
        this.render('showTask', {
          data: function () {
            //return Projects.findOne(this.params.id);
          }
        });
      }
    } else {
      //add project
      this.render('addTask');
    }
  },
  waitOn: function () {
    if (this.params.id) this.subscribe('project',this.params.id);
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
      this.subscribe('imagesForBeneficiary', this.params.id);
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


Router.route('/lists', function() {
  //edit lists page (project types, project states, project financing categs, resource types)

});