import React from 'react';
import { Link } from 'gatsby';

// Components
import {
  Column1,
  Imgwrapper,
  Img,
  Wrapper,
  Column2,
  OrderedList,
  Root,
} from './styles';

import { Heading3, Para2 } from '../..';

const ContentBanner = ({ DATA, smallLogo = false }) => (
  <Wrapper>
    <Root>
      <Column1>
        <Heading3 className='heading'>{DATA.TITLE}</Heading3>
        <Imgwrapper>
          {DATA.LOGO && <Img smallLogo={smallLogo} src={DATA.LOGO} alt='TEDxNITRourkela Logo' />}
        </Imgwrapper>
      </Column1>
      <Column2>
        {typeof DATA.CONTENT === 'string' ? (
          <Para2>{DATA.CONTENT}</Para2>
        ) : (
          <OrderedList>
            {DATA.CONTENT.map((point) => (
              <li key={point} className='content'>
                {point}
              </li>
            ))}
          </OrderedList>
        )}
        {DATA.LINK && (
          <Link className='link' to={DATA.LINK}>
            <Para2 className='text'>{DATA.LINKTEXT}</Para2>
          </Link>
        )}
      </Column2>
    </Root>
  </Wrapper>
);

export default ContentBanner;
