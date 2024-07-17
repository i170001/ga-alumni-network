var express = require('express');
var router = express.Router();
var jobsCtrl = require('../controllers/jobs');

/* GET Jobs data (all users) */
router.get("/", jobsCtrl.getJobs);

// Route for fetching jobs by user_id
router.get("/user/:user_id", jobsCtrl.getUserJobs);

/* POST Job data (create post by user) */
router.post("/createjob", jobsCtrl.createJob);

/* PATCH Job data (create post by user) */
router.patch("/updatejob/:listing_id", jobsCtrl.updateJob);

/* DELETE Job data (create post by user) */
router.delete("/deletejob/:listing_id", jobsCtrl.deleteJob);

module.exports = router;
