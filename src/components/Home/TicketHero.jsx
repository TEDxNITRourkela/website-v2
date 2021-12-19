import React from 'react';

// Components
import { HeroContainer } from './styles';
import { Para2, Heading1 } from '..';
import { Ticket, ScrollDown } from './Common';

// Assets
import { home } from '../../../config/content';

const TicketHero = () => (
  <HeroContainer>
    <Para2 className='caption'>{home.CONTENT1.caption} </Para2>
    <img className='logo' src={home.CONTENT1.logo.src} alt={home.CONTENT1.logo.alt} />
    <Heading1 className='heading'>{home.CONTENT1.heading}</Heading1>
    <Ticket />
    <ScrollDown />
  </HeroContainer>
);

export default TicketHero;
