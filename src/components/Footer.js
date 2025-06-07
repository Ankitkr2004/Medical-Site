import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ffffff;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const FooterLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  flex: 1;
`;

const NewsletterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Dummy functionality for newsletter signup
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <h3>Legal</h3>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/refund-policy">Refund Policy</FooterLink>
          <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates and offers.</p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput type="email" placeholder="Enter your email" required />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>Email: info@medsurg.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Medical Street, Healthcare City, HC 12345</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 