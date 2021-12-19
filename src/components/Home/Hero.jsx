import React, { useState, useEffect } from 'react';

// Components
import { HeroContainer, TimeContainer, IntervalContainer } from './styles';
import { Para2, Heading1, Digitised, Para1 } from '..';
import { ScrollDown } from './Common';

// Assets
import { home } from '../../../config/content';

// Utils
import calculateTimeLeft, { getlength } from '../../utils/timer';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { caption, heading } = home;

  const logo = {
    src: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1636208790/TedxNITR/White_Logo_ldguyq.png',
    alt: 'TedxNITRourkela',
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      timeLeft[interval] = '00';
    }

    if (getlength(timeLeft[interval]) === 1) {
      timeLeft[interval] = `0${timeLeft[interval]}`;
    }

    timerComponents.push(
      <IntervalContainer key={timeLeft[interval]}>
        <Digitised>
          {timeLeft[interval]}
          {interval === 'Minutes' ? '' : ':'}
        </Digitised>
        <Para1 className='interval'>{interval}</Para1>
      </IntervalContainer>,
    );
  });

  return (
    <HeroContainer>
      <Para2 className='caption'>{caption} </Para2>
      <img className='logo' src={logo.src} alt={logo.alt} />
      <Heading1 className='heading'>{heading}</Heading1>
      <TimeContainer>{timerComponents}</TimeContainer>
      <ScrollDown />
    </HeroContainer>
  );
};

export default Hero;
