import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const TermsSection = styled.section`
  margin-bottom: 3rem;
`;

const TermsTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const TermsText = styled.p`
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

const TermsConditions = () => {
  return (
    <TermsContainer>
      <TermsTitle>Terms and Conditions</TermsTitle>
      <LastUpdated>Last Updated: March 15, 2024</LastUpdated>

      <TermsSection>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <TermsText>
          By accessing and using this website, you accept and agree to be bound by the terms and
          conditions of this agreement. If you do not agree to abide by the above, please do not use
          this website.
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>2. Use License</SectionTitle>
        <TermsText>
          Permission is granted to temporarily download one copy of the materials (information or
          software) on MedSurg's website for personal, non-commercial transitory viewing only.
        </TermsText>
        <TermsText>
          This is the grant of a license, not a transfer of title, and under this license you may not:
        </TermsText>
        <TermsText>
          • Modify or copy the materials<br />
          • Use the materials for any commercial purpose<br />
          • Attempt to decompile or reverse engineer any software contained on the website<br />
          • Remove any copyright or other proprietary notations from the materials<br />
          • Transfer the materials to another person or "mirror" the materials on any other server
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>3. User Account</SectionTitle>
        <TermsText>
          If you create an account on the website, you are responsible for:
        </TermsText>
        <TermsText>
          • Maintaining the security of your account<br />
          • All activities that occur under your account<br />
          • Providing accurate and complete information<br />
          • Notifying us immediately of any unauthorized use
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>4. Product Information</SectionTitle>
        <TermsText>
          • All product descriptions and specifications are subject to change without notice<br />
          • Images are for illustrative purposes only<br />
          • Prices are subject to change without notice<br />
          • Availability of products is not guaranteed
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>5. Ordering and Payment</SectionTitle>
        <TermsText>
          • All orders are subject to acceptance and availability<br />
          • We reserve the right to refuse service to anyone<br />
          • Payment must be received before order processing<br />
          • We accept various payment methods as indicated during checkout
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>6. Intellectual Property</SectionTitle>
        <TermsText>
          The website and its original content, features, and functionality are owned by MedSurg and
          are protected by international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>7. Limitation of Liability</SectionTitle>
        <TermsText>
          In no event shall MedSurg or its suppliers be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption) arising out
          of the use or inability to use the materials on our website.
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>8. Governing Law</SectionTitle>
        <TermsText>
          These terms and conditions are governed by and construed in accordance with the laws of the
          jurisdiction in which MedSurg operates, and you irrevocably submit to the exclusive
          jurisdiction of the courts in that location.
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>9. Changes to Terms</SectionTitle>
        <TermsText>
          We reserve the right to modify these terms at any time. We will notify users of any changes
          by updating the "Last Updated" date of these terms. Your continued use of the website
          following the posting of revised terms means that you accept and agree to the changes.
        </TermsText>
      </TermsSection>

      <TermsSection>
        <SectionTitle>10. Contact Information</SectionTitle>
        <TermsText>
          If you have any questions about these Terms and Conditions, please contact us:
        </TermsText>
        <TermsText>
          Email: legal@medsurg.com<br />
          Phone: +1 (555) 123-4567<br />
          Address: 123 Medical Street, Healthcare City, HC 12345
        </TermsText>
      </TermsSection>
    </TermsContainer>
  );
};

export default TermsConditions; 