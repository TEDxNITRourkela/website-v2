import styled from 'styled-components';
import { Link } from 'gatsby';

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 65px 0px;
  padding-bottom: 50px;
  background-color: #1a1a1a;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1360px) {
    padding: 30px 0px;
    padding-bottom: 30px;
  }
  @media (max-width: 321px) {
    padding: 10px 0px;
    padding-bottom: 15px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: auto;
  margin: 0px auto;
  padding: 0rem 1rem;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media all and (max-width: 769px) {
    flex-direction: column;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .logo {
    width: 400px;
    height: auto;
    @media all and (max-width: 850px) {
      width: 250px;
    }
  }
  .sub-heading {
    margin-top: 60px;
    margin-right: 40px;
    font-weight: 700;
    @media all and (max-width: 769px) {
      margin-top: 20px;
    }
  }
  .contact-heading {
    font-weight: 700;
    opacity: 0.4;
  }
  .contact-email {
    font-weight: 700;
    margin-top: 3px;
  }
  .privacy {
    font-weight: 400;
    margin-top: 30px;
    cursor: pointer;
  }
  .terms {
    font-weight: 400;
    margin-top: 2px;
    cursor: pointer;
  }
  @media all and (max-width: 769px) {
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
    text-align: left;
    font-weight: 700;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .link {
    text-decoration: none;
  }
  @media all and (max-width: 769px) {
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
    font-size: 12px;
    color: #fff;
    @media all and (max-width: 769px) {
      margin-top: 20px;
    }
  }
  @media all and (max-width: 769px) {
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
    margin-right: 22px;
    color: rgba(255, 255, 255, 0.3);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
