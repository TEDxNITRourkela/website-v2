import React from 'react';

// Components
import { Navbar } from '..';
import Footer from '../marginals/Footer/Footer';
import PageContainer from './PageContainer';
import Container from './Container';

export default ({ children, isContainer = true }) => (
  <PageContainer>
    <Navbar />
    {isContainer ? <Container>{children}</Container> : children}
    <Footer />
  </PageContainer>
);
