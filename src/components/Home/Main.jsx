import React from 'react';

// Components
import { SpeakerCarousel, Hero, TicketHero, BrandAmbassador } from '..';

function Main({ number }) {
  const renderHeroSection = () => {
    switch (number) {
      case '1':
        return <Hero />;

      case '2':
        return <BrandAmbassador />;

      case '3':
        return <TicketHero />;

      case '4':
        return <SpeakerCarousel />;

      default:
        return <Hero />;
    }
  };
  return <div>{renderHeroSection()}</div>;
}

export default Main;
