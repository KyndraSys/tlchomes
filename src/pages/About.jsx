import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Home, Tractor, Bed, Building, Palette, Globe, Truck, Lightbulb, Target, Heart, ChevronRight, Star, Award, Users, MessageCircle, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const TabSection = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'what-we-do', label: 'What we do' },
    { id: 'who-we-are', label: 'Who we are' },
    { id: 'who-we-serve', label: 'Who we serve' }
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-amber-600 text-amber-600 bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>

        <div className="space-y-4 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-full p-1">
                <CheckCircle size={12} className="text-green-600" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
            Get Started Now
          </button>
          <button 
            onClick={onClose}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('what-we-do');
  const [currentModal, setCurrentModal] = useState(null);

  const services = [
    {
      id: 'realtors',
      title: 'Smart Homes & Realtors',
      description: 'Transform your living experience with our innovative smart home technology and premium real estate services.',
      icon: <Home size={24} className="text-amber-600" />,
      features: [
        '98%+ occupancy rates across properties',
        '10-15% rental premiums for smart homes',
        'Advanced security & automation systems',
        '3+ years average tenant retention'
      ]
    },
    {
      id: 'agriculture',
      title: 'Farmers Market',
      description: 'Empowering farmers and ensuring food security through direct market linkages and modern agricultural practices.',
      icon: <Tractor size={24} className="text-green-600" />,
      features: [
        '500+ farmers in our network',
        'Direct market access guaranteed',
        'Modern farming technology support',
        'Quality assurance & fair pricing'
      ]
    },
    {
      id: 'hospitality',
      title: 'Hotel & Stay',
      description: 'Premium hospitality experiences with technology-enhanced booking and personalized service delivery.',
      icon: <Building size={24} className="text-blue-600" />,
      features: [
        'Boutique hotel operations',
        'Smart booking platform (Nyumbanistays)',
        'Corporate accommodation solutions',
        'Premium guest experiences'
      ]
    },
    {
      id: 'interior',
      title: 'Interior Design',
      description: 'Award-winning interior design services that transform spaces with sustainable and innovative solutions.',
      icon: <Palette size={24} className="text-purple-600" />,
      features: [
        'Bespoke residential & commercial design',
        'Smart home integration expertise',
        'Sustainable design practices',
        'Complete space transformation'
      ]
    },
    {
      id: 'supply',
      title: 'Supply Chain Solutions',
      description: 'Streamlined logistics and supply chain management ensuring efficient delivery across all operations.',
      icon: <Truck size={24} className="text-orange-600" />,
      features: [
        'End-to-end logistics management',
        'Quality assurance systems',
        'Cost optimization strategies',
        'Technology-driven solutions'
      ]
    },
    {
      id: 'vacation-rentals',
      title: 'TLC Foundation',
      description: 'Community empowerment through education, skills development, and social impact programs.',
      icon: <Heart size={24} className="text-red-600" />,
      features: [
        'Educational scholarships & support',
        'Skills development programs',
        'Community infrastructure projects',
        'Environmental conservation initiatives'
      ]
    }
  ];

  const stats = [
    { 
      icon: <Users size={32} className="text-amber-600" />, 
      value: '500+', 
      label: 'farmers', 
      description: 'of different backgrounds and regions across Kenya'
    },
    { 
      icon: <MessageCircle size={32} className="text-amber-600" />, 
      value: '6', 
      label: 'sectors', 
      description: 'addressing the needs of a diverse client base'
    },
    { 
      icon: <Globe size={32} className="text-amber-600" />, 
      value: '5+', 
      label: 'counties', 
      description: 'enabling us to serve more communities across Kenya'
    }
  ];

  const whatWeDo = [
    {
      icon: <TrendingUp size={48} className="text-uradora-600" />,
      title: 'Real Estate & Construction',
      description: 'We develop and manage premium properties with smart technology integration, delivering exceptional living experiences while ensuring sustainable returns for investors.'
    },
    {
      icon: <Tractor size={48} className="text-green-600" />,
      title: 'Agricultural Solutions',
      description: 'We connect farmers directly to markets, provide modern farming technology, and operate large-scale farming to ensure food security and rural economic development.'
    },
    {
      icon: <Shield size={48} className="text-blue-600" />,
      title: 'Technology Innovation',
      description: 'We pioneer smart home technology in Kenya, developing digital platforms and IoT solutions that transform how people live, work, and do business.'
    },
    {
      icon: <Bed size={48} className="text-red-600" />,
      title: 'Vacation Rentals',
      description: 'We design, furnish, and manage vacation rentals with a touch of luxury—offering seamless bookings, premium guest experiences, and sustainable hospitality solutions.'
    }
  ];

  const whoWeServe = [
    {
      title: 'Property Investors & Developers',
      description: 'Individuals and institutions seeking premium real estate investments with technology-enhanced returns and sustainable growth.',
      icon: <Building size={24} className="text-blue-600" />
    },
    {
      title: 'Farmers & Agricultural Communities',
      description: 'Small and large-scale farmers looking for market access, modern technology, and fair pricing for their agricultural products.',
      icon: <Tractor size={24} className="text-green-600" />
    },
    {
      title: 'Technology-Forward Consumers',
      description: 'Modern families and professionals seeking smart living solutions, premium hospitality experiences, and innovative lifestyle services.',
      icon: <Lightbulb size={24} className="text-amber-600" />
    },
    {
      title: 'Corporate & Institutional Clients',
      description: 'Businesses requiring accommodation solutions, supply chain management, interior design, and technology integration services.',
      icon: <Target size={24} className="text-purple-600" />
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'what-we-do':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Multi-sectoral innovation driving Kenya's transformation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  TLC Homes Services Kenya is a diversified company delivering integrated solutions across real estate, agriculture, hospitality, and technology. We bridge gaps between traditional sectors and modern innovation, creating sustainable value for our clients, communities, and stakeholders.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Our Integrated Approach</h3>
                <p className="text-xl mb-8 opacity-90">
                  We don't just provide services – we create ecosystems. Our ventures work together to deliver comprehensive solutions that address Kenya's most critical needs while generating sustainable returns.
                </p>
                <button 
                  onClick={() => setCurrentModal(services[0])}
                  className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
        );
      case 'who-we-are':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-6 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-amber-600 mb-3">{stat.label}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                  </div>
                ))}
              </div>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold text-gray-900 mb-6">
                    Why Choose TLC Homes Services Kenya
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We deliver integrated solutions across multiple sectors, ensuring transparency, quality, and measurable value for our clients and communities.
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Eliminate Investment Risk
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Smart technology integration delivers 10-15% rental premiums with vacancy rates under 2%.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                      <span className="mr-2">✓</span>
                      Guaranteed ROI
                    </div>
                  </div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Accelerate Growth
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Multi-sector expertise ensures faster execution and seamless coordination.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                      <span className="mr-2">✓</span>
                      40% Faster Projects
                    </div>
                  </div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Access New Markets
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Farmer networks and supply chains unlock diverse revenue streams.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                      <span className="mr-2">✓</span>
                      Diversified Income
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200 shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
                        <span className="mr-2">💡</span>
                        Our Promise
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Bridging Gaps, Delivering Value
                      </h3>
                      <blockquote className="text-xl text-gray-700 italic mb-6 border-l-4 border-amber-400 pl-6">
                        Bridge the gap between providers and clients with transparency and trust.
                      </blockquote>
                      <p className="text-gray-600 mb-8">
                        Our partnerships prioritize measurable outcomes and client success.
                      </p>
                      <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Discover More
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Performance</h4>
                        <p className="text-sm text-gray-600">Exceeds investment expectations</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                        <p className="text-sm text-gray-600">Certified professionals only</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Partnerships</h4>
                        <p className="text-sm text-gray-600">Long-term mutual success</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                        <p className="text-sm text-gray-600">Technology-driven returns</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'who-we-serve':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Serving diverse clients across Kenya's growth sectors
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From individual property investors to large agricultural communities, we deliver tailored solutions that meet the unique needs of Kenya's most dynamic sectors.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {whoWeServe.map((segment, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-50 rounded-lg p-3 group-hover:bg-amber-50 transition-colors">
                        {segment.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{segment.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{segment.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-2xl p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact by the Numbers</h3>
                  <p className="text-gray-600 text-lg">Measurable results across all sectors we serve</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">98%+</div>
                    <div className="text-gray-600 text-sm">Property Occupancy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Farmers Empowered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                    <div className="text-gray-600 text-sm">Jobs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                    <div className="text-gray-600 text-sm">Counties Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

<div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Transformations</h3>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">Linnan Apartment - Kasarani</h4>
      <p className="text-gray-600 mb-4">
        Successful renovation with rooftop extension, transforming the property into a modern smart home complex.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-[#004f33] mr-2">•</span>
          Complete rooftop extension
        </li>
        <li className="flex items-start">
          <span className="text-[#004f33] mr-2">•</span>
          Smart home technology integration
        </li>
        <li className="flex items-start">
          <span className="text-[#004f33] mr-2">•</span>
          Enhanced security systems
        </li>
      </ul>
      {/* Button for Linnan Apartment */}
     <a
  href="/pages/projects" // Placeholder, adjust to specific project page (e.g., /pages/projects/linnan)
  className="inline-flex items-center mt-4 text-[#2F2F2F] hover:text-black font-bold group"
>
  View Project
  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
</a>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">Heavens Delight Apartments</h4>
      <p className="text-gray-600 mb-4">
        Complete transformation through construction and renovation to our standard model.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-[#004f33] mr-2">•</span>
          Full property makeover
        </li>
        <li className="flex items-start">
          <span className="text-[#004f33] mr-2">•</span>
          Sustainable building practices
        </li>
        <li className="flex items-start">
          <span className="text-[#004f33] mr-2">•</span>
          Modern amenities integration
        </li>
      </ul>
      {/* Button for Heavens Delight Apartments */}
      <a
  href="/pages/projects" // Placeholder, adjust to specific project page (e.g., /pages/projects/linnan)
  className="inline-flex items-center mt-4 text-[#2F2F2F] hover:text-black font-bold group"
>
  View Project
  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
</a>

    </div>
  </div>

  return (
    <>
      <Helmet>
        <title>About TLC Homes Services Kenya - Transforming Lives Through Innovation</title>
        <meta name="description" content="Learn about TLC Homes Services Kenya - a multi-sectoral company committed to transforming lives through transparency, love, and care since 2019." />
        <link rel="canonical" href="https://tlchomes.co.ke/about" />
        <meta property="og:title" content="About TLC Homes Services Kenya - Our Story & Mission" />
        <meta property="og:description" content="From humble beginnings to Kenya's leading multi-sectoral company - discover our journey of transformation." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="bg-black text-white pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 p-2 md:p-4">
              About TLC Homes Services
            </h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl md:text-2xl leading-relaxed">
                  TLC Homes Services Kenya is one of Kenya's leading providers of integrated real estate, agricultural, and technology solutions. We are a fiduciary to our clients. We're transforming lives across Kenya on behalf of our clients, inspiring our employees, and supporting our local communities. Watch the video to learn more.
                </p>
              </div>
              <div>
                <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-amber-600 rounded-full p-4 mb-4 inline-block">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-300">Watch our story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="bg-gray-50">
          {renderTabContent()}
        </div>
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands who have experienced the TLC difference</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setCurrentModal(services[0])}
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Smart Homes
              </button>
              <button 
                onClick={() => setCurrentModal(services[1])}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
              >
                Join Our Farmers Network
              </button>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal 
        isOpen={currentModal !== null} 
        onClose={() => setCurrentModal(null)} 
        service={currentModal}
      />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}
      </style>
    </>
  );
};

export default About;