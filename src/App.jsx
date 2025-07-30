import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Company from './pages/Company'; 
import Leadership from './pages/Leadership';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Farmers from './pages/Farmers';
import InteriorDesign from './pages/InteriorDesign';
import Bookings from './pages/Bookings';
import Procurement from './pages/Procurement';
import Construction from './pages/Construction';
import Innovation from './pages/Innovation';
import Projects from './pages/Projects';
import Impact from './pages/Impact';
import Investors from './pages/Investors';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
// import CookieConsent from './components/modals/CookieConsent';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/company" element={<Company />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/leadership/:leaderId?" element={<Leadership />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/properties" element={<Properties />} />
                        <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/farmers" element={<Farmers />} />
            <Route path="/services/interiordesign" element={<InteriorDesign />} />
            <Route path="/services/bookings" element={<Bookings />} />
            <Route path="/services/procurement" element={<Procurement />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/impact" element={<Impact />} />
                <Route path="/projects" element={<Projects />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/nyumbanipay" element={<div>Coming Soon: NyumbaniPay</div>} />
            <Route path="/nyumbanistays" element={<div>Coming Soon: NyumbaniStay</div>} />
            <Route path="/smart-homes" element={<div>Coming Soon: Smart Homes</div>} />
            <Route path="/local-websites" element={<div>Coming Soon: Local Websites</div>} />

            
          </Routes>
        </main>
        <Footer />
        {/* <CookieConsent /> */}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;