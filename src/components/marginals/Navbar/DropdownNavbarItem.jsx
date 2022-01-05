import React, { useState } from 'react';

// Components
import { NavText } from './styles';

function DropdownNavbarItem({ name, children, handler, open }) {
  const [hover, setHover] = useState(false);
  const hoverHandler = () => {
    setHover(!hover);
  };
  return (
    <>
      <NavText
        style={{ padding: '0px 15px', cursor: 'pointer' }}
        onMouseOver={hoverHandler}
        onMouseOut={hoverHandler}
        onClick={handler}
      >
        {name}
      </NavText>
      {(open || hover) && children}
    </>
  );
}

export default DropdownNavbarItem;
