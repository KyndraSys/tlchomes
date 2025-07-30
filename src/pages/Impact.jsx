import React from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../components/ui/Card';

const Impact = () => (
  <>
    <Helmet>
      <title>See TLC Homes’ Impact - Empowering Communities in Kenya</title>
      <meta name="description" content="Learn about TLC Homes' impact on Kenyan communities through jobs, sustainability, and development projects." />
      <link rel="canonical" href="https://tlchomes.co.ke/impact" />
    </Helmet>
    <div className="container mx-auto py-16 px-4 bg-light-brown text-white">
      <h1 className="text-5xl font-bold mb-8">Our Impact</h1>
      <p className="text-lg mb-6">TLC Homes is committed to creating a positive legacy through sustainable development and community empowerment.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-green">500+</h3>
          <p>Farmers Supported</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-green">100+</h3>
          <p>Jobs Created</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-3xl font-bold text-green">50+</h3>
          <p>Projects Completed</p>
        </Card>
      </div>
    </div>
  </>
);

export default Impact;