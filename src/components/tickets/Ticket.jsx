/* eslint-disable max-len */
import React, { useState } from 'react';

// Libaries
import styled from 'styled-components';

// Assets
import { TICKETS } from '../../../config/img/tickets';

// Components
import { CustomButton } from "../index";

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
    font-size: 1.50rem;
    width: 100%;
    text-align: center;
    margin-top: 5%;
    font-family: 'Zilla Slab';
    color: var(--color-secondary);

    @media (max-width: 540px){
      margin-top: 15%;
    }
`;

const TicketContainer = styled.div`
    position: relative;
    width: 80%;
    min-height: 20vh;
    margin: 40px auto;
    z-index: 0;
`;

const Ticket = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 15%;
    right: 15%;
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
          <Title>
            Book Tickets
          </Title>
          {Object.keys(TICKETS).map((key) => (
            // eslint-disable-next-line react/jsx-key
            <TicketContainer>
            <Ticket
              key={key}
              src={TICKETS[key]}
              alt='TEDxNITRourkela 2021 Ticket'
            />
            <ButtonContainer>
              <CustomButton loading={loading} setLoading={setLoading} handleClick={handleClick} >
                Buy Now
              </CustomButton>
            </ButtonContainer>
          </TicketContainer>
        ))}
        </Container>
      );
}

export default Tickets;