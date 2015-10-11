Meteor.publish('tasks', function(taskId) {
    check(taskId, String);
    return DB.Tasks.find({
        _id: taskId
    })
});