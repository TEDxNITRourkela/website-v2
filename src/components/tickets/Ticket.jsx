/* eslint-disable max-len */
import React, { useState } from 'react';

// Libaries
import styled from 'styled-components';

// Assets
import { TICKETS } from '../../../config/img/tickets';

// Components
import { TicketComponent, Heading1 } from '..';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  z-index: 3;

  .heading {
    margin-top: 50px;
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
      <Heading1 className='heading'>Book Tickets</Heading1>
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
