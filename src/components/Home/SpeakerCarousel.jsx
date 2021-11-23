import React from 'react';
import styled from 'styled-components';

// Components
import { SpeakerCard } from '..';

// Assets
import { speaker } from '../../../config/content';

const TableContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  margin: 100px 0px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Carousel = styled.div`
  min-width: min-content;
  padding: 8px 8px;
  -webkit-overflow-scrolling: touch;
  background-color: #383838;
  display: flex;
  jsutify-content: center;
  align-items: center;
`;

const SpeakerCarousel = () => (
  <TableContainer>
    <Carousel>
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
    </Carousel>
  </TableContainer>
);

export default SpeakerCarousel;
