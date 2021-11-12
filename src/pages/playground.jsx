import React, { useState } from 'react';

// Components
import { Heading1, Heading2, Heading3, Para1, Para2, Digitised, CustomButton } from '../components';

const Playground = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading === false) {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Digitised>Digitised</Digitised>
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Heading3>Heading3</Heading3>
      <Para1>Para1</Para1>
      <Para2>Para2</Para2>

      <CustomButton loading={loading} setLoading={setLoading} handleClick={handleClick}>
        Register Now
      </CustomButton>
    </div>
  );
};

export default Playground;
