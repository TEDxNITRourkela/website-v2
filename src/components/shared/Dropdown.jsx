import React, { useState, useRef, useEffect } from 'react';

// libraries
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Components
import { Para2 } from '..';

// utils
import useMediaQuery from '../../utils/useMediaQuery';

const DropdownContainer = styled.div`
  position: absolute;
  top: 100px;
  width: 200px;
  transform: translateX(50%);
  background-color: #242526;
  overflow: hidden;
  transition: height 500ms ease;
  @media (max-width: 769px) {
    top: 355px;
    transform: translateX(0%);
  }
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }

  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

const Menu = styled.div`
  width: 100%;
  .link {
    text-decoration: none;
  }
`;

const MenuItem = styled.div`
  height: 50px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  transition: background 500ms;
  padding: 0.5rem;
  &:hover {
    background-color: #525357;
    cursor: pointer;
  }
  .text {
    margin-left: 5px;
    @media (max-width: 769px) {
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.6;
      color: #ffffff;
    }
  }
`;

const MenuHead = styled.div`
  display: flex;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    &:hover {
      background-color: #525357;
    }
  }
  .heading {
    margin-left: 5px;
    font-weight: bold;
    @media (max-width: 769px) {
      font-style: normal;
      font-weight: normal;
      font-size: 1.25rem;
      line-height: 1.6;
      color: #ffffff;
    }
  }
`;

function DropdownHead({ goToMenu, setActiveMenu, children }) {
  return (
    <MenuHead>
      <FontAwesomeIcon
        className='icon'
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
        icon={faArrowLeft}
        size='xs'
      />
      <Para2 className='heading'>{children} </Para2>
    </MenuHead>
  );
}

function DropdownItem({
  goToMenu,
  setActiveMenu,
  children,
  haveChildren,
  handler,
  toggleMenuOpen,
  mobile,
}) {
  const clickEvents = () => {
    if (goToMenu) {
      setActiveMenu(goToMenu);
    }
    if (!haveChildren) {
      handler();
      if (mobile) {
        toggleMenuOpen();
      }
    }
  };
  return (
    <MenuItem onClick={clickEvents}>
      <Para2 className='text'>{children}</Para2>
      {haveChildren && <FontAwesomeIcon icon={faAngleRight} />}
    </MenuItem>
  );
}

function Dropdown({ data, handler, open, setOpen, toggleMenuOpen, mobile }) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const isDesktop = useMediaQuery('(min-width: 769px)');

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (isDesktop) {
      document.addEventListener('mousedown', checkIfClickedOutside);
    }
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open, setOpen, isDesktop]);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  return (
    <DropdownContainer style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          {data.map(({ title }) => (
            <DropdownItem key={title} goToMenu={title} setActiveMenu={setActiveMenu} haveChildren>
              {title}
            </DropdownItem>
          ))}
        </Menu>
      </CSSTransition>
      {data.map(({ title, items }) => (
        <CSSTransition
          key={title}
          in={activeMenu === title}
          timeout={500}
          classNames='menu-secondary'
          unmountOnExit
          onEnter={calcHeight}
        >
          <Menu>
            <DropdownHead goToMenu='main' setActiveMenu={setActiveMenu}>
              {title}
            </DropdownHead>
            {items.map(({ link, text }) => (
              <Link className='link' key={link} to={`/events/${title}/${link}`}>
                <DropdownItem toggleMenuOpen={toggleMenuOpen} mobile={mobile} handler={handler}>
                  {text}
                </DropdownItem>
              </Link>
            ))}
          </Menu>
        </CSSTransition>
      ))}
    </DropdownContainer>
  );
}

export default Dropdown;
