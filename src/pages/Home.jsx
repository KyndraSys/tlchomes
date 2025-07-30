import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Play, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Building, 
  Sprout, 
  Hotel, 
  Palette, 
  Truck, 
  Heart, 
  Award, 
  CheckCircle,
  Building2,
  Smartphone,
  Star,
  Shield,
  Leaf
} from 'lucide-react';
import directory from '../assets/images/Sections/directory.jpg';
import landingpage from '../assets/images/Sections/introduction to tlc homes.webp';
import story from '../assets/images/Sections/story.jpg';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const heroSlides = [
    {
      title: "Transforming Lives Through Innovation",
      subtitle: "Leading Kenya's sustainable development with integrated solutions in real estate, agriculture, hospitality, and technology",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Discover Our Vision",
    },
    {
      title: "Smart Homes Revolution",
      subtitle: "Pioneering Kenya's first comprehensive smart homes technology with 10-15% rental premiums and 98%+ occupancy rates",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Explore Smart Solutions",
    },
    {
      title: "Empowering 500+ Farmers",
      subtitle: "Connecting local farmers directly to major buyers while driving food security and economic growth across Kenya",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Join Our Network",
    },
  ];

  const achievements = [
    { icon: TrendingUp, value: "98%+", label: "Occupancy Rate", description: "Across all managed properties" },
    { icon: Users, value: "500+", label: "Farmer Partners", description: "Direct partnerships across counties" },
    { icon: Building, value: "5+", label: "Properties", description: "Premium locations in Nairobi" },
    { icon: Award, value: "3+", label: "Years Retention", description: "Average tenant satisfaction" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Button styling helper
  const getButtonClasses = (variant = 'primary', size = 'default') => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300';

    const sizes = {
      default: 'px-6 py-2 text-lg',
      small: 'px-4 py-2 text-sm',
      large: 'px-8 py-3 text-xl',
    };

    const variants = {
      primary: `bg-[#004F33] text-white hover:bg-[#006c45] focus:outline-none focus:ring-2 focus:ring-[#004F33]`,
      secondary: `bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#48372A] focus:ring-white`,
      cta: `bg-white text-[#639e4e] hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#639e4e]`,
      cta2: `bg-[#48372A] text-white hover:bg-[#5a4a38] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#48372A]`,
    };

    return `${baseStyles} ${sizes[size]} ${variants[variant]}`.trim();
  };

  return (
    <div className="min-h-screen">

<section className="relative bg-[#004f33] text-white pt-24 sm:pt-12 md:pt-24 lg:pt-36 pb-8 sm:pb-12 md:pb-20 lg:pb-6 overflow-visible">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <div className="space-y-4 sm:space-y-6">
          <div className="text-[#d0c82a] text-xs sm:text-sm tracking-wide uppercase font-bold overflow-visible">
            TLC HOMES CORPORATE WEBSITE
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Smart Homes Outlook: <span className="block mt-1 sm:mt-2">Getting a grip on Kenya's future</span>
          </h1>
          
          <div className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed">
            Kenya's smart home market grows from <span className="text-white font-semibold">$63 million in 2025</span> to <span className="text-white font-semibold">$84.5 million by 2029</span>{" "}
            <a
              href="https://www.statista.com/outlook/cmo/smart-home/kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d0c82a]"
            >
              (Statista, 2025)
            </a>, at <span className="text-white font-semibold">7.63% annually</span>. Urban areas like Kilimani and Nairobi drive demand for automated homes and smart Airbnbs.
          </div>
          
          <div className="pt-3 sm:pt-4 mb-6 lg:mb-0">
            <a 
              href="https://drive.google.com/file/d/1KH_P2OWRohC1H7ZYNh4w3PkIQz0LNQud/view?usp=sharing" 
              className="inline-flex items-center bg-[#d0c82a] text-[#48372A] px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-[#d0c82a]/90 transition-colors duration-200 group"
              aria-label="Read TLC Homes' Smart Homes Outlook"
            >
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span>Read the smart homes issue 2025</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center max-w-[800px] max-h-[600px] overflow-hidden">
        <img
          src={landingpage}
          alt="Smart Homes Outlook"
          className="w-auto h-full object-cover"
          style={{ minWidth: "0" }}
        />
      </div>
    </div>
  </div>
</section>



      {/* Ventures Section */}
      <section id="ventures-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6" style={{ color: '#004F33' }}>
              Our Integrated Ventures Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six synergistic ventures creating sustainable growth, community impact, and exceptional returns across Kenya's key development sectors.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TLC Homes Realtors & Construction */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#639E4E' }}>
                  <Building2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>TLC Homes Realtors & Construction</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transforming spaces and building dreams with innovative real estate solutions and sustainable construction, 
                achieving 98%+ occupancy rates across premium Nairobi properties with smart technology integration.
              </p>
              <button 
                onClick={() => toggleSection('realtors-construction')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#639E4E' }}
              >
                {activeSection === 'realtors-construction' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'realtors-construction' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'realtors-construction' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Property Management & Smart Solutions</h4>
                      <p className="text-sm text-gray-600">Hassle-free oversight with smart homes integration, automated security, energy efficiency, and IoT-enabled living achieving 10-15% higher rental yields.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Sustainable Construction</h4>
                      <p className="text-sm text-gray-600">Future-ready homes with green building practices, solar-ready infrastructure, rainwater harvesting, and smart fixtures with modern finishes.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Notable Projects</h4>
                      <p className="text-sm text-gray-600">Heavens Delight Apartments full transformation, Linann Apartment rooftop extension with smart upgrades, and expansion into affordable housing projects.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TLC Farmers Market */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#d0c82a' }}>
                  <Sprout className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>TLC Farmers Market</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fresh, local, and sustainable. Connecting 500+ Kenyan farmers to markets while delivering 
                organic produce directly to homes and businesses, creating 150+ jobs in agribusiness.
              </p>
              <button 
                onClick={() => toggleSection('farmers-market')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#d0c82a' }}
              >
                {activeSection === 'farmers-market' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'farmers-market' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'farmers-market' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Farm-to-Table Supply</h4>
                      <p className="text-sm text-gray-600">Direct sourcing from 500+ local farmers with cold storage and quality control systems, ensuring freshness from farm to fork.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Online Grocery Platform</h4>
                      <p className="text-sm text-gray-600">Order fresh produce via Nyumbanistays Platform integration with seamless delivery and inventory management systems.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Community Impact</h4>
                      <p className="text-sm text-gray-600">500+ farmers empowered with training and fair pricing, targeting KES 80M revenue with 6-county expansion by Year 3.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TLC Hotel & Stay */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#48372A' }}>
                  <Hotel className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>TLC Hotel & Stay</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Where comfort meets innovation. Premium boutique stays and short-term rentals with seamless 
                tech-driven bookings, smart room automation, and exceptional guest experiences.
              </p>
              <button 
                onClick={() => toggleSection('hotel-stay')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#48372A' }}
              >
                {activeSection === 'hotel-stay' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'hotel-stay' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'hotel-stay' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Luxury Accommodations</h4>
                      <p className="text-sm text-gray-600">Premium apartments and hotel suites with corporate stays and event hosting capabilities for discerning guests.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Smart Room Automation</h4>
                      <p className="text-sm text-gray-600">Self-check-in systems, keyless entry, IoT controls, and automated climate management for seamless guest experiences.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Booking Platform Integration</h4>
                      <p className="text-sm text-gray-600">Nyumbanistays booking platform enabling instant reservations with automated guest communication and service optimization.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TLC Interior Design */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#639E4E' }}>
                  <Palette className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>TLC Interior Design</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Spaces that inspire. Award-winning residential and commercial interiors blending aesthetics 
                with functionality, featuring smart home integration and sustainable design practices.
              </p>
              <button 
                onClick={() => toggleSection('interior-design')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#639E4E' }}
              >
                {activeSection === 'interior-design' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'interior-design' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'interior-design' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Smart Home Integration</h4>
                      <p className="text-sm text-gray-600">Automated lighting systems, voice-controlled environments, and IoT-enabled smart fixtures for modern living experiences.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Sustainable Design</h4>
                      <p className="text-sm text-gray-600">Eco-friendly materials, energy-efficient layouts, and sustainable practices creating environmentally conscious spaces.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Featured Projects</h4>
                      <p className="text-sm text-gray-600">Award-winning design for Ajis Kokoto Bar & Restaurant (Siaya) and custom furniture sourcing for residential makeovers.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TLC Collective */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#004F33' }}>
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>TLC Collective</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Efficient, reliable, and scalable supply chain solutions. End-to-end logistics and procurement 
                for businesses and TLC ventures with optimized distribution networks.
              </p>
              <button 
                onClick={() => toggleSection('collective')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#004F33' }}
              >
                {activeSection === 'collective' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'collective' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'collective' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Last-Mile Delivery Solutions</h4>
                      <p className="text-sm text-gray-600">Optimized delivery networks with vendor and inventory management systems for efficient business operations.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Cold Chain Logistics</h4>
                      <p className="text-sm text-gray-600">Temperature-controlled logistics for fresh produce distribution maintaining quality from farm to consumer.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Supply Chain Optimization</h4>
                      <p className="text-sm text-gray-600">Comprehensive procurement solutions and logistics coordination serving TLC ventures and third-party clients.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TLC Foundation */}
            <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: '#639E4E' }}>
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: '#004F33' }}>TLC Foundation</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Empowering communities through youth and women's entrepreneurship programs, environmental 
                conservation initiatives, and digital literacy programs supporting 500+ families annually.
              </p>
              <button 
                onClick={() => toggleSection('foundation')}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#639E4E' }}
              >
                {activeSection === 'foundation' ? 'Show Less' : 'Learn More'}
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeSection === 'foundation' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeSection === 'foundation' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Youth & Women's Programs</h4>
                      <p className="text-sm text-gray-600">Entrepreneurship training, mentorship programs, and business development support for emerging leaders in Kenya.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Environmental Conservation</h4>
                      <p className="text-sm text-gray-600">Sustainable development initiatives, tree planting programs, and environmental education for community awareness.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#004F33' }}>Digital Literacy</h4>
                      <p className="text-sm text-gray-600">Technology training programs and digital empowerment initiatives bridging the digital divide in underserved communities.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#48372A] mb-6">
          From Humble Beginnings to Transformational Impact
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          Founded by Solomon Rimui Kamau, TLC Homes Services Kenya began with a simple yet powerful vision: to transform cleaning work into a career that creates lasting impact. What started with "a mop and a dream" has evolved into Kenya's leading multi-sectoral company.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-[#639e4e] mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-[#48372A] text-sm md:text-base">Transparency, Love, Care</h4>
              <p className="text-gray-600 text-sm md:text-base">Our core values guide every decision and interaction</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-[#639e4e] mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-[#48372A] text-sm md:text-base">Community-Centered Growth</h4>
              <p className="text-sm md:text-base text-gray-600">150+ direct farmers, 500+ indirect opportunities created</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-[#639e4e] mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-[#48372A] text-sm md:text-base">Technology Innovation</h4>
              <p className="text-gray-600 text-sm md:text-base">Pioneer in smart homes and digital platforms</p>
            </div>
          </div>
        </div>
        <a
          href="about/company"
          className="px-8 py-3 text-lg font-medium bg-[#004f33] border-2 border-white text-white hover:bg-[#48372A] hover:text-[#ffffff] transition-colors rounded-sm"
          aria-label="Our story"
        >
          More about us
        </a>
      </div>
      <div className="relative">
        <div className="aspect-w-4 aspect-h-3 w-full h-96">
        <img
  src={story}
  alt="TLC Team"
  className="w-full h-full object-cover rounded-sm shadow-lg"
/>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-sm shadow-md">
          <div className="text-2xl md:text-3xl font-bold text-[#639e4e] mb-2">2019</div>
          <div className="text-gray-700 font-medium text-sm md:text-base">Founded with Vision</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Investment Opportunity */}
      <section className="py-20 bg-[#004f33] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Investment Opportunities
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join us in transforming Kenya's development landscape with 15-25% annual ROI and measurable community impact
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#639e4e]/90 backdrop-blur-sm p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">KES 100M+</h3>
                <p className="opacity-90 text-white">2025 Revenue Target</p>
              </div>
              <div className="bg-[#639e4e]/90 backdrop-blur-sm  p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">15-25%</h3>
                <p className="opacity-90 text-white">Annual ROI</p>
              </div>
              <div className="bg-[#639e4e]/90 backdrop-blur-sm  p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">3-5 Years</h3>
                <p className="opacity-90 text-white">Payback Period</p>
              </div>
            </div>
           <a
  href="https://drive.google.com/file/d/1NTJ6xilz0z59RTVAg9NSPL-rVqBwxmUl/view?usp=sharing"
  class="inline-flex items-center bg-[#d0c82a] text-[#48372A] px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-[#d0c82a] transition-colors duration-200 group"
  aria-label="Explore investment packages"
>
  <svg class="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
  <span>Review our investor pitch</span>
</a>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#48372A] text-white py-8 bg-cover bg-center" style={{ backgroundImage: `url(${directory})` }}>
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-2 lg:px-3">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-2xl font-semibold mb-4 text-[#F5F5DC]">Drivers in Multisectoral Operations</h2>
              <p className="text-[#F5F5DC] text-x leading-relaxed opacity-90">
                <strong>Our purpose is to transform lives through innovation.</strong> As a multi-sectoral company rooted in real estate, agribusiness, hospitality, and supply chain, driven by innovation. We provide solutions that meet Kenya's evolving needs. Since our founding, clients and partners have trusted us to deliver not just quality services, but lasting impact—building a future where every investment supports sustainable growth, community empowerment, and meaningful progress.
              </p>
            </div>
            <div className="hidden lg:block w-px bg-[#639e4e] opacity-30"></div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-[#639E4E] font-semibold text-xs uppercase tracking-wider mb-3">COMPANY</h3>
                <ul className="space-y-2">
                  <li><a href="/services/properties" className="text-white hover:text-[#639E4E] transition-colors text-sm">Property Managers</a></li>
                  <li><a href="/services/farmers" className="text-white hover:text-[#639E4E] transition-colors text-sm">Farmers Markets</a></li>
                  <li><a href="/services/interiordesign" className="text-white hover:text-[#639E4E] transition-colors text-sm">Interior Designers</a></li>
                  <li><a href="/services/procurement" className="text-white hover:text-[#639E4E] transition-colors text-sm">Supply Chains</a></li>
                  <li><a href="/services/bookings" className="text-white hover:text-[#639E4E] transition-colors text-sm">Bookings and Reservations</a></li>
                  <li><a href="/services/construction" className="text-white hover:text-[#639E4E] transition-colors text-sm">Construction Managers</a></li>
                  <li><a href="/contact" className="text-white hover:text-[#639E4E] transition-colors text-sm">Contacts</a></li>
                </ul>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-[#639E4E] font-semibold text-xs uppercase tracking-wider mb-3">PLATFORMS</h3>
                <ul className="space-y-2 mb-6">
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">NyumbaniStays</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Smart Homes</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Farmers Organic Food Stores</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Fine Art Collections</a></li>
                </ul>
                <h3 className="text-[#639E4E] font-semibold text-xs uppercase tracking-wider mb-3">LEGAL</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Refund & Cancellation Policy</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Data Protection & Technology Use Policy</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Health, Safety & Environment (HSE) Policy</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Terms & Conditions (T&Cs)</a></li>
                  <li><a href="#" className="text-white hover:text-[#639E4E] transition-colors text-sm">Service Charter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;