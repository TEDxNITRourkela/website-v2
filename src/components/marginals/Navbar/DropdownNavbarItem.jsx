import React, { useState } from 'react';

// Components
import { TabLink, NavText } from './styles';

const DropdownNavbarItem = ({ name, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <TabLink>
      <NavText onClick={() => setOpen(!open)}>{name}</NavText>
      {open && children}
    </TabLink>
  );
};

export default DropdownNavbarItem;
