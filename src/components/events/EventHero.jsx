import React from 'react';
import styled from 'styled-components';

// Components
import { Container, Heading1, Heading3, Para2 } from '..';

// Assets
import { events } from '../../../config/content';

const ImageContainer = styled.div`
  background-image: url(${events.CONTENT.hero});
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
    flex-direction: column;
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

function EventHero({ year, name, about }) {
  return (
    <>
      <ImageContainer>
        <Container>
          <Content>
            <div className='main'>
              <img src={events.CONTENT.logo.src} alt={events.CONTENT.logo.alt} className='logo' />
              <Heading1 className='heading'>{name}</Heading1>
            </div>
            <Heading3 className='year'>{year}</Heading3>
          </Content>
        </Container>
      </ImageContainer>
      <Container>
        <Text>{about}</Text>
      </Container>
    </>
  );
}

export default EventHero;
