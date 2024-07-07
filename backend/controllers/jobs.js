const jobsModel = require("../models/jobs")

// highlight-start
module.exports = {
    getJobs,
    createJob,
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
    const data = await jobsModel.createJob(req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}