import styled from 'styled-components';

/**
 * Most frequently used Heading in the website.
 * Mainly used for Section Titles and in Banner Questions
 */
export default styled.h2`
  font-family: 'Zilla Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  @media all and (max-width: 769px) {
    font-size: 2rem;
  }
`;
