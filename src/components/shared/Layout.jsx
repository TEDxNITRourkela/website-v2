import React from 'react';

// Components
import { Navbar } from '..';
import Footer from '../marginals/Footer/Footer';
import PageContainer from './PageContainer';
import Container from './Container';

export default ({ children }) => (
  <PageContainer>
    <Navbar />

    <Container>{children}</Container>

    <Footer />
  </PageContainer>
);
