import React from 'react';

import { HeroContainer } from './styles';
import { Para2, Heading1 } from '..';
import { Ticket, ScrollDown } from './Common';

// Assets
import { home } from '../../../config/content';

const TicketHero = () => (
  <HeroContainer>
    <Para2 className='caption'>{home.caption} </Para2>
    <img className='logo' src={home.logo.src} alt={home.logo.alt} />
    <Heading1 className='heading'>{home.heading}</Heading1>
    <Ticket />
    <ScrollDown />
  </HeroContainer>
);

export default TicketHero;
