import React from 'react';

// Libaries
import styled from 'styled-components';

// Components
import Profile from '../shared/Profile';
import { PageContainer } from '..';

// Assets
import { about } from '../../../config/content';

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
    <PageContainer>
      <Title>
        Team
      </Title>

      <Row style={{ justifyContent: 'center' }}>
        {about.TEAM.ROW1.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </Row>

      <Row>
        {about.TEAM.ROW2.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </Row>
    </PageContainer>
  );
}

export default Executive;
