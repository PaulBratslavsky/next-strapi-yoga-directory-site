import React from 'react';
import type { School } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Star, DollarSign, Calendar, ParkingCircle } from 'lucide-react';
import Link from 'next/link';

interface SchoolCardProps {
  school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/school/${school.id}`}>
        <div className="h-48 bg-gray-800 relative overflow-hidden">
          {school.imageUrl ? (
            <img 
              src={school.imageUrl} 
              alt={school.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white text-xl font-bold">
              {school.name}
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <a href={`/school/${school.id}`} className="hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-bold mb-2">{school.name}</h3>
        </a>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{school.address}, {school.city}, {school.state} {school.zip}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Phone className="h-4 w-4 mr-1" />
          <span>{school.phone}</span>
        </div>
        
        {school.rating && (
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(school.rating || 0)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium">{school.rating}</span>
          </div>
        )}
        
        {/* Class Information */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-blue-600" />
            <span className="text-sm">
              Drop-in Classes: {school.hasDropInClasses ? 'Available' : 'Not Available'}
            </span>
          </div>
          
          {school.dropInFee && (
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-sm">Drop-in Fee: {school.dropInFee}</span>
            </div>
          )}

          {school.parking && (
            <div className="flex items-center">
              <ParkingCircle className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-sm">{school.parking}</span>
            </div>
          )}
        </div>
        
        {/* Class Levels */}
        {school.classLevels && (
          <div className="mb-3">
            <div className="text-sm font-medium text-gray-700 mb-1">Class Levels:</div>
            <div className="flex flex-wrap gap-1">
              {school.classLevels.map((level, index) => (
                <Badge key={index} variant="outline" className="bg-green-50 text-green-800">
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SchoolCard;
