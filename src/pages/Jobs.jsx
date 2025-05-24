import React, { useState } from 'react';
import { FaMapMarkerAlt, FaMoneyBillAlt, FaClock } from 'react-icons/fa';

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Remote",
    type: "Full-Time",
    salary: "KSh 100,000/month",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Electrician",
    company: "BrightWatt Kenya",
    location: "Nairobi",
    type: "Part-Time",
    salary: "KSh 35,000/month",
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Plumber",
    company: "FlowFix Enterprises",
    location: "Mombasa",
    type: "Contract",
    salary: "KSh 30,000/project",
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Driver",
    company: "QuickMove Logistics",
    location: "Kisumu",
    type: "Full-Time",
    salary: "KSh 50,000/month",
    posted: "5 days ago"
  },
];

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = sampleJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (jobId) => {
    alert(`You have applied for job ID: ${jobId}`);
  };

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1>Browse Available Jobs</h1>
        <input
          type="text"
          placeholder="Search job title or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h2>{job.title}</h2>
              <p className="company-name">{job.company}</p>
              <div className="job-meta">
                <span><FaMapMarkerAlt /> {job.location}</span>
                <span><FaMoneyBillAlt /> {job.salary}</span>
                <span><FaClock /> {job.posted}</span>
              </div>
              <button onClick={() => handleApply(job.id)}>Apply Now</button>
            </div>
          ))
        ) : (
          <p className="no-jobs">No jobs found.</p>
        )}
      </div>

      {/* Chatbot */}
      <iframe
        className="chatbot"
        title="SkillHub Chatbot"
        src="https://www.chatbase.co/chatbot-iframe/YOUR_BOT_ID"
      />
    </div>
  );
}

export default Jobs;
