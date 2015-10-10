Schemas = {};
DB = {};

DB.Beneficiaries = new Mongo.Collection('beneficiaries');

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
  }
});

DB.Beneficiaries.attachSchema(Schemas.BeneficiarySchema);