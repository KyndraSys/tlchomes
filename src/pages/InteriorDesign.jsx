import React, { useState } from 'react';
import { Mail, Phone, MapPin, Star, CheckCircle, Users, Award, Lightbulb, Home, Building, Leaf, Smartphone, ArrowRight, Send, User, MessageSquare, Calendar, Palette, Target, Briefcase, X, ExternalLink, Clock, AlertCircle } from 'lucide-react';

const InteriorDesignPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
    description: '',
    style: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.projectType) errors.projectType = 'Please select a project type';
    if (!formData.budget) errors.budget = 'Please select a budget range';
    if (!formData.timeline) errors.timeline = 'Please select a timeline';
    if (!formData.location.trim()) errors.location = 'Project location is required';
    if (!formData.description.trim()) errors.description = 'Project description is required';
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    // Simulate API call with database entry structure
    const databaseEntry = {
      table: 'interior_design_inquiries',
      data: {
        ...formData,
        submitted_at: new Date().toISOString(),
        status: 'pending',
        source: 'website'
      }
    };
    
    // Log the database entry format for integration
    console.log('Database Entry Format:', databaseEntry);
    console.log('API Endpoint: POST /api/inquiries');
    console.log('Headers: { "Content-Type": "application/json" }');
    
    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        location: '',
        description: '',
        style: ''
      });
    }, 2000);
  };

  const expertiseAreas = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Luxury Residential Design",
      description: "Transform your sanctuary with bespoke solutions that reflect your lifestyle and elevate your everyday living experience."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Excellence",
      description: "Create inspiring work environments that boost productivity while showcasing your brand's unique identity."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Innovation",
      description: "Eco-conscious design that harmonizes environmental responsibility with stunning aesthetics."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Living Integration",
      description: "Seamlessly blend cutting-edge technology with timeless design for the modern lifestyle."
    }
  ];

  const projects = [
    {
      title: "TLC Penthouse Collection",
      category: "Luxury Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description: "Sophisticated penthouse design showcasing panoramic city views with contemporary elegance."
    },
    {
      title: "Ajis Kokoto Restaurant",
      category: "Commercial Hospitality",
      location: "Siaya",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Award-winning restaurant interior that captures authentic Kenyan culture with modern sophistication."
    },
    {
      title: "Executive Office Suite",
      category: "Corporate Design",
      location: "Nairobi CBD",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Premium office space designed for productivity, collaboration, and executive presence."
    }
  ];

  const careerOpportunities = [
    {
      title: "Senior Interior Designer",
      location: "Nairobi/Kiambu",
      type: "Full-time",
      experience: "5+ years",
      status: "closed",
      skills: ["Space Planning", "3D Visualization", "Client Relations", "Project Management"],
      description: "Lead transformative residential and commercial projects with our award-winning creative team."
    },
    {
      title: "Commercial Design Specialist",
      location: "Coastal Region",
      type: "Full-time",
      experience: "3+ years",
      status: "closed",
      skills: ["Commercial Planning", "Hospitality Design", "Sustainable Practices", "CAD Software"],
      description: "Shape the future of hospitality and retail experiences along Kenya's stunning coastline."
    },
    {
      title: "Design Consultant",
      location: "Central Kenya",
      type: "Contract",
      experience: "2+ years",
      status: "closed",
      skills: ["Client Consultation", "Design Concepts", "Material Selection", "Furniture Sourcing"],
      description: "Partner with discerning clients to deliver exceptional bespoke interior solutions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      location: "Kiambu",
      rating: 5,
      text: "TLC didn't just redesign our home—they transformed our entire lifestyle. Their sustainable approach and attention to detail exceeded every expectation."
    },
    {
      name: "David Ochieng",
      location: "Nairobi",
      rating: 5,
      text: "Exceptional professionalism and innovative vision. Our office space now inspires creativity and reflects our company's forward-thinking culture."
    },
    {
      name: "Grace Muthoni",
      location: "Thika",
      rating: 5,
      text: "The smart home integration was flawless. TLC's expertise in blending technology with beautiful design is truly unmatched in Kenya."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
   <section className="relative text-white pt-24 sm:pt-12 md:pt-24 lg:pt-36 pb-8 sm:pb-12 md:pb-20 lg:pb-6 overflow-visible">
  <div
    className="absolute inset-0 transition-all duration-1000 ease-in-out"
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
    <div className="max-w-4xl">
      <div className="mb-8">
        <span className="text-white text-sm font-medium tracking-wide uppercase">Interior Design Studio</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
        Design.
        <br />
        <span className="text-[#639e4e]">Transform.</span>
        <br />
        Inspire.
      </h1>
      <div className="transition-all duration-500 ease-in-out">
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          We craft extraordinary spaces that tell your story, enhance your lifestyle, and inspire your daily journey across Kenya.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://www.example.com/product-catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="View product catalog"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span>Explore Our Product Catalog</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
    </div>
  </div>
</section>
      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004f33] mb-4">Signature Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our award-winning designs across Kenya</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[#639e4e] bg-[#639e4e]/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.location && (
                      <span className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#004f33]">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <button className="text-[#639e4e] font-medium hover:text-[#004f33] transition-colors flex items-center group">
                    Explore Project 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Integration */}
      <section className="py-20 bg-[#004f33] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Integrated Excellence</h2>
            <p className="text-xl mb-12 text-gray-200">
              Our design expertise amplifies every TLC venture, creating cohesive experiences that maximize value and delight across our entire portfolio.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Target className="w-8 h-8" />, title: "Property Value Maximization", desc: "Strategic design that elevates real estate investments" },
                { icon: <Users className="w-8 h-8" />, title: "Exceptional Guest Experiences", desc: "Memorable hospitality environments that inspire return visits" },
                { icon: <Lightbulb className="w-8 h-8" />, title: "Functional Innovation", desc: "Smart space optimization for maximum operational efficiency" },
                { icon: <Leaf className="w-8 h-8" />, title: "Sustainable Leadership", desc: "Eco-conscious design setting industry standards" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-[#639e4e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-[#639e4e] transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004f33] mb-4">Shape the Future of Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of visionary designers and help us craft extraordinary spaces that inspire and transform lives across Kenya.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {careerOpportunities.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative">
                <div className="flex items-center justify-between mb-4">
                  <Briefcase className="w-8 h-8 text-[#639e4e]" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full">
                      Position Closed
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#004f33]">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Experience: {job.experience}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-[#004f33] mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-[#639e4e]/10 text-[#639e4e] px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
  href="/careers"
  className="w-full bg-[#639e4e] text-white py-3 rounded-lg flex items-center justify-center hover:bg-[#004f33] transition-colors duration-200"
  aria-label="View all careers"
>
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
  </svg>
  View All Careers
</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004f33] mb-4">Voices of Transformation</h2>
            <p className="text-xl text-gray-600">Stories from clients whose lives we've transformed through design</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#639e4e] rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004f33]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004f33] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Connect with our top designers and begin your journey to extraordinary living.
            </p>
            <button
  onClick={() => setShowModal(true)}
  className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 group"
  aria-label="Get connected to our top designers"
>
  <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
  <span>Get Connected to Our Top Designers</span>
</button>
          </div>
        </div>
      </section>

     

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex">
              {/* Left side - Image */}
              <div className="hidden md:block w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop" 
                  alt="Luxury Interior Design"
                  className="w-full h-full object-cover rounded-l-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-l-2xl"></div>
              </div>
              
              {/* Right side - Form */}
              <div className="w-full md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#004f33]">Start Your Design Journey</h2>
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      setSubmitStatus('');
                      setFormErrors({});
                    }}
                    className="text-gray-500 hover:text-[#004f33] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#004f33] mb-4">We're Excited to Work With You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your design inquiry has been received. Our expert team will contact you within 24 hours to discuss your vision and next steps.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitStatus('');
                        setShowModal(false);
                      }}
                      className="bg-[#639e4e] text-white px-6 py-3 rounded-lg hover:bg-[#004f33] transition-colors"
                    >
                      Perfect, Thank You!
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Your full name"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="your@email.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="+254 7XX XXX XXX"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Location *</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.location ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="City, County"
                        />
                        {formErrors.location && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {formErrors.location}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.projectType ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select project type</option>
                          <option value="residential">Residential Design</option>
                          <option value="commercial">Commercial Design</option>
                          <option value="hospitality">Hospitality Design</option>
                          <option value="office">Office Design</option>
                          <option value="retail">Retail Design</option>
                          <option value="renovation">Renovation</option>
                        </select>
                        {formErrors.projectType && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {formErrors.projectType}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.budget ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select budget range</option>
                          <option value="500k-1m">KES 500K - 1M</option>
                          <option value="1m-2m">KES 1M - 2M</option>
                          <option value="2m-5m">KES 2M - 5M</option>
                          <option value="5m+">KES 5M+</option>
                        </select>
                        {formErrors.budget && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {formErrors.budget}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.timeline ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select timeline</option>
                        <option value="1-3 months">1-3 Months</option>
                        <option value="3-6 months">3-6 Months</option>
                        <option value="6-12 months">6-12 Months</option>
                        <option value="1+ year">1+ Year</option>
                      </select>
                      {formErrors.timeline && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {formErrors.timeline}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Style (Optional)</label>
                      <input
                        type="text"
                        name="style"
                        value={formData.style}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent"
                        placeholder="Contemporary, Minimalist, Traditional, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#639e4e] focus:border-transparent ${formErrors.description ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Tell us about your vision, needs, and any specific requirements..."
                      ></textarea>
                      {formErrors.description && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {formErrors.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#639e4e] text-white py-3 rounded-lg font-semibold hover:bg-[#004f33] transition-colors flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Design Inquiry
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our <a href="#" className="text-[#639e4e] hover:underline">Privacy Policy</a> and consent to being contacted by our design team.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteriorDesignPage;