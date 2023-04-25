import Testimonials from './Testimonials';
import React from 'react';
import '../../styles/About.css'

export default function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p className='about-p'>The purchase and sale of a timeshare is like any other Real Estate transaction. We will handle the closing of your timeshare like a real estate closing. We specialize in timeshare resort closings and handle some of the industry’s biggest brands such as Hilton, Hyatt, Disney, Marriott, Sheraton, just to name a few. Referrals are our best source of business. Your closing will be professionally and efficiently handled so that you will want to send us your referrals.</p>
            <Testimonials/>
            <div className='contact'>
                <h3>Contact us at:</h3>
                <li>4417 13th St. # 480</li>
                <li>St. Cloud, FL 34769 USA</li>
                <li>Phone: (407) 464-3935</li>
                <li>Fax: (407) 955-4980</li>
                <li><a href="mailto:info@trcsinc.com?subject=Question about your services&body=Hello,">
                E-mail us!
                </a>
                </li>
            </div>
        </div>
    )
}


