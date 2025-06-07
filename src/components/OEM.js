import React from 'react';
import { 
  Factory, 
  Engineering, 
  Science, 
  LocalShipping,
  Verified,
  Speed,
  Support
} from '@mui/icons-material';

const OEM = () => {
  const services = [
    {
      icon: <Factory className="text-4xl text-teal-600" />,
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art manufacturing facilities with advanced equipment and technology.'
    },
    {
      icon: <Engineering className="text-4xl text-teal-600" />,
      title: 'Custom Solutions',
      description: 'Tailored manufacturing solutions to meet your specific requirements and standards.'
    },
    {
      icon: <Science className="text-4xl text-teal-600" />,
      title: 'Quality Control',
      description: 'Rigorous quality control processes ensuring the highest standards of product quality.'
    },
    {
      icon: <LocalShipping className="text-4xl text-teal-600" />,
      title: 'Global Distribution',
      description: 'Efficient logistics and distribution network for timely delivery worldwide.'
    }
  ];

  const capabilities = [
    {
      title: 'Production Capacity',
      details: [
        'State-of-the-art manufacturing facility',
        'Advanced production lines',
        'Automated quality control systems',
        'Scalable production capacity'
      ]
    },
    {
      title: 'Quality Standards',
      details: [
        'ISO 9001:2015 certified',
        'GMP compliant manufacturing',
        'Regular quality audits',
        'Documented quality procedures'
      ]
    },
    {
      title: 'Research & Development',
      details: [
        'Dedicated R&D facility',
        'Innovation-focused team',
        'Product development expertise',
        'Continuous improvement programs'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">OEM Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in pharmaceutical manufacturing and contract manufacturing services.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive OEM solutions tailored to your manufacturing needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive manufacturing capabilities backed by advanced technology and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{capability.title}</h3>
                <ul className="space-y-4">
                  {capability.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <Verified className="text-teal-600 mt-1 mr-2" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our OEM Team</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  Sector 4, Industrial Area<br />
                  Bokaro Steel City, Jharkhand - 827004<br />
                  India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 6542 234567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">oem@medicareplus.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0974834811857!2d86.1484!3d23.6697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423e0d0e1f0a1%3A0x9c6e6c7c8c8c8c8c!2sBokaro%20Steel%20City%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              title="Bokaro Steel City Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our OEM Services</h2>
            <p className="text-xl opacity-90">
              Partner with us for reliable and efficient manufacturing solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <Verified className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="opacity-90">Strict quality control and compliance with international standards</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <Speed className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="opacity-90">Efficient production processes ensuring timely delivery</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <Support className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="opacity-90">Dedicated team of professionals for continuous support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OEM; 