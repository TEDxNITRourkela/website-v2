import React from 'react';
import styled from 'styled-components';

// Components
import { Layout, PageContainer, SpeakerSection } from '../components';

// Assets
import { speaker } from '../../config/content';
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

const Speaker = () => (
  <Layout>
    <PageContainer>
      <SpeakerSection title='TEDxNITRourkelaLive 2021' data={speaker.LIVEGUESTS} />
      <Decoration src={GRAPHICS.TOP_LEFT} alt='ellipse' />
    </PageContainer>
  </Layout>
);

export default Speaker;
