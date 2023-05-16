import React, { useState } from 'react';
import Accordion from './Accordion';
import '../../styles/FAQ.css';

function FAQ() {
  const accordionData = [
    {
      question: 'How long does it take to close on a property?',
      answer: 'Depending on the property, an average closing takes approximately 60-90 days as long as all parties return the documents in a timely manner.',
    },
    {
      question: 'How long does it take for a county to record a deed?',
      answer:
        'Thanks to Electronic recordings, most deeds record in 2-3 business days.',
    },
    {
      question: 'Are there any additional fees?',
      answer:
        'Our closing costs include all documents needed on a normal closing scenario; however, on occasion, additional documents and/or affidavits might need to be prepared and recorded (i.e: affidavit of death, trustee affidavits). These costs will be the responsibility of the seller.',
    },
    {
        question: 'What is Right of First Refusal (ROFR)?',
        answer:
          'Some developers have the Right of first refusal or first right of refusal, this means that we must present a copy of the contract to the developer so they can decide if they want to step in as the buyers or allow the buyer to complete the purchase.',
    
    },
    {
        question: 'What happens if I got divorced since I took the title?',
        answer:
          'Divorce decrees awarding the timeshare to the other party are not enough. All parties listed on the existing deed must sign the new deed to convey ownership to the buyers. We can create separate signature pages so the documents can be signed separately, If your legal name changed, we can address the new name on the deed we prepare.',
    },
    {
        question: 'What are acceptable forms of payments for the final funds?',
        answer: 
            'We accept cashier’s checks, wire transfers, ACH payments, Zelle or Money orders for the final funds. We DO NOT accept personal checks or credit cards for the final funds. l funds.',
    }
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
