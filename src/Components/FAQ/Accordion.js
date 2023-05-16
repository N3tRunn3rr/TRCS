import React, { useState, useRef } from 'react';

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const answerRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={handleClick}>
        <div>{question}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div
        className={`accordion-answer ${isActive ? 'accordion-answer--open' : ''}`}
        ref={answerRef}
        style={{ maxHeight: isActive ? answerRef.current.scrollHeight + 'px' : 0 }}
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;