// src/components/JobCard.jsx
import React from 'react';
import { Bookmark, MapPin, DollarSign, Briefcase } from 'lucide-react';

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row items-center justify-between mb-4 hover:shadow-lg transition">
      <div className="flex items-center space-x-4">
        <img src={job.logo} alt={`${job.company} logo`} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
          <div className="flex items-center text-gray-500 text-sm mt-1 space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1 space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1 space-x-2">
            <Briefcase className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Apply</button>
        <button className="p-2 border rounded-xl hover:bg-gray-100"><Bookmark className="w-5 h-5" /></button>
      </div>
    </div>
  );
}

export default JobCard;
