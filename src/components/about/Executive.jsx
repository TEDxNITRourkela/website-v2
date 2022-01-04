import React from 'react';

// Libaries
import styled from 'styled-components';

// Components
import Profile from '../shared/Profile';
import { Heading2 } from '..';

// Assets
import { about } from '../../../config/content';

const Row = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

function Executive() {
  return (
    <>
      <Heading2>Team</Heading2>

      <Row style={{ justifyContent: 'center' }}>
        {about.TEAM.ROW1.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </Row>

      <Row style={{ marginTop: '50px' }}>
        {about.TEAM.ROW2.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </Row>
    </>
  );
}

export default Executive;
