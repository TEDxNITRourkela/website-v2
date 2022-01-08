import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Main, ContentBanner, Container } from '../components';

// Assets
import { home } from '../../config/content';
import { GRAPHICS } from '../../config/img/graphics';

const DecorationOne = styled.img`
  position: absolute;
  top: 100px;
  right: 0px;
  z-index: -1;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
  }
`;

const DecorationTwo = styled.img`
  position: absolute;
  bottom: -140px;
  left: 0px;
  z-index: -1;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
    bottom: -90px;
  }
`;

const DecorationThree = styled.img`
  position: absolute;
  bottom: -450px;
  right: 0px;
  z-index: -1;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
    bottom: -600px;
  }
`;

function Homepage() {
  return (
    <>
      <Main number='4' />
      <Container>
        <ContentBanner DATA={home.CONTENT2.ONE} wrapContainer={false} />

        <DecorationOne src={GRAPHICS.TOP_RIGHT} alt='ellipse' />
        <DecorationTwo src={GRAPHICS.BOTTOM_LEFT} alt='ellipse' />
        <DecorationThree src={GRAPHICS.BOTTOM_RIGHT} alt='ellipse' />
      </Container>
    </>
  );
}

export default Homepage;
