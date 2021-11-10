import styled from 'styled-components';

/**
 * Mainly used for Navbar and Footer content
 */
export default styled.p`
  font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  @media all and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;
