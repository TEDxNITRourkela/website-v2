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

function SpeakerSection({ title, data }) {
  return (
    <div style={{ marginTop: '60px' }}>
      <Heading1>{title}</Heading1>
      <Container>
        {data.map(
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
              key={`speaker-${name}`}
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
    </div>
  );
}

export default SpeakerSection;
