// controllers/jobs.js
const jobsModel = require("../models/jobs");

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getUserJobs,
};

async function getJobs(req, res) {
  try {
    const data = await jobsModel.getJobs(req.query);
    res.json({ jobs: data });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function createJob(req, res) {
  try {
    const userId = req.body.user_id; 
    const jobData = { ...req.body, user_id: userId };

    const data = await jobsModel.createJob(jobData);

    if (!data.success) {
      return res.status(400).json({ errorMsg: data.error });
    }

    res.status(201).json(data.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateJob(req, res) {
  try {
    console.log("request.body.listing_id: ", req.body.listing_id)
    const { listing_id } = req.params;
    const updatedJob = req.body;

    if (!listing_id) {
      return res.status(400).json({ errorMsg: "listing_id is required" });
    }

    const existingJob = await jobsModel.findOneAndUpdate({ listing_id: listing_id }, updatedJob, { new: true });

    if (!existingJob) {
      return res.status(404).json({ errorMsg: "Job not found" });
    }

    res.json(existingJob);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function deleteJob(req, res) {
  try {
    const { listing_id } = req.params;

    if (!listing_id) {
      return res.status(400).json({ errorMsg: "listing_id is required" });
    }

    const deletedJob = await jobsModel.findOneAndDelete({ listing_id: listing_id });

    if (!deletedJob) {
      return res.status(404).json({ errorMsg: "Job not found" });
    }

    res.json({ message: "Job successfully deleted", deletedJob });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

// New function to get jobs by user_id
async function getUserJobs(req, res) {
  try {
    const { user_id } = req.params;
    const data = await jobsModel.getUserJobs(user_id);
    res.json({ jobs: data });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}
