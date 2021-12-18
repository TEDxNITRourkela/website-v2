/* eslint-disable max-len */
import React, { useRef } from 'react';

// libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Components
import { HeroContainer } from './styles';
import { SpeakerCard, Para2, Heading1 } from '..';
import { ScrollDown } from './Common';

// Assets
import { speaker, home } from '../../../config/content';

const TableContainer = styled.div`
  flex: 1;
  display: flex;
  scroll-behavior: smooth;
  overflow: auto;
  margin: 10px 0px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 50px;
  .btn {
    cursor: pointer;
    color: #ffffff;
    margin: 20px;
  }
`;

const Carousel = styled.div`
  min-width: min-content;
  padding: 8px 8px;
  background-color: #383838;
  display: flex;
  jsutify-content: center;
  align-items: center;
`;

const SpeakerCarousel = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <HeroContainer>
        <Para2 className='caption'>{home.CONTENT1.caption} </Para2>
        <Heading1 className='heading' style={{ marginTop: '0px' }}>
          {home.CONTENT1.heading}
        </Heading1>
        <img className='image' src={home.CONTENT1.thankyouurl.src} alt={home.CONTENT1.thankyouurl.alt} />
      </HeroContainer>
      <ButtonContainer>
        <FontAwesomeIcon onClick={() => scroll(-300)} className='btn' icon={faAngleLeft} />
        <FontAwesomeIcon onClick={() => scroll(300)} className='btn' icon={faAngleRight} />
      </ButtonContainer>
      <TableContainer ref={ref}>
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
      <ScrollDown />
    </>
  );
};

export default SpeakerCarousel;
