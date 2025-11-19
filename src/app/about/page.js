"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  const stats = [
    { number: "50K+", label: "Happy Travelers", description: "Served across 100+ countries" },
    { number: "15+", label: "Years Experience", description: "In luxury travel planning" },
    { number: "500+", label: "Global Partners", description: "Premium hotels & airlines" },
    { number: "24/7", label: "Support", description: "Dedicated travel concierge" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Precision Planning",
      description: "Every itinerary is meticulously crafted with attention to the smallest details, ensuring seamless travel experiences from start to finish."
    },
    {
      icon: "💎",
      title: "Luxury Standard",
      description: "We partner only with the world's finest establishments to deliver exceptional quality and uncompromising service excellence."
    },
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology to provide smart travel solutions that anticipate and exceed modern traveler expectations."
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication, clear pricing, and reliable service you can count on."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      description: "Former luxury hotel director with 20+ years in premium travel"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Travel Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in crafting bespoke itineraries for discerning travelers"
    },
    {
      name: "Emily Watson",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Pioneering smart travel solutions and digital innovation"
    },
    {
      name: "David Kim",
      role: "Global Partnerships",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Cultivating relationships with world-class travel partners"
    }
  ];

  const milestones = [
    { year: "2009", event: "Mahi Travel Founded", description: "Started with a vision to revolutionize luxury travel" },
    { year: "2012", event: "Global Expansion", description: "Expanded operations to Europe and Asia markets" },
    { year: "2016", event: "Tech Platform Launch", description: "Introduced proprietary travel planning technology" },
    { year: "2020", event: "Premium Partner Network", description: "Estished 500+ premium global partnerships" },
    { year: "2024", event: "Smart Travel Initiative", description: "Launched AI-powered personalized travel experiences" }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#D6D6D6] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] bg-clip-text text-transparent">
                Our Story
              </h1>
              <p className="text-xl lg:text-2xl text-[#A8A8A8] mb-8 leading-relaxed">
                For over 15 years, Mahi Travel has been redefining luxury travel through 
                <span className="text-[#D6D6D6] font-semibold"> precision, innovation, and uncompromising excellence</span>. 
                We believe every journey should be extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-lg shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300">
                  Meet Our Team
                </button>
                <button className="px-8 py-4 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-bold text-lg hover:bg-white/5 transition-all duration-300">
                  View Our Journey
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#4A4A4A] shadow-2xl shadow-silver/10">
                <div className="aspect-square bg-gradient-to-br from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0D0D0D] to-[#4A4A4A] border-4 border-[#A8A8A8] mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl">✈️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">Travel Smart</h3>
                    <p className="text-black/80 text-lg">Since 2009</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-[#4A4A4A] to-[#000000] shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-[#D6D6D6] mb-2">{stat.label}</div>
                <div className="text-sm text-[#A8A8A8]">{stat.description}</div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
              Our Philosophy
            </h2>
            <p className="text-xl text-[#A8A8A8] max-w-4xl mx-auto leading-relaxed">
              At Mahi Travel, we believe that luxury travel should be seamless, personalized, 
              and transformative. Our mission is to craft journeys that not only meet but exceed 
              expectations, creating memories that last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#D6D6D6] mb-4">{value.title}</h3>
                <p className="text-[#A8A8A8] leading-relaxed">{value.description}</p>
                
                {/* Hover line effect */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] mt-4 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
              Meet the passionate experts dedicated to crafting your perfect journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] p-1 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-[#0D0D0D] overflow-hidden border-2 border-[#4A4A4A]">
                      <div className="w-full h-full bg-gradient-to-br from-[#D6D6D6] to-[#4A4A4A] flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                </div>
                
                <h3 className="text-xl font-bold text-[#D6D6D6] mb-2">{member.name}</h3>
                <div className="text-[#A8A8A8] font-semibold mb-3">{member.role}</div>
                <p className="text-sm text-[#A8A8A8] leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
              Milestones in our pursuit of travel excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A]"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] hover:border-[#A8A8A8] transition-all duration-500 group">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] bg-clip-text text-transparent mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#D6D6D6] mb-2">{milestone.event}</h3>
                    <p className="text-[#A8A8A8]">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] border-2 border-[#0D0D0D] z-10"></div>
              </motion.div>
            ))}
          </div>
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
            Ready to Travel Smart?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#A8A8A8] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the thousands of discerning travelers who trust Mahi for their premium travel experiences.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-lg shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
            </Link>
            <Link href="/destinations">
              <button className="px-8 py-4 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-bold text-lg hover:bg-white/5 transition-all duration-300">
                Explore Destinations
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;