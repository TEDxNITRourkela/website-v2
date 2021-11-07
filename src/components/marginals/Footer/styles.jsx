import styled from 'styled-components';
import { Link } from 'gatsby';

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  background-color: #1a1a1a;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding: 60px 120px;
  @media all and (max-width: 760px) {
    padding: 10px 35px;
    padding-bottom: 50px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media all and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .logo {
    width: 400px;
    height: auto;
    @media all and (max-width: 760px) {
      width: 250px;
    }
  }
  .sub-heading {
    margin-top: 18px;
    font-weight: 700;
    color: #fff;
  }
  .contact-heading {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  .contact-email {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-top: 7px;
  }
  @media all and (max-width: 760px) {
    margin-top: 40px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .column {
    display: flex;
    margin-right: 25px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .nav-text {
    color: #fff;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .link {
    text-decoration: none;
  }
  @media all and (max-width: 760px) {
    margin-top: 40px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  .copyright {
    font-weight: 400;
    font-size: 13px;
    color: #fff;
    @media all and (max-width: 760px) {
      margin-top: 20px;
    }
  }
  @media all and (max-width: 760px) {
    margin-top: 60px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    cursor: pointer;
    font-size: 20px;
    margin-left: 22px;
    color: rgba(255, 255, 255, 0.3);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
