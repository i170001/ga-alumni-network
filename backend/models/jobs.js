const jobsDao = require("../daos/jobs");

module.exports = {
  getJobs,
  createJob,
  findOneAndUpdate,
  findOneAndDelete,
  getUserJobs, // Add this line
};

function getJobs(queryFields) {
  return jobsDao.find(queryFields);
}

async function createJob(body) {
  console.log("Model Request Body:", body);

  const data = await jobsDao.findOne({ listing_id: body.listing_id });
  console.log(data);
  if (data) {
    return { success: false, error: "Job already exists" };
  }
  const newJob = await jobsDao.create(body);
  return { success: true, data: newJob };
}

async function findOneAndUpdate(filter, update, options) {
  try {
    const updatedJob = await jobsDao.findOneAndUpdate(filter, update, options);
    return updatedJob;
  } catch (error) {
    console.error("Error updating job:", error);
    throw error; // Rethrow the error to be caught by the controller
  }
}

async function findOneAndDelete(filter, options) {
  try {
    const deletedJob = await jobsDao.findOneAndDelete(filter, options);
    return deletedJob;
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error; // Rethrow the error to be caught by the controller
  }
}

// New function to get jobs by user_id
async function getUserJobs(user_id) {
  return jobsDao.find({ user_id });
}
