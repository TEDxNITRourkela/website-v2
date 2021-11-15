import React from 'react';

// Components
import { Heading2, Accordion, PageContainer } from '..';

// assests
import { about } from '../../../config/content';

const FAQ = () => (
  <PageContainer>
    <Heading2 className='heading' style={{ marginBottom: '30px' }}>FAQs</Heading2>
    {about.FAQ.map((faq, index) => (
      <Accordion key={faq.QUESTION} index={index} title={faq.QUESTION} body={faq.ANSWER} />
    ))}
  </PageContainer>
);

export default FAQ;
