import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/images/logos/logo.png';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [desktopSearchQuery, setDesktopSearchQuery] = useState('');
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setShowSearch(false);
  }, [location]);

  // Show back to top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Throttle function for scroll performance
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when mobile menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    // Focus search input when opened
    if (!showSearch) {
      setTimeout(() => {
        if (searchRef.current) {
          const input = searchRef.current.querySelector('input');
          if (input) input.focus();
        }
      }, 100);
    }
  };

  const handleSearchSubmit = (query, isMobile = false) => {
    if (query.trim()) {
      console.log('Searching for:', query);
      // Add your search logic here
      if (isMobile) {
        setMobileSearchQuery('');
      } else {
        setDesktopSearchQuery('');
        setShowSearch(false);
      }
    }
  };

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle hash navigation
  const handleHashNavigation = (e, hash) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        handleMobileLinkClick();
      }
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://tlchomes.co.ke/" />
      </Helmet>
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 transition-shadow duration-200">
        <div className="w-full">
          {/* Secondary Menu (Desktop Only) */}
          <nav className="hidden lg:block bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="flex justify-between items-center py-3">
                <div className="flex space-x-8">
                  <NavLink 
                    to="/nyumbanistays" 
                    className="text-gray-600 hover:text-black transition-all duration-200 text-sm relative group"
                  >
                    NyumbaniStays
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                  <NavLink 
                    to="/smart-homes" 
                    className="text-gray-600 hover:text-black transition-all duration-200 text-sm relative group"
                  >
                    Smart Homes
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                  <NavLink 
                    to="/" 
                    className="text-gray-600 hover:text-black transition-all duration-200 text-sm relative group"
                  >
                    Our Company
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                  <NavLink 
                    to="/#ventures-section" 
                    className="text-gray-600 hover:text-black transition-all duration-200 text-sm relative group"
                    onClick={(e) => handleHashNavigation(e, 'ventures-section')}
                  >
                    All Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                </div>
                <NavLink 
                  to="/local-websites" 
                  className="text-gray-600 hover:text-black transition-all duration-200 text-sm relative group"
                >
                  Local Websites
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                </NavLink>
              </div>
            </div>
          </nav>

          {/* Main Navigation */}
          <nav className="hidden lg:block bg-white">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="flex items-center justify-between py-4">
                <Link to="/" className="flex items-center mr-12 group">
                  <img
                    src={logo}
                    alt="TLC Homes Kenya Logo"
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center space-x-8 flex-1">
                  {/* About Us Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter('about')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center text-gray-800 hover:text-black font-medium transition-all duration-200 group hover:text-[#004f33]">
                      About
                      <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Services Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter('services')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center text-gray-800 hover:text-black font-medium transition-all duration-200 group">
                      Services
                      <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-black border-b-2 border-green-600' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>

                  <NavLink
                    to="/innovation"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-black border-b-2 border-green-600' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Innovation
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>

                  <NavLink
                    to="/investors"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-black border-b-2 border-green-600' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Investors
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>

                  <NavLink
                    to="/careers"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-black border-b-2 border-green-600' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-black border-b-2 border-green-600' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>

                  <NavLink
                    to="/resources"
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-black border-b-2 border-green-600' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Resources
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                </div>

                {/* Search Icon */}
                <div className="relative ml-8">
                  <button
                    onClick={toggleSearch}
                    className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 group"
                    aria-label="Toggle search"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65 7.5 7.5 0 0116.65 16.65z"
                      />
                    </svg>
                  </button>
                  {showSearch && (
                    <div
                      ref={searchRef}
                      className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 animate-fadeIn"
                    >
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSearchSubmit(desktopSearchQuery);
                      }}>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search TLC Homes..."
                            value={desktopSearchQuery}
                            onChange={(e) => setDesktopSearchQuery(e.target.value)}
                            className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                            autoFocus
                          />
                          <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-green-600 transition-colors duration-200"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65 7.5 7.5 0 0116.65 16.65z" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          {/* Full Width Dropdown for About Us */}
          {activeDropdown === 'about' && (
            <div 
              className="hidden lg:block absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 animate-slideDown"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="container mx-auto px-6 lg:px-20 py-8">
                <div className="grid grid-cols-2 gap-12">
                  <div className="group">
                    <Link 
                      to="/about/company" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1 hover:text-[#004f33]"
                    >
                      Company Overview
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Learn about our mission, vision, and values that drive our commitment to excellence.</p>
                  </div>
                  <div className="group">
                    <Link 
                      to="/about/leadership" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Leadership
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Meet our experienced leadership team and board of directors.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Full Width Dropdown for Services */}
          {activeDropdown === 'services' && (
            <div 
              className="hidden lg:block absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 animate-slideDown"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="container mx-auto px-6 lg:px-20 py-8">
                <div className="grid grid-cols-2 gap-12">
                  <div className="group">
                    <Link 
                      to="/services/properties" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Properties & Makeovers
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Delivering premium property management services in Kenya through innovative and smart solutions.</p>
                  </div>
                  <div className="group">
                    <Link 
                      to="/services/farmers" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Farmers & Produce
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Empowering Kenyan farmers with modern market access and sustainable agricultural solutions.</p>
                  </div>
                  <div className="group">
                    <Link 
                      to="/services/bookings" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Bookings & Stays
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Offering world-class hospitality with a focus on local culture and fast bookings at reasonable rates</p>
                  </div>
                  <div className="group">
                    <Link 
                      to="/services/interiordesign" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Interior Design
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">We craft inspiring interior and exterior spaces that embody convenience and creativity.</p>
                  </div>
                   <div className="group">
                    <Link 
                      to="/services/construction" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Construction
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Building residential spaces that tenants love, while grooming future home owners.</p>
                  </div>
                  <div className="group">
                    <Link 
                      to="/services/procurement" 
                      className="block text-gray-800 hover:text-black transition-all duration-200 font-medium text-lg mb-2 group-hover:translate-x-1"
                    >
                      Procurement & Supply
                    </Link>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">We watch out for our clients by sourcing the best quality products.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Layout */}
          <div className="lg:hidden flex justify-between items-center py-4 px-6">
            <button 
              onClick={toggleMenu} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="TLC Homes Kenya Logo"
                className="h-8 sm:h-10 w-auto transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
            
            <button
              onClick={toggleSearch}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
              aria-label="Toggle search"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65 7.5 7.5 0 0116.65 16.65z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {showSearch && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowSearch(false)}>
            <div className="bg-white p-4 m-4 rounded-lg mt-20" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit(mobileSearchQuery, true);
                setShowSearch(false);
              }}>
                <div className="relative">
                  <input
                    ref={mobileSearchRef}
                    type="text"
                    placeholder="Search TLC Homes..."
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-green-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65 7.5 7.5 0 0116.65 16.65z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        {isOpen && (
          <nav className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto animate-fadeIn">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Link to="/" className="flex items-center" onClick={handleMobileLinkClick}>
                <img
                  src={logo}
                  alt="TLC Homes Kenya Logo"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </Link>
              <button 
                onClick={toggleMenu} 
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              {/* Secondary Menu Links */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <ul className="space-y-3">
                  <li>
                    <NavLink 
                      to="/nyumbanistays" 
                      onClick={handleMobileLinkClick} 
                      className={({ isActive }) =>
                        `text-sm transition-all duration-200 hover:translate-x-1 block ${
                          isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                        }`
                      }
                    >
                      NyumbaniStays
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/smart-homes" 
                      onClick={handleMobileLinkClick} 
                      className={({ isActive }) =>
                        `text-sm transition-all duration-200 hover:translate-x-1 block ${
                          isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                        }`
                      }
                    >
                      Smart Homes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/" 
                      onClick={handleMobileLinkClick} 
                      className={({ isActive }) =>
                        `text-sm transition-all duration-200 hover:translate-x-1 block ${
                          isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                        }`
                      }
                    >
                      Our Company
                    </NavLink>
                  </li>
                   <li>
                   <NavLink 
                      to="/#ventures-section" 
                      onClick={(e) => handleHashNavigation(e, 'ventures-section')}
                      className={({ isActive }) =>
                        `text-sm transition-all duration-200 hover:translate-x-1 block ${
                          isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                        }`
                      }
                    >
                      All Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/local-websites" 
                      onClick={handleMobileLinkClick} 
                      className={({ isActive }) =>
                        `text-sm transition-all duration-200 hover:translate-x-1 block ${
                          isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                        }`
                      }
                    >
                      Local Websites
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Main Navigation */}
              <ul className="space-y-4">
                <li>
                  <NavLink 
                    to="/" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-900">About</span>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <NavLink 
                          to="/about/company" 
                          onClick={handleMobileLinkClick} 
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Company Overview
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/about/leadership" 
                          onClick={handleMobileLinkClick} 
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Leadership
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-900">Services</span>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <NavLink
                          to="/services/properties"
                          onClick={handleMobileLinkClick}
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Properties & Makeovers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/farmers"
                          onClick={handleMobileLinkClick}
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Farmers and Produce
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/bookings"
                          onClick={handleMobileLinkClick}
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Bookings & Stays
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/interiordesign"
                          onClick={handleMobileLinkClick}
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Interior Design
                        </NavLink>
                      </li>
                       <li>
                        <NavLink
                          to="/services/construction"
                          onClick={handleMobileLinkClick}
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Construction
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/procurement"
                          onClick={handleMobileLinkClick}
                          className={({ isActive }) =>
                            `transition-all duration-200 hover:translate-x-1 block ${
                              isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
                            }`
                          }
                        >
                          Procurement and Supply
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink 
                    to="/projects" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/innovation" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Innovation
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/investors" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Investors
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/careers" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/resources" 
                    onClick={handleMobileLinkClick} 
                    className={({ isActive }) =>
                      `font-medium transition-all duration-200 hover:translate-x-1 block ${
                        isActive ? 'text-black' : 'text-gray-800 hover:text-black'
                      }`
                    }
                  >
                    Resources
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )}

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-110 transition-all duration-200 z-50 group"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </header>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        /* Ensure smooth transitions for all hover effects */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default Header;