var imageStore = new FS.Store.GridFS("iStore", {
  chunkSize: 1024*4  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

DB.ImageStores = new FS.Collection("imageStore", {
  stores: [imageStore]
});

DB.ImageStores.allow({
  download: function () {
    return true;
  },
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  fetch: null
});