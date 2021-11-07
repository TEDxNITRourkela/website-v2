import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const fadeDown = keyframes`
    0% {
        transform: translateX(10px);
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .bars {
    color: #fff;
    @media all and (min-width: 760px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 250px;
  height: auto;
  margin-left: 30px;
  margin-top: 10px;
  @media (max-width: 759px) {
    width: 200px;
  }
  .logo {
    width: 100%;
    height: auto;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  @media (max-width: 759px) {
    display: none;
  }
`;

export const TabLink = styled(Link)`
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
`;

export const Tab = styled.div`
  color: #fff;
`;

export const MobileNavbarSection = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  padding-top: 50px;
  padding-left: 20px;
  background-color: #17171d;
  z-index: 9999;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  .mobile-nav-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 100%;
  }
  .back-button {
    color: #fff;
    position: absolute;
    right: 50px;
    top: 40px;
  }
  .linkList {
    list-style-type: none;
  }
  .listItem {
    text-align: left;
    margin-bottom: 1em;
  }
  .link {
    font-size: 1.2em;
    text-decoration: none;
  }
`;
