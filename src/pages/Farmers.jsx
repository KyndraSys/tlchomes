import React, { useState } from 'react';
import { ArrowRight, X, Users, TrendingUp, Leaf, MapPin, Phone, Mail } from 'lucide-react';

// Corrected import path and name to match the file structure
import farmersImage from '../assets/images/sections/farmer.jpg'; // Adjusted to match your path
import farmersImage3 from '../assets/images/sections/online.jpg';
import farmersImage1 from '../assets/images/sections/farmers.jpg';
const Farmers = () => {
  const [activeModal, setActiveModal] = useState(null);

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${farmersImage1})`, // Updated to use farmersImage
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Black overlay with gradient opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/0"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <span className="text-[#d0c82a] text-sm font-medium tracking-wide uppercase">TLC Farmers Market</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Empowering Farmers
            <br />
            <span className="text-[#d0c82a]">Feeding the Nation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We have revolutionized the agricultural value chain by directly
            linking local farmers with major buyers, offering fair opportunities for our farmers, and quality produce to consumers.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#004F33] mb-2">100+</div>
              <p className="text-gray-600 text-lg">Active farmer partnerships across counties</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#004F33] mb-2">KES 2M</div>
              <p className="text-gray-600 text-lg">2025 revenue target supporting rural livelihoods</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-[#004F33] mb-2">100+</div>
              <p className="text-gray-600 text-lg">Direct jobs created in agricultural sector</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Agricultural Value Chain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From farm to table, we're transforming Kenya's agricultural landscape through direct partnerships and innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[#004F33] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Farmer Empowerment</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We partner with over 500 local farmers, offering GAP training, quality seeds, tools, and guaranteed market access via our network.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#004F33] mr-2">•</span> GAP training programs
                </li>
                <li className="flex items-start">
                  <span className="text-[#004F33] mr-2">•</span> Affordable seeds and tools
                </li>
                <li className="flex items-start">
                  <span className="text-[#004F33] mr-2">•</span> Farmer collection centers
                </li>
              </ul>
              <button
                onClick={() => setActiveModal('farmer-support')}
                className="text-[#004F33] font-semibold hover:text-[#006646] inline-flex items-center gap-2 group"
              >
                Learn about farmer support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column: Image with Overlay */}
            <div className="w-full h-full rounded-lg overflow-hidden relative flex-1">
              <img
                src={farmersImage} // Updated to use farmersImage
                alt="TLC Team"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className=" p-8 rounded-lg order-2 md:order-1">
              {/* Right Column: Image with Overlay */}
              <div className="w-full h-full rounded-lg overflow-hidden relative flex-1">
                <img
                  src={farmersImage3} // Updated to use farmersImage
                  alt="TLC Team"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#004F33] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Market Integration</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our quality control and distribution network ensures fresh produce reaches consumers while farmers receive fair prices through direct market linkages.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#004F33] mr-2">•</span>
                  Regional sorting and packaging facilities
                </li>
                <li className="flex items-start">
                  <span className="text-[#004F33] mr-2">•</span>
                  Cold storage and preservation infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-[#004F33] mr-2">•</span>
                  50+ institutional client partnerships
                </li>
              </ul>
              <button
                onClick={() => setActiveModal('market-access')}
                className="text-[#004F33] font-semibold hover:text-[#006646] inline-flex items-center gap-2 group"
              >
                Explore market solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Growth Vision 2027
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scaling impact across Kenya through strategic expansion and technology integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">KES 80M Revenue</h3>
              <p className="text-gray-600">300% growth target by 2027 through expanded operations</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6-County Presence</h3>
              <p className="text-gray-600">Regional expansion across key agricultural counties</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1,500+ Farmers</h3>
              <p className="text-gray-600">Tripled farmer partnerships creating widespread impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004F33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join our network of farmers and partners creating sustainable food systems across Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveModal('farmer-registration')}
              className="bg-white text-[#004F33] px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-50 inline-flex items-center justify-center gap-2 group"
            >
              Register as Farmer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveModal('partnership')}
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-[#004F33] transition-all"
            >
              Partnership Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'platform'}
        onClose={() => setActiveModal(null)}
        title="Farmers Platform Access"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            You're about to access our dedicated farmers platform with fresh produce, market prices, and direct buyer connections.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Platform Features:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Live market prices and trends</li>
              <li>• Direct buyer connections</li>
              <li>• Quality produce showcase</li>
              <li>• Agricultural resources and tips</li>
            </ul>
          </div>
          <button className="w-full bg-[#004F33] text-white py-3 rounded-md font-semibold hover:bg-[#006646] transition-colors">
            Continue to Platform
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'farmer-support'}
        onClose={() => setActiveModal(null)}
        title="Farmer Support Programs"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Comprehensive support system designed to empower farmers with modern agricultural practices and market access.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <Leaf className="w-5 h-5 text-green-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">Training Programs</h4>
                <p className="text-sm text-gray-600">Good Agricultural Practices (GAP) certification and modern farming techniques</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">Collection Centers</h4>
                <p className="text-sm text-gray-600">Convenient pickup points across partner counties</p>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">Location: Malaba Town, Busia County</p>
            <p className="text-sm text-gray-500">Email: farmers@tlchomes.co.ke</p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'market-access'}
        onClose={() => setActiveModal(null)}
        title="Market Access Solutions"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Direct connections between farmers and institutional buyers, eliminating middlemen and ensuring fair prices.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-blue-700">Institutional Clients</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-green-700">Regional Centers</div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Our Buyers Include:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Major supermarket chains</li>
              <li>• Hotels and restaurants</li>
              <li>• Schools and hospitals</li>
              <li>• Food processing companies</li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'farmer-registration'}
        onClose={() => setActiveModal(null)}
        title="Farmer Registration"
      >
        <div className="space-y-4">
          <p className="text-[b00c82a]">
            Join our network of 500+ farmers and gain access to training, quality inputs, and guaranteed market access.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Registration Benefits:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Free GAP training and certification</li>
              <li>• Access to quality seeds and tools</li>
              <li>• Guaranteed market for your produce</li>
              <li>• Technical support and extension services</li>
            </ul>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 mb-2">Contact our team to get started:</p>
            <p className="text-sm text-gray-500">📧 farmers@tlchomes.co.ke</p>
            <p className="text-sm text-gray-500">📞 +254 717 185407</p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'partnership'}
        onClose={() => setActiveModal(null)}
        title="Partnership Opportunities"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Collaborate with us to scale agricultural solutions and create sustainable food systems across Kenya.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Financial Partners</h4>
              <p className="text-sm text-gray-600">Investment opportunities in agricultural infrastructure and technology</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Technology Partners</h4>
              <p className="text-sm text-gray-600">Smart farming solutions and agricultural technology implementation</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Institutional Buyers</h4>
              <p className="text-sm text-gray-600">Direct procurement partnerships for fresh, quality produce</p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">partnerships@tlchomes.co.ke</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Farmers;
