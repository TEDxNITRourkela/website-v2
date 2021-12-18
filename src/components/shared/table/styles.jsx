import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  margin-top: 40px;
  @media all and (max-width: 950px) {
    justify-content: flex-start;
  }
`;

export const Table = styled.table`
  min-width: 400px;
  background-color: #232323;
  border-radius: 16px;
  margin-bottom: 7px;
`;

export const TableHeadingRow = styled.th`
  min-width: 150px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  &:first-child {
    border-right: 2px solid rgba(255, 255, 255, 0.4);
  }
  &:last-child {
    border-right: none;
  }
`;

export const TableHeadingColumn = styled.th`
  min-width: 150px;
  border-right: 2px solid rgba(255, 255, 255, 0.4);
  &:first-child {
    border-bottom: ${({ index, length }) =>
      index === length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
  }
`;

export const TableRow = styled.tr`
  .heading {
    font-weight: 600;
    color: #fff;
    padding: 10px 100px;
  }
  .text {
    font-weight: 400;
    color: #fff;
    padding: 10px 100px;
  }
`;

export const TableData = styled.td`
  min-width: 150px;
  padding: 0px;
  border-bottom: ${({ index, length }) =>
    index === length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  &:last-child {
    border-right: none;
  }
`;
