import React from 'react';
import styled from 'styled-components';

// Components
import { Layout } from '../components';
import Tickets from '../components/tickets/Ticket';

// Assets
import { GRAPHICS } from '../../config/img/graphics';

const Decoration = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

const tickets = () => (
  <Layout>
    <Tickets />
    <Decoration src={GRAPHICS.TOP_LEFT} alt='ellipse' />
  </Layout>
);

export default tickets;
