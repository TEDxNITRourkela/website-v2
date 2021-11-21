import React, { useState, useRef } from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Components
import { AccordionTitle, AccordionContent } from './styles';
import { Para1, Para2 } from '../..';

const Accordion = ({ title, body, index }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('icon');
  const [toggle, setToggle] = useState(false);

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(active === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotate(active === 'active' ? 'icon' : 'icon rotate');
    setToggle(!toggle);
  };

  return (
    <div>
      <AccordionTitle
        index={index}
        active={toggle}
        type='button'
        className={setActive}
        onClick={toggleAccordion}
      >
        <Para1 className='title'>{title}</Para1>
        <FontAwesomeIcon icon={faChevronDown} className={rotate} />
      </AccordionTitle>
      <AccordionContent
        index={index}
        active={toggle}
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        {/* eslint-disable-next-line react/no-danger */}
        <Para2 className='text' dangerouslySetInnerHTML={{ __html: body }} />
      </AccordionContent>
    </div>
  );
};

export default Accordion;
