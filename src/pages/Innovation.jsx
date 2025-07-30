import React, { useState } from 'react';
import { ArrowRight, Home, Building2, Smartphone, Users, ChevronDown, ChevronRight } from 'lucide-react';

const InnovationsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      

     <div className="bg-white">
  <div className="max-w-7xl mx-auto px-6 pt-24 sm:pt-12 md:pt-24 lg:pt-36 pb-8 sm:pb-12 md:pb-20 lg:pb-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-8 items-center">
      <div>
        <h1 className="text-5xl font-light leading-tight mb-8" style={{ color: '#004F33' }}>
          Transforming Kenya's Hospitality & Agriculture
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          We integrate cutting-edge technology across smart homes, hospitality, property management, 
          and agriculture to create sustainable value for communities nationwide.
        </p>
        <button 
          className="inline-flex items-center gap-3 px-8 py-3 text-white font-medium rounded-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#639E4E' }}
        >
          Explore Our Solutions <ArrowRight size={20} />
        </button>
      </div>
      <div className="relative">
        <img
          src="https://l0kbxarjd9.ufs.sh/f/GBNtWc6jN1ySDXUnxOmWFs8hpHLfOyzuAaCYeJ1DgcIK5MmS"
          alt="Modern smart homes aerial view"
          className="w-full h-96 object-cover rounded-sm"
        />
      </div>
    </div>
  </div>
