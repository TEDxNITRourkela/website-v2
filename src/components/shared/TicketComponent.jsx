import React from 'react';

// Libaries
import styled from 'styled-components';

import { CustomButton } from '..';

const TicketContainer = styled.div`
  position: relative;
  width: 80%;
  min-height: 20vh;
  margin: 40px auto;
  z-index: 0;
  max-width: 50rem;
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

const TicketComponent = ({ imageURL, setLoading, handleClick, loading }) => (
  <TicketContainer>
    <Ticket src={imageURL} alt='TEDxNITRourkela 2021 Ticket' />
    <ButtonContainer>
      <CustomButton loading={loading} setLoading={setLoading} handleClick={handleClick}>
        Buy Now
      </CustomButton>
    </ButtonContainer>
  </TicketContainer>
);

export default TicketComponent;
