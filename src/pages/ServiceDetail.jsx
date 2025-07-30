import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import services from '../data/services.json';
import Button from '../src/components/ui/Button';

const ServiceDetail = () => {
  const { venture } = useParams();
  const data = services.find((s) => s.id === venture);

  if (!data) {
    return (
      <div className="container mx-auto py-16 px-4 text-center bg-white">
        <h1 className="text-4xl font-bold text-green">Service Not Found</h1>
        <p className="mt-4">The requested service could not be located. Please check the URL or return home.</p>
        <Button href="/">Go Back Home</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Details on {data.title} by TLC Homes</title>
        <meta name="description" content={`Learn about ${data.title} - a flagship service by TLC Homes offering innovative solutions in Kenya.`} />
        <link rel="canonical" href={`https://tlchomes.co.ke/services/${venture}`} />
      </Helmet>
      <div className="container mx-auto py-16 px-4 bg-light-brown text-white">
        <h1 className="text-5xl font-bold mb-8">{data.title}</h1>
        <p className="text-lg mb-6">{data.description}</p>
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          {data.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <Button href="/contact" className="mt-8">Contact Us</Button>
      </div>
    </>
  );
};

export default ServiceDetail;