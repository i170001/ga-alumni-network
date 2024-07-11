const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  listing_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
    required: true
  },
  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true
  // },
  industry: {
    type: String,
    required: true
  },
  companyType: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  companySize: {
    type: String,
    required: true
  },
  companyWebsite: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false 
  },
  title: {
    type: String,
    required: true
  },
  workArrangement: {
    type: String,
    required: true
  },
  employmentTeam: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  jobOffers: {
    type: String,
    required: true
  },
  responsibilities: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  certifications: {
    type: [String],
    required: false
  },
  salary: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_posted: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model("Job", jobSchema);
