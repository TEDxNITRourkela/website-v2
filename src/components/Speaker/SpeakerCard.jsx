import React, { useState } from 'react';

// libraries
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import { CardContainer, Common, CardBack, ImageContainer, Content, LinkContainer } from './styles';
import { Heading3, Para2, Para1 } from '..';

const SpeakerCard = ({
  name,
  description,
  shortDescription,
  speakerImage,
  shilhouette,
  links,
  isLongCard,
  isPublished,
}) => {
  const [front, setFront] = useState(true);
  const [card, setCard] = useState('card');

  const onClick = () => {
    const css = front ? 'card isFlipped' : 'card';
    setCard(css);
    setFront((current) => !current);
  };

  const image = isPublished ? speakerImage : shilhouette;

  return (
    <CardContainer isPublished={isPublished} isLongCard={isLongCard}>
      <div className={card}>
        <Common>
          <ImageContainer isLongCard={isLongCard} isPublished={isPublished} image={image} />
          {isPublished && (
            <>
              <Para1 className='name'>{name}</Para1>
              <Para2 className='content'>{shortDescription}</Para2>
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='flipButton'
                onClick={onClick}
                onKeyDown={onClick}
              />
            </>
          )}
        </Common>

        <CardBack>
          <Content>
            <Heading3 className='authorName'>{name} </Heading3>
            <Para2 className='description'>
              {description.map((desc) =>
                typeof desc === 'string' ? (
                  <span key={desc}>{desc} </span>
                ) : (
                  <Link className='link' key={desc} to={desc.href}>
                    {desc.content}
                  </Link>
                ),
              )}
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
