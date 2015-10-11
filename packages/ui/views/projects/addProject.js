var insertProjectHook = {
  onSuccess: function(formType, result) {
    Router.go('/project/' + result);
  }
};

AutoForm.addHooks(['project'],insertProjectHook);