import React from 'react';

// Libaries
import styled from 'styled-components';

import { Para1, Para2 } from '../index';

export const limitString = (str, n) =>
  // eslint-disable-next-line
  str ? (str.length >= n ? `${str.substr(0, n)}...` : str) : null;

const Designation = styled(Para2)`
  font-style: italic;
  line-height: 1.4;
  margin-top: 3px;
  font-size: 0.98rem;
  text-align: center;
  color: ${({ dark }) => dark ? `#ffffff` : `#000000`};
`;

const ImageContainer = styled.div`
    width: ${({ small }) => (small ? `100px` : `180px`)};
    height: ${({ small }) => (small ? `100px` : `180px`)};
    margin: 0px 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Img = styled.img`
    width: ${({ small }) => (small ? `80px` : `120px`)};
    height: ${({ small }) => (small ? `80px` : `120px`)};
    border-radius: 100%;
    background-color: var(--color-secondary);
    object-fit: cover;
    object-position: center;
`;

const Name = styled(Para1)`
    font-weight: 400;
    font-size: ${({ small }) => (small ? `0.9rem` : `1.16rem`)};
    line-height: 1;
    margin-top: ${({ small }) => (small ? `5px` : `15px`)};
    text-align: center;
    color: ${({ dark }) => dark ? `#ffffff` : `#000000`};
`;

const Image = ({
  member,
  showDesignation = true,
  small = false,
  dark = true
}) => (
    <ImageContainer small={small}>
      <div>
        <Img
          small={small}
          src={member.IMG}
          alt={member.NAME}
          decoding='auto'
          loading='eager'
        />
      </div>
      <Name dark={dark} small={small}>
        {limitString(member.NAME, 22)}
      </Name>
      {showDesignation && (
        <Designation dark={dark}>
          {member.DESIGNATION}
        </Designation>
      )}
    </ImageContainer>
  );

export default Image;

