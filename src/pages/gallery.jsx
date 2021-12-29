import React from 'react';

// Libraries
import styled from 'styled-components';

// Utils
import { shuffleArray } from '../utils/shuffleArray';

// Components
import GallerySection from '../components/gallery/Gallery';
import { Heading2, Container } from '../components';

// Placeholder
import { GALLERY } from '../../config/img/gallery';

const GALLERY_LIST = shuffleArray(GALLERY);

const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    margin-bottom: 24px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    margin-top: 24px;
  }
`;

const Title = styled(Heading2)`
  margin-bottom: 10px;
  font-family: 'Zilla Slab';
  font-weight: 700;
  text-align: center;
  color: var(--color-secondary);
`;

const HorizontalLine = styled.div`
  width: 50%;
  height: 1px;
  opacity: 0.3;
  background-color: var(--color-secondary);
`;

function Gallery() {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Gallery</Title>
          <HorizontalLine />
        </TitleContainer>
      </Wrapper>
      <GallerySection DATA={GALLERY_LIST} />
    </Container>
  );
}

export default Gallery;
