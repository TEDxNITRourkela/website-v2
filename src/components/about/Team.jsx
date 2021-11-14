import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Profile from '../shared/Profile';
import { Heading2, Heading3 } from '../index';
import { SectionContainer } from '../shared/index';

// Assets
import { about } from '../../../config/content';
import { GRAPHICS } from '../../../config/img/graphics';

const Section = styled(SectionContainer)`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 540px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavContainer = styled.div`
  width: 25%;

  @media (max-width: 540px){
    width: 95%;
  }
`;

const TeamName = styled(Heading3)`
  margin: 20px auto;
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
  width: 70%;
  background: var(--background-quaternary);
  padding: 30px;
  position: relative;

  @media (max-width: 540px){
    width: 95%;
  }
`;

const TeamName2 = styled(Heading2)`
  margin-bottom: 20px;
  font-family: 'Zilla Slab';
  line-height: 1.2;
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
            small
          />
        ));
      case STAGE.TECH:
        return about.TEAM.TECH.map((member) => (
          <Profile
            key={`tech-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      case STAGE.CURATION:
        return about.TEAM.CURATION.map((member) => (
          <Profile
            key={`curation-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      case STAGE.MANAGEMENT:
        return about.TEAM.MANAGEMENT.map((member) => (
          <Profile
            key={`management-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      default:
        return about.TEAM.DESIGN.map((member) => (
          <Profile
            key={`design-team-${member.NAME}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
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
        <TeamName2>
          {stage}
        </TeamName2>
        <WrapperContainer>{renderTeam()}</WrapperContainer>
        <Polygon
          src={GRAPHICS.TOP_LEFT_POLYGON}
          alt='Polygon'
        />
      </TeamContainer>
    </Section>
  );
}

export default Team;

