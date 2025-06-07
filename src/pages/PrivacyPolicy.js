import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const PolicySection = styled.section`
  margin-bottom: 3rem;
`;

const PolicyTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const PolicyText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const LastUpdated = styled.p`
  color: #999;
  font-style: italic;
  margin-bottom: 2rem;
  text-align: center;
`;

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <LastUpdated>Last Updated: March 15, 2024</LastUpdated>

      <PolicySection>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <PolicyText>
          We collect information that you provide directly to us, including but not limited to:
        </PolicyText>
        <PolicyText>
          • Personal information (name, email address, phone number)<br />
          • Billing and shipping information<br />
          • Account credentials<br />
          • Communication preferences
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <PolicyText>
          We use the information we collect to:
        </PolicyText>
        <PolicyText>
          • Process and fulfill your orders<br />
          • Communicate with you about your orders and inquiries<br />
          • Send you marketing communications (with your consent)<br />
          • Improve our website and services<br />
          • Comply with legal obligations
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>3. Cookies and Tracking</SectionTitle>
        <PolicyText>
          We use cookies and similar tracking technologies to:
        </PolicyText>
        <PolicyText>
          • Remember your preferences<br />
          • Analyze website traffic and usage<br />
          • Improve user experience<br />
          • Provide personalized content
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>4. Data Security</SectionTitle>
        <PolicyText>
          We implement appropriate security measures to protect your personal information from unauthorized
          access, alteration, disclosure, or destruction. However, no method of transmission over the
          Internet is 100% secure, and we cannot guarantee absolute security.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>5. Third-Party Sharing</SectionTitle>
        <PolicyText>
          We may share your information with:
        </PolicyText>
        <PolicyText>
          • Service providers who assist in our operations<br />
          • Payment processors for secure transactions<br />
          • Shipping partners for order fulfillment<br />
          • Legal authorities when required by law
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>6. Your Rights</SectionTitle>
        <PolicyText>
          You have the right to:
        </PolicyText>
        <PolicyText>
          • Access your personal information<br />
          • Correct inaccurate data<br />
          • Request deletion of your data<br />
          • Opt-out of marketing communications<br />
          • File a complaint with supervisory authorities
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>7. Policy Updates</SectionTitle>
        <PolicyText>
          We may update this privacy policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the "Last Updated" date.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>8. Contact Us</SectionTitle>
        <PolicyText>
          If you have any questions about this privacy policy or our data practices, please contact us at:
        </PolicyText>
        <PolicyText>
          Email: privacy@medsurg.com<br />
          Phone: +1 (555) 123-4567<br />
          Address: 123 Medical Street, Healthcare City, HC 12345
        </PolicyText>
      </PolicySection>
    </PolicyContainer>
  );
};

export default PrivacyPolicy; 