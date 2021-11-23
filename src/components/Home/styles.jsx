import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
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
  @media (max-width: 700px) {
    margin-top: 30px;
  }
  .scroll {
    margin-bottom: 10px;
    height: 32px;
    height: 32px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  width: 100%;
  margin-top: 55px;
  background-color: var(--background-secondary);
  border-radius: 16px;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
  .link {
    color: #fff;
    padding-left: 3px;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      text-align: left;
    }
  }
  .heading {
    font-size: 1.5rem;
    margin-top: 0px;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
    @media (max-width: 700px) {
      text-align: left;
    }
  }
  .linktext {
    font-size: 1.2rem;
    @media (max-width: 1000px) {
      font-size: 0.7rem;
    }
    @media (max-width: 700px) {
      text-align: left;
    }
  }
`;

export const TicketContainer = styled.div`
  width: 80%;
  height: auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
