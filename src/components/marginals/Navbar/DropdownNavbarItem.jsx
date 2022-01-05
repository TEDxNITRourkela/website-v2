import React from 'react';

// Components
import { NavText } from './styles';

function DropdownNavbarItem({ name, children, handler, open }) {
  return (
    <>
      <NavText style={{ padding: '0px 15px', cursor: 'pointer' }} onClick={handler}>
        {name}
      </NavText>
      {open && children}
    </>
  );
}

export default DropdownNavbarItem;
