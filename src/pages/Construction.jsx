import React, { useState } from 'react';
import { Building, Users, Leaf, ArrowRight, Download, CheckCircle, Calculator, FileText, Phone, Mail, MapPin, Clock, Award, Shield, Hammer, Home, TreePine, Zap, ChevronRight, Star, Target, Lightbulb, Settings } from 'lucide-react';
import projectsImage from '../assets/images/Sections/projects.jpg';
   import { Folder, Globe} from "lucide-react";

const Construction = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Property Extensions & Completions",
      description: "Expert completion of unfinished properties and strategic extensions including rooftops, parking areas, and structural additions.",
      features: ["Rooftop extensions", "Parking lot construction", "Structural completions", "Foundation work"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Tailored Homes for Middle Class Families",
      description: "Modern, sustainable homes designed for young professionals with contemporary features and smart integrations.",
      features: ["Contemporary design", "Smart home ready", "Energy efficient", "Affordable pricing"]
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Property Renovation & Revamping",
      description: "Complete bungalow renovations with landscaping, smart home integration, and eco-friendly upgrades.",
      features: ["Landscaping & lawns", "Smart home integration", "Eco-friendly features", "Interior upgrades"]
    }
  ];

  const projectPhases = [
    {
      phase: "01",
      title: "Initial Consultation",
      description: "Comprehensive site assessment and project planning",
      duration: "1-2 weeks"
    },
    {
      phase: "02",
      title: "Design & Planning",
      description: "Detailed architectural plans and material specifications",
      duration: "2-3 weeks"
    },
    {
      phase: "03",
      title: "Budget & Timeline",
      description: "Transparent cost breakdown and project schedule",
      duration: "1 week"
    },
    {
      phase: "04",
      title: "Construction",
      description: "Quality execution with regular progress updates",
      duration: "Variable"
    },
    {
      phase: "05",
      title: "Handover",
      description: "Final inspection and project documentation",
      duration: "1 week"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Project Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
   <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 lg:pt-40 lg:pb-16">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${projectsImage})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="text-white text-sm font-semibold tracking-wider uppercase">
          TLC CONSTRUCTION GROUP
        </div>
        <p className="text-white text-xl leading-relaxed max-w-lg">
          Today's construction landscape demands precision, innovation, and transparency. 
          TLC Construction Group delivers comprehensive construction solutions—from property 
          extensions to complete renovations—ensuring quality, sustainability, and client satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">

          
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#004F33]/80 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <Building className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/80">Sustainable Materials</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Project Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Construction Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to modern needs with transparency, quality, and innovation at the forefront
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#004F33]/20 transition-all duration-300 group">
                <div className="text-[#004F33] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#004F33] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Project Spotlight - Linann Apartment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Spotlight</h2>
            <p className="text-lg text-gray-600">Linann Apartment - Kasarani Construction Project</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-600 mb-6">
                  Complete renovation and extension of Linann Apartment in Kasarani, including rooftop platform 
                  construction, interior wall renovations, and perimeter gate installation.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#004F33]">KES 530,000</div>
                    <div className="text-sm text-gray-600">Project Budget</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#004F33]">7 Days</div>
                    <div className="text-sm text-gray-600">Completion Time</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#004F33] mr-3" />
                    <span className="text-gray-700">Rooftop platform extension</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#004F33] mr-3" />
                    <span className="text-gray-700">Interior wall renovation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#004F33] mr-3" />
                    <span className="text-gray-700">Perimeter gate construction</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#004F33] mr-3" />
                    <span className="text-gray-700">Drainage system optimization</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-[#004F33] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006646] transition-colors duration-300 inline-flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Project Report
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Budget Breakdown</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Materials</span>
                    <span className="font-semibold">KES 270,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Labour</span>
                    <span className="font-semibold">KES 221,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Miscellaneous</span>
                    <span className="font-semibold">KES 13,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Company Fee</span>
                    <span className="font-semibold">KES 26,000</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#004F33]">KES 530,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#004F33] rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Project Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Complete transparency in budget management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Adaptive construction approach for optimal results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Weather-resistant construction planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/80 mr-2">•</span>
                    <span>Detailed project documentation and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Construction Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach ensuring quality, transparency, and timely delivery
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {projectPhases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#004F33] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{phase.description}</p>
                  <div className="text-[#004F33] text-sm font-semibold">{phase.duration}</div>
                </div>
                
                {index < projectPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TLC Construction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TLC Construction Group</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering exceptional construction services with transparency, innovation, and quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Precision & Quality</h3>
              <p className="text-gray-600">
                Every project executed with meticulous attention to detail and highest quality standards
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Transparency</h3>
              <p className="text-gray-600">
                Detailed project documentation, budget breakdowns, and progress reporting throughout
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Driven</h3>
              <p className="text-gray-600">
                Cutting-edge construction techniques and smart home integration capabilities
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable materials and environmentally conscious construction practices
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                Efficient project management ensuring completion within agreed timelines
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Settings className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adaptive Solutions</h3>
              <p className="text-gray-600">
                Flexible approach to construction challenges with innovative problem-solving
              </p>
            </div>
          </div>
        </div>
      </section>





 


 <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources & Downloads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive construction resources and project documentation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Smart Homes Project Management Guide Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-800 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Folder className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Smart Homes Project Management Guide
            </h3>
            <p className="text-gray-600 mb-6">
              Step-by-step project management framework for smart home construction and installation projects
            </p>
            <a
              href="https://drive.google.com/file/d/1e_kBn4IAunQQBWn9nBNQuXslUjyatiWo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#639e4e] text-white px-4 py-2 rounded font-semibold hover:bg-[#004f33] transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Project Guide
            </a>
          </div>

          {/* TLC Client-Project Onboarding Form Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-800 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              TLC Client-Project Onboarding Form
            </h3>
            <p className="text-gray-600 mb-6">
              Comprehensive onboarding form for new clients and project initiation documentation
            </p>
            <a
              href="https://drive.google.com/file/d/1y-RYFxzKjt0Lth55I47sjMtTASt2LBDu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#639e4e] text-white px-4 py-2 rounded font-semibold hover:bg-[#004f33] transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Onboarding Form
            </a>
          </div>

          {/* Smart Homes Outlook in Kenya Issue Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-800 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Smart Homes Outlook in Kenya Issue
            </h3>
            <p className="text-gray-600 mb-6">
              Insights on the latest trends and developments in smart homes within Kenya
            </p>
            <a
              href="https://drive.google.com/file/d/1KH_P2OWRohC1H7ZYNh4w3PkIQz0LNQud/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#639e4e] text-white px-4 py-2 rounded font-semibold hover:bg-[#004f33] transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Kenya Report
            </a>
          </div>
        </div>
      </div>
    </section>
  

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Construction Project</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our construction experts to discuss your project requirements
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="extension">Property Extension</option>
                    <option value="completion">Property Completion</option>
                    <option value="renovation">Renovation & Revamping</option>
                    <option value="new-construction">New Construction</option>
                    <option value="landscaping">Landscaping & Outdoor</option>
                    <option value="smart-home">Smart Home Integration</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500k">Under KES 500K</option>
                    <option value="500k-1m">KES 500K - 1M</option>
                    <option value="1m-2m">KES 1M - 2M</option>
                    <option value="2m-5m">KES 2M - 5M</option>
                    <option value="over-5m">Over KES 5M</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Within 1 month)</option>
                    <option value="1-3months">1-3 Months</option>
                    <option value="3-6months">3-6 Months</option>
                    <option value="6-12months">6-12 Months</option>
                    <option value="planning">Planning Phase</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  placeholder="Enter project location (e.g., Nairobi, Kiambu)"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004F33] focus:border-transparent"
                  placeholder="Describe your project requirements, goals, and any specific features you'd like to include..."
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-4 w-4 text-[#004F33] focus:ring-[#004F33] border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-[#004F33] hover:underline">Terms of Service</a> and <a href="#" className="text-[#004F33] hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#004F33] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-[#006646] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Submit Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

     {/* Office Information */}
           <section className="py-20 bg-[#004F33] text-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Head Office</h2>
                 <p className="text-lg text-white/80 max-w-2xl mx-auto">
                   Visit or contact our head office for all your inquiries and support needs.
                 </p>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8">
                 <div className="text-center">
                   <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                     <MapPin className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Address</h3>
                   <p className="text-white/80">Highway View Apartments, Thika Road</p>
                   <p className="text-white/80">P.O BOX 234, 01001 - KALIMONI</p>
                   <p className="text-white/80">Juja, Kiambu County, Kenya</p>
                 </div>
                 
                 <div className="text-center">
                   <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                     <Clock className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                   <p className="text-white/80">Monday - Friday: 8:00 AM - 6:00 PM</p>
                   <p className="text-white/80">Saturday: 9:00 AM - 4:00 PM</p>
                   <p className="text-white/80">Sunday: Closed</p>
                 </div>
                 
                 <div className="text-center">
                   <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                     <Phone className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">General Contact</h3>
                   <p className="text-white/80"><a href="tel:+254117781822" className="hover:underline">+254 117781822</a></p>
                   <p className="text-white/80"><a href="mailto:info@tlchomes.co.ke" className="hover:underline">info@tlchomes.co.ke</a></p>
                 </div>
               </div>
               
               <div className="text-center mt-16">
                 <div className="inline-flex items-center gap-6 text-white/60">
                   <div className="flex items-center gap-2">
                     <Shield className="w-5 h-5" />
                     <span>Licensed & Insured</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Award className="w-5 h-5" />
                     <span>Quality Guaranteed</span>
                   </div>
                 </div>
               </div>
             </div>
           </section>
     
    </div>
  );
};

export default Construction;