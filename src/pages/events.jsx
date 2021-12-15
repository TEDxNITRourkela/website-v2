import React from 'react';

import { Layout, EventHero, SpeakerSection, Container } from '../components';

// Assets
import { speaker } from '../../config/content';

const events = () => (
  <Layout isContainer={false}>
    <EventHero />
    <Container>
      <SpeakerSection title='Speakers' data={speaker} />
    </Container>
  </Layout>
);

export default events;
