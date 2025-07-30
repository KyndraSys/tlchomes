import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logo1 from '../../assets/images/logos/favicon.png';
import kyndra from '../../assets/images/vendor/kyndra.png';

const Footer = () => (
  <>
    <Helmet>
      <link rel="canonical" href="https://tlchomes.co.ke/" />
    </Helmet>
    <footer className="bg-[#004f33] text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logo1}
              alt="TLC Homes Kenya Logo"
              className="h-24"
            />
            <p className="mb-2 text-gray-300"> TLC Home Services Kenya Ltd helps Kenyans build smarter homes, grow sustainable farms, streamline procurement, and uplift local communities. </p>
            <p className="text-gray-300">Email: <a href="mailto:customersevice@tlchomes.co.ke" className="text-green hover:underline">customersevice@tlchomes.co.ke</a></p>
            <p className="text-gray-300">Phone: <a href="tel:+254117781816" className="text-green hover:underline">+254 117 781 816</a></p>
            <p className="text-gray-300">Address: Nairobi, Kenya</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-garamond">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services/properties" className="hover:underline transition-colors">Property Management</Link></li>
              <li><Link to="/services/farmers" className="hover:underline transition-colors">Agriculture & Agribusines</Link></li>
              <li><Link to="/services/bookings" className="hover:underline transition-colors">Bookings and Stays</Link></li>
              <li><Link to="/services/interiordesign" className="hover:underline transition-colors">Interior Design</Link></li>
              <li><Link to="/services/construction" className="hover:underline transition-colors">TLC Construction</Link></li>
              <li><Link to="/services/procurement" className="hover:underline transition-colors">Logistics & Procurement</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-garamond">Getting Started</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services/bookings" className="hover:underline transition-colors">Book a bnb near you</Link></li>
              <li><Link to="/services/farmers" className="hover:underline transition-colors">Farmer's choice hub</Link></li>
              <li><Link to="/smart-homes" className="hover:underline transition-colors">Invest in smart homes</Link></li>
              <li><Link to="/services/procurement" className="hover:underline transition-colors">Find a lasting procurement partner</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-garamond">Connect</h4>
            <p className="mb-4 text-gray-300">Stay updated with our latest projects and news.</p>
            <div className="flex space-x-4 mb-4">
              <a href="https://web.facebook.com/people/TLC-HOMES/61565214030939/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-green hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://instagram.com/tlchomeshttps://www.instagram.com/tlchomes.ke/" target="_blank" rel="noopener noreferrer" className="text-green hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.691 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.225-.148-4.771-1.691-4.919-4.919-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.691-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.006 1.688-.072 4.947-.2 4.358-2.618 6.78-6.98 6.98-1.28.058-1.688.006-4.947-.072-4.358-.2-6.78-2.618-6.979-6.98-.059-1.28.006-1.688.072-4.947.2-4.358 2.618-6.78 6.98-6.98 1.28-.058 1.688-.006 4.947.072z"/>
                </svg>
              </a>
              <a href="https://twitter.com/tlchomes" target="_blank" rel="noopener noreferrer" className="text-green hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 rounded-l text-black w-full focus:outline-none focus:ring-2 focus:ring-green" 
              />
              <button className="bg-green text-white p-2 rounded-r hover:bg-dark-green transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2025 TLC Homes Services Kenya Ltd. All rights reserved. 
            <Link to="/privacy" className="text-green hover:underline ml-1">Privacy Policy</Link>
          </p>
          <div className="powered-by flex justify-center items-center space-x-3 mt-4">
            <span className="text-black hover:text-[#ff6200] hover:text-shadow-[0_0_5px_#ff6200,0_0_10px_#ff6200] text-base">Powered by</span>
            <a href="" target="_blank" className="text-black hover:text-[#ff6200] hover:text-shadow-[0_0_5px_#ff6200,0_0_10px_#ff6200]">
              <img src={kyndra} alt="Kyndra Systems" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;