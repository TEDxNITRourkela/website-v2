import React from 'react';

// Components
import { FAQ, Layout, Executive, Team, PageContainer } from '../components';

const about = () => (
  <Layout>
    <PageContainer>
      <Executive />
      <Team />
      <FAQ />
    </PageContainer>
  </Layout>
);

export default about;
