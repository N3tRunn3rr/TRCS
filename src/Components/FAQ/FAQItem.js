import React, { useState } from 'react';

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button onClick={handleClick}>
        {isOpen ? '-' : '+'} {faq.question}
      </button>
      {isOpen && <p>{faq.answer}</p>}
    </div>
  );
}

export default FAQItem;
