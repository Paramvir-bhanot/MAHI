"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Destinations",
      links: [
        { name: "Europe", href: "/destinations/europe" },
        { name: "Asia", href: "/destinations/asia" },
        { name: "North America", href: "/destinations/north-america" },
        { name: "South America", href: "/destinations/south-america" },
        { name: "Africa", href: "/destinations/africa" },
        { name: "Oceania", href: "/destinations/oceania" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Flight Booking", href: "/services/flights" },
        { name: "Hotel Reservations", href: "/services/hotels" },
        { name: "Travel Insurance", href: "/services/insurance" },
        { name: "Visa Assistance", href: "/services/visa" },
        { name: "Custom Packages", href: "/services/custom" },
        { name: "Corporate Travel", href: "/services/corporate" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Travel Advisory", href: "/advisory" },
        { name: "Safety Measures", href: "/safety" },
        { name: "Payment Methods", href: "/payment" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📱",
      href: "https://instagram.com/mahitravel",
      color: "hover:text-pink-400"
    },
    {
      name: "Twitter",
      icon: "🐦",
      href: "https://twitter.com/mahitravel",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "https://linkedin.com/company/mahitravel",
      color: "hover:text-blue-300"
    },
    {
      name: "YouTube",
      icon: "🎥",
      href: "https://youtube.com/mahitravel",
      color: "hover:text-red-400"
    }
  ];

  const contactInfo = [
    {
      icon: "📞",
      detail: "+1 (555) 123-MAHI",
      href: "tel:+15551236244"
    },
    {
      icon: "✉️",
      detail: "hello@mahitravel.com",
      href: "mailto:hello@mahitravel.com"
    },
    {
      icon: "📍",
      detail: "Global Headquarters • New York, NY",
      href: "#"
    }
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#4A4A4A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* Motion Lines */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#A8A8A8] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent"></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 border-b border-[#4A4A4A]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] shadow-lg shadow-silver/20 border border-[#A8A8A8] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#000000] to-[#4A4A4A] border border-[#A8A8A8]"></div>
                  </div>
                  {/* Motion line effect */}
                  <div className="absolute -right-2 top-1/2 w-3 h-0.5 bg-gradient-to-r from-[#D6D6D6] to-transparent transform -translate-y-1/2"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#D6D6D6]">MAHI TRAVEL</h3>
                  <p className="text-[#A8A8A8] text-sm mt-1">Travel Smart. Experience More.</p>
                </div>
              </motion.div>

              <motion.p 
                className="text-[#A8A8A8] leading-relaxed max-w-md text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Experience the world through premium, smart travel. Where luxury meets adventure, 
                and every journey is crafted to perfection with unparalleled attention to detail.
              </motion.p>

              {/* Contact Info */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-[#A8A8A8] hover:text-[#D6D6D6] transition-colors duration-300 group"
                  >
                    <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {contact.detail}
                    </span>
                  </a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#4A4A4A] flex items-center justify-center text-[#A8A8A8] ${social.color} hover:scale-110 hover:border-[#A8A8A8] transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Links Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {footerSections.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-4">
                  <h4 className="font-bold text-[#D6D6D6] text-lg tracking-wide">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <Link href={link.href}>
                          <span className="text-[#A8A8A8] hover:text-[#D6D6D6] text-sm transition-all duration-300 hover:translate-x-1 block py-1 group cursor-pointer">
                            <span className="flex items-center">
                              {link.name}
                              <span className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                →
                              </span>
                            </span>
                            <div className="w-0 h-0.5 bg-gradient-to-r from-[#D6D6D6] to-transparent group-hover:w-full transition-all duration-300 mt-1"></div>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div 
              className="text-[#A8A8A8] text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>© {currentYear} Mahi Travel. All rights reserved.</p>
              <p className="mt-1 text-xs opacity-80">Crafted with precision for the modern traveler.</p>
            </motion.div>

            {/* Additional Links */}
            <motion.div 
              className="flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/terms">
                <span className="text-[#A8A8A8] hover:text-[#D6D6D6] transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/privacy">
                <span className="text-[#A8A8A8] hover:text-[#D6D6D6] transition-colors duration-300 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/cookies">
                <span className="text-[#A8A8A8] hover:text-[#D6D6D6] transition-colors duration-300 cursor-pointer">
                  Cookie Policy
                </span>
              </Link>
              <Link href="/sitemap">
                <span className="text-[#A8A8A8] hover:text-[#D6D6D6] transition-colors duration-300 cursor-pointer">
                  Sitemap
                </span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-xs text-[#A8A8A8]">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"></div>
                <span>SSL Secured</span>
              </div>
              <div className="w-0.5 h-4 bg-[#4A4A4A]"></div>
              <div className="flex items-center space-x-2 text-xs text-[#A8A8A8]">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8]"></div>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] opacity-20"></div>
    </footer>
  );
};

export default Footer;