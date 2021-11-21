import styled from 'styled-components';

/**
 * Mainly used in the Hero section of the Home page for the theme of the
 * event and name of the event.
 */
export default styled.h1`
  font-family: 'Zilla Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  @media all and (max-width: 769px) {
    font-size: 1.75rem;
  }
`;
