import React from 'react';

import { ScrollDownContainer } from './styles';
import { Para2 } from '..';

import { home } from '../../../config/content';

export const ScrollDown = () => (
  <ScrollDownContainer>
    <video autoPlay loop muted playsInline className='scroll'>
      <source src={home.video.src} type={home.video.type} />
    </video>
    <Para2>{home.video.text}</Para2>
  </ScrollDownContainer>
);
