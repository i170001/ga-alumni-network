const express = require('express');
const router = express.Router();
const jobsCtrl = require('../controllers/jobs');
var securityMiddleware = require('../middlewares/security');

// Middleware applied to all routes in this router
router.use(securityMiddleware.checkJWT);

// GET all jobs (for all users)
router.get("/", jobsCtrl.getJobs);

// GET jobs by user_id
router.get("/user/:user_id", jobsCtrl.getUserJobs);

// POST create job (authenticated user only)
router.post("/createjob", securityMiddleware.checkSignin, jobsCtrl.createJob);

// PATCH update job (owner or admin only)
router.patch("/updatejob/:listing_id", securityMiddleware.checkSignin, jobsCtrl.updateJob);

// DELETE delete job (owner or admin only)
router.delete("/deletejob/:listing_id", securityMiddleware.checkSignin, jobsCtrl.deleteJob);

module.exports = router;
