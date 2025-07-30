import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Clock, Shield, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    venture: '',
    primaryRole: '',
    requestType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setFormData({
      firstName: '',
      lastName: '',
      businessEmail: '',
      companyName: '',
      phoneNumber: '',
      venture: '',
      primaryRole: '',
      requestType: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#004f33] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <span className="text-[#d0c82a] text-sm font-medium tracking-wide uppercase">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with our team for inquiries, support, or partnerships across our diverse ventures.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-6" style={{ color: '#004f33' }}>
                Customer Service
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href="tel:+254117781816" className="hover:underline">+254 117781816</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:customersevice@tlchomes.co.ke" className="hover:underline">customersevice@tlchomes.ke</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-6" style={{ color: '#004f33' }}>
                Bookings & Reservations
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href="tel:+254117781817" className="hover:underline">+254 117781817</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:reservations@tlchomes.co.ke" className="hover:underline">reservations@tlchomes.co.ke</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6" style={{ color: '#004f33' }}>
                Property Management
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href="tel:+254117781822" className="hover:underline">+254 117781822</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:info@tlchomes.co.ke" className="hover:underline">info@tlchomes.co.ke</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h2 className="text-2xl font-light mb-8" style={{ color: '#004f33' }}>
              Stakeholder Onboarding Form
            </h2>
            <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    required
                  />
                  {formData.firstName === '' && <span className="text-red-500 text-xs"></span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    required
                  />
                  {formData.lastName === '' && <span className="text-red-500 text-xs"></span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    required
                  />
                  {formData.businessEmail === '' && <span className="text-red-500 text-xs"></span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    required
                  />
                  {formData.phoneNumber === '' && <span className="text-red-500 text-xs"></span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    required
                  />
                  {formData.companyName === '' && <span className="text-red-500 text-xs"></span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Role *</label>
                  <select
                    name="primaryRole"
                    value={formData.primaryRole}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="executive">Executive</option>
                    <option value="manager">Manager</option>
                    <option value="owner">Owner</option>
                    <option value="partner">Partner</option>
                  </select>
                  {formData.primaryRole === '' && <span className="text-red-500 text-xs"></span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Venture *</label>
                  <select
                    name="venture"
                    value={formData.venture}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none bg-blue-100"
                    required
                  >
                    <option value="">Select Venture</option>
                    <option value="realtors_construction">TLC Homes Realtors & Construction</option>
                    <option value="farmers_market">TLC Farmers Market</option>
                    <option value="hotel_stay">TLC Hotel & Stay</option>
                    <option value="interior_design">TLC Interior Design</option>
                    <option value="collective">TLC Collective</option>
                    <option value="foundation">TLC Foundation</option>
                  </select>
                  {formData.venture === '' && <span className="text-red-500 text-xs"></span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Request Type *</label>
                  <select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none bg-blue-100"
                    required
                  >
                    <option value="">Select Request</option>
                    <option value="onboarding">Onboarding Assistance</option>
                    <option value="support">Support Request</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                  {formData.requestType === '' && <span className="text-red-500 text-xs"></span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div></div>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        formData.firstName &&
                        formData.lastName &&
                        formData.businessEmail &&
                        formData.phoneNumber &&
                        formData.companyName &&
                        formData.primaryRole &&
                        formData.venture &&
                        formData.requestType
                      ) {
                        fetch('https://yourdomain.com/api/submit-form.php', { // Replace with your cPanel domain
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(formData),
                        })
                          .then(response => {
                            if (!response.ok) throw new Error('Network response was not ok');
                            return response.json();
                          })
                          .then(data => {
                            alert(data.message || 'Form submitted successfully!');
                            handleSubmit();
                          })
                          .catch(error => {
                            console.error('Error:', error);
                            alert('Failed to submit form. Please try again.');
                          });
                      }
                    }}
                    className="px-8 py-3 text-white font-medium transition-opacity duration-300 hover:opacity-90 mt-4"
                    style={{ backgroundColor: '#004f33' }}
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.businessEmail ||
                      !formData.phoneNumber ||
                      !formData.companyName ||
                      !formData.primaryRole ||
                      !formData.venture ||
                      !formData.requestType
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-gray-200 mx-auto px-4 mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041835.7688751465!2d36.77529415809211!3d-1.748563495125609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47003f008445%3A0x82ca43ab13724672!2sFahrenheit%20100!5e0!3m2!1sen!2ske!4v1753298397349!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TLC Homes Office Location"
        ></iframe>
      </div>

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

export default Contact;