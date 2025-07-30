import React from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../components/ui/Card';
import services from '../data/services.json';

const Services = () => (
  <>
    <Helmet>
      <title>Explore TLC Homes Services - Real Estate, Agriculture, Hospitality</title>
      <meta name="description" content="Discover TLC Homes Services in Kenya - offering innovative real estate, agriculture, and hospitality solutions." />
      <link rel="canonical" href="https://tlchomes.co.ke/services" />
    </Helmet>
    <div className="container mx-auto py-16 px-4 bg-white">
      <h1 className="text-5xl font-bold mb-10 text-green text-center">Our Services</h1>
      <p className="text-center mb-8 text-lg">Explore our diverse portfolio of innovative solutions designed to transform lives and communities.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} title={service.title} description={service.description}>
            <ul className="list-disc pl-6 space-y-1">
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <a href={`/services/${service.id}`} className="mt-4 inline-block text-brown hover:underline">Learn More</a>
          </Card>
        ))}
      </div>
    </div>
  </>
);

export default Services;