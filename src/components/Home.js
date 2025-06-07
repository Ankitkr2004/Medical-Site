import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { 
  LocalPharmacy, 
  LocalShipping, 
  Security, 
  Support, 
  MedicalServices, 
  HealthAndSafety, 
  Vaccines, 
  Medication,
  Verified,
  Speed,
  Payment,
  LocalHospital,
  LocationOn,
  Phone,
  AccessTime
} from '@mui/icons-material';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #0f766e 0%, #134e4a 100%);
  color: white;
  padding: 6rem 2rem;
  border-radius: 1rem;
  text-align: center;
  margin-bottom: 4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') center/cover;
    opacity: 0.1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  color: #0f766e;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
`;

const Categories = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h2`
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryIcon = styled.div`
  color: #0f766e;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const CategoryName = styled.h3`
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const CategoryDescription = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
`;

const WhyChooseUsSection = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const WhyChooseUsHeading = styled.h2`
  color: #1e293b;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const WhyChooseUsCardTitle = styled.h3`
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const WhyChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const WhyChooseUsCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const WhyChooseUsIcon = styled.div`
  color: #0f766e;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const WhyChooseUsDescription = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
`;

const HospitalsSection = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const HospitalsTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const HospitalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HospitalCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const HospitalName = styled.h3`
  color: #0f766e;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

const HospitalInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #64748b;
`;

const HospitalInfoText = styled.div`
  flex: 1;
`;

