import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Profile from '../shared/Profile';
import { Heading2, Heading3 } from '..';

// Assets
import { about } from '../../../config/content';
import { GRAPHICS } from '../../../config/img/graphics';

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavContainer = styled.div`
  width: 25%;

  @media (max-width: 540px) {
    width: 95%;
  }
`;

const TeamName = styled(Heading3)`
  margin: 20px auto;
  margin-top: 0px;
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-family: 'Zilla Slab';

  &:hover {
    cursor: pointer;
  }
`;

const TeamContainer = styled.div`
  min-height: 200px;
  height: 100%;
  z-index: -1;
  width: 70%;
  background: var(--background-quaternary);
  padding: 35px;
  position: relative;

  @media (max-width: 540px) {
    width: 95%;
  }
`;

const TeamName2 = styled(Heading2)`
  font-family: 'Zilla Slab';
  line-height: 1.2;
  margin-top: -10px;
  text-align: left;
  opacity: 0.5;
  color: var(--background-primary);
`;

const WrapperContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Polygon = styled.img`
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
`;

const STAGE = {
  DESIGN: 'Design Team',
  TECH: 'Tech Team',
  CURATION: 'Curation Team',
  MANAGEMENT: 'Management Team',
  PR: 'Public Relations Team'
};

function Team() {
  const [stage, setStage] = useState(STAGE.DESIGN);

  const renderTeam = () => {
    switch (stage) {
      case STAGE.DESIGN:
        return about.TEAM.DESIGN.map((member) => (
          <Profile
            key={`design-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small='true'
          />
        ));
      case STAGE.TECH:
        return about.TEAM.TECH.map((member) => (
          <Profile
            key={`tech-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small='true'
          />
        ));
      case STAGE.CURATION:
        return about.TEAM.CURATION.map((member) => (
          <Profile
            key={`curation-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small='true'
          />
        ));
      case STAGE.MANAGEMENT:
        return about.TEAM.MANAGEMENT.map((member) => (
          <Profile
            key={`management-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small='true'
          />
        ));
        case STAGE.PR:
          return about.TEAM.PR.map((member) => (
            <Profile
              key={`PR-team-${member.NAME}`}
              member={member}
              showDesignation={false}
              dark={false}
              small='true'
            />
          ));
      default:
        return about.TEAM.DESIGN.map((member) => (
          <Profile
            key={`design-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small='true'
          />
        ));
    }
  };

  return (
    <Section>
      <NavContainer>
        {Object.keys(STAGE).map((key) => (
          <TeamName
            key={key}
            style={{
              color: stage === STAGE[key] ? '#fff' : 'rgba(255,255,255,0.4)',
            }}
            onClick={() => {
              setStage(STAGE[key]);
            }}
          >
            {STAGE[key]}
          </TeamName>
        ))}
      </NavContainer>

      <TeamContainer>
        <TeamName2>{stage}</TeamName2>
        <WrapperContainer>{renderTeam()}</WrapperContainer>
        <Polygon src={GRAPHICS.TOP_LEFT_POLYGON} alt='Polygon' />
      </TeamContainer>
    </Section>
  );
}

export default Team;
