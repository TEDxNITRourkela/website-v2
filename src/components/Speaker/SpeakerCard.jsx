import React, { useState } from 'react';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { CardContainer, Common, CardBack, ImageContainer, Content, LinkContainer } from './styles';
import { Heading3, Para2, Para1 } from '..';

const links = [
  {
    link: 'https://www.zachkingmagic.com/',
    icon: faGlobe,
    link_name: 'website',
    aria_label: 'Website',
  },
  {
    link: 'https://www.youtube.com/channel/UCq8DICunczvLuJJq414110A',
    icon: faYoutube,
    link_name: 'youtube',
    aria_label: 'Youtube',
  },
  {
    link: 'https://twitter.com/zachking?lang=en',
    icon: faTwitter,
    link_name: 'twitter',
    aria_label: 'Twitter',
  },
  {
    link: 'https://www.instagram.com/zachking/?hl=en',
    icon: faInstagram,
    link_name: 'instagram',
    aria_label: 'Instagram',
  },
  {
    link: 'https://www.facebook.com/ZachKingVine',
    icon: faFacebookF,
    link_name: 'facebook',
    aria_label: 'Facebook',
  },
];

const SpeakerCard = () => {
  const [front, setFront] = useState(true);
  const [card, setCard] = useState('card');

  const onClick = () => {
    const css = front ? 'card isFlipped' : 'card';
    setCard(css);
    setFront((current) => !current);
  };

  return (
    <CardContainer>
      <div className={card}>
        <Common>
          {/* eslint-disable-next-line max-len */}
          <ImageContainer image='https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Zach_King_2_stntn1.png' />
          <Para1 className='name'>John Doe</Para1>
          <Para2 className='content'>Design Guru</Para2>
          <FontAwesomeIcon
            icon={faInfoCircle}
            className='flipButton'
            onClick={onClick}
            onKeyDown={onClick}
          />
        </Common>

        <CardBack>
          <Content>
            <Heading3 className='authorName'>John Doe</Heading3>
            <Para2 className='description'>
              Thought is a free bird, but chained within the realm of ones conscious self. It needs
              a shot, an effort, a spark that glows, engulfing the thought process, triggering it to
              action. It needs some necessary ingredients to pop out. One’s thought can
              revolutionize the world, creating the aura transforming the era.{' '}
            </Para2>
          </Content>
          <LinkContainer>
            {links.map(({ link, icon }) => (
              <Link key={link} to={link}>
                <FontAwesomeIcon className='icon' icon={icon} />
              </Link>
            ))}
          </LinkContainer>

          <FontAwesomeIcon
            icon={faTimesCircle}
            className='flipButton'
            onClick={onClick}
            onKeyDown={onClick}
          />
        </CardBack>
      </div>
    </CardContainer>
  );
};

export default SpeakerCard;
