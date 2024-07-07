const jobsDao = require("../daos/jobs")

module.exports = {
    getJobs,
    createJob
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
  