</div>



      {/* Solutions Overview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6" style={{ color: '#004F33' }}>
              Integrated Solutions Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four interconnected platforms driving innovation across Kenya's most critical sectors.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Smart Homes */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#639E4E' }}>
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>Smart Homes</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive technology integration transforming traditional living spaces with automated security, 
                energy management, and sustainable systems across Nairobi, Kilimani, and beyond.
              </p>
              <button 
                onClick={() => toggleSection('smart-homes')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#639E4E' }}
              >
                {activeSection === 'smart-homes' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'smart-homes' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'smart-homes' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Smart Security Systems</h4>
                      <p className="text-sm text-gray-600">Keyless smart locks with biometric access, IoT-enabled CCTV with facial recognition, motion sensors with real-time alerts, and 24/7 remote monitoring.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Home Automation</h4>
                      <p className="text-sm text-gray-600">Smart LED lighting reducing energy by 90%, automated thermostats saving 10-20% on bills, smart blinds with environmental sensors.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Green Technology</h4>
                      <p className="text-sm text-gray-600">Solar-powered systems, smart water meters, rainwater harvesting with automated management, energy-efficient materials.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* NyumbaniStays */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#48372A' }}>
                  <Building2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>NyumbaniStays</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive hospitality booking platform optimizing guest experiences, revenue management, 
                and multi-property coordination for Kenya's growing accommodation sector.
              </p>
              <button 
                onClick={() => toggleSection('nyumbanistays')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#48372A' }}
              >
                {activeSection === 'nyumbanistays' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'nyumbanistays' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'nyumbanistays' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Online Reservation Management</h4>
                      <p className="text-sm text-gray-600">End-to-end booking platform with automated guest communication and seamless check-in/check-out processes.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Revenue Management</h4>
                      <p className="text-sm text-gray-600">AI-powered pricing algorithms, occupancy forecasting, and real-time market analysis for maximum profitability.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Guest Experience Optimization</h4>
                      <p className="text-sm text-gray-600">Mobile app integration, digital concierge services, and automated amenity management systems.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Nyumbani Property Manager */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#639E4E' }}>
                  <Smartphone className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>Nyumbani Property Manager</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced property management software reducing billing errors by 95%, automating rent calculations, 
                and achieving 95% collection rates with M-Pesa integration across Kenya's real estate market.
              </p>
              <button 
                onClick={() => toggleSection('property-manager')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#639E4E' }}
              >
                {activeSection === 'property-manager' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'property-manager' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'property-manager' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Automated Operations</h4>
                      <p className="text-sm text-gray-600">Intelligent rent collection, automated invoicing, streamlined tenant onboarding saving 30 hours monthly.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Real-time Financial Dashboards</h4>
                      <p className="text-sm text-gray-600">Live income statements, occupancy reports, tenant analytics ensuring transparency with 285% ROI over three years.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Scalable Security</h4>
                      <p className="text-sm text-gray-600">AES-256 encryption, GDPR compliance supporting unlimited properties across Nairobi, Kilimani, Ngong, and Thika.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Farmers Hub */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#d0c82a' }}>
                  <Users className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>Farmers Hub</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smart farming technology connecting 200+ smallholder farmers with institutional buyers, 
                reducing post-harvest losses through IoT monitoring and transparent supply chains.
              </p>
              <button 
                onClick={() => toggleSection('farmers-hub')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#d0c82a' }}
              >
                {activeSection === 'farmers-hub' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'farmers-hub' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'farmers-hub' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Smart Agriculture Technology</h4>
                      <p className="text-sm text-gray-600">IoT sensors for soil and weather monitoring, automated irrigation systems, crop management and tracking platforms.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Supply Chain Innovation</h4>
                      <p className="text-sm text-gray-600">Direct farmer-buyer connection platforms, quality tracking systems, logistics optimization, payment management.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Market Intelligence</h4>
                      <p className="text-sm text-gray-600">Real-time price analytics, demand forecasting, contract management ensuring fair prices for smallholders.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vision 2030 Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8" style={{ color: '#004F33' }}>
                Vision 2030
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be East Africa's leading integrated real estate and agricultural technology company, 
                transforming communities through sustainable innovation and digital excellence.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 pl-6" style={{ borderColor: '#639E4E' }}>
                  <h3 className="text-xl font-medium mb-2" style={{ color: '#004F33' }}>Market Leadership</h3>
                  <p className="text-gray-600">Recognized leader in smart homes technology and dominant agribusiness platform across East Africa.</p>
                </div>
                
                <div className="border-l-4 pl-6" style={{ borderColor: '#d0c82a' }}>
                  <h3 className="text-xl font-medium mb-2" style={{ color: '#004F33' }}>Community Impact</h3>
                  <p className="text-gray-600">10,000+ jobs created, 50,000+ community members positively impacted, significant contribution to food security.</p>
                </div>
                
                <div className="border-l-4 pl-6" style={{ borderColor: '#48372A' }}>
                  <h3 className="text-xl font-medium mb-2" style={{ color: '#004F33' }}>Financial Growth</h3>
                  <p className="text-gray-600">KES 1B+ annual revenue, regional presence in 10+ counties, international partnerships and collaborations.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Futuristic cityscape representing Vision 2030"
                className="w-full h-96 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Roadmap */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6" style={{ color: '#004F33' }}>
              Strategic Roadmap 2025-2027
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our three-year plan to establish market leadership and drive sustainable growth across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-sm p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: '#639E4E' }}>
                  2025
                </div>
                <h3 className="text-xl font-medium" style={{ color: '#004F33' }}>Foundation Strengthening</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Technology platform optimization</li>
                <li>• Smart homes implementation scaling</li>
                <li>• Agribusiness market penetration</li>
                <li>• Brand recognition and positioning</li>
              </ul>
            </div>

            <div className="bg-white rounded-sm p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: '#d0c82a' }}>
                  2026
                </div>
                <h3 className="text-xl font-medium" style={{ color: '#004F33' }}>Regional Expansion</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Geographic expansion to 3 counties</li>
                <li>• New property acquisitions</li>
                <li>• Farmer partnership network expansion</li>
                <li>• Technology innovation and R&D</li>
              </ul>
            </div>

            <div className="bg-white rounded-sm p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: '#48372A' }}>
                  2027
                </div>
                <h3 className="text-xl font-medium" style={{ color: '#004F33' }}>Market Leadership</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Regional market leadership establishment</li>
                <li>• International partnership development</li>
                <li>• Technology export opportunities</li>
                <li>• Community impact scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20" style={{ backgroundColor: '#004F33' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8 text-white">
            Ready to Transform Kenya's Future?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join us in building sustainable communities through integrated technology solutions 
            that create lasting value across real estate and agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-3 text-lg font-medium bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
              Schedule Consultation
            </button>
            <button 
              className="px-8 py-3 text-lg font-medium text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#d0c82a' }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationsPage;