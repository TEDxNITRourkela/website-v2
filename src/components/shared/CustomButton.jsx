/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: var(--color-secondary);
  width: 150px;
  border: 1px solid var(--color-primary);
  padding: auto;
  font-size: 16px;
  height: 50px;
  border-radius: 6px;
  background-color: var(--background-primary);

  :hover {
    cursor: pointer;
    background-color: var(--color-primary);
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 540px) {
    width: 95px;
    height: 28px;
    font-size: 10px;
  }
`;

const CircularProgress = styled.div`
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }

  ::after {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 3px var(--color-secondary);
    border-bottom-color: var(--color-primary);
    border-radius: 50%;
    content: '';
    height: 30px;
    width: 30px;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
    @media (max-width: 540px) {
      height: 20px;
      width: 20px;
    }
  }
`;

export default function ({ children, loading, link, handleClick, disable }) {
  const ModifiedButton = (
    <Button onClick={handleClick} disabled={disable}>
      {loading ? <CircularProgress /> : children}
    </Button>
  );

  return link ? <a href={link} target='_blank' rel='noreferrer noopener' /> : ModifiedButton;
}
