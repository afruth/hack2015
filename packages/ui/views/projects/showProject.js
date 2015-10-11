Template.showProject.events({
  'click .editTask': function(ev) {
    ev.preventDefault();
    Router.go('/tasks/' + this._id + '/edit');
  },
  'click .deleteTask': function(ev) {
    ev.preventDefault();
    DB.Tasks.remove({
      _id: this._id
    })
  }
});