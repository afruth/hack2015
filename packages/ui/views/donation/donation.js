Template.donation.helpers({
  data: function() {
    return Template.instance().data;
  },
  formdata: function() {
    var project = Template.instance().data;
    console.log(project)
    if(project)
      return {
        project: project._id
      }
  }
});

var donateHook = {
  onSuccess: function(formType, result) {
    Router.go('/thankyou');
  }
};

AutoForm.addHooks(['donation'],donateHook);