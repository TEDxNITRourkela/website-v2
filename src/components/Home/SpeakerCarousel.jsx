/* eslint-disable max-len */
import React, { useRef } from 'react';

// libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql, Link } from 'gatsby';

// Components
import { HeroContainer } from './styles';
import { SpeakerCard, Para2, Heading1, Heading2, CustomButton } from '..';
import { ScrollDown } from './Common';

// Assets
import { home } from '../../../config/content';

const TableContainer = styled.div`
  flex: 1;
  display: flex;
  scroll-behavior: smooth;
  overflow: auto;
  margin: 10px 0px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 50px;
  .btn {
    cursor: pointer;
    color: #ffffff;
    margin: 20px;
  }
`;

const Carousel = styled.div`
  min-width: min-content;
  padding: 8px 8px;
  background-color: #383838;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  margin-top: 2rem;
  @media (max-width: 769px) {
    width: 75%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

function SpeakerCarousel() {
  const data = useStaticQuery(graphql`
    {
      mdx(fileAbsolutePath: { regex: "/content/live/" }) {
        frontmatter {
          dates
          speakers {
            isLongCard
            isPublished
            name
            shortDescription
            silhouette
            speakerImage
            description {
              content
              href
            }
            links {
              icon
              link
            }
          }
        }
      }
    }
  `);
  const { frontmatter } = data.mdx;
  const { speakers } = frontmatter;

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <HeroContainer>
        <Para2 className='caption'>{home.CONTENT1.caption} </Para2>
        <Heading1 className='heading' style={{ marginTop: '0px' }}>
          What Now?
        </Heading1>

        <ImgContainer>
          <Img
            src='https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641279493/assets/logos/Group_631_goyfk3.png'
            alt={home.CONTENT1.thankyouurl.alt}
          />
        </ImgContainer>

        <Heading2 className='dates'>8-9th January | 4 - 8 pm</Heading2>
        <Link to='/live'>
          <CustomButton>Watch Live</CustomButton>
        </Link>
      </HeroContainer>

      <ButtonContainer>
        <FontAwesomeIcon onClick={() => scroll(-300)} className='btn' icon={faChevronCircleLeft} />
        <FontAwesomeIcon onClick={() => scroll(300)} className='btn' icon={faChevronCircleRight} />
      </ButtonContainer>

      <TableContainer ref={ref}>
        <Carousel>
          {speakers.map(
            ({
              name,
              description,
              shortDescription,
              speakerImage,
              links,
              isLongCard,
              isPublished,
              shilhouette,
            }) => (
              <SpeakerCard
                key={name}
                name={name}
                description={description}
                shortDescription={shortDescription}
                speakerImage={speakerImage}
                links={links}
                shilhouette={shilhouette}
                isLongCard={isLongCard}
                isPublished={isPublished}
              />
            ),
          )}
        </Carousel>
      </TableContainer>
      <ScrollDown />
    </>
  );
}

export default SpeakerCarousel;
