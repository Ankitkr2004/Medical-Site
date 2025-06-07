import React from 'react';
import { 
  LocalPharmacy, 
  HealthAndSafety, 
  People, 
  EmojiEvents,
  Verified,
  Speed,
  Support
} from '@mui/icons-material';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: <Verified className="text-4xl text-teal-600" />,
      title: 'Quality Assurance',
      description: 'We ensure all our products meet the highest quality standards and are sourced from authorized manufacturers.'
    },
    {
      icon: <Speed className="text-4xl text-teal-600" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service to ensure you get your medicines when you need them.'
    },
    {
      icon: <Support className="text-4xl text-teal-600" />,
      title: 'Expert Support',
      description: 'Our team of healthcare professionals is always ready to assist you with any queries.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediCare Plus</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in healthcare, providing quality medicines and medical supplies with care and convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <LocalPharmacy className="text-4xl text-teal-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg">
              To provide accessible, affordable, and high-quality healthcare products to everyone, 
              ensuring better health outcomes for our community.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <HealthAndSafety className="text-4xl text-teal-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg">
              To be the most trusted healthcare partner, known for our commitment to quality, 
              customer service, and community well-being.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who lead our organization with expertise and passion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
            <p className="text-teal-600 mb-4">Chief Medical Officer</p>
            <p className="text-gray-600">
              With over 15 years of experience in healthcare management and pharmaceutical expertise.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Sharma</h3>
            <p className="text-teal-600 mb-4">Operations Director</p>
            <p className="text-gray-600">
              Leading our operations with a focus on efficiency and customer satisfaction.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Patel</h3>
            <p className="text-teal-600 mb-4">Quality Assurance Head</p>
            <p className="text-gray-600">
              Ensuring the highest standards of quality in all our products and services.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90">
              Recognized for excellence in healthcare service and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <EmojiEvents className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Pharmacy 2023</h3>
              <p className="opacity-90">Awarded by Healthcare Excellence Forum</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <People className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Choice Award</h3>
              <p className="opacity-90">Recognized for outstanding customer service</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <Verified className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="opacity-90">Certified by International Quality Standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 