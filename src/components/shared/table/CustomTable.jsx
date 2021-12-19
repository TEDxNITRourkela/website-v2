import React from 'react';

// Components
import {
  Table,
  TableData,
  TableRow,
  TableHeadingRow,
  TableHeadingColumn,
  TableContainer,
} from './styles';
import { Heading3, Heading2 } from '../..';

const CustomTable = ({ title, headings, body }) => (
  <>
    <Heading2>{title}</Heading2>
    <TableContainer>
      <Table>
        <tbody>
          <TableRow>
            {headings.map((heading) => (
              <TableHeadingRow key={heading}>
                <Heading3 className='heading'>{heading}</Heading3>
              </TableHeadingRow>
            ))}
          </TableRow>

          {body.map((row, index) => (
            <TableRow key={row.heading}>
              <TableHeadingColumn index={index} length={body.length}>
                <Heading3 className='heading'>{row.heading}</Heading3>
              </TableHeadingColumn>
              {row.content.map((column) => (
                <TableData index={index} length={body.length} key={column}>
                  <Heading3 className='text'>{column}</Heading3>
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  </>
);

export default CustomTable;
