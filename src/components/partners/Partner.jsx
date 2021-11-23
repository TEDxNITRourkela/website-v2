import React from 'react';

// Libraries
import styled from 'styled-components';
import { Heading2, PageContainer } from '../index';

// Assets
import { GRAPHICS } from "../../../config/img/graphics";

const Title = styled(Heading2)`
  font-weight: 700;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

const HorizontalLine = styled.div`
    width: 20%;
    height: 1px;
    background-color: var(--color-secondary);
    opacity: 0.3;
    z-index: -1;
`;

const PartnerContainer = styled.div`
    margin: 20px 0px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const ImgSection = styled.a`
  margin: 10px 10px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Navigator = styled.div`
    display: flex;
    color: var(--color-secondary);
    justify-content: center;
    align-content: center;
`;

const Sponsor = styled.img`
    opacity: ${({ main }) => (main ? `1` : `1`)};
    width: 90%;
    height: auto;
`;

const Link = styled.a`
    color: var(--color-secondary);
`;


function Partner({ DATA, home, main = false }) {

  const renderPartnerContainer = (
    <div main={main}>
      <TitleContainer>
        <Title>
          {home ? 'Partners' : DATA.title}
        </Title>
        <HorizontalLine />
      </TitleContainer>

      <PartnerContainer>
        {DATA.partners.map((sponsor) => (
          <ImgSection
            target='_blank'
            rel='noreferrer'
            href={sponsor.href}
            title={sponsor.hrefTitle}
            key={sponsor.href}
            style={{
              width: `${sponsor.size}`,
            }}
          >
            <Sponsor src={sponsor.img} alt='Sponsor' />
          </ImgSection>
        ))}
      </PartnerContainer>

      {home && (
        <Navigator>
          <Link href='/partners'>
            View all Partners
          </Link>
        </Navigator>
      )}
    </div>
  );

  return (
    <PageContainer
      style={{
        marginTop: home ? '20px' : '60px',
      }}
    >
      {!home && (
        <Img src={GRAPHICS.TOP_LEFT} alt='ellipses' />
      )}
      {renderPartnerContainer}
    </PageContainer>
  );
}

export default Partner;
