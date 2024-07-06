var express = require('express');
var router = express.Router();
var jobsCtrl = require('../controllers/jobs');

/* GET Jobs data (all users) */
router.get("/", jobsCtrl.getJobs);

/* POST Job data (create post by user) */
router.post("/createjob", jobsCtrl.createJob);

module.exports = router;
 