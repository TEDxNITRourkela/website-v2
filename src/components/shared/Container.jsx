// Libraries
import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: var(--max-width);
  padding: 0rem 1rem;
  height: auto;
  margin: 0px auto;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 95%;
    padding: 0.5rem;
  }
`;
