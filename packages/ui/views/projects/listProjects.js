Template.listProjects.helpers({
    data: function() {
        console.log(Template.instance().data);
        return Template.instance().data;
    }
})