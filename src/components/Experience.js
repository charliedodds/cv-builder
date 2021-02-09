import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Job from './Job.js';
import NewJobForm from './NewJobForm';

import '../styles/Experience.css';

const Experience = ({ isEditing }) => {
  const firstJob = {
    title: 'Job Title',
    company: 'Company',
    description: 'Brief company description',
    responsibilities: [
      'First responsibility',
      'Second responsibility',
      'Third responsibility',
    ],
    startDate: '2015',
    endDate: '2020',
    id: uuidv4(),
  };

  const [jobs, setJobs] = useState([firstJob]);

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <section className='Experience'>
      <h3 className='Experience-title'>Experience</h3>
      {jobs.map((job) => (
        <Job
          job={job}
          key={job.id}
          isEditing={isEditing}
          handleDeleteClick={() => deleteJob(job.id)}
        />
      ))}
      {isEditing ? <NewJobForm jobs={jobs} setJobs={setJobs} /> : null}
    </section>
  );
};

export default Experience;
