import React from 'react';
import styled from 'styled-components';

// Components
import { SpeakerCard, Layout, Heading1, PageContainer } from '../components';

// Assets
import { speaker } from '../../config/content';

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Speaker = () => (
  <Layout>
    <PageContainer>
      <Heading1>TEDxNITRourkelaLive 2021</Heading1>
      <Container style={{ marginBottom: '50px' }}>
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
    </PageContainer>
  </Layout>
);

export default Speaker;
