import React from 'react';

// Components
import { NavText } from './styles';

import useMediaQuery from '../../../utils/useMediaQuery';

function DropdownNavbarItem({ name, children, handler, open, setOpen }) {
  const isDesktop = useMediaQuery('(min-width: 769px)');
  const mouseOver = () => {
    if (isDesktop) {
      setOpen(true);
    }
  };
  return (
    <>
      <NavText
        style={{ padding: '0px 15px', cursor: 'pointer' }}
        onMouseOver={mouseOver}
        onClick={handler}
      >
        {name}
      </NavText>
      {open && children}
    </>
  );
}

export default DropdownNavbarItem;
