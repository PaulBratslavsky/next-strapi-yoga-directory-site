"use client";

import { useState } from 'react';
import SearchForm from '@/components/forms/SearchForm';
import { filterSchools } from '@/data/schoolsData';
import type { School } from '@/types';

import SchoolsList from '@/components/custom/SchoolsList';

export function SchoolFinder() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);

  const handleSearch = (query: string, searchType: 'location' | 'name') => {
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      const results = filterSchools(query, searchType);
      setSchools(results);
      setHasSearched(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Search Section */}
      <div className="relative z-10 w-full max-w-3xl mx-auto -mt-8 bg-white p-6 rounded-lg shadow-lg">
        <SearchForm onSearch={handleSearch} />
      </div>

      {/* Results Section */}
      <div className="container max-w-5xl mx-auto py-12">
        {hasSearched && (
          <>
            <h2 className="text-2xl font-bold mb-6">
              {isLoading ? "Searching..." : `Found ${schools.length} schools`}
            </h2>
            <SchoolsList schools={schools} isLoading={isLoading} />
          </>
        )}
        
        {!hasSearched && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Popular Jiu-Jitsu Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Brazilian Jiu-Jitsu (BJJ)</h3>
                <p className="text-gray-600">A martial art and combat sport focused on grappling and ground fighting, with the goal of gaining a dominant position.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Japanese Jiu-Jitsu</h3>
                <p className="text-gray-600">A traditional Japanese martial art focusing on throwing techniques, joint locks, chokes, and strikes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">No-Gi Jiu-Jitsu</h3>
                <p className="text-gray-600">Similar to BJJ but practiced without the traditional gi (uniform), focusing on body control and submissions.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
