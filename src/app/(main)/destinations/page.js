"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', name: 'All Destinations' },
    { id: 'beach', name: 'Beach' },
    { id: 'mountain', name: 'Mountain' },
    { id: 'city', name: 'City' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'luxury', name: 'Luxury' }
  ];

  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      location: "Cyclades Islands, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop",
      price: "$2,499",
      duration: "7 Days",
      season: "May - October",
      type: ["beach", "luxury", "cultural"],
      rating: 4.9,
      description: "Experience stunning sunsets and crystal-clear waters in this iconic paradise. Stay in luxury cave hotels with private infinity pools overlooking the caldera.",
      highlights: ["Sunset Views", "Luxury Stays", "Wine Tasting", "Boat Tours"]
    },
    {
      id: 2,
      name: "Swiss Alps",
      location: "Interlaken, Switzerland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      price: "$3,199",
      duration: "6 Days",
      season: "December - March",
      type: ["mountain", "adventure", "luxury"],
      rating: 4.8,
      description: "Majestic mountains and pristine landscapes for the ultimate alpine adventure. Enjoy world-class skiing, luxury mountain resorts, and breathtaking scenery.",
      highlights: ["Skiing", "Mountain Resorts", "Scenic Trains", "Luxury Spas"]
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      location: "Kanto Region, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-8ab4a6b2c3f3?w=500&h=400&fit=crop",
      price: "$2,899",
      duration: "8 Days",
      season: "March - May",
      type: ["city", "cultural", "luxury"],
      rating: 4.9,
      description: "The perfect blend of ancient tradition and cutting-edge innovation. Explore vibrant neighborhoods, Michelin-starred dining, and serene temples.",
      highlights: ["Cherry Blossoms", "Fine Dining", "Traditional Culture", "Modern Architecture"]
    },
    {
      id: 4,
      name: "Maldives",
      location: "Indian Ocean",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=400&fit=crop",
      price: "$4,299",
      duration: "5 Days",
      season: "November - April",
      type: ["beach", "luxury"],
      rating: 4.9,
      description: "Ultimate luxury in overwater bungalows with direct ocean access. Pristine white sand beaches and world-class diving experiences await.",
      highlights: ["Overwater Villas", "Snorkeling", "Private Beaches", "Spa Treatments"]
    },
    {
      id: 5,
      name: "Machu Picchu",
      location: "Cusco Region, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&h=400&fit=crop",
      price: "$2,199",
      duration: "9 Days",
      season: "April - October",
      type: ["adventure", "cultural"],
      rating: 4.7,
      description: "Journey through ancient Incan civilization and discover one of the world's most mystical archaeological sites in the Andes mountains.",
      highlights: ["Ancient Ruins", "Mountain Trekking", "Local Culture", "Historic Sites"]
    },
    {
      id: 6,
      name: "Paris, France",
      location: "Île-de-France, France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=400&fit=crop",
      price: "$2,699",
      duration: "6 Days",
      season: "April - June",
      type: ["city", "cultural", "luxury"],
      rating: 4.8,
      description: "The city of light and love, offering unparalleled art, cuisine, and romance. Stay in boutique hotels and experience Parisian luxury.",
      highlights: ["Eiffel Tower", "Fine Dining", "Art Museums", "Luxury Shopping"]
    },
    {
      id: 7,
      name: "Safari Kenya",
      location: "Maasai Mara, Kenya",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=400&fit=crop",
      price: "$3,899",
      duration: "8 Days",
      season: "July - October",
      type: ["adventure", "luxury"],
      rating: 4.9,
      description: "Witness the great migration from luxury safari lodges. Experience close encounters with Africa's magnificent wildlife in their natural habitat.",
      highlights: ["Wildlife Viewing", "Luxury Lodges", "Hot Air Balloons", "Cultural Tours"]
    },
    {
      id: 8,
      name: "Bali, Indonesia",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=400&fit=crop",
      price: "$1,899",
      duration: "7 Days",
      season: "April - October",
      type: ["beach", "cultural", "luxury"],
      rating: 4.8,
      description: "Tropical paradise with lush landscapes, ancient temples, and world-class resorts. Perfect for relaxation and cultural immersion.",
      highlights: ["Beach Clubs", "Temples", "Rice Terraces", "Wellness Retreats"]
    }
  ];

  const featuredDestinations = destinations.slice(0, 3);

  const filteredDestinations = destinations.filter(destination => {
    const matchesFilter = activeFilter === 'all' || destination.type.includes(activeFilter);
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
            Discover Your World
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl text-[#A8A8A8] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated premium destinations that redefine luxury travel. Each journey is crafted 
            with precision and attention to detail for the discerning traveler.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, locations, or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-[#1A1A1A] border border-[#4A4A4A] text-[#D6D6D6] placeholder-[#A8A8A8] focus:outline-none focus:border-[#A8A8A8] focus:shadow-lg focus:shadow-silver/10 transition-all duration-300"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A8A8A8]">
                🔍
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
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
              Featured Experiences
            </h2>
            <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto">
              Handpicked destinations offering unparalleled luxury and unique experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] shadow-lg shadow-silver/10 hover:shadow-silver/20 transition-all duration-500 group-hover:scale-105">
                  {/* Image Container */}
                  <div className="h-64 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ {destination.rating}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-black/50 text-white px-3 py-1 rounded-full">
                          {destination.price}
                        </span>
                        <span className="text-[#D6D6D6]">{destination.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#A8A8A8] text-sm">{destination.location}</span>
                      <span className="text-[#A8A8A8] text-sm">Best: {destination.season}</span>
                    </div>
                    
                    <p className="text-[#A8A8A8] mb-4 text-sm leading-relaxed">{destination.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded-lg text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-semibold hover:bg-white/5 transition-all duration-300 group">
                      <span className="flex items-center justify-center gap-2">
                        Explore Package
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

      {/* Filter & All Destinations */}
      <section className="py-16 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black shadow-lg shadow-silver/20'
                    : 'bg-[#1A1A1A] border border-[#4A4A4A] text-[#A8A8A8] hover:border-[#A8A8A8] hover:text-[#D6D6D6]'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>

          {/* All Destinations Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group-hover:scale-105">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ {destination.rating}
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white">{destination.name}</h3>
                      <p className="text-sm text-[#D6D6D6]">{destination.location}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
                        {destination.price}
                      </span>
                      <span className="text-sm text-[#A8A8A8]">{destination.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {destination.type.map((type, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded text-xs">
                          {type}
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

          {/* No Results Message */}
          {filteredDestinations.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-[#D6D6D6] mb-2">No destinations found</h3>
              <p className="text-[#A8A8A8]">Try adjusting your search or filter criteria</p>
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
            Ready for Your Next Adventure?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#A8A8A8] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let our travel experts craft your perfect journey. Experience the world the Mahi way.
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
              Download Brochure
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;