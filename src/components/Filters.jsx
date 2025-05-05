import React from 'react';

function Filters() {
  return (
    <aside className="filters">
      <h3>Filter Jobs</h3>
      <select>
        <option value="">All Categories</option>
        <option value="cleaning">Cleaning</option>
        <option value="plumbing">Plumbing</option>
        <option value="driving">Driving</option>
      </select>
    </aside>
  );
}

export default Filters;
