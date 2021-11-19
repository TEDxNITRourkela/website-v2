import React from 'react';
import styled from 'styled-components';

import { speaker } from '../../config/content';

import { SpeakerCard, Layout, Heading1 } from '../components';

const Container = styled.div`
  margin-top: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Speaker = () => (
  <Layout>
    <Heading1>TEDxNITRourkelaLive 2021</Heading1>
    <Container>
      {speaker.LIVEGUESTS.map(
        ({
          name,
          description,
          shortDescription,
          speakerImage,
          links,
          isLongCard,
          isPublished,
          shilhouette,
        }) => (
          <SpeakerCard
            key={name}
            name={name}
            description={description}
            shortDescription={shortDescription}
            speakerImage={speakerImage}
            links={links}
            shilhouette={shilhouette}
            isLongCard={isLongCard}
            isPublished={isPublished}
          />
        ),
      )}
    </Container>
  </Layout>
);

export default Speaker;
