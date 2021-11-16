import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 360px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px 12px;
  align-items: flex-start;
  border-radius: 12px;
  background-color: #232323;
  @media all and (max-width: 400px) {
    height: 420px;
  }
  @media all and (max-width: 321px) {
    height: 360px;
  }
  .image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const CardDetails = styled.div`
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .title {
    color: #fff;
    font-size: 24px;
    @media all and (max-width: 400px) {
      font-size: 16px;
    }
  }
  .price {
    color: rgba(255, 255, 255, 0.7);
    @media all and (max-width: 400px) {
      font-size: 13px;
    }
  }
`;

export const Body = styled.div`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 15px;
  @media all and (max-width: 400px) {
    font-size: 12px;
  }
`;
