DB.Organization = new Mongo.Collection('organization');

Schemas.OrgSchema = new SimpleSchema({
  orgName: {
    type: String,
    label:'Organisation name'
  },
  orgLogo: {
    type: String,
    label: 'Organisation logo',
    optional: true,
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: "imageStore",
        accept: 'image/*'
      }
    }
  },
  orgDescription: {
    type: String,
    label: 'Organisation description',
    autoform: {
      afFieldInput: {
        type: 'textarea'
      }
    }
  },
  availableFundsToSpend: {
    type: Number,
    label: 'Available funds for projects',
    min: 0,
    defaultValue: 0
  },
  availableFundsToOrg: {
    type: Number,
    label: 'Available funds for internal spending',
    min: 0,
    defaultValue: 0
  }
});

DB.Organization.attachSchema(Schemas.OrgSchema);

Meteor.startup(function() {
  if (DB.Organization.find().count() === 0) {
    DB.Organization.insert({
      orgName: 'Your org name',
      orgDescription: 'Your organisation description'
    })
  }
})