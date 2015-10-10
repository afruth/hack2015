DB.Donations = new Mongo.Collection('donations');

Schemas.DonationSchema = new SimpleSchema({
	//TODO: add user!
	amount: {
		type: Number,
		label: 'Amount'
	},
	project: {
		type: String,
		label: 'Project'
	},
	//time of donation
	time: {
		type: Date,
		label: 'Time'
	},
	message: {
		type: String,
		label: 'Message',
		optional: true
	},
	public: {
		type: Boolean,
		label: 'Public'
	}
});

DB.Donations.attachSchema(Schemas.DonationSchema);