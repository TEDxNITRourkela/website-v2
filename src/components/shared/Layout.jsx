import React from 'react';

// Components
import { Navbar } from '..';
import Footer from '../marginals/Footer/Footer';
import PageContainer from './PageContainer';

export default ({ children }) => (
  <PageContainer>
    <Navbar />
    {children}
    <Footer />
  </PageContainer>
);
