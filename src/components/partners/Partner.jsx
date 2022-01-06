import React from 'react';

// Libraries
import styled from 'styled-components';

// Assets
import { Heading2 } from '../index';
import { GRAPHICS } from '../../../config/img/graphics';

import useMediaQuery from '../../utils/useMediaQuery';

const Title = styled(Heading2)`
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
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
  margin: 20px auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: -1;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const ImgSection = styled.a`
  margin: 10px 30px;
  height: auto;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    margin: 10px 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

const Navigator = styled.div`
  display: flex;
  color: var(--color-secondary);
  justify-content: center;
  align-content: center;
`;

const Sponsor = styled.img`
  opacity: ${({ main }) => (main ? `1` : `1`)};
  margin: 10px 0px;
  width: 90%;
  height: auto;
`;

const Link = styled.a`
  color: var(--color-secondary);
`;

function Partner({ DATA, home }) {
  const isDesktop = useMediaQuery('(min-width: 500px)');
  const renderPartnerContainer = (
    <div>
      <TitleContainer>
        <Title>{home ? 'Partners' : DATA.title}</Title>
        <HorizontalLine />
      </TitleContainer>

      <PartnerContainer>
        {DATA.partners.map((sponsor) => (
          <ImgSection
            key={`partner-${sponsor.name}`}
            target='_blank'
            rel='noreferrer'
            href={sponsor.href}
            style={{
              width: isDesktop ? `${sponsor.width}` : '37%',
            }}
          >
            <Sponsor src={sponsor.img} alt='Sponsor' />
          </ImgSection>
        ))}
      </PartnerContainer>

      {home && (
        <Navigator>
          <Link href='/partners'>View all Partners</Link>
        </Navigator>
      )}
    </div>
  );

  return (
    <div
      style={{
        marginTop: home ? '20px' : '60px',
      }}
    >
      {!home && <Img src={GRAPHICS.TOP_LEFT} alt='ellipses' />}
      {renderPartnerContainer}
    </div>
  );
}

export default Partner;
