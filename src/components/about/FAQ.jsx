import React from 'react';
import styled from 'styled-components';

// Components
import { Heading2, Accordion } from '..';

// assests
import { about } from '../../../config/content';

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
`;

const FAQ = () => (
  <FAQContainer>
    <Heading2 className='heading' style={{ marginBottom: '30px' }}>
      FAQs
    </Heading2>
    {about.FAQ.map((faq, index) => (
      <Accordion key={faq.QUESTION} index={index} title={faq.QUESTION} body={faq.ANSWER} />
    ))}
  </FAQContainer>
);

export default FAQ;
