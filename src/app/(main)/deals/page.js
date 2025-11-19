
"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const DealsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filters = [
    { id: 'all', name: 'All Deals' },
    { id: 'flash', name: 'Flash Sales' },
    { id: 'early', name: 'Early Bird' },
    { id: 'lastminute', name: 'Last Minute' },
    { id: 'luxury', name: 'Luxury Packages' },
    { id: 'family', name: 'Family Deals' },
    { id: 'honeymoon', name: 'Honeymoon' }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'discount', name: 'Highest Discount' },
    { id: 'price', name: 'Price: Low to High' },
    { id: 'duration', name: 'Duration' }
  ];

  const deals = [
    {
      id: 1,
      name: "Santorini Luxury Escape",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop",
      originalPrice: "$3,299",
      discountedPrice: "$2,499",
      discount: "24% OFF",
      duration: "7 Days",
      season: "Spring 2024",
      type: ["flash", "luxury"],
      rating: 4.9,
      remaining: 8,
      description: "Limited time offer for luxury cave suites with private pools. Includes premium dining experiences and private yacht tour.",
      includes: ["Luxury Accommodation", "Private Transfers", "Gourmet Dining", "Yacht Tour"],
      expires: "2024-03-15"
    },
    {
      id: 2,
      name: "Swiss Alps Winter Wonderland",
      location: "Switzerland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      originalPrice: "$3,899",
      discountedPrice: "$2,999",
      discount: "23% OFF",
      duration: "6 Days",
      season: "Winter 2024",
      type: ["early", "luxury"],
      rating: 4.8,
      remaining: 15,
      description: "Early bird special for premium ski-in/ski-out resorts. Includes ski passes and spa treatments.",
      includes: ["Ski Passes", "Luxury Resort", "Spa Treatments", "Mountain Dining"],
      expires: "2024-04-30"
    },
    {
      id: 3,
      name: "Tokyo Cultural Immersion",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-8ab4a6b2c3f3?w=500&h=400&fit=crop",
      originalPrice: "$3,199",
      discountedPrice: "$2,399",
      discount: "25% OFF",
      duration: "8 Days",
      season: "Cherry Blossom",
      type: ["lastminute", "luxury"],
      rating: 4.9,
      remaining: 5,
      description: "Last minute deal for cherry blossom season. Includes traditional ryokan stay and cultural experiences.",
      includes: ["Ryokan Stay", "Cultural Tours", "Fine Dining", "Bullet Train"],
      expires: "2024-03-10"
    },
    {
      id: 4,
      name: "Maldives Overwater Paradise",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=400&fit=crop",
      originalPrice: "$5,299",
      discountedPrice: "$3,999",
      discount: "25% OFF",
      duration: "5 Days",
      season: "Year Round",
      type: ["flash", "luxury", "honeymoon"],
      rating: 4.9,
      remaining: 3,
      description: "Flash sale for exclusive overwater villas. Includes private butler and romantic dining experiences.",
      includes: ["Overwater Villa", "Private Butler", "Spa Credits", "Romantic Dining"],
      expires: "2024-03-08"
    },
    {
      id: 5,
      name: "Bali Family Adventure",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=400&fit=crop",
      originalPrice: "$2,899",
      discountedPrice: "$2,199",
      discount: "24% OFF",
      duration: "7 Days",
      season: "Summer 2024",
      type: ["family", "early"],
      rating: 4.7,
      remaining: 12,
      description: "Perfect family getaway with kid-friendly activities and spacious villas. Early booking discount.",
      includes: ["Family Villa", "Kids Activities", "Private Pool", "Cultural Shows"],
      expires: "2024-05-15"
    },
    {
      id: 6,
      name: "Paris Romantic Getaway",
      location: "France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=400&fit=crop",
      originalPrice: "$3,499",
      discountedPrice: "$2,699",
      discount: "23% OFF",
      duration: "6 Days",
      season: "Spring 2024",
      type: ["honeymoon", "luxury"],
      rating: 4.8,
      remaining: 10,
      description: "Romantic package including Eiffel Tower dining and luxury boutique hotel in Saint-Germain.",
      includes: ["Boutique Hotel", "Eiffel Tower Dining", "River Cruise", "Shopping Tour"],
      expires: "2024-04-20"
    },
    {
      id: 7,
      name: "Safari Kenya Expedition",
      location: "Kenya",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=400&fit=crop",
      originalPrice: "$4,899",
      discountedPrice: "$3,699",
      discount: "25% OFF",
      duration: "8 Days",
      season: "Great Migration",
      type: ["lastminute", "luxury"],
      rating: 4.9,
      remaining: 6,
      description: "Last minute availability for the great migration. Luxury tented camps and expert guides included.",
      includes: ["Luxury Tents", "Expert Guides", "Game Drives", "Hot Air Balloon"],
      expires: "2024-03-12"
    },
    {
      id: 8,
      name: "Dubai Urban Luxury",
      location: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=400&fit=crop",
      originalPrice: "$3,799",
      discountedPrice: "$2,899",
      discount: "24% OFF",
      duration: "5 Days",
      season: "Year Round",
      type: ["flash", "luxury"],
      rating: 4.8,
      remaining: 7,
      description: "Flash sale for luxury desert experience and Burj Khalifa access. Includes desert safari and fine dining.",
      includes: ["Burj Khalifa Suite", "Desert Safari", "Fine Dining", "Shopping Tour"],
      expires: "2024-03-14"
    }
  ];

  const featuredDeals = deals.slice(0, 2);

  const filteredDeals = deals.filter(deal => {
    return activeFilter === 'all' || deal.type.includes(activeFilter);
  });

  // Sort deals based on selected option
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return parseInt(b.discount) - parseInt(a.discount);
      case 'price':
        return parseInt(a.discountedPrice.replace(/[^0-9]/g, '')) - parseInt(b.discountedPrice.replace(/[^0-9]/g, ''));
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      default:
        return b.rating - a.rating;
    }
  });

  const calculateDaysLeft = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#D6D6D6] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"
              style={{
                width: Math.random() * 8 + 2,
                height: Math.random() * 8 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
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
            Exclusive Deals
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl text-[#A8A8A8] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Limited time offers and premium packages crafted for the smart traveler. 
            Save up to 25% on luxury experiences worldwide.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { number: "24%", label: "Average Savings" },
              { number: "48h", label: "Flash Sales" },
              { number: "500+", label: "Deals Booked" },
              { number: "4.8★", label: "Customer Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-black/30 border border-[#4A4A4A]">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-[#A8A8A8] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flash Sales Banner */}
      <section className="py-8 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-black mb-2">⚡ Flash Sale Ending Soon</h3>
              <p className="text-black/80">Limited spots available at up to 25% off</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-black">02</div>
                <div className="text-sm text-black/80">Days</div>
              </div>
              <div className="text-2xl text-black">:</div>
              <div className="text-center">
                <div className="text-xl font-bold text-black">14</div>
                <div className="text-sm text-black/80">Hours</div>
              </div>
              <div className="text-2xl text-black">:</div>
              <div className="text-center">
                <div className="text-xl font-bold text-black">38</div>
                <div className="text-sm text-black/80">Mins</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Deals */}
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
              Featured Offers
            </h2>
            <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto">
              Don't miss these exclusive limited-time luxury packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] shadow-lg shadow-silver/10 hover:shadow-silver/20 transition-all duration-500 group-hover:scale-105">
                  {/* Discount Ribbon */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⚡ {deal.discount}
                    </div>
                  </div>

                  {/* Remaining Counter */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                      {deal.remaining} left
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="h-64 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{deal.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-black/50 text-white px-3 py-1 rounded-full">
                          {deal.discountedPrice}
                        </span>
                        <span className="text-[#D6D6D6] line-through">{deal.originalPrice}</span>
                        <span className="text-[#D6D6D6]">{deal.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#A8A8A8] text-sm">{deal.location}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-[#D6D6D6] text-sm">{deal.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-[#A8A8A8] mb-4 text-sm leading-relaxed">{deal.description}</p>
                    
                    {/* Includes */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {deal.includes.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded-lg text-xs">
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Expiry */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[#A8A8A8]">
                        Expires in {calculateDaysLeft(deal.expires)} days
                      </span>
                      <span className="text-sm text-red-400 font-semibold">
                        Limited Time
                      </span>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold hover:shadow-lg hover:shadow-silver/20 hover:scale-105 transition-all duration-300">
                      Book Now - Save {deal.discount}
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

      {/* All Deals Section */}
      <section className="py-16 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter and Sort Bar */}
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black shadow-lg shadow-silver/20'
                      : 'bg-[#1A1A1A] border border-[#4A4A4A] text-[#A8A8A8] hover:border-[#A8A8A8] hover:text-[#D6D6D6]'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-[#A8A8A8] text-sm">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#1A1A1A] border border-[#4A4A4A] text-[#D6D6D6] rounded-xl px-4 py-2 focus:outline-none focus:border-[#A8A8A8] transition-all duration-300"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* All Deals Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {sortedDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group-hover:scale-105">
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {deal.discount}
                    </div>
                  </div>

                  {/* Remaining Counter */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {deal.remaining} left
                    </div>
                  </div>

                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white">{deal.name}</h3>
                      <p className="text-sm text-[#D6D6D6]">{deal.location}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-lg font-bold bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
                          {deal.discountedPrice}
                        </span>
                        <span className="text-sm text-[#A8A8A8] line-through ml-2">
                          {deal.originalPrice}
                        </span>
                      </div>
                      <span className="text-sm text-[#A8A8A8]">{deal.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {deal.type.map((type, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded text-xs">
                          {type}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-sm">⭐</span>
                        <span className="text-[#D6D6D6] text-sm">{deal.rating}</span>
                      </div>
                      <span className="text-xs text-red-400">
                        {calculateDaysLeft(deal.expires)} days left
                      </span>
                    </div>

                    <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black text-sm font-bold hover:scale-105 transition-all duration-300">
                      View Deal
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {sortedDeals.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-[#D6D6D6] mb-2">No deals found</h3>
              <p className="text-[#A8A8A8]">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
              Get Exclusive Deals First
            </h2>
            <p className="text-lg text-[#A8A8A8] mb-6 max-w-2xl mx-auto">
              Be the first to know about flash sales and premium offers. Subscribe to our luxury deals newsletter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-[#0D0D0D] border border-[#4A4A4A] text-[#D6D6D6] placeholder-[#A8A8A8] focus:outline-none focus:border-[#A8A8A8] transition-all duration-300"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold hover:shadow-lg hover:shadow-silver/20 hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-[#A8A8A8] mt-4">
              ✨ Early access to sales + Special member-only offers
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;