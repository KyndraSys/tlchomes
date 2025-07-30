import React from 'react';
import sustainable from '../assets/images/Sections/sustainable.jpg'; // Updated to use sustainable
import { Home, Users, Leaf, ArrowRight, ChevronRight } from 'lucide-react';
import family from '../assets/images/Sections/family.jpg';
import smartlock from '../assets/images/Sections/smartlock.jpg';
import outdoor from '../assets/images/Sections/outdoor.jpg';

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




    </div>
  );
};

export default Properties;