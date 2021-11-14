import React from 'react';

// Libaries
import styled from 'styled-components';

// Components
import Profile from '../shared/Profile';
import { SectionContainer } from '../shared/index';

// Assets
import { ABOUT } from '../../../config/content/About';

const Container = styled(SectionContainer)`
  width: 100%;
  min-height: 500px;
`;

const Title = styled.h2`
    font-size: 1.50rem;
    width: 100%;
    text-align: center;
    margin: 30px 0;
    color: var(--color-secondary);
`;

const Row = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 540px){
      display: grid;
      grid-template-columns: auto auto;
    }
`;

function Executive() {

  return (
    <Container>
      <Title>
        Team
      </Title>

      <Row style={{ justifyContent: 'center' }}>
        {ABOUT.TEAM.ROW1.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </Row>

      <Row>
        {ABOUT.TEAM.ROW2.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </Row>
    </Container>
  );
}

export default Executive;
