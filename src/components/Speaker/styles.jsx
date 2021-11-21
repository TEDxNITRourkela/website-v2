import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 370px;
  width: ${({ isLongCard, isPublished }) =>
    // eslint-disable-next-line no-nested-ternary
    isPublished ? (isLongCard ? '560px' : '280px') : '280px'};
  border-radius: 8px;
  perspective: 600px;
  /* overflow: hidden; */
  margin: 10px;
  @media (max-width: 660px) {
    height: 230px;
    width: ${({ isLongCard, isPublished }) =>
      // eslint-disable-next-line no-nested-ternary
      isPublished ? (isLongCard ? '300px' : '150px') : '150px'};
  }
  .card {
    height: 100%;
    width: 100%;
    transition: all 1s ease;
    transform-style: preserve-3d;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .isFlipped {
    transform: rotateY(180deg);
  }
`;

export const Common = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  backface-visibility: hidden;
  background-color: #232323;
  border-radius: 8px;
  padding: 33px 25px;
  @media (max-width: 660px) {
    padding: 15px 13px;
  }
  .flipButton {
    position: absolute;
    top: 25px;
    right: 25px;
    color: #fff;
    @media (max-width: 660px) {
      top: 15px;
      right: 15px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .name {
    margin-top: 18px;
    font-weight: 700;
    font-size: 21px;
    @media (max-width: 660px) {
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .content {
    font-size: 12px;
    font-weight: 200;
    @media (max-width: 660px) {
      font-size: 7px;
      margin-top: 4px;
    }
  }
`;

export const CardBack = styled(Common)`
  transform: rotateY(180deg);
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  width: 100%;

  height: ${({ isPublished, isLongCard }) =>
    // eslint-disable-next-line no-nested-ternary
    isPublished ? (isLongCard ? '78%' : '73%') : '90%'};
  border-radius: 8px;
  background-size: cover;
  background-color: #232323;
  background-image: ${({ image }) =>
    `linear-gradient(to bottom, transparent, transparent, #232323), url(${image})`};
  @media (max-width: 660px) {
    height: ${({ isPublished, isLongCard }) =>
      // eslint-disable-next-line no-nested-ternary
      isPublished ? (isLongCard ? '70%' : '65%') : '85%'};
  }
`;

export const Content = styled.div`
  height: 90%;
  text-align: left;
  @media (max-width: 660px) {
    height: 85%;
  }
  .authorName {
    text-align: left;
    color: #fff;
    @media (max-width: 660px) {
      font-size: 16px;
    }
  }
  .description {
    font-size: 14px;
    @media (max-width: 660px) {
      font-size: 8px;
    }
  }
  .link {
    color: #fff;
    font-weight: 600;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .icon {
    width: 18px;
    height: 18px;
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
    @media (max-width: 660px) {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
  }
`;
