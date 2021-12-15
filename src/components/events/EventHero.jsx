import React from 'react';
import styled from 'styled-components';

import { Container, Heading1, Heading3, Para2 } from '..';

const img =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1639550836/TedxNITR/Events_bg_y2ersf.png';

const ImageContainer = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 250px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 500px) {
    align-items: flex-end;
  }
  .main {
    display: flex;
    flex-direction: column;
    text-align: left;
    display: inline-block;
  }
  .heading {
    text-align: left;
  }
  .logo {
    width: 400px;
    height: auto;
    @media (max-width: 600px) {
      width: 200px;
    }
  }
  .year {
    text-align: right;
    display: inline-block;
  }
`;

const Text = styled(Para2)`
  text-align: left;
  width: 50%;
  margin-top: 80px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    text-align: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const EventHero = () => (
  <>
    <ImageContainer>
      <Container>
        <Content>
          <div className='main'>
            <img
              // eslint-disable-next-line max-len
              src='https://res.cloudinary.com/sambitsankalp/image/upload/v1636208790/TedxNITR/White_Logo_ldguyq.png'
              alt='logo'
              className='logo'
            />
            <Heading1 className='heading'>Theme: Energize Your Thoughts</Heading1>
          </div>
          <Heading3 className='year'>2011</Heading3>
        </Content>
      </Container>
    </ImageContainer>
    <Container>
      <Text>
        Thought is a free bird, but chained within the realm of ones conscious self. It needs a
        shot, an effort, a spark that glows, engulfing the thought process, triggering it to action.
        It needs some necessary ingredients to pop out. One’s thought can revolutionize the world,
        creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up
        your thoughts and make it happen. We present you the best ways to realize your thoughts and
        make it successful.
      </Text>
    </Container>
  </>
);

export default EventHero;
