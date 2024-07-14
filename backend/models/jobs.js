const jobsDao = require("../daos/jobs")

module.exports = {
    getJobs,
    createJob,
    findOneAndUpdate,
    findOneAndDelete,
  };

function getJobs(queryFields) {
    return jobsDao.find(queryFields);
}

async function createJob(body) {
  console.log("Model Request Body:", body); 

  const data = await jobsDao.findOne({"listing_id": body.listing_id});
  console.log(data);
  if (data) {
    return {success: false, error: "job already exist"};
  }
  const newUser = await jobsDao.create(body);
  return {success: true, data: newUser};
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