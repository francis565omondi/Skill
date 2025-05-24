import React, { useState } from 'react';

function Filters() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Hardcoded categories
  const categories = [
    { id: 1, name: 'Cleaning' },
    { id: 2, name: 'Plumbing' },
    { id: 3, name: 'Driving' },
    { id: 4, name: 'Electrical' },
  ];

  return (
    <aside className="filters">
      <h3>Filter Jobs</h3>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </aside>
  );
}

export default Filters;
