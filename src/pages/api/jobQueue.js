// jobQueue.js
export let jobQueue = {};

export function addJob(jobId, jobData) {
  jobQueue[jobId] = jobData;
}

export function getJob(jobId) {
  return jobQueue[jobId];
}
