import { SchoolFinder } from "@/components/custom/SchoolFinder";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Hero Section */}
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 md:py-32 px-4"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Yoga Sanctuary
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover the perfect yoga studio near you and begin your journey to wellness and mindfulness.
        </p>
      </div>
    </div>
    <SchoolFinder />
  </div>
  );
}
