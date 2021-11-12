import React from 'react';

// Components
import { FaqContainer } from './styles';
import { Heading2, Accordion } from '..';

// assests
import { faqs } from '../../../config/content';

const FAQ = () => (
  <FaqContainer>
    <Heading2 className='heading'>FAQs</Heading2>
    {faqs.map((faq, index) => (
      <Accordion key={faq.QUESTION} index={index} title={faq.QUESTION} body={faq.ANSWER} />
    ))}
  </FaqContainer>
);

export default FAQ;
