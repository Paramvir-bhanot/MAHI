"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'destinations', name: 'Destinations' },
    { id: 'luxury', name: 'Luxury Stays' },
    { id: 'experiences', name: 'Experiences' },
    { id: 'culture', name: 'Local Culture' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'culinary', name: 'Culinary' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      category: ['destinations', 'luxury'],
      title: "Santorini Sunset",
      location: "Oia, Greece",
      description: "Breathtaking sunset views over the caldera from our premium suite",
      photographer: "Alexandra M.",
      featured: true
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: ['destinations', 'adventure'],
      title: "Swiss Alpine Majesty",
      location: "Swiss Alps, Switzerland",
      description: "Morning mist over the majestic peaks of the Swiss Alps",
      photographer: "Marcus R.",
      featured: true
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1540959733332-8ab4a6b2c3f3?w=800&h=600&fit=crop",
      category: ['destinations', 'culture'],
      title: "Tokyo Nights",
      location: "Shibuya, Japan",
      description: "The vibrant energy of Tokyo's famous crossing at night",
      photographer: "Kenji T.",
      featured: true
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      category: ['luxury', 'destinations'],
      title: "Maldives Overwater Paradise",
      location: "North Malé Atoll, Maldives",
      description: "Private overwater villa with direct ocean access",
      photographer: "Sarah L.",
      featured: false
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
      category: ['destinations', 'culture'],
      title: "Parisian Elegance",
      location: "Paris, France",
      description: "The Eiffel Tower illuminated against the evening sky",
      photographer: "Jean-Luc B.",
      featured: false
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      category: ['destinations', 'luxury'],
      title: "Bali Cliffside Retreat",
      location: "Uluwatu, Bali",
      description: "Infinity pool overlooking the Indian Ocean",
      photographer: "Maria S.",
      featured: false
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      category: ['adventure', 'experiences'],
      title: "African Safari Sunrise",
      location: "Maasai Mara, Kenya",
      description: "Hot air balloon safari over the vast savannah",
      photographer: "David K.",
      featured: false
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      category: ['destinations', 'luxury'],
      title: "Dubai Skyline",
      location: "Dubai, UAE",
      description: "The stunning modern architecture of Dubai's skyline",
      photographer: "Omar A.",
      featured: false
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
      category: ['destinations', 'culture'],
      title: "Sydney Harbor",
      location: "Sydney, Australia",
      description: "The iconic Opera House and Harbor Bridge at golden hour",
      photographer: "Emma W.",
      featured: false
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&h=600&fit=crop",
      category: ['destinations', 'adventure'],
      title: "Cape Town Majesty",
      location: "Cape Town, South Africa",
      description: "Table Mountain standing guard over the city",
      photographer: "James P.",
      featured: false
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop",
      category: ['destinations', 'culture'],
      title: "Rio Carnival",
      location: "Rio de Janeiro, Brazil",
      description: "Vibrant colors and energy of the world's biggest carnival",
      photographer: "Carlos M.",
      featured: false
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop",
      category: ['adventure', 'destinations'],
      title: "Queenstown Adventure",
      location: "Queenstown, New Zealand",
      description: "Bungee jumping over the stunning Shotover River",
      photographer: "Lisa C.",
      featured: false
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      category: ['luxury', 'experiences'],
      title: "Private Villa Pool",
      location: "Mykonos, Greece",
      description: "Exclusive private villa with infinity pool and sea views",
      photographer: "Sophia K.",
      featured: false
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop",
      category: ['culinary', 'experiences'],
      title: "Michelin Star Dining",
      location: "Tokyo, Japan",
      description: "Exquisite kaiseki meal prepared by master chefs",
      photographer: "Hiroshi Y.",
      featured: false
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      category: ['luxury', 'destinations'],
      title: "Tropical Beach Paradise",
      location: "Maldives",
      description: "Pristine white sand beach and turquoise waters",
      photographer: "Anna L.",
      featured: false
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop",
      category: ['culture', 'experiences'],
      title: "Traditional Ceremony",
      location: "Bali, Indonesia",
      description: "Local temple ceremony with traditional offerings",
      photographer: "Putu W.",
      featured: false
    }
  ];

  const featuredImages = galleryImages.filter(img => img.featured);
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category.includes(activeFilter));

  const LightboxModal = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          ✕
        </button>

        {/* Navigation Arrows */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            ‹
          </button>
        )}
        
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            ›
          </button>
        )}

        {/* Image */}
        <div className="flex-1 flex items-center justify-center bg-[#1A1A1A] rounded-t-2xl overflow-hidden">
          <motion.img
            key={image.id}
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-[70vh] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Info Panel */}
        <div className="bg-[#1A1A1A] border-t border-[#4A4A4A] p-6 rounded-b-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#D6D6D6] mb-2">{image.title}</h2>
              <p className="text-lg text-[#A8A8A8] mb-4">{image.location}</p>
              <p className="text-[#A8A8A8] leading-relaxed">{image.description}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-[#A8A8A8] mb-2">Photographer</h3>
                <p className="text-[#D6D6D6] font-semibold">{image.photographer}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-[#A8A8A8] mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {image.category.map((cat, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold hover:shadow-lg hover:shadow-silver/20 hover:scale-105 transition-all duration-300">
                Visit This Destination
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const openLightbox = (image) => {
    const index = galleryImages.findIndex(img => img.id === image.id);
    setLightboxIndex(index);
    setSelectedImage(image);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (lightboxIndex + 1) % galleryImages.length;
    } else {
      newIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setLightboxIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
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
            Visual Journeys
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl text-[#A8A8A8] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Immerse yourself in stunning visuals from our premium travel experiences. 
            Each image tells a story of luxury, adventure, and unforgettable moments.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { number: "16K+", label: "Premium Photos" },
              { number: "50+", label: "Countries" },
              { number: "100+", label: "Professional Photographers" },
              { number: "4.9★", label: "Client Rating" }
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

      {/* Featured Gallery */}
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
              Featured Moments
            </h2>
            <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto">
              Handpicked images showcasing the pinnacle of luxury travel experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] shadow-lg shadow-silver/10 hover:shadow-silver/20 transition-all duration-500 group-hover:scale-105">
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Featured
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                        <p className="text-sm text-[#D6D6D6]">{image.location}</p>
                      </div>
                    </div>

                    {/* View Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white">
                        👁️
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
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

          {/* Masonry Grid */}
          <motion.div 
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="break-inside-avoid group cursor-pointer relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group-hover:scale-105">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                        <p className="text-sm text-[#D6D6D6]">{image.location}</p>
                      </div>
                    </div>

                    {/* View Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white text-sm">
                        👁️
                      </div>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {image.category.slice(0, 2).map((cat, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#4A4A4A] text-[#D6D6D6] rounded text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-[#D6D6D6] mb-2">No images found</h3>
              <p className="text-[#A8A8A8]">Try selecting a different category</p>
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
            Create Your Own Story
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#A8A8A8] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let us help you create unforgettable memories and capture stunning moments 
            in the world's most beautiful destinations.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-lg shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="px-8 py-4 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-bold text-lg hover:bg-white/5 transition-all duration-300">
              View All Destinations
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => navigateLightbox('next')}
          onPrev={() => navigateLightbox('prev')}
          hasNext={lightboxIndex < galleryImages.length - 1}
          hasPrev={lightboxIndex > 0}
        />
      )}
    </div>
  );
};

export default GalleryPage;