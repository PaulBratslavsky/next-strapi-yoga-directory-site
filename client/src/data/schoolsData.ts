import type { School } from '../types';

export const schools: School[] = [
  {
    id: "1",
    name: "Zen Yoga Center",
    address: "1234 Main St",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    phone: "(555) 123-4567",
    website: "https://zenyogacenter.com",
    email: "info@zenyogacenter.com",
    description: "A peaceful sanctuary offering traditional yoga practices in a modern setting.",
    imageUrl: "https://placehold.co/400x300/4A5568/white?text=Zen+Yoga",
    rating: 4.8,
    styles: ["Hatha", "Vinyasa", "Meditation"],
    instructors: ["Sarah Chen", "Michael Patel"],
    schedule: "Mon-Fri: 6AM-9PM, Sat: 8AM-5PM, Sun: 9AM-4PM",
    hasDropInClasses: true,
    dropInFee: "$25",
    amenities: ["Changing Rooms", "Showers", "Yoga Props", "Tea Room", "Retail Shop"],
    classLevels: ["Beginner", "Intermediate", "Advanced"],
    parking: "Street parking available"
  },
  {
    id: "2",
    name: "Flow Yoga Studio",
    address: "5678 Hollywood Blvd",
    city: "Hollywood",
    state: "CA",
    zip: "90028",
    phone: "(555) 987-6543",
    website: "https://flowyoga.com",
    email: "info@flowyoga.com",
    description: "Contemporary yoga studio focusing on fluid movement and breath work.",
    imageUrl: "https://placehold.co/400x300/4A5568/white?text=Flow+Yoga",
    rating: 4.7,
    styles: ["Vinyasa", "Power Yoga", "Yin"],
    instructors: ["Emma Rodriguez", "David Kim"],
    schedule: "Mon-Thu: 6AM-9PM, Fri-Sat: 7AM-8PM, Sun: 8AM-6PM",
    hasDropInClasses: true,
    dropInFee: "$20",
    amenities: ["Changing Rooms", "Yoga Props", "Water Station", "Retail Shop"],
    classLevels: ["All Levels", "Intermediate", "Advanced"],
    parking: "Parking garage available"
  },
  {
    id: "3",
    name: "Tranquility Yoga",
    address: "910 Oak St",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    phone: "(555) 456-7890",
    website: "https://tranquilityyoga.com",
    email: "info@tranquilityyoga.com",
    description: "Holistic wellness center offering various yoga styles and meditation classes.",
    imageUrl: "https://placehold.co/400x300/4A5568/white?text=Tranquility",
    rating: 4.5,
    styles: ["Restorative", "Kundalini", "Meditation"],
    instructors: ["Lisa Thompson", "James Wilson"],
    schedule: "Mon-Fri: 7AM-8PM, Sat: 8AM-5PM, Sun: 9AM-4PM",
    hasDropInClasses: false,
    dropInFee: undefined,
    amenities: ["Changing Rooms", "Showers", "Yoga Props", "Meditation Room", "Tea Room"],
    classLevels: ["Beginner", "All Levels"],
    parking: "Street parking available"
  },
  {
    id: "4",
    name: "Urban Yoga Space",
    address: "321 Pine St",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(555) 234-5678",
    website: "https://urbanyogaspace.com",
    email: "info@urbanyogaspace.com",
    description: "Modern yoga studio in the heart of Manhattan, offering diverse yoga styles.",
    imageUrl: "https://placehold.co/400x300/4A5568/white?text=Urban+Yoga",
    rating: 4.6,
    styles: ["Ashtanga", "Hot Yoga", "Prenatal"],
    instructors: ["Maria Garcia", "Alex Johnson"],
    schedule: "Mon-Sun: 6AM-10PM",
    hasDropInClasses: true,
    dropInFee: "$30",
    amenities: ["Changing Rooms", "Showers", "Yoga Props", "Retail Shop", "Cafe"],
    classLevels: ["All Levels", "Intermediate", "Advanced"],
    parking: "Nearby parking garage"
  },
  {
    id: "5",
    name: "Desert Yoga Oasis",
    address: "789 Washington Ave",
    city: "Phoenix",
    state: "AZ",
    zip: "85001",
    phone: "(555) 876-5432",
    website: "https://desertyogaoasis.com",
    email: "info@desertyogaoasis.com",
    description: "Peaceful retreat center offering traditional and modern yoga practices.",
    imageUrl: "https://placehold.co/400x300/4A5568/white?text=Desert+Yoga",
    rating: 4.9,
    styles: ["Iyengar", "Vinyasa", "Meditation"],
    instructors: ["Priya Sharma", "Tom Anderson"],
    schedule: "Mon-Sun: 6AM-9PM",
    hasDropInClasses: true,
    dropInFee: "$22",
    amenities: ["Changing Rooms", "Showers", "Yoga Props", "Garden", "Tea Room"],
    classLevels: ["Beginner", "All Levels", "Advanced"],
    parking: "Free parking lot"
  },
  {
    id: "6",
    name: "Harmony Yoga Studio",
    address: "456 River Rd",
    city: "Austin",
    state: "TX",
    zip: "78701",
    phone: "(555) 345-6789",
    website: "https://harmonyyoga.com",
    email: "contact@harmonyyoga.com",
    description: "Inclusive yoga studio welcoming practitioners of all levels and abilities.",
    imageUrl: "https://placehold.co/400x300/4A5568/white?text=Harmony+Yoga",
    rating: 4.7,
    styles: ["Hatha", "Yin", "Kids Yoga"],
    instructors: ["Rachel Green", "Carlos Mendez"],
    schedule: "Mon-Fri: 6:30AM-9PM, Sat: 8AM-6PM, Sun: 9AM-5PM",
    hasDropInClasses: false,
    dropInFee: "$18",
    amenities: ["Changing Rooms", "Yoga Props", "Water Station", "Retail Shop"],
    classLevels: ["Beginner", "All Levels"],
    parking: "Street parking available"
  }
];

export const filterSchools = (query: string, searchType: 'location' | 'name'): School[] => {
  const normalizedQuery = query.trim().toLowerCase();
  
  if (!normalizedQuery) {
    return schools;
  }

  return schools.filter(school => {
    if (searchType === 'name') {
      return school.name.toLowerCase().includes(normalizedQuery);
    } else {
      // Location search (zip, city, or state)
      return (
        school.zip.includes(normalizedQuery) ||
        school.city.toLowerCase().includes(normalizedQuery) ||
        school.state.toLowerCase().includes(normalizedQuery)
      );
    }
  });
};
