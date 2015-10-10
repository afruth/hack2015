DB.Donations = new Mongo.Collection('donations');

Schemas.DonationSchema = new SimpleSchema({
});

DB.Donations.attachSchema(Schemas.DonationSchema);