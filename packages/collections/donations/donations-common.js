DB.Donations = new Mongo.Collection('donations');

DB.Donations.allow({
  insert: function(userId, doc) {
    if(userId) return true;

      return false;
  },
  update: function(userId, doc) {
    return false;
  },
  remove: function(userId, doc) {
    if (!Roles.userIsInRole(userId,['superAdmin'])) return false;

    return true;
  }
})

Schemas.DonationSchema = new SimpleSchema({
	user: {
    type: String,
    label: 'User that donated',
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  },
	amount: {
		type: Number,
		label: 'Amount',
    min: 10
	},
	project: {
		type: String,
		label: 'Project',
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
	},
	//time of donation
	time: {
		type: Date,
		label: 'Time',
    defaultValue: new Date(),
    autoform: {
      type: "hidden",
      label: false
    }
	},
	message: {
		type: String,
		label: 'Message',
		optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea'
      }
    }
	},
	public: {
		type: Boolean,
		label: 'Public',
    defaultValue: true
	}
});

DB.Donations.attachSchema(Schemas.DonationSchema);