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
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false 
  },
  skills: {
    type: [String],
    required: true
  },
  salary: {
    type: Number,
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
