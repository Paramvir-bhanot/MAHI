"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredDestinations = [
    {
      id: 1,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-8ab4a6b2c3f3?w=500&h=400&fit=crop",
      price: "$1,299",
      duration: "7 Days",
      description: "Experience the perfect blend of traditional culture and modern innovation"
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop",
      price: "$1,599",
      duration: "5 Days",
      description: "Stunning sunsets and crystal-clear waters await in this paradise"
    },
    {
      id: 3,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      price: "$2,199",
      duration: "6 Days",
      description: "Majestic mountains and pristine landscapes for the ultimate adventure"
    }
  ];

  const services = [
    {
      icon: "✈️",
      title: "Flight Booking",
      description: "Best deals on international and domestic flights with premium airlines"
    },
    {
      icon: "🏨",
      title: "Luxury Stays",
      description: "Curated selection of 5-star hotels and exclusive resorts worldwide"
    },
    {
      icon: "🗺️",
      title: "Travel Planning",
      description: "Custom itineraries tailored to your preferences and travel style"
    },
    {
      icon: "⭐",
      title: "VIP Experience",
      description: "Premium services including airport transfers and local concierge"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Bali, Indonesia",
      text: "Mahi Travel made our honeymoon absolutely magical. Every detail was perfect!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      location: "Paris, France",
      text: "Professional service and exceptional attention to detail. Will travel with them again!",
      rating: 5
    },
    {
      name: "Emily Watson",
      location: "New York, USA",
      text: "The smart travel app revolutionized how I plan business trips. Highly recommended!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredDestinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#D6D6D6] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
        {/* Animated Background Elements */}
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

        {/* Motion Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#A8A8A8] to-transparent transform -rotate-3"></div>
          <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent transform rotate-6"></div>
        </div>

        <div className="text-center relative z-10 px-4 max-w-6xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MAHI TRAVEL
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#A8A8A8] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the world through premium, smart travel. Where luxury meets adventure, 
            and every journey is crafted to perfection.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-lg shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10">Explore Destinations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button className="px-8 py-4 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-bold text-lg hover:bg-white/5 hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center gap-2">
                Watch Showreel
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-[#A8A8A8]">Scroll to Explore</span>
              <div className="w-6 h-10 border-2 border-[#A8A8A8] rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#D6D6D6] rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
            Featured Destinations
          </h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            Discover handpicked locations that redefine luxury travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black px-3 py-1 rounded-full font-semibold">
                        {destination.price}
                      </span>
                      <span className="text-[#D6D6D6]">{destination.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#A8A8A8] mb-4">{destination.description}</p>
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
              Premium Services
            </h2>
            <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
              End-to-end travel solutions designed for the discerning traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#D6D6D6] mb-3">{service.title}</h3>
                <p className="text-[#A8A8A8] leading-relaxed">{service.description}</p>
                
                {/* Hover line effect */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] mt-4 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
            Traveler Stories
          </h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            Discover why thousands of travelers trust Mahi for their premium experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              
              <p className="text-[#A8A8A8] italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="border-t border-[#4A4A4A] pt-4">
                <h4 className="font-bold text-[#D6D6D6]">{testimonial.name}</h4>
                <p className="text-[#A8A8A8] text-sm">{testimonial.location}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#4A4A4A] to-[#000000]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Travel Smart?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#A8A8A8] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of smart travelers who trust Mahi for their premium travel experiences. 
            Your next adventure awaits.
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
              Contact Advisor
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#000000] to-[#4A4A4A] border border-[#A8A8A8]"></div>
              </div>
              <span className="text-xl font-bold text-[#D6D6D6]">MAHI TRAVEL</span>
            </div>
            
            <div className="text-[#A8A8A8] text-center md:text-right">
              <p className="text-sm">© 2024 Mahi Travel. All rights reserved.</p>
              <p className="text-sm mt-1">Travel Smart. Experience More.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;