import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 370px;
  width: 280px;
  border-radius: 8px;
  perspective: 600px;
  overflow: hidden;
  margin: 50px;
  .card {
    height: 100%;
    width: 100%;
    transition: all 0.6s ease;
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
  padding: 33px 25px;
  .flipButton {
    position: absolute;
    top: 25px;
    right: 25px;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
  .name {
    margin-top: 20px;
    font-weight: 700;
    font-size: 24px;
  }
  .content {
    font-size: 14px;
    font-weight: 200;
  }
`;

export const CardBack = styled(Common)`
  transform: rotateY(180deg);
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  background-size: cover;
  background-color: #232323;
  background-image: ${({ image }) =>
    `linear-gradient(to bottom, transparent, transparent, #232323), url(${image})`};
`;

export const Content = styled.div`
  height: 90%;
  text-align: left;
  .authorName {
    text-align: left;
    color: #fff;
  }
  .description {
    font-size: 14px;
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
  }
`;
