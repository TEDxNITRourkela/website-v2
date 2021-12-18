// Libraries
import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  margin: 0px auto;
  padding-top: 20px;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 95%;
    padding: 0.5rem;
  }
`;
