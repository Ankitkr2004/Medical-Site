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

const ProcessStep = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '${props => props.number}';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background-color: #3498db;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

const RefundPolicy = () => {
  return (
    <PolicyContainer>
      <PolicyTitle>Refund Policy</PolicyTitle>
      <LastUpdated>Last Updated: March 15, 2024</LastUpdated>

      <PolicySection>
        <SectionTitle>1. Return Eligibility</SectionTitle>
        <PolicyText>
          To be eligible for a return, your item must be:
        </PolicyText>
        <PolicyText>
          • Unused and in the same condition that you received it<br />
          • In the original packaging<br />
          • Accompanied by the original receipt or proof of purchase<br />
          • Returned within 30 days of delivery
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>2. Non-Returnable Items</SectionTitle>
        <PolicyText>
          The following items are not eligible for returns:
        </PolicyText>
        <PolicyText>
          • Opened or used medical supplies<br />
          • Custom or special-order items<br />
          • Items marked as "Final Sale"<br />
          • Items purchased from third-party sellers
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>3. Refund Process</SectionTitle>
        <ProcessStep number="1">
          <h3>Initiate Return</h3>
          <PolicyText>
            Contact our customer service team to initiate the return process. Provide your order number
            and reason for return.
          </PolicyText>
        </ProcessStep>
        <ProcessStep number="2">
          <h3>Package Items</h3>
          <PolicyText>
            Securely package the items with all original packaging and documentation. Include a copy of
            your receipt or order confirmation.
          </PolicyText>
        </ProcessStep>
        <ProcessStep number="3">
          <h3>Ship Return</h3>
          <PolicyText>
            Ship the package to our return address using a trackable shipping method. Keep the tracking
            number for your records.
          </PolicyText>
        </ProcessStep>
        <ProcessStep number="4">
          <h3>Receive Refund</h3>
          <PolicyText>
            Once we receive and inspect your return, we will process your refund within 5-7 business
            days.
          </PolicyText>
        </ProcessStep>
      </PolicySection>

      <PolicySection>
        <SectionTitle>4. Refund Methods</SectionTitle>
        <PolicyText>
          Refunds will be issued to the original payment method used for the purchase. Processing times
          may vary depending on your payment provider:
        </PolicyText>
        <PolicyText>
          • Credit/Debit Cards: 5-7 business days<br />
          • PayPal: 1-2 business days<br />
          • Bank Transfer: 7-10 business days
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>5. Shipping Costs</SectionTitle>
        <PolicyText>
          • Return shipping costs are the responsibility of the customer unless the return is due to our
          error or a defective product.<br />
          • Original shipping costs are non-refundable unless the return is due to our error.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>6. Contact Information</SectionTitle>
        <PolicyText>
          For any questions regarding returns or refunds, please contact us:
        </PolicyText>
        <PolicyText>
          Email: returns@medsurg.com<br />
          Phone: +1 (555) 123-4567<br />
          Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
        </PolicyText>
      </PolicySection>
    </PolicyContainer>
  );
};

export default RefundPolicy; 