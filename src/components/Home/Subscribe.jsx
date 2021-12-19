import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import { Heading2, CustomButton } from '..';

const Wrapper = styled.div`
  margin: 100px 0px;
  padding: 0px 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 900px) {
    margin: 50px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    text-align: left;
    width: 200px;
    text-align: left;
    @media (max-width: 900px) {
      text-align: center;
    }
  }
`;

const Input = styled.input`
  font-size: 24px;
  border: none;
  color: #ffffff;
  width: 50%;
  background: transparent;
  background-color: transparent;
  border-bottom: 2px solid #ffffff;
  @media (max-width: 900px) {
    margin: 50px 0px;
    width: 85%;
  }
  @media (max-width: 450px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Subscribe = () => {
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
    <Wrapper>
      <Heading2 className='text'>Subscribe to Newsletter</Heading2>
      <Input type='text' placeholder='example @email.com' />
      <CustomButton loading={loading} setLoading={setLoading} handleClick={handleClick}>
        Submit
      </CustomButton>
    </Wrapper>
  );
};

export default Subscribe;
