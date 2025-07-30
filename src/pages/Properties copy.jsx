import React from 'react';
import sustainable from '../assets/images/Sections/sustainable.jpg'; // Updated to use sustainable
import { Home, Users, Leaf, ArrowRight, ChevronRight } from 'lucide-react';
import family from '../assets/images/Sections/family.jpg';
import smartlock from '../assets/images/Sections/smartlock.jpg';
import outdoor from '../assets/images/Sections/outdoor.jpg';


const testimonials = [
    {
      id: 1,
      name: "John Mwangi",
      role: "Property Owner",
      location: "Nairobi",
      avatar: "👨‍🏡",
      rating: 5,
      testimonial: "TLC transformed our rental property with smart locks and a beautiful outdoor space. The process was seamless, and the value increased by 5%!"
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      role: "Tenant",
      location: "Kiambu",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "The smart home makeover was incredible! My tenants love the energy savings and security features—10/10 would recommend!"
    },
    {
      id: 3,
      name: "Peter Ochieng",
      role: "Farmer & Resident",
      location: "Thika",
      avatar: "👨‍🌾",
      rating: 5,
      testimonial: "TLC's sustainable designs and outdoor spaces made our home a community hub. Exceptional service from start to finish!"
    },
    // {
    //   id: 4,
    //   name: "David Kariuki",
    //   role: "Tech Professional",
    //   location: "Ruiru",
    //   avatar: "👨‍💻",
    //   rating: 5,
    //   testimonial: "From consultation to completion, TLC delivered beyond expectations. The eco-friendly materials and modern design have made our home the envy of the neighborhood!"
    // },
    // {
    //   id: 5,
    //   name: "Mary Njeri",
    //   role: "Restaurant Owner",
    //   location: "Nakuru",
    //   avatar: "👩‍🍳",
    //   rating: 5,
    //   testimonial: "Working with TLC was a game-changer for our family business. The commercial renovation increased our foot traffic by 40% and the energy-efficient systems are saving us thousands monthly!"
    // },
    // {
    //   id: 6,
    //   name: "Samuel Kiptoo",
    //   role: "Lawyer",
    //   location: "Eldoret",
    //   avatar: "👨‍⚖️",
    //   rating: 5,
    //   testimonial: "TLC's attention to detail is unmatched. They transformed our old apartment into a modern sanctuary with smart lighting and perfect storage solutions. Highly recommended!"
    // }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 star-icon ${i < rating ? 'text-[#48372A]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

const Properties = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="text-[#1A1A1A] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-[#48372A] text-sm font-semibold tracking-wider uppercase">
                PROPERTIES & MAKEOVERS
              </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 p-2 md:p-4">
  Properties and Makeovers
</h1>


              <p className="text-xl md:text-2xl leading-relaxed text-[#4B5563]">
                Crafting and running properties across Nairobi by leveraging smart sustainable initiatives and digital solutions to create exceptional living spaces.
              </p>

             <button className="bg-[#004F33] text-white px-8 py-2 rounded-md text-lg font-semibold transition-colors duration-300 hover:bg-[#006c45] inline-flex items-center gap-2 group">
 Clients' Perspectives
  <svg
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>

            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-none">
                <img 
                  src={sustainable} // Updated to use imported sustainable image
                  alt="Sustainable construction"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#48372A] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md">
                Smart Solutions
              </div>
            </div>
          </div>
        </div>
      </section>



{/* Key Services Section */}
<section id="services" className="py-20" style={{ backgroundColor: '#f5fffb' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Services</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Comprehensive property solutions tailored for modern living
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12">
      {/* Property Management */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Management and Maintenance</h3>
      <hr className="w-1/1 mx-auto my-4 border-0 h-1 bg-gradient-to-r from-[#004F33] to-[#48372A]/20" />
        <p className="text-gray-600 mb-6">
          We care for our properties as we do for our property owners, tenants, and stakeholders. Our unique approach embodies:
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Comprehensive tenant screening to ensure quality occupancy
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Healthy tenant relations and communication
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Extreme care for properties through maintenance
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Top-tier waste management solutions
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Digital invoice management and communication
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Enforcement of tenant agreements
          </li>
        </ul>
      </div>

      {/* Smart Homes Integration */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Homes Integration and Makeovers</h3>
        <hr className="w-1/1 mx-auto my-4 border-0 h-1 bg-gradient-to-r from-[#004F33] to-[#48372A]/20" />
        <p className="text-gray-600 mb-6">
          Complete property makeovers & renovations and integration of smart home technologies:
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Enhanced security systems and motion sensors
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Strategic Renovation of Interiors and Exteriors of rental properties
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Crafted outdoor sitting areas with WiFi hotspots
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Property waste management with categorization
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Sustainable materials and landscaping
          </li>
          <li className="flex items-start">
            <span className="text-[#004f33] mr-2">•</span>
            Kids play areas and garden spaces
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

       <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Happy Tenants & Families */}
          <div className="relative">
           <img 
  src={family} 
  alt="Happy family in their home" 
  className="w-full h-96 object-cover rounded-lg shadow-lg"
/>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Happy tenants & families</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We create lasting relationships with our tenants through exceptional service 
              and well-maintained properties. Our 98%+ occupancy rate and 3+ years average 
              tenant retention speak to our commitment to providing homes where families thrive.
            </p>
            <div className="flex items-center text-[#004F33] font-semibold hover:text-[#006646] cursor-pointer group">

              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Seek expert guidance on your property
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Smart Home Integration */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Smart home integration</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We leverage cutting-edge technology to enhance property value and tenant 
              experience. Our smart home implementations deliver 10-15% rental premiums 
              while providing convenience and energy efficiency for modern living.
            </p>
            <a
  href="https://drive.google.com/file/d/1U3BDvJnl9taFe_qWMHwva_je1SP4o0rT/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
 className="flex items-center font-semibold hover:opacity-90 cursor-pointer group"
style={{ color: '#004f33' }}

>
  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
  Read our smart homes issue
</a>
            
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
  src={smartlock} 
  alt="Smart lock" 
  className="w-full h-96 object-cover rounded-lg shadow-lg"
/>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Beautiful Outdoor Spaces */}
          <div className="relative">
             <img 
  src={outdoor} 
  alt="Outdoor sitting areas" 
  className="w-full h-96 object-cover rounded-lg shadow-lg"
/>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Beautiful outdoor spaces</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your property with thoughtfully designed outdoor areas that foster 
              community and connection. Our landscaped gardens and outdoor sitting areas 
              create inviting spaces where residents can relax and build lasting relationships.
            </p>
            <div className="flex items-center text-[#004F33] font-semibold hover:text-[#006646] cursor-pointer group">

              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Request a home makeover
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Notable Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notable Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="text-center">
    <div className="text-4xl font-bold text-[#004f33] mb-2">5+</div>
    <p className="text-gray-600">Properties acquired in prime Nairobi locations</p>
  </div>
  <div className="text-center">
    <div className="text-4xl font-bold text-[#004f33] mb-2">98%+</div>
    <p className="text-gray-600">Occupancy rate across all managed properties</p>
  </div>
  <div className="text-center">
    <div className="text-4xl font-bold text-[#004f33] mb-2">3+</div>
    <p className="text-gray-600">Years average tenant retention</p>
  </div>
  <div className="text-center">
    <div className="text-4xl font-bold text-[#004f33] mb-2">79.5%</div>
    <p className="text-gray-600">Smart home occupancy vs 70-80% traditional</p>
  </div>
</div>

                

          
        </div>
      </section>

      

      {/* Smart Homes Innovation
      <section id="smart-homes" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Homes Innovation</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our revolutionary smart homes implementation positions properties at the forefront of Kenya's real estate market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">10-15%</div>
              <p>Rental premiums for smart-enabled properties</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">3-5%</div>
              <p>Property value increase through technology integration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">79.5%</div>
              <p>Occupancy rates vs 70-80% traditional rentals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <p>Comprehensive automation systems</p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Smart Home Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Security & Safety</h4>
                <ul className="space-y-2">
                  <li>• Advanced security systems</li>
                  <li>• Motion sensors</li>
                  <li>• Smart locks</li>
                  <li>• 24/7 monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Automation & Control</h4>
                <ul className="space-y-2">
                  <li>• IoT-enabled devices</li>
                  <li>• Smart lighting</li>
                  <li>• Climate control</li>
                  <li>• Energy management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Connectivity & Lifestyle</h4>
                <ul className="space-y-2">
                  <li>• WiFi hotspots</li>
                  <li>• Digital communication</li>
                  <li>• Smart appliances</li>
                  <li>• Mobile app control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Expansion Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expansion Strategy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic growth plans to serve more communities across Kenya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Middle-Class Development</h3>
              <p className="text-gray-600">Development of middle-class residential projects</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Models</h3>
              <p className="text-gray-600">Strategic financial models for affordable housing</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Expansion</h3>
              <p className="text-gray-600">Regional market expansion across Kenya</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technology Integration</h3>
              <p className="text-gray-600">Technology integration across all properties</p>
            </div>
          </div>
        </div>
      </section>


  
 
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 sm:py-16 lg:py-20 testimonial-section">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 mb-2">
              Over 2,000 tenants and clients have shared their experiences
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
              What Our Clients Say About TLC Homes
            </h2>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#004F33] to-[#80bf99] mx-auto rounded-full"></div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center md:mt-16">
            <a 
              href="/testimonials" 
              className="group inline-flex items-center px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-[#004F33] to-[#006c45] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore All 2,000+ Reviews</span>
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Testimonials Grid */}
          <div className="relative mt-10 md:mt-20 testimonial-container">
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="card-content">
                    <div className="premium-badge">Verified</div>
                    <div className="card-overlay"></div>
                    
                    <div className="flex flex-col justify-between h-full p-6 lg:p-8">
                      <div className="flex-1">
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6">
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-600">
                            {testimonial.rating}.0
                          </span>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="flex-1">
                          <p className="text-lg leading-relaxed text-gray-900 quote-text font-medium">
                            {testimonial.testimonial}
                          </p>
                        </blockquote>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center mt-8">
                        <div className="w-12 h-12 avatar-container rounded-full flex items-center justify-center">
                          <span className="text-[#004F33] text-2xl">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div className="ml-4 profile-text">
                          <p className="text-base font-bold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>






BOOKINGFORMRM


      Main Modal
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image */}
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Hotel Entrance"
                  className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                />
                <div className="absolute inset-0 bg-black/20 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"></div>
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
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    You are being redirected to NyumbaniStays booking platform for secure reservations.
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent" required>
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
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent" required>
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
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent" required>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04f33] focus:border-transparent"
                      rows="3"
                      placeholder="Any special requests or requirements?"
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 bg-[#04f33] hover:bg-[#04f33]/90 text-black py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
      >
      {/* Learn More About TLC
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn More About TLC Homes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we're transforming Kenya's real estate landscape through innovation and excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize property management and construction in Kenya through smart technology, sustainable practices, and exceptional service delivery.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading smart property development and management company in East Africa, setting new standards for modern living.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, Innovation, Sustainability, and Community - driving every decision we make in property development and management.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Careers Section */}
      {/* <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Careers at TLC Homes</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of smart property development in Kenya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Be part of Kenya's smart homes revolution
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Work with cutting-edge technology and sustainable practices
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Competitive compensation and growth opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Collaborative and innovative work environment
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold">Property Manager</h4>
                  <p className="text-sm opacity-90">Nairobi • Full-time</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold">Smart Home Technician</h4>
                  <p className="text-sm opacity-90">Nairobi • Full-time</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold">Construction Supervisor</h4>
                  <p className="text-sm opacity-90">Nairobi • Full-time</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Positions
            </button>
          </div>
        </div>
      </section> */}


    </div>
  );
};

export default Properties;