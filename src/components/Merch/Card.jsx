import React from 'react';

// Components
import { CardContainer, CardDetails, TitleContainer, Body } from './styles';
import { Heading3, Para2 } from '..';

const Card = ({ name, imageUrl, description, price }) => (
  <CardContainer>
    <img className='image' src={imageUrl} alt='TEDxNITRourkela Merchandise' />
    <CardDetails>
      <TitleContainer>
        <Heading3 className='title'>{name}</Heading3>
        <Para2 className='price'>{`₹ ${price}/-`}</Para2>
      </TitleContainer>
      <Body>{description}</Body>
    </CardDetails>
  </CardContainer>
);

export default Card;
