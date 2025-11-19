"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Deals', path: '/deals' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl shadow-silver/10' 
          : 'bg-black/95 backdrop-blur-md py-3 shadow-2xl shadow-silver/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer group">
                  {/* Logo emblem inspired by circular design */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] shadow-lg shadow-silver/20 border border-[#A8A8A8] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#000000] to-[#4A4A4A] border border-[#A8A8A8]"></div>
                    </div>
                    {/* Motion line effect */}
                    <div className="absolute -right-1 top-1/2 w-2 h-0.5 bg-gradient-to-r from-[#D6D6D6] to-transparent transform -translate-y-1/2 group-hover:w-4 transition-all duration-300"></div>
                  </div>
                  <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#D6D6D6]' 
                      : 'text-white'
                  }`}>
                    MAHI TRAVEL
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.path}>
                    <span className={`px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                      router.pathname === item.path
                        ? isScrolled 
                          ? 'bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black shadow-lg shadow-silver/30' 
                          : 'bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black shadow-lg shadow-silver/30'
                        : isScrolled
                        ? 'text-[#A8A8A8] hover:text-[#D6D6D6] hover:bg-black/50'
                        : 'text-[#D6D6D6] hover:text-white hover:bg-white/10'
                    }`}>
                      {item.name}
                      {/* Hover underline effect */}
                      <span className={`absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#D6D6D6] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        router.pathname === item.path ? 'scale-x-100' : ''
                      }`}></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-sm shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-3 rounded-xl focus:outline-none transition-all duration-300 group ${
                  isScrolled 
                    ? 'bg-black/50 text-[#D6D6D6] hover:bg-black/80' 
                    : 'bg-black/30 text-[#D6D6D6] hover:bg-black/50'
                }`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Animated hamburger icon */}
                <div className="w-6 h-6 relative">
                  <span className={`absolute left-0 top-1 w-6 h-0.5 transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-3 bg-[#D6D6D6]' : 'bg-[#A8A8A8] group-hover:bg-[#D6D6D6]'
                  }`}></span>
                  <span className={`absolute left-0 top-3 w-6 h-0.5 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'bg-[#A8A8A8] group-hover:bg-[#D6D6D6]'
                  }`}></span>
                  <span className={`absolute left-0 top-5 w-6 h-0.5 transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-3 bg-[#D6D6D6]' : 'bg-[#A8A8A8] group-hover:bg-[#D6D6D6]'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/95 backdrop-blur-md border-t border-[#4A4A4A] shadow-2xl">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <span className={`block px-4 py-4 rounded-xl text-base font-medium cursor-pointer transition-all duration-300 group border border-transparent hover:border-[#A8A8A8] hover:bg-black/50 ${
                  router.pathname === item.path
                    ? 'bg-gradient-to-r from-[#D6D6D6] to-[#A8A8A8] text-black shadow-inner'
                    : 'text-[#D6D6D6] hover:text-white'
                }`}>
                  <span className="flex items-center">
                    {item.name}
                    <span className="ml-2 w-2 h-2 rounded-full bg-[#A8A8A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </span>
              </Link>
            ))}
            {/* Mobile CTA Button */}
            <div className="pt-2">
              <button className="w-full px-4 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold text-base shadow-lg shadow-silver/20 active:scale-95 transition-transform duration-200">
                Book Your Trip
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add some spacing for fixed navbar */}
      <div className="h-16"></div>

      {/* Demo content with travel theme */}
      <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-[#D6D6D6]"></div>
          <div className="absolute top-40 right-20 w-1 h-1 rounded-full bg-[#A8A8A8]"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 rounded-full bg-[#4A4A4A]"></div>
          {/* Motion lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#A8A8A8] to-transparent transform -rotate-3"></div>
          <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent transform rotate-6"></div>
        </div>
        
        <div className="flex items-center justify-center h-screen relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] bg-clip-text text-transparent">
              TRAVEL SMART
            </h1>
            <p className="text-xl text-[#A8A8A8] mb-8 max-w-2xl mx-auto">
              Experience premium travel with sleek, modern design and unparalleled service
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6D6D6] via-[#A8A8A8] to-[#4A4A4A] text-black font-bold shadow-lg shadow-silver/20 hover:shadow-silver/40 hover:scale-105 transition-all duration-300">
                Explore Destinations
              </button>
              <button className="px-8 py-4 rounded-xl border border-[#A8A8A8] text-[#D6D6D6] font-bold hover:bg-white/5 hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional content to show scroll effect */}
        <div className="h-screen bg-transparent flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#D6D6D6] mb-4">Scroll down to see navbar effect</h2>
            <div className="w-6 h-10 border-2 border-[#A8A8A8] rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-[#D6D6D6] rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;