import React from 'react';
import { Link } from 'gatsby';

import { BrandContainer, HeroContainer } from './styles';
import { Ticket, ScrollDown } from './Common';
import { Heading3, Para2, CustomButton } from '..';

const BrandAmbassador = () => (
  <HeroContainer>
    <Ticket />
    <BrandContainer>
      <div className='text'>
        <Heading3 className='heading'>Want to be a brand ambassador for TEDxNITRourkela?</Heading3>
        <Link to='/' className='link'>
          <Para2 className='linktext'>Know More</Para2>
        </Link>
      </div>
      <CustomButton>Apply Now</CustomButton>
    </BrandContainer>
    <ScrollDown />
  </HeroContainer>
);

export default BrandAmbassador;
