import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #3498db;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 50%;
  padding: 0 2rem;
  left: ${props => props.align === 'right' ? '50%' : '0'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.align === 'right' ? 'left: -10px;' : 'right: -10px;'}
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3498db;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <Content>
          <p>
            Founded in 2010, MedSurg has grown from a small medical supply store to one of the leading
            distributors of medical and surgical goods in the region. Our journey has been marked by
            continuous innovation, unwavering commitment to quality, and a deep understanding of the
            healthcare industry's needs.
          </p>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Vision & Mission</SectionTitle>
        <Content>
          <h3>Vision</h3>
          <p>
            To be the most trusted and innovative provider of medical and surgical supplies,
            contributing to better healthcare outcomes worldwide.
          </p>
          <h3>Mission</h3>
          <p>
            To provide healthcare professionals with high-quality medical supplies and exceptional
            service, ensuring they can focus on what matters most - patient care.
          </p>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <h3>Quality</h3>
            <p>We never compromise on the quality of our products and services.</p>
          </ValueCard>
          <ValueCard>
            <h3>Integrity</h3>
            <p>We conduct our business with honesty, transparency, and ethical practices.</p>
          </ValueCard>
          <ValueCard>
            <h3>Innovation</h3>
            <p>We continuously seek new ways to improve and better serve our customers.</p>
          </ValueCard>
          <ValueCard>
            <h3>Customer Focus</h3>
            <p>We put our customers' needs at the heart of everything we do.</p>
          </ValueCard>
        </ValuesGrid>
      </Section>

      <Section>
        <SectionTitle>Our Journey</SectionTitle>
        <Timeline>
          <TimelineItem align="left">
            <h3>2010</h3>
            <p>Founded with a small team and a big vision</p>
          </TimelineItem>
          <TimelineItem align="right">
            <h3>2015</h3>
            <p>Expanded to serve major hospitals and healthcare institutions</p>
          </TimelineItem>
          <TimelineItem align="left">
            <h3>2018</h3>
            <p>Launched our digital platform for easier ordering</p>
          </TimelineItem>
          <TimelineItem align="right">
            <h3>2023</h3>
            <p>Celebrated 13 years of serving the healthcare community</p>
          </TimelineItem>
        </Timeline>
      </Section>
    </AboutContainer>
  );
};

export default About; 