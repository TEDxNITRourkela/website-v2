/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

// Components
// eslint-disable-next-line max-len
import {
  Heading1,
  Heading2,
  Heading3,
  Para1,
  Para2,
  Digitised,
  CustomButton,
  SpeakerCarousel,
} from '../components';


function Playground() {
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
      <SpeakerCarousel />
    </div>
  );
}

export default Playground;
