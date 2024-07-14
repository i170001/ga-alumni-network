const jobsModel = require("../models/jobs")

// highlight-start
module.exports = {
    getJobs,
    createJob,
    updateJob,
    deleteJob,
}

async function getJobs(req, res) {
    try {
        const data = await jobsModel.getJobs(req.query);
        res.json({jobs: data})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createJob(req, res) {
  try {
    console.log("Controller Request Body: ", req.body); 

    const data = await jobsModel.createJob(req.body);
    
    res.json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateJob(req, res) {
  try {
    const { listing_id } = req.params;
    const updatedJob = req.body;

    if (!listing_id) {
      return res.status(400).json({ errorMsg: "listing_id is required" });
    }

    const existingJob = await jobsModel.findOneAndUpdate({ listing_id }, updatedJob, { new: true });

    if (!existingJob) {
      return res.status(404).json({ errorMsg: "Job not found" });
    }

    res.json(existingJob); // Return the updated job data
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

    const deletedJob = await jobsModel.findOneAndDelete({ listing_id });

    if (!deletedJob) {
      return res.status(404).json({ errorMsg: "Job not found" });
    }

    res.json({ message: "Job successfully deleted", deletedJob });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}