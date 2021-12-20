/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Box0 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
`;

const GridContainer = styled.div`
  max-width: 1000px;
  margin: 0px auto;
`;

const ImgContainer = styled.div`
  width: ${(small) => (small ? '95%' : '100%')};
  margin: 10px;
  display: ${(small) => (small ? 'flex' : 'flex')};
  height: ${(small) => (small ? '95%' : '100%')};

  @media(max-width: 540px){
    margin: 1px;
  }
`;

const Paper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    max-height: 90vh;
    max-width: 70vw;
    padding: 24px;

    @media(max-width: 540px){
        width: 100vw;
        max-height: 90vh;
        max-width: 100vw;
    }
`;

const Box1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
`;

const Popup = styled.div`
    animation: fade 1.5s linear; 
    opacity: 1;
    background-color: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;

    @keyframes fade {
        0% { opacity: 0.6 }
        50% { opacity: 1 }
    }
`;

const Box2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const CloseButton = styled.div`
    top: 0;
    right: 4px;
    position: absolute;
    color: var(--color-secondary);
    cursor: pointer;
`;   

function GallerySection({ DATA }) {

  const [open, setOpen] = useState(false);
  const [activeImage, setImage] = useState(0);

  const handleOpen = (index) => {
    setImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderImage = (index, small = 'false') => (
      <ImgContainer small={small}>
        <Img
          key={DATA[index].title}
          src={DATA[index].image}
          alt={DATA[index].title}
          onClick={() => handleOpen(index)}
        />
      </ImgContainer>
    );

  const renderGrid1 = () => {
    const items1 = [];
    for (let i = 0; i < DATA.length - (DATA.length % 9); i += 9) {
      items1.push(
        <div key={DATA[i].title}>
          <Box1>
            {renderImage(i)}
            {renderImage(i + 1)}
            {renderImage(i + 2)}
          </Box1>
          <Box1>
            <div style={{ display: 'flex', flexBasis: '66.66%' }}>
              {renderImage(i + 3)}
            </div>
            <Box2 style={{ flexBasis: '33.33%' }}>
              {renderImage(i + 4, 'true')}
              {renderImage(i + 5, 'true')}
            </Box2>
          </Box1>
          <Box1>
            <Box2 style={{ flexBasis: '33.33%' }}>
              {renderImage(i + 6, 'true')}
              {renderImage(i + 7, 'true')}
            </Box2>
            <div style={{ display: 'flex', flexBasis: '66.66%' }}>
              {renderImage(i + 8)}
            </div>
          </Box1>
        </div>,
      );
    }
    return <div>{items1}</div>;
  };

  const renderGrid2 = () => {
    const items2 = [];
    for (let i = DATA.length - (DATA.length % 9); i < DATA.length; i += 1) {
      items2.push(
        <div
          key={DATA[i].title}
          style={{ display: 'flex', flexBasis: '33.33%' }}
        >
          {renderImage(i)}
        </div>,
      );
    }
    return <Box0>{items2}</Box0>;
  };

  return (
    <GridContainer>
      {renderGrid1()}
      {renderGrid2()}
      {open && (   
       <Popup>
          <Paper>
            <img
              src={DATA[activeImage].image}
              alt={DATA[activeImage].title}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <CloseButton onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </Paper>
      </Popup>)}
    </GridContainer>
  );
}

export default GallerySection;
