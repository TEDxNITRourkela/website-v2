import React, { useState } from 'react';

// Components
import { NavText } from './styles';

const DropdownNavbarItem = ({ name, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavText style={{ padding: '0px 15px', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
        {name}
      </NavText>
      {open && children}
    </>
  );
};

export default DropdownNavbarItem;
