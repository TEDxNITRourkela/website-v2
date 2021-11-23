/* eslint-disable max-len */
import React, { useState } from 'react';

// Libaries
import styled from 'styled-components';

// Assets
import { TICKETS } from '../../../config/img/tickets';

// Components
import { TicketComponent } from '..';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--background-primary);
  margin-top: 10px;
  z-index: 3;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  margin-top: 5%;
  font-family: 'Zilla Slab';
  color: var(--color-secondary);

  @media (max-width: 540px) {
    margin-top: 15%;
  }
`;

function Tickets() {
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
    <Container>
      <Title>Book Tickets</Title>
      {Object.keys(TICKETS).map((key) => (
        <TicketComponent
          key={key}
          imageURL={TICKETS[key]}
          loading={loading}
          setLoading={setLoading}
          handleClick={handleClick}
        />
      ))}
    </Container>
  );
}

export default Tickets;
