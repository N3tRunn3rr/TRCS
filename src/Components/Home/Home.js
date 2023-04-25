import React from 'react';
import '../../styles/Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='homeContent'>
                <h1>Welcome</h1>
                <p className='welcometext'>
                The purchase and sale of a timeshare is like any other Real Estate transaction. We will handle the closing of your timeshare like a real estate closing. We specialize in timeshare resort closings and handle some of the industry’s biggest brands such as Hilton, Hyatt, Disney, Marriott, Sheraton, just to name a few. Referrals are our best source of business. Your closing will be professionally and efficiently handled so that you will want to send us your referrals.
                </p>
                <br></br>
                <h3>Professional Services</h3>
                <p className='servicetext'>
                We offer fast, friendly, accurate and professional service. Our services include:
                </p>
                <ul className='services'>
                    <li className="servicelist">Escrow Services</li>
                    <li className="servicelist">Order Estoppels</li>
                    <li className="servicelist">Resort Information Verification</li>
                    <li className="servicelist">Deed Preparation</li>
                    <li className="servicelist">Closing Documents</li>
                    <li className="servicelist">Resort Notification</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;

