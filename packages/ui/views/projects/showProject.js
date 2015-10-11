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

Template.showProject.helpers({
  mapOptions: function() {
    var loc = (Template.instance().data && Template.instance().data.location) ? Template.instance().data.location : null;
    if (GoogleMaps.loaded() && loc) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(loc.lat, loc.lon),
        zoom: 12
      };
    }
  }
});

Template.showProject.onCreated(function() {
  GoogleMaps.ready('projectMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
})