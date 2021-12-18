import React from 'react';

// Components
import { Layout, PageContainer } from '../components';
import Tickets from '../components/tickets/Ticket';

const tickets = () => (
  <Layout>
    <PageContainer>
      <Tickets />
    </PageContainer>
  </Layout>
);

export default tickets;
