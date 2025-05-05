import React from 'react';

const jobsData = [
  { id: 1, title: 'Cleaner Needed', location: 'Nairobi' },
  { id: 2, title: 'Experienced Plumber', location: 'Mombasa' },
  { id: 3, title: 'Driver for Delivery Service', location: 'Kisumu' },
];

function JobLists() {
  return (
    <section className="job-lists">
      {jobsData.map((job) => (
        <div key={job.id} className="job-card">
          <h4>{job.title}</h4>
          <p>{job.location}</p>
          <button>Apply Now</button>
        </div>
      ))}
    </section>
  );
}

export default JobLists;
