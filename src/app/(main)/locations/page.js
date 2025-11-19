"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const LocationsPage = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'north-america', name: 'North America' },
    { id: 'south-america', name: 'South America' },
    { id: 'africa', name: 'Africa' },
    { id: 'oceania', name: 'Oceania' },
    { id: 'middle-east', name: 'Middle East' }
  ];

  const locations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      region: "europe",
      coordinates: { lat: 36.3932, lng: 25.4615 },
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop",
      description: "Iconic white-washed buildings and stunning caldera views in the Aegean Sea",
      bestTime: "Apr - Oct",
      experiences: ["Sunset Views", "Wine Tasting", "Luxury Stays", "Boat Tours"],
      temperature: "15°C - 30°C",
      rating: 4.9,
      featured: true,
      airports: ["JTR - Santorini Airport"],
      travelTime: "4-6 hours from major European hubs"
    },
    {
      id: 2,
      name: "Tokyo",
      country: "Japan",
      region: "asia",
      coordinates: { lat: 35.6762, lng: 139.6503 },
      image: "https://images.unsplash.com/photo-1540959733332-8ab4a6b2c3f3?w=500&h=400&fit=crop",
      description: "A vibrant metropolis blending ancient traditions with cutting-edge technology",
      bestTime: "Mar - May, Sep - Nov",
      experiences: ["Cherry Blossoms", "Fine Dining", "Traditional Culture", "Modern Architecture"],
      temperature: "5°C - 30°C",
      rating: 4.9,
      featured: true,
      airports: ["HND - Haneda", "NRT - Narita"],
      travelTime: "12-14 hours from US West Coast"
    },
    {
      id: 3,
      name: "Swiss Alps",
      country: "Switzerland",
      region: "europe",
      coordinates: { lat: 46.8182, lng: 8.2275 },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      description: "Majestic mountain landscapes with world-class skiing and luxury resorts",
      bestTime: "Dec - Mar (Ski), Jun - Sep (Hike)",
      experiences: ["Skiing", "Mountain Resorts", "Scenic Trains", "Luxury Spas"],
      temperature: "-5°C - 20°C",
      rating: 4.8,
      featured: true,
      airports: ["ZRH - Zurich", "GVA - Geneva"],
      travelTime: "8-10 hours from East Coast US"
    },
    {
      id: 4,
      name: "Maldives",
      country: "Maldives",
      region: "asia",
      coordinates: { lat: 3.2028, lng: 73.2207 },
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=400&fit=crop",
      description: "Pristine atolls with overwater bungalows and crystal-clear turquoise waters",
      bestTime: "Nov - Apr",
      experiences: ["Overwater Villas", "Snorkeling", "Private Beaches", "Spa Treatments"],
      temperature: "26°C - 31°C",
      rating: 4.9,
      featured: false,
      airports: ["MLE - Velana International"],
      travelTime: "18-24 hours from Americas"
    },
    {
      id: 5,
      name: "Paris",
      country: "France",
      region: "europe",
      coordinates: { lat: 48.8566, lng: 2.3522 },
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=400&fit=crop",
      description: "The city of light offering unparalleled art, cuisine, and romantic ambiance",
      bestTime: "Apr - Jun, Sep - Oct",
      experiences: ["Eiffel Tower", "Fine Dining", "Art Museums", "Luxury Shopping"],
      temperature: "3°C - 25°C",
      rating: 4.8,
      featured: false,
      airports: ["CDG - Charles de Gaulle", "ORY - Orly"],
      travelTime: "7-9 hours from East Coast US"
    },
    {
      id: 6,
      name: "Bali",
      country: "Indonesia",
      region: "asia",
      coordinates: { lat: -8.4095, lng: 115.1889 },
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=400&fit=crop",
      description: "Tropical paradise with lush landscapes, ancient temples, and vibrant culture",
      bestTime: "Apr - Oct",
      experiences: ["Beach Clubs", "Temples", "Rice Terraces", "Wellness Retreats"],
      temperature: "24°C - 31°C",
      rating: 4.8,
      featured: false,
      airports: ["DPS - Denpasar"],
      travelTime: "20-24 hours from Americas"
    },
    {
      id: 7,
      name: "New York",
      country: "USA",
      region: "north-america",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400&fit=crop",
      description: "The concrete jungle where dreams are made - iconic skyline and endless energy",
      bestTime: "Apr - Jun, Sep - Nov",
      experiences: ["Broadway Shows", "Fine Dining", "Museums", "Shopping"],
      temperature: "-2°C - 29°C",
      rating: 4.7,
      featured: false,
      airports: ["JFK - Kennedy", "LGA - LaGuardia"],
      travelTime: "Domestic & International hub"
    },
    {
      id: 8,
      name: "Dubai",
      country: "UAE",
      region: "middle-east",
      coordinates: { lat: 25.2048, lng: 55.2708 },
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=400&fit=crop",
      description: "Ultra-modern architecture meets traditional markets in the desert oasis",
      bestTime: "Nov - Mar",
      experiences: ["Burj Khalifa", "Desert Safari", "Luxury Shopping", "Fine Dining"],
      temperature: "15°C - 41°C",
      rating: 4.8,
      featured: false,
      airports: ["DXB - Dubai International"],
      travelTime: "12-14 hours from East Coast US"
    },
    {
      id: 9,
      name: "Sydney",
      country: "Australia",
      region: "oceania",
      coordinates: { lat: -33.8688, lng: 151.2093 },
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&h=400&fit=crop",
      description: "Stunning harbor city with iconic opera house and vibrant coastal lifestyle",
      bestTime: "Sep - Nov, Mar - May",
      experiences: ["Opera House", "Bondi Beach", "Harbor Cruises", "Wine Regions"],
      temperature: "8°C - 26°C",
      rating: 4.7,
      featured: false,
      airports: ["SYD - Kingsford Smith"],
      travelTime: "20-24 hours from Americas"
    },
    {
      id: 10,
      name: "Cape Town",
      country: "South Africa",
      region: "africa",
      coordinates: { lat: -33.9249, lng: 18.4241 },
      image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=500&h=400&fit=crop",
      description: "Breathtaking coastal city with Table Mountain and world-class vineyards",
      bestTime: "Mar - May, Sep - Nov",
      experiences: ["Table Mountain", "Wine Tours", "Penguin Colonies", "Coastal Drives"],
      temperature: "7°C - 27°C",
      rating: 4.8,
      featured: false,
      airports: ["CPT - Cape Town International"],
      travelTime: "15-18 hours from Europe"
    },
    {
      id: 11,
      name: "Rio de Janeiro",
      country: "Brazil",
      region: "south-america",
      coordinates: { lat: -22.9068, lng: -43.1729 },
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&h=400&fit=crop",
      description: "Vibrant city famous for Carnival, samba, and stunning natural landscapes",
      bestTime: "Dec - Mar",
      experiences: ["Christ the Redeemer", "Copacabana Beach", "Samba Clubs", "Rainforest"],
      temperature: "18°C - 30°C",
      rating: 4.7,
      featured: false,
      airports: ["GIG - Galeão"],
      travelTime: "9-11 hours from East Coast US"
    },
    {
      id: 12,
      name: "Queenstown",
      country: "New Zealand",
      region: "oceania",
      coordinates: { lat: -45.0312, lng: 168.6626 },
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&h=400&fit=crop",
      description: "Adventure capital surrounded by dramatic Southern Alps and crystal lakes",
      bestTime: "Dec - Feb (Summer), Jun - Aug (Winter)",
      experiences: ["Bungee Jumping", "Skiing", "Wine Tasting", "Scenic Flights"],
      temperature: "-1°C - 22°C",
      rating: 4.8,
      featured: false,
      airports: ["ZQN - Queenstown"],
      travelTime: "20-26 hours from Americas"
    }
  ];

  const featuredLocations = locations.filter(location => location.featured);
  const filteredLocations = activeRegion === 'all' 
    ? locations 
    : locations.filter(location => location.region === activeRegion);

  const LocationDetailModal = ({ location, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1A1A1A] rounded-2xl border border-[#4A4A4A] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          {/* Header Image */}
          <div className="h-64 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative rounded-t-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-3xl font-bold text-white">{location.name}</h2>
              <p className="text-xl text-[#D6D6D6]">{location.country}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <p className="text-[#A8A8A8] text-lg mb-6 leading-relaxed">{location.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#4A4A4A]">
                    <div className="text-sm text-[#A8A8A8] mb-1">Best Time to Visit</div>
                    <div className="text-[#D6D6D6] font-semibold">{location.bestTime}</div>
                  </div>
                  <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#4A4A4A]">
                    <div className="text-sm text-[#A8A8A8] mb-1">Average Temperature</div>
                    <div className="text-[#D6D6D6] font-semibold">{location.temperature}</div>
                  </div>
                  <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#4A4A4A]">
                    <div className="text-sm text-[#A8A8A8] mb-1">Travel Time</div>
                    <div className="text-[#D6D6D6] font-semibold">{location.travelTime}</div>
                  </div>
                  <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#4A4A4A]">
                    <div className="text-sm text-[#A8A8A8] mb-1">Rating</div>
                    <div className="text-[#D6D6D6] font-semibold">⭐ {location.rating}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#D6D6D6] mb-3">Key Experiences</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.experiences.map((experience, index) => (
                      <span key={index} className="px-3 py-2 bg-[#4A4A4A] text-[#D6D6D6] rounded-lg text-sm">
                        {experience}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#4A4A4A]">
                  <h3 className="text-lg font-bold text-[#D6D6D6] mb-3">Airports</h3>
                  <p className="text-[#A8A8A8] text-sm">{location.airports.join(', ')}</p>
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold hover:shadow-lg hover:shadow-silver/20 hover:scale-105 transition-all duration-300">
                  Explore Packages
                </button>
                
                <button className="w-full py-3 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-semibold hover:bg-white/5 transition-all duration-300">
                  Download Travel Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#D6D6D6] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Global Destinations
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl text-[#A8A8A8] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our curated collection of premium destinations across all seven continents. 
            Each location offers unique experiences crafted for the discerning traveler.
          </motion.p>

          {/* View Toggle */}
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black shadow-lg shadow-silver/20'
                  : 'bg-[#1A1A1A] border border-[#4A4A4A] text-[#A8A8A8] hover:border-[#A8A8A8] hover:text-[#D6D6D6]'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                viewMode === 'map'
                  ? 'bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black shadow-lg shadow-silver/20'
                  : 'bg-[#1A1A1A] border border-[#4A4A4A] text-[#A8A8A8] hover:border-[#A8A8A8] hover:text-[#D6D6D6]'
              }`}
            >
              Map View
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
              Featured Destinations
            </h2>
            <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto">
              Our most sought-after locations offering unparalleled luxury experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredLocations.map((location, index) => (
              <motion.div
                key={location.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] shadow-lg shadow-silver/10 hover:shadow-silver/20 transition-all duration-500 group-hover:scale-105">
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Featured
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      ⭐ {location.rating}
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="h-64 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-black/50 text-white px-3 py-1 rounded-full">
                          {location.country}
                        </span>
                        <span className="text-[#D6D6D6]">{location.bestTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#A8A8A8] mb-4 text-sm leading-relaxed">{location.description}</p>
                    
                    {/* Experiences */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.experiences.slice(0, 3).map((experience, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded-lg text-xs">
                          {experience}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-semibold hover:bg-white/5 transition-all duration-300 group">
                      <span className="flex items-center justify-center gap-2">
                        Explore Destination
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Locations Section */}
      <section className="py-16 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Region Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeRegion === region.id
                    ? 'bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black shadow-lg shadow-silver/20'
                    : 'bg-[#1A1A1A] border border-[#4A4A4A] text-[#A8A8A8] hover:border-[#A8A8A8] hover:text-[#D6D6D6]'
                }`}
              >
                {region.name}
              </button>
            ))}
          </motion.div>

          {/* Locations Grid */}
          {viewMode === 'grid' ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group-hover:scale-105">
                    {/* Rating */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                        ⭐ {location.rating}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white">{location.name}</h3>
                        <p className="text-sm text-[#D6D6D6]">{location.country}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-[#A8A8A8]">{location.region}</span>
                        <span className="text-sm text-[#A8A8A8]">{location.bestTime}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {location.experiences.slice(0, 2).map((experience, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded text-xs">
                            {experience}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-2 rounded-xl border border-[#4A4A4A] text-[#A8A8A8] text-sm font-semibold hover:border-[#A8A8A8] hover:text-[#D6D6D6] transition-all duration-300 group">
                        <span className="flex items-center justify-center gap-1">
                          View Details
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                      </button>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Map View Placeholder */
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-[#D6D6D6] mb-2">Interactive Map</h3>
                <p className="text-[#A8A8A8]">Explore our destinations on an interactive world map</p>
                <button className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold hover:scale-105 transition-all duration-300">
                  Launch Map
                </button>
              </div>
            </motion.div>
          )}

          {/* No Results Message */}
          {filteredLocations.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-[#D6D6D6] mb-2">No locations found</h3>
              <p className="text-[#A8A8A8]">Try selecting a different region</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#4A4A4A] to-[#000000]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need Help Choosing?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#A8A8A8] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our travel experts will help you find the perfect destination based on your preferences and travel style.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-lg shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300">
              Consult an Expert
            </button>
            <button className="px-8 py-4 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-bold text-lg hover:bg-white/5 transition-all duration-300">
              Download Destination Guide
            </button>
          </motion.div>
        </div>
      </section>

      {/* Location Detail Modal */}
      {selectedLocation && (
        <LocationDetailModal 
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
};

export default LocationsPage;