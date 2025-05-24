import React, { useEffect, useState } from 'react';

function JobLists({ searchTerm, selectedCategory }) {
  const [jobs, setJobs] = useState([]);

  // Filter based on search and category
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || job.category === selectedCategory)
  );

  return (
    <section className="job-lists">
      {filteredJobs.map((job) => (
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
