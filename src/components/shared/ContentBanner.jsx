import React from 'react';

// Libraries
import styled from 'styled-components';

import { Heading2, Para2 } from '../index';
import { Container } from './index';

const Column = styled.div`
  width: 50%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 540px) {
    width: 95%;
    min-height: 100px;
  }
  .link {
    margin-top: 30px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Img = styled.img`
  width: ${(smallLogo) => (smallLogo ? '85%' : '100%')};
  height: auto;

  @media (max-width: 540px) {
    max-height: 100px;
  }
`;

const ImgWrapper = styled.div`
  width: 85%;

  @media (max-width: 540px) {
    display: flex;
    justify-content: center;
  }
`;

const Question = styled(Heading2)`
  width: 85%;
  text-align: left;
  margin-top: 30px;
  opacity: 0.5;

  @media (max-width: 540px) {
    text-align: center;
  }
`;

const Content = styled(Para2)`
  width: 80%;
  font-family: 'Helvetica';
  margin-top: 5px;
  margin-bottom: 5px;

  @media (max-width: 540px) {
    width: 80%;
    text-align: center;
  }
`;

const Link = styled.a`
  width: 80%;
  color: var(--color-secondary);
  font-family: 'Helvetica';
  text-decoration: 'underline';
  margin-bottom: 30px;

  @media (max-width: 540px) {
    width: 80%;
    text-align: center;
  }
`;

const List = styled.li`
  width: 80%;
  color: var(--color-secondary);
  font-family: 'Helvetica';
  margin-top: 5px;
  margin-bottom: 5px;

  @media (max-width: 540px) {
    width: 80%;
    text-align: center;
  }
`;

const OrderedList = styled.ul`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 540px) {
    margin-left: 10px;
    justify-content: center;
  }
`;

const Section1 = styled(Container)`
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-secondary);

  @media (max-width: 540px) {
    flex-direction: column;
    margin: 40px 0;
  }
`;

const Section2 = styled.div`
  width: 100%;
  margin: 50px 0;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-secondary);

  @media (max-width: 540px) {
    flex-direction: column;
    margin: 40px 0;
  }
`;

function ContentBanner({ DATA, smallLogo = false, wrapContainer = false }) {
  const renderContent = (
    <>
      <Column smallLogo={smallLogo}>
        <Question>{DATA.TITLE}</Question>
        <ImgWrapper>
          <Img src={DATA.LOGO} alt='TEDxNITRourkela Logo' />
        </ImgWrapper>
      </Column>

      <Column>
        {typeof DATA.CONTENT === 'string' ? (
          <Content>{DATA.CONTENT}</Content>
        ) : (
          <OrderedList>
            {DATA.CONTENT.map((point) => (
              <List key={point}>{point}</List>
            ))}
          </OrderedList>
        )}
        {DATA.LINK && (
          <Link className='link' href={DATA.LINK}>
            <Para2>{DATA.LINKTEXT}</Para2>
          </Link>
        )}
      </Column>
    </>
  );
  return (
    <Wrapper>
      {wrapContainer ? <Section1>{renderContent}</Section1> : <Section2>{renderContent}</Section2>}
    </Wrapper>
  );
}

export default ContentBanner;
