import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20;
`;

export const Root = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
  width: 100%;
  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Column1 = styled.div`
  width: 50%;
  min-height: 200;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100;
  }
  .heading {
    text-align: left;
  }
`;

export const Imgwrapper = styled.div`
  width: 75%;
  @media (max-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: ${({ smallLogo }) => (smallLogo ? '40%' : '75%')};
  height: auto;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  width: 50%;
  min-height: 200;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
    width: 80%;
    text-align: center;
    align-items: center;
    min-height: 100;
  }
  .link {
    text-decoration: none;
  }
  .text {
    text-align: left;
    font-weight: 600;
    margin-top: 10px;
  }
`;

export const OrderedList = styled.ul`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .content {
    width: 80%;
    font-weight: 400;
    margin-top: 5;
    margin-bottom: 5;
    @media (max-width: 769px) {
      min-height: 100px;
    }
  }
`;
