import React from 'react';

// libraries
import { Link } from 'gatsby';

// Components
import { BrandContainer, HeroContainer } from './styles';
import { Ticket, ScrollDown } from './Common';
import { Heading3, Para2, CustomButton } from '..';

// Assets
import { home } from '../../../config/content';

const BrandAmbassador = () => (
  <HeroContainer style={{ marginTop: '0px' }}>
    <Ticket />
    <BrandContainer>
      <div className='text'>
        <Heading3 className='heading'>{home.CONTENT1.brand.heading} </Heading3>
        <Link to={home.CONTENT1.brand.link.path} className='link'>
          <Para2 className='linktext'>{home.CONTENT1.brand.link.text}</Para2>
        </Link>
      </div>
      <CustomButton>{home.CONTENT1.brand.buttonText}</CustomButton>
    </BrandContainer>
    <ScrollDown />
  </HeroContainer>
);

export default BrandAmbassador;
