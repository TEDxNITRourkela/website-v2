import styled from 'styled-components';
import { about } from '../../../../config/content';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10%;
`;

export const AccordionTitle = styled.div`
  background-color: #f4f4f4;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
  outline: none;
  transition: background-color 0.6s ease;
  &:first-child {
    border-top-left-radius: ${({ index }) => (index === 0 ? '16px' : '0px')};
    border-top-right-radius: ${({ index }) => (index === 0 ? '16px' : '0px')};
    border-bottom-left-radius: ${({ index, active }) =>
      index === about.FAQ.length - 1 && !active ? '16px' : '0px'};
    border-bottom-right-radius: ${({ index, active }) =>
      index === about.FAQ.length - 1 && !active ? '16px' : '0px'};
  }
  &:hover {
    background-color: #ccc;
  }
  .active {
    background-color: #ccc;
  }
  .title {
    text-align: left;
    color: #000;
    font-weight: bold;
  }
  .icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
  &:last-child {
    border-bottom-left-radius: ${({ index, active }) =>
      index === about.FAQ.length - 1 && active ? '16px' : '0px'};
    border-bottom-right-radius: ${({ index, active }) =>
      index === about.FAQ.length - 1 && active ? '16px' : '0px'};
  }
  .text {
    padding: 18px;
    color: #000;
  }
`;
