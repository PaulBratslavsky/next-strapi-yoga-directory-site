"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Search, MapPin } from 'lucide-react';

interface SearchFormProps {
  onSearch: (query: string, searchType: 'location' | 'name') => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'location' | 'name'>('location');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {searchType === 'location' ? (
              <MapPin className="h-5 w-5 text-gray-400" />
            ) : (
              <Search className="h-5 w-5 text-gray-400" />
            )}
          </div>
          <Input
            type="text"
            placeholder={
              searchType === 'location'
                ? 'Enter zip code, city, or state...'
                : 'Enter school name...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Find Schools
        </Button>
      </div>

      <RadioGroup
        value={searchType}
        onValueChange={(value) => {
          console.log('RadioGroup value changed:', value);
          setSearchType(value as 'location' | 'name');
        }}
        className="flex flex-row gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="location" id="location" />
          <Label htmlFor="location">Search by Location</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="name" id="name" />
          <Label htmlFor="name">Search by School Name</Label>
        </div>
      </RadioGroup>
    </form>
  );
};

export default SearchForm;
