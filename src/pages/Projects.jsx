import React, { useState, useEffect } from 'react';

// Layout Wrappers - Direct import from Layout.jsx file
import Layout, { Section, Container, HeroSection, SectionTitle } from '@components/Layout/Layout';
import projectsimg from '../assets/images/Sections/project.jpg';

// Icons (Lucide React)
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Building, 
  Home, 
  Leaf, 
  Users, 
  MapPin, 
  Calendar, 
  ExternalLink 
} from 'lucide-react';

const ProjectsPage = () => {
  const [expandedProjects, setExpandedProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Construction', 'Interior Design', 'Smart Homes', 'Property Management'];

  const featuredProjects = [
    {
      id: 1,
      title: "Heavens Delight Apartments",
      category: "Construction",
      location: "Nairobi",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Complete transformation of residential complex with smart home integration",
      highlights: ["98% occupancy rate", "Smart security systems", "Energy-efficient design"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Linann Apartment Rooftop Extension",
      category: "Construction",
      location: "Kasarani",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Innovative rooftop extension maximizing space and adding premium units",
      highlights: ["Space optimization", "Premium finishes", "Structural engineering"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Ajis Kokoto Bar & Restaurant",
      category: "Interior Design",
      location: "Siyana",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Award-winning commercial interior design creating exceptional dining experience",
      highlights: ["Commercial excellence", "Unique ambiance", "Functional design"],
      status: "Completed"
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 4,
      title: "Smart Homes Pilot Program",
      category: "Smart Homes",
      location: "Nairobi",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Revolutionary smart home technology implementation across 5 properties",
      highlights: ["10-15% rental premiums", "IoT integration", "Energy savings"],
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Sustainable Housing Development",
      category: "Construction",
      location: "Kiambu",
      date: "2025",
      image: "/api/placeholder/600/400",
      description: "Eco-friendly residential development with renewable energy systems",
      highlights: ["Solar integration", "Rainwater harvesting", "Green building"],
      status: "Planning"
    },
    {
      id: 6,
      title: "Corporate Office Makeover",
      category: "Interior Design",
      location: "Nairobi CBD",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Modern office space transformation promoting productivity and wellness",
      highlights: ["Open concept", "Natural lighting", "Ergonomic design"],
      status: "Completed"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? (expandedProjects ? allProjects : featuredProjects)
    : (expandedProjects ? allProjects : featuredProjects).filter(project => project.category === selectedCategory);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white pt-40 pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${projectsimg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <span className="text-amber-600 text-sm tracking-wide uppercase font-bold">
              Portfolio
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-300 max-w-4xl leading-relaxed">
            Discover our portfolio of exceptional projects that blend innovative design,
            sustainable practices, and cutting-edge technology across Kenya.
          </p>
        </div>
      </div>

      {/* Project Categories and Projects Section */}
      <div className="py-24 bg-[#48372A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Categories Section */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#004f33] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#004f33] font-medium">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#004f33] rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <button className="text-[#004f33] font-medium hover:text-[#006644] transition-colors flex items-center">
                    View Details <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          <div className="text-center">
            <button
              onClick={() => setExpandedProjects(!expandedProjects)}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              {expandedProjects ? (
                <>
                  Show Less Projects
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View All Projects
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* TLC Homes Services Principles Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              The TLC Homes Services principles
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-4xl">
              TLC Homes Services' purpose is to help more and more people experience exceptional living through innovative design and sustainable practices.
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none mb-16">
            <p className="text-gray-700 leading-relaxed mb-8">
              We rely on our principles to guide how we interact with each other, our clients, the communities 
              in which we operate, and all of our other stakeholders.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These principles represent our core values, our aspirations, and our cultural language – lived 
              and embraced by every employee at our firm.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#004f33] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Building className="w-8 h-8 text-[#004f33]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Construction</h3>
              <p className="text-gray-600 mb-8">
                Leveraging cutting-edge technology and sustainable materials to create 
                buildings that are not just structures, but intelligent living spaces.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Energy Efficiency</span>
                  <span className="font-semibold">20-30% improvement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Smart Integration</span>
                  <span className="font-semibold">100% of new projects</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#639e4e] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Leaf className="w-8 h-8 text-[#639e4e]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainable Design</h3>
              <p className="text-gray-600 mb-8">
                Every project incorporates eco-friendly practices, renewable energy solutions, 
                and sustainable materials to minimize environmental impact.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbon Reduction</span>
                  <span className="font-semibold">35% average</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Renewable Energy</span>
                  <span className="font-semibold">Solar integrated</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#48372A] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-[#48372A]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Impact</h3>
              <p className="text-gray-600 mb-8">
                Our projects create lasting positive impact on communities through job creation, 
                skills development, and improved living standards.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Direct Jobs</span>
                  <span className="font-semibold">150+ created</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenant Satisfaction</span>
                  <span className="font-semibold">95%+ rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-16 text-center">Our Impact by Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#004f33] mb-3">98%+</div>
                <p className="text-gray-600">Occupancy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#004f33] mb-3">5+</div>
                <p className="text-gray-600">Properties Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#004f33] mb-3">3+</div>
                <p className="text-gray-600">Years Avg. Retention</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#004f33] mb-3">15%</div>
                <p className="text-gray-600">Smart Home Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start Your Project Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your space? Let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="construction">Construction</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="smart-homes">Smart Homes</option>
                      <option value="property-management">Property Management</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1m">Under KES 1M</option>
                      <option value="1m-5m">KES 1M - 5M</option>
                      <option value="5m-10m">KES 5M - 10M</option>
                      <option value="10m-plus">KES 10M+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f33] focus:border-transparent"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <p className="text-sm text-gray-600">
                    * Required information | <a href="#" className="text-[#004f33] hover:underline">Read our Privacy Policy</a>
                  </p>
                  <button
                    type="submit"
                    className="bg-[#004f33] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#006644] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Investor Focused */}
<div className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-6 text-black">Investor Relations</h2>
    <p className="text-xl mb-10 text-[#004F33] opacity-90 max-w-3xl mx-auto">
      Discover the latest opportunities and updates for investors interested in TLC Homes Services. Stay informed about our growth, project pipeline, and how you can be part of our mission to redefine modern services in Kenya.
    </p>
    <a
      href="/investors"
      className="inline-flex items-center px-10 py-4 bg-[#639E4E] text-white font-semibold rounded-lg hover:bg-[#558C44] transition-colors shadow-lg"
    >
      Explore Investment Options
      <ArrowRight className="w-5 h-5 ml-2" />
    </a>
  </div>
</div>

    </div>
  );
};

export default ProjectsPage;