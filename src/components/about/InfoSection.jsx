import React from 'react';

// Libraries
import styled from 'styled-components';
import { Heading2, Para2 } from '../index';
import { Container } from '../shared/index';

// Assets
import { GRAPHICS } from '../../../config/img/graphics';

const Question = styled(Heading2)`
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
`;

const Content = styled(Para2)`
  font-family: 'Helvetica';
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.3;
`;

const Section = styled.div`
  width: 50%;
  margin: 0 10px;

  @media (max-width: 540px) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 90%;
  height: auto;
`;

const Img1 = styled.img`
  position: absolute;
  top: 100px;
  left: 0;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
  }
`;

const Img2 = styled.img`
  opacity: 0.4;
  position: absolute;
  bottom: -570px;
  right: 0;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
  }
`;

const Link = styled.a`
  color: var(--color-secondary);
  font-family: 'Helvetica';
  text-decoration: 'underline';
  margin-top: 40px;
`;

const Highlight = styled.span`
  color: var(--color-primary);
  font-size: 2.5rem;

  @media (max-width: 540px) {
    font-size: 2rem;
  }
`;

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-secondary);
  height: 100%;
  width: 100%;
  min-height: 300px;

  @media (max-width: 540px) {
    flex-direction: ${(reverse) => (reverse ? 'column-reverse' : 'column')};
  }
`;

function About({ direction, first, DATA, link, columnReverse = false }) {
  const renderImgContainer = (
    <Section>
      <Img src={DATA.IMG} alt='People' />
    </Section>
  );

  const renderContentContainer = (
    <Section>
      <Question>
        {DATA.QUESTION}
        <Highlight>{` ${DATA.HIGHLIGHT}`}</Highlight>
      </Question>
      <Content>
        {DATA.CONTENT}
        {!link &&
          DATA.links.map((Social) => (
            <span key={Social.link}>
              <Link href={Social.link} target='_blank' rel='noreferrer'>
                {Social.text}
                {/* eslint-disable-next-line */}
              </Link>{' '}
            </span>
          ))}
      </Content>
      {link && (
        <Link href={DATA.LINK} target='_blank' rel='noreferrer'>
          {DATA.HIGHLIGHT
            ? `Learn More about ${DATA.HIGHLIGHT}`
            : 'Learn More about TEDxNITRourkela'}
        </Link>
      )}
    </Section>
  );

  return (
    <Wrapper columnReverse={columnReverse} style={{ marginTop: first ? '0px' : '50px' }}>
      <Img1 src={GRAPHICS.TOP_LEFT} alt='ellipses' />
      <Img2 src={GRAPHICS.BOTTOM_RIGHT} alt='ellipses' />
      {direction === 'left-right' ? (
        <>
          {renderImgContainer}
          {renderContentContainer}
        </>
      ) : (
        <>
          {renderContentContainer}
          {renderImgContainer}
        </>
      )}
    </Wrapper>
  );
}

export default About;
