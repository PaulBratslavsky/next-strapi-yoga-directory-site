import React, { useState } from 'react';
import type { School } from '@/types';
import SchoolCard from '@/components/custom/SchoolCard';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Table2, Calendar, DollarSign, Star, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SchoolsListProps {
  schools: School[];
  isLoading?: boolean;
}

const SchoolsList: React.FC<SchoolsListProps> = ({ schools, isLoading }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  
  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4 text-gray-600">Searching for yoga studios...</p>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-600">No yoga studios found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end space-x-2">
        <Button 
          variant={viewMode === 'cards' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => setViewMode('cards')}
        >
          <LayoutGrid className="mr-2 h-4 w-4" />
          Cards
        </Button>
        <Button 
          variant={viewMode === 'table' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => setViewMode('table')}
        >
          <Table2 className="mr-2 h-4 w-4" />
          Table
        </Button>
      </div>

      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Studio Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Drop-in Classes</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead>Styles</TableHead>
                <TableHead>Levels</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell className="font-medium">
                    <a href={`/school/${school.id}`} className="hover:text-blue-600 transition-colors">
                      {school.name}
                    </a>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                      <span>{school.city}, {school.state}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {school.phone}
                    {school.website && (
                      <a 
                        href={school.website} 
                        className="block text-blue-600 hover:underline text-sm"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    )}
                  </TableCell>
                  <TableCell>
                    {school.rating && (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{school.rating}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                      <span>{school.hasDropInClasses ? 'Yes' : 'No'}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {school.dropInFee ? (
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
                        <span>{school.dropInFee}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {school.styles && (
                      <div className="flex flex-wrap gap-1">
                        {school.styles.map((style, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50 text-blue-800">
                            {style}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {school.classLevels && (
                      <div className="flex flex-wrap gap-1">
                        {school.classLevels.map((level, index) => (
                          <Badge key={index} variant="outline" className="bg-green-50 text-green-800">
                            {level}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SchoolsList;
