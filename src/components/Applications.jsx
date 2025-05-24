import React from 'react';

import { FaBuilding, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const mockApplications = [
  {
    id: 1,
    jobTitle: 'Electrician',
    company: 'BrightSpark Ltd',
    status: 'Pending',
    date: 'May 21, 2025',
  },
  {
    id: 2,
    jobTitle: 'Plumber',
    company: 'WaterWorks Co',
    status: 'Accepted',
    date: 'May 15, 2025',
  },
  {
    id: 3,
    jobTitle: 'House Cleaner',
    company: 'HomeShine Services',
    status: 'Rejected',
    date: 'May 10, 2025',
  },
];

const Applications = () => {
  return (
    <div className="applications-page">
      <h2>My Applications</h2>
      <div className="applications-list">
        {mockApplications.map((app) => (
          <div key={app.id} className="application-card">
            <div className="application-info">
              <h3>{app.jobTitle}</h3>
              <p><FaBuilding /> {app.company}</p>
              <p><FaClock /> Applied on: {app.date}</p>
            </div>
            <div className={`application-status ${app.status.toLowerCase()}`}>
              {app.status === 'Accepted' && <FaCheckCircle />}
              {app.status === 'Rejected' && <FaTimesCircle />}
              {app.status === 'Pending' && <FaClock />}
              <span>{app.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
