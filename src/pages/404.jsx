/* eslint-disable max-len */
import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import { Heading1, Heading2, CustomButton } from '../components';

// Assets
import { LOGOS } from '../../config/img/logos';
import { GRAPHICS } from '../../config/img/graphics';
import { VIDEOS } from '../../config/img/videos';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 150px);
  height: 100%;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.h2`
  color: var(--color-secondary);
  opacity: 0.2;
  font-family: 'Zilla Slab';
  letter-spacing: 3;

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`;

const Logo = styled.img`
  margin-top: 20px;
  margin-bottom: 30px;
  width: 30%;

  @media (max-width: 540px) {
    width: 80%;
  }
`;

const Topic = styled(Heading1)`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Error = styled(Heading2)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TopRight = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;

  @media (max-width: 540px) {
    width: 30%;
    height: auto;
  }
`;

const BottomLeft = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;

  @media (max-width: 540px) {
    width: 30%;
    height: auto;
  }
`;

function Index() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading === false) {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Wrapper>
      <Section>
        <Content>TECHNOLOGY . ENTERTAINMENT . DESIGN</Content>
        <Logo src={LOGOS.TEDxNITRourkela.LIGHT} alt='Logo' />
        <Topic>&#8220;Learning from the Past&#8221;</Topic>

        <video
          width='220'
          height='220'
          style={{ marginTop: '30px' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={VIDEOS.PAGE_NOT_FOUND} type='video/mp4' />
        </video>
        <Error>Error: Page not found!</Error>

        <CustomButton loading={loading} setLoading={setLoading} handleClick={handleClick}>
          Go Home
        </CustomButton>
      </Section>

      <TopRight src={GRAPHICS.TOP_RIGHT} alt='ellipse' />
      <BottomLeft src={GRAPHICS.BOTTOM_LEFT} alt='ellipse' />
    </Wrapper>
  );
}

export default Index;
