import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const CookieConsent = () => {
  const [show, setShow] = useState(true);

  return show ? (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="fixed bottom-0 left-0 right-0 bg-brown text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg z-50">
        <p className="mb-2 md:mb-0 text-sm">We use cookies to enhance your experience. Learn more in our <a href="/privacy" className="underline hover:text-green">Privacy Policy</a>.</p>
        <button onClick={() => setShow(false)} className="bg-green text-white px-4 py-2 rounded hover:bg-brown mt-2 md:mt-0">Accept Cookies</button>
      </div>
    </>
  ) : null;
};

export default CookieConsent;