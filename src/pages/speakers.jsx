import React from 'react';

// Components
import { Layout, PageContainer, SpeakerSection } from '../components';

// Assets
import { speaker } from '../../config/content';

const Speaker = () => (
  <Layout>
    <PageContainer>
      <SpeakerSection title='TEDxNITRourkelaLive 2021' data={speaker.LIVEGUESTS} />
    </PageContainer>
  </Layout>
);

export default Speaker;
