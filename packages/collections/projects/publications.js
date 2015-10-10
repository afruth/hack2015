Meteor.publish('project', function(projectId) {
    check(projectId, String);
    return DB.Projects.find({
        _id: projectId
    })
});