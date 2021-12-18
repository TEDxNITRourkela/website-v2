import React, { useState } from 'react';

// Components
import { ScrollDownContainer, TicketContainer } from './styles';
import { Para2, TicketComponent } from '..';

// Assets
import { home } from '../../../config/content';
import { TICKETS } from '../../../config/img/tickets';

export const ScrollDown = () => (
  <ScrollDownContainer>
    <video autoPlay loop muted playsInline className='scroll'>
      <source src={home.CONTENT1.video.src} type={home.CONTENT1.video.type} />
    </video>  
    <Para2>{home.CONTENT1.video.text}</Para2>
  </ScrollDownContainer>
);

export const Ticket = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading === false) {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <TicketContainer>
      <TicketComponent
        imageURL={TICKETS.TICKET}
        loading={loading}
        setLoading={setLoading}
        handleClick={handleClick}
      />
    </TicketContainer>
  );
};
