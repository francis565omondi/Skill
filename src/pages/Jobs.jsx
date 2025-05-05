import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import JobCategories from '../components/JobCategories';
import JobLists from '../components/JobLists'; // This should render JobCards inside
// Removed JobCards direct import — used inside JobLists

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <Header />

      <main className="jobs-page px-4 py-6">
        {/* Top section with search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Find Your Next Job</h2>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Job categories (cards/icons) */}
        <div className="mb-6">
          <JobCategories setSelectedCategory={setSelectedCategory} />
        </div>

        {/* Main content with filters + job listings */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Filters */}
          <div className="w-full md:w-1/4">
            <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>

          {/* Right: Job listings rendered as cards */}
          <div className="w-full md:w-3/4">
            <JobLists searchTerm={searchTerm} selectedCategory={selectedCategory} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Jobs;
