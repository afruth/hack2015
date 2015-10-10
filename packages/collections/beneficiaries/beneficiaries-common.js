Schemas = {};
DB = {};

DB.Beneficiaries = new Mongo.Collection('beneficiaries');

DB.Beneficiaries.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

Schemas.BeneficiarySchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  description: {
    type: String,
    label: 'Description'
  },
  images: {
    type: [String],
    optional: true,
    label: 'Images'
  },
  "images.$": {
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: "imageStore",
        accept: 'image/*',
        onBeforeInsert: function(fileObj) {
          fileObj.entity = this.template.data._id || '';
        }
      }
    }
  }
});

DB.Beneficiaries.attachSchema(Schemas.BeneficiarySchema);