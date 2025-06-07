import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocalHospitalIcon, LocalPharmacyIcon, LocalShippingIcon, SecurityIcon, PersonIcon, StarIcon } from '@mui/icons-material';

const HeroSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8fafc;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  text-align: center;
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const HeroSubtitle = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const HeroButton = styled(Link)`
  padding: 0.75rem 1rem;
  border: 2px solid #2563eb;
  border-radius: 9999px;
  background-color: ${props => props.secondary ? 'transparent' : '#2563eb'};
  color: ${props => props.secondary ? '#2563eb' : 'white'};
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.secondary ? '#2563eb' : '#1e40af'};
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const DoctorsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8fafc;
`;

const DoctorsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const DoctorsTitle = styled.h2`
  text-align: center;
  color: #1e293b;
  margin-bottom: 3rem;
  font-size: 2rem;
`;

const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DoctorCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DoctorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
  border: 4px solid #2563eb;
`;

const DoctorName = styled.h3`
  color: #1e293b;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const DoctorSpecialty = styled.p`
  color: #64748b;
  text-align: center;
  margin-bottom: 1rem;
`;

const DoctorHospital = styled.p`
  color: #475569;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const DoctorRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #f59e0b;
  margin-bottom: 1rem;
`;

const DoctorContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.875rem;
`;

const HospitalsSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const HospitalsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HospitalsTitle = styled.h2`
  text-align: center;
  color: #1e293b;
  margin-bottom: 3rem;
  font-size: 2rem;
`;

const HospitalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const HospitalCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HospitalName = styled.h3`
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HospitalAddress = styled.p`
  color: #475569;
  margin-bottom: 1rem;
`;

const HospitalContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.875rem;
`;

const CategoriesSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8fafc;
`;

const NewsletterSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const Home = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      hospital: "Bokaro General Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      experience: "15 years",
      contact: "+91 9876543210",
      email: "dr.rajesh@example.com"
    },
    {
      id: 2,
      name: "Dr. Priya Singh",
      specialty: "Pediatrician",
      hospital: "SAIL Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      experience: "12 years",
      contact: "+91 9876543211",
      email: "dr.priya@example.com"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialty: "Orthopedic Surgeon",
      hospital: "Bokaro Steel City Hospital",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      experience: "18 years",
      contact: "+91 9876543212",
      email: "dr.amit@example.com"
    }
  ];

  const hospitals = [
    {
      id: 1,
      name: "Bokaro General Hospital",
      address: "Sector 4, Bokaro Steel City, Jharkhand",
      contact: "+91 654 1234567",
      email: "info@bgh.com",
      specialties: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"]
    },
    {
      id: 2,
      name: "SAIL Hospital",
      address: "SAIL Township, Bokaro Steel City, Jharkhand",
      contact: "+91 654 1234568",
      email: "info@sailhospital.com",
      specialties: ["General Medicine", "Surgery", "Gynecology", "Dermatology"]
    },
    {
      id: 3,
      name: "Bokaro Steel City Hospital",
      address: "Sector 12, Bokaro Steel City, Jharkhand",
      contact: "+91 654 1234569",
      email: "info@bsch.com",
      specialties: ["Orthopedics", "Cardiology", "ENT", "Ophthalmology"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Your Health, Our Priority</HeroTitle>
          <HeroSubtitle>
            Quality medicines and healthcare products delivered to your doorstep
          </HeroSubtitle>
          <HeroButtons>
            <HeroButton to="/medicines">Shop Now</HeroButton>
            <HeroButton to="/contact" secondary>Contact Us</HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Authentic and high-quality medical supplies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Safe and secure online shopping experience</p>
            </div>
          </div>
        </div>
      </FeaturesSection>

      {/* Doctors Section */}
      <DoctorsSection>
        <DoctorsContainer>
          <DoctorsTitle>Our Expert Doctors</DoctorsTitle>
          <DoctorsGrid>
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id}>
                <DoctorImage src={doctor.image} alt={doctor.name} />
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
                <DoctorHospital>{doctor.hospital}</DoctorHospital>
                <DoctorRating>
                  <StarIcon /> {doctor.rating}
                </DoctorRating>
                <DoctorContact>
                  <span>Experience: {doctor.experience}</span>
                  <span>Contact: {doctor.contact}</span>
                  <span>Email: {doctor.email}</span>
                </DoctorContact>
              </DoctorCard>
            ))}
          </DoctorsGrid>
        </DoctorsContainer>
      </DoctorsSection>

      {/* Hospitals Section */}
      <HospitalsSection>
        <HospitalsContainer>
          <HospitalsTitle>Partner Hospitals</HospitalsTitle>
          <HospitalsGrid>
            {hospitals.map(hospital => (
              <HospitalCard key={hospital.id}>
                <HospitalName>
                  <LocalHospitalIcon /> {hospital.name}
                </HospitalName>
                <HospitalAddress>{hospital.address}</HospitalAddress>
                <HospitalContact>
                  <span>Contact: {hospital.contact}</span>
                  <span>Email: {hospital.email}</span>
                  <span>Specialties: {hospital.specialties.join(", ")}</span>
                </HospitalContact>
              </HospitalCard>
            ))}
          </HospitalsGrid>
        </HospitalsContainer>
      </HospitalsSection>

      {/* Categories Section */}
      <CategoriesSection>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="font-semibold">Medicines</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="font-semibold">Medical Devices</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧰</div>
              <h3 className="font-semibold">Surgical Tools</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧴</div>
              <h3 className="font-semibold">First Aid</h3>
            </div>
          </div>
        </div>
      </CategoriesSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Excellent service and high-quality products. Highly recommended!"
              </p>
              <p className="font-semibold">- Dr. Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Reliable supplier with fast delivery and great customer support."
              </p>
              <p className="font-semibold">- City General Hospital</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Best prices in the market with premium quality products."
              </p>
              <p className="font-semibold">- MedPlus Pharmacy</p>
            </div>
          </div>
        </div>
      </TestimonialsSection>

      {/* Newsletter Section */}
      <NewsletterSection>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Subscribe to our newsletter for the latest updates and offers</p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-secondary px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </NewsletterSection>
    </div>
  );
};

export default Home; 