const DoctorSection = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const DoctorTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const DoctorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DoctorCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const DoctorName = styled.h3`
  color: #0f766e;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const DoctorSpecialty = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const DoctorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
  color: #64748b;
`;

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Pain Relief',
      icon: <MedicalServices />,
      description: 'Effective pain management solutions for various conditions'
    },
    {
      name: 'Antibiotics',
      icon: <Vaccines />,
      description: 'Broad spectrum antibiotics for bacterial infections'
    },
    {
      name: 'Cardiovascular',
      icon: <HealthAndSafety />,
      description: 'Medications for heart health and blood pressure'
    },
    {
      name: 'Diabetes',
      icon: <Medication />,
      description: 'Comprehensive diabetes management solutions'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Quality Assured',
      icon: <Verified />,
      description: 'All our products are sourced from authorized manufacturers and undergo strict quality checks'
    },
    {
      title: 'Fast Delivery',
      icon: <Speed />,
      description: 'Quick and reliable delivery to your doorstep within 24-48 hours'
    },
    {
      title: 'Secure Payments',
      icon: <Payment />,
      description: 'Multiple secure payment options with encrypted transactions'
    },
    {
      title: 'Expert Support',
      icon: <LocalHospital />,
      description: '24/7 support from healthcare professionals and pharmacists'
    }
  ];

  const hospitals = [
    {
      name: 'Bokaro General Hospital',
      address: 'Sector 4, Bokaro Steel City',
      phone: '+91 6542 234567',
      timing: '24/7 Emergency',
      specialties: 'General Medicine, Surgery, Pediatrics',
      image: 'https://images.unsplash.com/photo-1587351021759-2d2f8bce656f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Medica Superspecialty Hospital',
      address: 'Sector 5, Bokaro Steel City',
      phone: '+91 6542 234568',
      timing: '24/7 Emergency',
      specialties: 'Cardiology, Neurology, Orthopedics',
      image: 'https://images.unsplash.com/photo-1587351021759-2d2f8bce656f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Bokaro City Hospital',
      address: 'Sector 3, Bokaro Steel City',
      phone: '+91 6542 234569',
      timing: '8:00 AM - 8:00 PM',
      specialties: 'General Medicine, Gynecology, ENT',
      image: 'https://images.unsplash.com/photo-1587351021759-2d2f8bce656f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Steel City Hospital',
      address: 'Sector 6, Bokaro Steel City',
      phone: '+91 6542 234570',
      timing: '24/7 Emergency',
      specialties: 'Trauma Care, Orthopedics, General Surgery',
      image: 'https://images.unsplash.com/photo-1587351021759-2d2f8bce656f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Bokaro Medical College Hospital',
      address: 'Sector 7, Bokaro Steel City',
      phone: '+91 6542 234571',
      timing: '24/7 Emergency',
      specialties: 'All Specialties, Teaching Hospital',
      image: 'https://images.unsplash.com/photo-1587351021759-2d2f8bce656f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      hospital: 'Bokaro General Hospital',
      address: 'Sector 4, Bokaro Steel City',
      phone: '+91 6542 234572',
      timing: '9:00 AM - 5:00 PM',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Priya Singh',
      specialty: 'Pediatrician',
      hospital: 'Medica Superspecialty Hospital',
      address: 'Sector 5, Bokaro Steel City',
      phone: '+91 6542 234573',
      timing: '10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Amit Kumar',
      specialty: 'Orthopedic Surgeon',
      hospital: 'Steel City Hospital',
      address: 'Sector 6, Bokaro Steel City',
      phone: '+91 6542 234574',
      timing: '9:00 AM - 5:00 PM',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Neha Sharma',
      specialty: 'Neurologist',
      hospital: 'Bokaro Medical College Hospital',
      address: 'Sector 7, Bokaro Steel City',
      phone: '+91 6542 234575',
      timing: '10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Sanjay Verma',
      specialty: 'General Physician',
      hospital: 'Bokaro City Hospital',
      address: 'Sector 3, Bokaro Steel City',
      phone: '+91 6542 234576',
      timing: '9:00 AM - 5:00 PM',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Anjali Gupta',
      specialty: 'Gynecologist',
      hospital: 'Medica Superspecialty Hospital',
      address: 'Sector 5, Bokaro Steel City',
      phone: '+91 6542 234577',
      timing: '10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <Container>
      <Hero>
        <HeroTitle>Welcome to MediCare Plus</HeroTitle>
        <HeroSubtitle>
          Your trusted partner in healthcare, providing quality medicines and medical supplies with care and convenience
        </HeroSubtitle>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/medicines')}
          sx={{
            backgroundColor: 'white',
            color: '#0f766e',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: '#f8fafc',
            },
          }}
        >
          Explore Our Products
        </Button>
      </Hero>

      <Features>
        <Feature>
          <FeatureIcon>
            <LocalPharmacy />
          </FeatureIcon>
          <FeatureTitle>Quality Products</FeatureTitle>
          <FeatureDescription>
            All our medicines are sourced from authorized manufacturers and undergo strict quality checks
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <LocalShipping />
          </FeatureIcon>
          <FeatureTitle>Fast Delivery</FeatureTitle>
          <FeatureDescription>
            Quick and reliable delivery to your doorstep within 24-48 hours
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Security />
          </FeatureIcon>
          <FeatureTitle>Secure Shopping</FeatureTitle>
          <FeatureDescription>
            Your data is protected with industry-standard security measures
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Support />
          </FeatureIcon>
          <FeatureTitle>24/7 Support</FeatureTitle>
          <FeatureDescription>
            Our healthcare experts are available round the clock to assist you
          </FeatureDescription>
        </Feature>
      </Features>

      <Categories>
        <CategoryTitle>Browse by Category</CategoryTitle>
        <CategoryGrid>
          {categories.map((category, index) => (
            <CategoryCard key={index} onClick={() => navigate('/medicines')}>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </Categories>

      <HospitalsSection>
        <HospitalsTitle>Top Hospitals in Bokaro</HospitalsTitle>
        <HospitalsGrid>
          {hospitals.map((hospital, index) => (
            <HospitalCard key={index}>
              <HospitalName>{hospital.name}</HospitalName>
              <HospitalInfo>
                <LocationOn color="primary" />
                <HospitalInfoText>{hospital.address}</HospitalInfoText>
              </HospitalInfo>
              <HospitalInfo>
                <Phone color="primary" />
                <HospitalInfoText>{hospital.phone}</HospitalInfoText>
              </HospitalInfo>
              <HospitalInfo>
                <AccessTime color="primary" />
                <HospitalInfoText>{hospital.timing}</HospitalInfoText>
              </HospitalInfo>
              <HospitalInfo>
                <LocalHospital color="primary" />
                <HospitalInfoText>{hospital.specialties}</HospitalInfoText>
              </HospitalInfo>
            </HospitalCard>
          ))}
        </HospitalsGrid>
      </HospitalsSection>

      <DoctorSection>
        <DoctorTitle>Our Partner Doctors</DoctorTitle>
        <DoctorGrid>
          {doctors.map((doctor, index) => (
            <DoctorCard key={index}>
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
              <DoctorInfo>
                <LocationOn color="primary" />
                <HospitalInfoText>{doctor.hospital}</HospitalInfoText>
              </DoctorInfo>
              <DoctorInfo>
                <LocationOn color="primary" />
                <HospitalInfoText>{doctor.address}</HospitalInfoText>
              </DoctorInfo>
              <DoctorInfo>
                <Phone color="primary" />
                <HospitalInfoText>{doctor.phone}</HospitalInfoText>
              </DoctorInfo>
              <DoctorInfo>
                <AccessTime color="primary" />
                <HospitalInfoText>{doctor.timing}</HospitalInfoText>
              </DoctorInfo>
            </DoctorCard>
          ))}
        </DoctorGrid>
      </DoctorSection>

      <WhyChooseUsSection>
        <WhyChooseUsHeading>Why Choose Us</WhyChooseUsHeading>
        <WhyChooseUsGrid>
          {whyChooseUs.map((item, index) => (
            <WhyChooseUsCard key={index}>
              <WhyChooseUsIcon>{item.icon}</WhyChooseUsIcon>
              <WhyChooseUsCardTitle>{item.title}</WhyChooseUsCardTitle>
              <WhyChooseUsDescription>{item.description}</WhyChooseUsDescription>
            </WhyChooseUsCard>
          ))}
        </WhyChooseUsGrid>
      </WhyChooseUsSection>
    </Container>
  );
};

export default Home; 