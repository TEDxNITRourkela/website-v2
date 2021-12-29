import React from 'react';
import styled from 'styled-components';

import { Heading1, SpeakerCard } from '..';

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SpeakerSection = ({ data }) => (
  <Container>
    {data.map(
      (
        {
          name,
          description,
          shortDescription,
          speakerImage,
          links,
          isLongCard,
          isPublished,
          shilhouette,
        },
        index,
      ) => (
        <SpeakerCard
          key={`speaker-${index}-${name}`}
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
);

export default SpeakerSection;
