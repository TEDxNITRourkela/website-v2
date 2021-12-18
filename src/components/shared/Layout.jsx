import React from 'react';

// Components
import { Navbar } from '..';
import Footer from '../marginals/Footer/Footer';
import Container from './Container';

export default ({ children, isContainer }) => (
  <Container style={{  paddingTop: '50px' }}>
    <Navbar />
    {isContainer ? <Container>{children}</Container> : children}
    <Footer />
  </Container>
);
