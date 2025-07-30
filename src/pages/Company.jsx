import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {Eye, Leaf, X, Home, Tractor, Bed, Building, Palette, Globe, Truck, Lightbulb, Target, Heart, ChevronRight, Star, Award, Users, MessageCircle, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import pool from '../assets/images/Sections/pool-villa-5000930.jpg';

const TabSection = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'what-we-do', label: 'What we do' },
     
    { id: 'who-we-are', label: 'Who we are' },
    
    { id: 'who-we-serve', label: 'Who we serve' }
  ];

  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-[#639E4E] text-[#004F33]'
                  : 'border-transparent text-gray-600 hover:text-[#004F33] hover:border-gray-300'
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-sm max-w-md w-full p-8 relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-[#004F33]"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: service.id === 'realtors' ? '#F59E0B' : service.id === 'agriculture' ? '#16A34A' : service.id === 'hospitality' ? '#2563EB' : service.id === 'interior' ? '#7C3AED' : service.id === 'supply' ? '#F97316' : '#DC2626' }}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-medium text-[#004F33] mb-2">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>

        <div className="space-y-4 mb-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-sm flex items-center justify-center bg-green-100">
                <CheckCircle size={12} className="text-green-600" />
              </div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
         <a 
  href="/contact"
  className="inline-flex items-center gap-3 px-8 py-3 text-white font-medium rounded-sm hover:opacity-90 transition-opacity w-full justify-center group block text-center" 
  style={{ backgroundColor: '#639E4E' }}
>
  Get Started Now
  <ChevronRight size={20} className="transition-transform group-hover:-translate-x-1" />
</a>

<a 
  href="/"
  className="px-8 py-3 text-lg font-medium bg-transparent border-2 border-[#004F33] text-[#004F33] hover:bg-[#004F33] hover:text-white transition-colors rounded-sm w-full block text-center"
>
  Learn More
</a>
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  const [activeTab, setActiveTab] = useState('what-we-do');
  const [currentModal, setCurrentModal] = useState(null);

  const services = [
    {
      id: 'realtors',
      title: 'Smart Homes & Realtors',
      description: 'Transform your living experience with our innovative smart home technology and premium real estate services.',
      icon: <Home size={24} className="text-white" />,
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
      icon: <Tractor size={24} className="text-white" />,
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
      icon: <Building size={24} className="text-white" />,
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
      icon: <Palette size={24} className="text-white" />,
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
      icon: <Truck size={24} className="text-white" />,
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
      icon: <Heart size={24} className="text-white" />,
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
      icon: <TrendingUp size={48} className="text-amber-600" />,
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
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#004F33] mb-6">
                  Multi-sectoral innovation driving Kenya's transformation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  TLC Homes Services Kenya is a diversified company delivering integrated solutions across real estate, agriculture, hospitality, and technology. We bridge gaps between traditional sectors and modern innovation, creating sustainable value for our clients, communities, and stakeholders.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow">
                    <div className="mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-medium text-[#004F33] mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#004F33] p-12 rounded-sm text-center">
                <h3 className="text-3xl font-medium text-[#ffffff] mb-4">Our Integrated Approach</h3>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  We don't just provide services – we create ecosystems. Our ventures work together to deliver comprehensive solutions that address Kenya's most critical needs while generating sustainable returns.
                </p>
                <a
  href="/investors"
  class="inline-flex items-center bg-[#d0c82a] text-[#48372A] px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-[#d0c82a] transition-colors duration-200 group"
  aria-label="Explore our services"
  onclick="event.preventDefault(); window.location.hash='ventures-section';"
>
  <svg class="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
  <span>Explore our investment market</span>
</a>
              </div>
            </div>
          </div>
        );
      case 'who-we-are':
        return (
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-6 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-medium text-[#004F33] mb-2">{stat.value}</div>
                    <div className="text-lg font-medium text-[#639E4E] mb-3">{stat.label}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#004F33] mb-6">
                  Why Choose TLC Homes Services Kenya
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We deliver integrated solutions across multiple sectors, ensuring transparency, quality, and measurable value for our clients and communities.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-medium text-[#004F33] mb-4">
                    Eliminate Investment Risk
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Smart technology integration delivers 10-15% rental premiums with vacancy rates under 2%.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-[#639E4E] text-white rounded-sm text-sm font-medium">
                    <span className="mr-2">✓</span>
                    Guaranteed ROI
                  </div>
                </div>
                <div className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-medium text-[#004F33] mb-4">
                    Accelerate Growth
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Multi-sector expertise ensures faster execution and seamless coordination.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-[#639E4E] text-white rounded-sm text-sm font-medium">
                    <span className="mr-2">✓</span>
                    40% Faster Projects
                  </div>
                </div>
                <div className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-medium text-[#004F33] mb-4">
                    Access New Markets
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Farmer networks and supply chains unlock diverse revenue streams.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-[#639E4E] text-white rounded-sm text-sm font-medium">
                    <span className="mr-2">✓</span>
                    Diversified Income
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 rounded-sm shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 bg-[#639E4E] text-white rounded-sm text-sm font-medium mb-6">
            <Heart className="mr-2" size={16} />
            Our Foundation
          </div>
          
          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#004F33] mb-3 flex items-center gap-2">
              <Eye size={20} className="text-[#639E4E]" />
              Our Mission
            </h3>
            <blockquote className="text-base text-gray-700 leading-relaxed border-l-4 border-[#639E4E] pl-6 mb-4">
              To drive sustainable growth and community impact through innovative, multi-sectoral 
              ventures in real estate, hospitality, agribusiness, supply chain, and social empowerment.
            </blockquote>
          </div>

          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#004F33] mb-3 flex items-center gap-2">
              <Lightbulb size={20} className="text-[#639E4E]" />
              Our Vision
            </h3>
            <p className="text-base text-gray-700 leading-relaxed border-l-4 border-[#d0c82a] pl-6">
              To become a leading diversified company in Kenya and beyond, delivering value to 
              stakeholders, investors, and communities through scalable, technology-driven solutions.
            </p>
          </div>

         <button
  className="inline-flex items-center gap-3 px-8 py-3 text-white font-medium rounded-sm bg-[#004F33] hover:bg-[#48372A] transition-colors group"
  onClick={() => window.location.href = '/contact'}
>
  More information
  <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
</button>

        </div>

        {/* Core Values Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-[#004F33] mb-6 text-center">Our Core Values</h3>
          
          {/* TRANSPARENCY Values */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#004F33] mb-3 text-center bg-gray-50 py-2 rounded-sm">
              TRANSPARENCY
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-[#639E4E] flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-[#004F33] text-sm">Transparency</h5>
                    <p className="text-xs text-gray-600">Open communication and honest business practices</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h5 className="font-medium text-[#004F33] text-sm">Trust</h5>
                  <p className="text-xs text-gray-600">Building lasting relationships</p>
                </div>
                <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h5 className="font-medium text-[#004F33] text-sm">Teamwork</h5>
                  <p className="text-xs text-gray-600">Collaborative approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* LOVE Values */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#004F33] mb-3 text-center bg-red-50 py-2 rounded-sm">
              LOVE
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-medium text-[#004F33] text-sm">Leadership</h5>
                <p className="text-xs text-gray-600">Inspiring positive change</p>
              </div>
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-medium text-[#004F33] text-sm">Opportunity</h5>
                <p className="text-xs text-gray-600">Creating growth pathways</p>
              </div>
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-medium text-[#004F33] text-sm">Vision</h5>
                <p className="text-xs text-gray-600">Forward-thinking solutions</p>
              </div>
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-[#d0c82a]" />
                  <div>
                    <h5 className="font-medium text-[#004F33] text-sm">Excellence</h5>
                    <p className="text-xs text-gray-600">Uncompromising quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARE Values */}
          <div>
            <h4 className="text-lg font-semibold text-[#004F33] mb-3 text-center bg-green-50 py-2 rounded-sm">
              CARE
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#639E4E]" />
                  <div>
                    <h5 className="font-medium text-[#004F33] text-sm">Community</h5>
                    <p className="text-xs text-gray-600">Supporting local development</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-medium text-[#004F33] text-sm">Authenticity</h5>
                <p className="text-xs text-gray-600">Genuine client commitment</p>
              </div>
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-medium text-[#004F33] text-sm">Respect</h5>
                <p className="text-xs text-gray-600">Honoring diversity & dignity</p>
              </div>
              <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <Leaf size={14} className="text-[#639E4E]" />
                  <div>
                    <h5 className="font-medium text-[#004F33] text-sm">Environmental</h5>
                    <p className="text-xs text-gray-600">Sustainable practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Banner */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-[#004F33] mb-3">Our Philosophy</h4>
          <blockquote className="text-xl font-medium text-[#639E4E] italic max-w-4xl mx-auto">
            "Bridge the gap between service providers and clients while eliminating any possibility of client exploitation."
          </blockquote>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            Working only with vetted professionals • Maintaining transparency in every engagement • 
            Providing value that exceeds investment • Building long-term partnerships based on mutual success
          </p>
        </div>
      </div>
    </div>
            </div>
          </div>
        );
      case 'who-we-serve':
        return (
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#004F33] mb-6">
                  Serving diverse clients across Kenya's growth sectors
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From individual property investors to large agricultural communities, we deliver tailored solutions that meet the unique needs of Kenya's most dynamic sectors.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {whoWeServe.map((segment, index) => (
                  <div key={index} className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-sm flex items-center justify-center bg-gray-50">
                        {segment.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#004F33] mb-3">{segment.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{segment.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-12 rounded-sm">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-medium text-[#004F33] mb-4">Our Impact by the Numbers</h3>
                  <p className="text-lg text-gray-600">Measurable results across all sectors we serve</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-medium text-[#639E4E] mb-2">98%+</div>
                    <div className="text-gray-600 text-sm">Property Occupancy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-medium text-[#639E4E] mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Farmers Empowered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-medium text-[#639E4E] mb-2">150+</div>
                    <div className="text-gray-600 text-sm">Jobs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-medium text-[#639E4E] mb-2">5+</div>
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
        <div className="bg-white pt-24 sm:pt-12 md:pt-24 lg:pt-36 pb-8 sm:pb-12 md:pb-20 lg:pb-6">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mb-8">
            <span className="text-[#48372A] text-sm font-medium tracking-wide uppercase">About US</span>
          </div>
          
    <h1 className="text-5xl font-light text-[#004F33] mb-8 p-2 md:p-4 leading-tight">
      About TLC Homes Services
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-8 items-center">
      <div>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          TLC Homes Services Kenya transforms lives through innovative real estate, agribusiness, hospitality, interior design, and community empowerment. Rooted in Transparency, Love, and Care, we deliver smart homes, sustainable farming, premium bnbs and interior designs. With 98%+ property occupancy and 500+ targeted farmer partnerships, our Nairobi-based company drives economic and social impact across Kenya using technology-driven solutions.
        </p>
      </div>
      <div>
        <img
          src={pool}
          alt="TLC Homes Services"
          className="w-full aspect-video object-cover rounded-sm"
        />
      </div>
    </div>
  </div>
</div>
        <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="bg-gray-50">
          {renderTabContent()}
        </div>
        {/* <div className="py-20" style={{ backgroundColor: '#004F33' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light text-white mb-8">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join thousands who have experienced the TLC difference
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setCurrentModal(services[0])}
                className="inline-flex items-center gap-3 px-8 py-3 text-white font-medium rounded-sm hover:opacity-90 transition-opacity group"
                style={{ backgroundColor: '#639E4E' }}
              >
                Explore Smart Homes
                <ChevronRight size={20} className="transition-transform group-hover:-translate-x-1" />
              </button>
              <button 
                onClick={() => setCurrentModal(services[1])}
                className="px-8 py-3 text-lg font-medium bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded-sm"
              >
                Join Our Farmers Network
              </button>
            </div>
          </div>
        </div> */}
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
      `}</style>
    </>
  );
};

export default Company;