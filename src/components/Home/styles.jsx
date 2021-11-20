import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .caption {
    margin-top: 1px;
    letter-spacing: 2.5px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.2);
    font-weight: 700;
    @media (max-width: 500px) {
      font-size: 8px;
      letter-spacing: 1.5px;
    }
  }
  .heading {
    margin-top: 20px;
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
  .logo {
    margin-top: 5px;
    width: 400px;
    height: auto;
    @media (max-width: 500px) {
      width: 225px;
    }
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const IntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .interval {
    color: rgba(255, 43, 6, 1);
    font-weight: 700;
    font-size: 24px;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

export const ScrollDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  .scroll {
    margin-bottom: 10px;
    height: 36px;
    height: 36px;
  }
`;
