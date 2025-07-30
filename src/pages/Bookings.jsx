
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, X, Home, Coffee, Wifi, Car, Bath, Bed, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';

// Try importing the correct image with a fallback
import bookings from '../assets/images/Sections/book.jpg'; // Adjust path based on your structure

const Bookings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCatalogueModal, setShowCatalogueModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    location: '',
    accommodationType: '',
    guests: '',
    specialRequests: '',
    agreeToTerms: false
  });

  const [catalogueData, setCatalogueData] = useState({
    fullName: '',
    email: '',
    phone: '',
    format: 'digital',
    areaOfInterest: ''
  });

  const slides = [
    {
      title: "Book Your Perfect Stay",
      description: "Book your next premium stay in Kenya’s most sought-after locations—Naivasha, Banana Hill, Diani, and more. From modern studios to villas, enjoy tech-enabled booking and personalized service for every kind of trip.",
      buttonText: "Book Your Space",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Luxury suites and villas", "24/7 concierge service", "Corporate accommodation solutions"]
    },
    {
      title: "Reserve Your Experience",
      description: "We look for the space that meets your needs and desire while incorporating transparency and your privacy. Whether for corporate events, family gatherings, or private retreats.",
      buttonText: "Make Reservation",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Event spaces with gardens", "Graduation hosting services", "Transparent pricing"]
    }
  ];

  const locations = [
    { name: "Naivasha", popularity: 100, type: "Lakeside Retreat" },
    { name: "Thika Road", popularity: 83, type: "Mivida Garden City" },
    { name: "Diani Beach", popularity: 73, type: "PrideInn Hotel" },
    { name: "Nanyuki", popularity: 66, type: "Mountain Views" },
    { name: "Nairobi", popularity: 62, type: "Kilimani" }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCatalogueInputChange = (e) => {
    const { name, value } = e.target;
    setCatalogueData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }

    const reservationToken = {
      ...formData,
      timestamp: new Date().toISOString(),
      tokenId: `RES_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    window.reservationData = reservationToken;
    console.log('Reservation Token Ready:', reservationToken);
    alert('Reservation request submitted successfully! You will be redirected to complete your booking.');
    // TODO: Implement redirect logic here, e.g., window.location.href = '/booking-confirmation';
    setShowModal(false);
  };

  const handleCatalogueSubmit = (e) => {
    e.preventDefault();
    
    const catalogueRequest = {
      ...catalogueData,
      timestamp: new Date().toISOString(),
      requestId: `CAT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    window.catalogueRequestData = catalogueRequest;
    console.log('Catalogue Request Ready:', catalogueRequest);
    alert('Catalogue request submitted successfully! You will receive your catalogue within 24 hours.');
    setShowCatalogueModal(false);
    setCatalogueData({
      fullName: '',
      email: '',
      phone: '',
      format: 'digital',
      areaOfInterest: ''
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
        setShowCatalogueModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white pt-24 sm:pt-12 md:pt-24 lg:pt-36 pb-8 sm:pb-12 md:pb-20 lg:pb-6 overflow-visible">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-white text-sm font-medium tracking-wide uppercase">NyumbaniStays by TLC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The language of excellence
            </h1>
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-xl text-gray-300 max-w-3xl mb-12">
                {currentSlideData.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                {currentSlideData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Open modal for more information"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <span>{currentSlideData.buttonText}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#004F33]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's for corporate events, family gatherings, or private retreats, we offer short and long-term accommodations across Kenya's major dynamic regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bookings */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a1887f]/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#004F33]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bookings</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Find your perfect BnB—whether it’s a studio in Ruaka, a beachfront stay in Diani, or a luxury mansion in Naivasha. We handle everything from pricing to check-in, so you enjoy a seamless, affordable experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-[#48372A]" />
                  <span>Studio to 3-bedroom accommodations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#48372A]" />
                  <span>Corporate accommodation solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-[#48372A]" />
                  <span>Modern amenities included</span>
                </div>
              </div>
              <span
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 group w-full justify-center"
                aria-label="Book now"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <span>Book Now</span>
              </span>
            </div>

            {/* Reservations */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a1887f]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#004F33]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reservations</h3>
              </div>
              <p className="text-gray-600 mb-8">
                We find tailored stays that match your needs—ideal for graduations, events, or corporate retreats along Thika Road and across Nairobi. Enjoy executive privacy, flexible terms, and seamless booking for customized Airbnb or event accommodation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-[#48372A]" />
                  <span>Event spaces with gardens</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-[#48372A]" />
                  <span>Graduation hosting services</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#48372A]" />
                  <span>Transparent pricing & privacy</span>
                </div>
              </div>
              <span
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 group w-full justify-center"
                aria-label="Make reservation"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <span>Make Reservation</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Discover our most sought-after locations across Kenya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-[#004F33]/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                    <p className="text-gray-600">{location.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#004F33] font-bold text-lg">{location.popularity}%</div>
                    <div className="text-sm text-gray-500">Popular</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#004F33] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${location.popularity}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 bg-[#004F33]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become Partner</h2>
          <p className="text-xl text-gray-300 mb-8">
            List your BnB in Kenya with us. Our expert market insights, design upgrades, and digital campaigns help hosts attract more bookings, improve guest experience, and grow income in top locations like Nairobi and Naivasha.
          </p>
          <a
            href="https://drive.google.com/file/d/1qQkn0yiK40_UCeJ90QGYOIIeWs3jUsQ6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="Request Partner Catalogue Issue 2025"
          >
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            <span>Request Partner Catalogue Issue 2025</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-36 relative bg-gray-50">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bookings || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'})`,
          }}
        >
          <div className="absolute inset-0 bg-[#004f33]/90"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8">Book a BnB in Kilimani</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-lg text-white">reservations@tlchomes.co.ke</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-lg text-white">+254 117 781 817</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reservation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image */}
              <div className="md:w-1/2 relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Hotel Entrance"
                  className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transition-all duration-300"
                />
                <div
                  className="absolute inset-0 bg-black/20 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transition-opacity duration-300"
                  style={{ opacity: 1 }}
                />
                <div
                  className="absolute inset-0 bg-transparent border-2 border-transparent rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none hover:border-[#004F33] hover:bg-black/30 transition-all duration-300"
                />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">NyumbaniStays</h3>
                  <p className="text-lg">Premium Accommodations</p>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="md:w-1/2 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Reserve Your Space</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close reservation modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    You are now leaving the corporate site to NyumbaniStays for secure reservations.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      required
                    >
                      <option value="">Select location</option>
                      <option value="naivasha">Naivasha</option>
                      <option value="kiambu">Kiambu</option>
                      <option value="ruiru">Ruiru</option>
                      <option value="diani">Diani Beach</option>
                      <option value="nanyuki">Nanyuki</option>
                      <option value="thika">Thika</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Type</label>
                    <select
                      name="accommodationType"
                      value={formData.accommodationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      required
                    >
                      <option value="">Select accommodation type</option>
                      <option value="studio">Studio Apartment</option>
                      <option value="1bedroom">1 Bedroom</option>
                      <option value="2bedroom">2 Bedroom</option>
                      <option value="3bedroom">3 Bedroom</option>
                      <option value="villa">Luxury Villa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      required
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6+">6+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                      rows="3"
                      placeholder="Any special requests or requirements?"
                    ></textarea>
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-[#004F33] focus:ring-[#004F33] border-gray-300 rounded"
                        required
                      />
                      <div className="text-sm text-gray-700">
                        <p className="mb-2">
                          I agree to the{' '}
                          <a
                            href="/terms-and-conditions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#004F33] underline hover:text-[#004F33]/80"
                          >
                            Terms and Conditions
                          </a>
                          {' '}and consent to the collection and use of my personal data for reservation purposes.
                        </p>
                        <p className="text-xs text-gray-600">
                          Your information will be used to process your reservation, communicate about your booking, and provide customer service. We will not share your data with third parties without your consent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!formData.agreeToTerms}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        formData.agreeToTerms
                          ? 'bg-[#004F33] hover:bg-[#004F33]/90 text-white hover:shadow-[0_0_10px_rgba(0,79,51,0.5)]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Catalogue Modal */}
      {showCatalogueModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Request Catalogue</h2>
              <button
                onClick={() => setShowCatalogueModal(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close catalogue modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCatalogueSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={catalogueData.fullName}
                  onChange={handleCatalogueInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={catalogueData.email}
                  onChange={handleCatalogueInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={catalogueData.phone}
                  onChange={handleCatalogueInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Format</label>
                <select
                  name="format"
                  value={catalogueData.format}
                  onChange={handleCatalogueInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  required
                >
                  <option value="digital">Digital PDF</option>
                  <option value="physical">Physical Catalogue</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                <textarea
                  name="areaOfInterest"
                  value={catalogueData.areaOfInterest}
                  onChange={handleCatalogueInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  rows="3"
                  placeholder="Tell us about your interests (e.g., luxury villas, event spaces)"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowCatalogueModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#004F33] hover:bg-[#004F33]/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,79,51,0.5)]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;