import React, { useState } from 'react';
import Accordion from './Accordion';
import '../../styles/FAQ.css';

function FAQ() {
  const accordionData = [
    {
      question: 'How long does it take to close on a property?',
      answer: 'An average closing takes approximately 4-6 weeks as long as all parties return the documents on a timely manner.',
    },
    {
      question: 'How long does it take for a county to record a deed?',
      answer:
        'Most counties take an average of 2-4 weeks to process and return the recorded deed and documents. We know how the Counties handle the recording and submit special instructions so that your recording will proceed quickly. If you wish an expedited closing there would be an additional fee.',
    },
    {
      question: 'Who holds the funds?',
      answer:
        'For the protection of the buyer and seller, we recommend letting us hold the funds in an escrow account. The funds will only be released once all the documents have been properly executed by both the buyer and seller.',
    },
    {
        question: 'When does the seller get paid?',
        answer:
          'On a deeded property, the seller will get paid once we received the sellers and buyers properly executed documents and the funds have been confirmed as good. On a right to use or membership property, the seller will get paid once we received the sellers and buyers properly executed documents and the funds have been confirmed as good and the resort has confirmed the transfer of ownership.',
    
    },
    {
        question: 'Are there any additional fees?',
        answer:
          'Our closing costs include all documents needed on a normal closing scenario; however, in occasion, additional documents and/or affidavits might need to be recorded. These recording costs will be the responsibility of the seller.',
         
    },
    {
        question: 'Is Title Insurance Included?',
        answer: 
            'No, our fees do not include title insurance. We currently offer title insurance for Florida properties only for an additional $200.00.',
        
    },
    {
        question: 'Who is responsible for the resort transfer fee (if any)?',
        answer: 
            'It is up to the buyer and seller to negotiate who is responsible for the transfer fee. Inform us on who is responsible and we will collect the fee and send it to the resort with the required documents.',
        
    },
    {
        question: 'What is a deed?',
        answer: 
            'A deed is a legally binding document that specifies ownership, has the legal description of the property and outlines the rights granted to the owner.',
         
    },
    {
        question: 'What is an escrow account?',
        answer: 
        'An escrow account is a non-interest bearing account used to keep the funds while all aspects of the closing are being processed.',
        
    },
    {
        question: 'What is an Estoppel letter?',
        answer: 
        'An estoppel letter is given by the resort and outlines the exact status of the timeshare property. It contains maintenance fees paid and pending, as well as other information pertaining to the use of the timeshare.',
 
    },
    {
        question: 'What is the difference between a Quit Claim Deed and a Warranty Deed?',
        answer: 
        'A Quit claim deed contains no warranties from the Grantor (seller) to the Grantee (buyer). The property is deeded “as is”. This deed is common in gift transactions. A Warranty deed transfers all rights of ownership to the Grantee (buyer) and makes certain promises and guarantees about the property to ensure the buyer is getting exactly what the seller claims. This type of deed is most commonly used in timeshare title transfers.',

    },
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
