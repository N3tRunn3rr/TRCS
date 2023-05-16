import React from 'react';
import '../../styles/Home.css';
import Testimonials from '../About/Testimonials';

const Home = () => {
    return (
        <div className='container'>
            <div className='homeContent'>
                <h1>Handling the Closings of Timeshares since 2008</h1>
                <p className='welcometext'>
                The purchase and sale of a timeshare is like any other Real Estate transaction. We will handle the closing of your timeshare like a real estate closing. We specialize in timeshare resort closings and handle some of the industry’s biggest brands such as Hilton, Hyatt, Disney, Marriott, Sheraton, just to name a few. Referrals are our best source of business. Your closing will be professionally and efficiently handled so that you will want to send us your referrals.
                </p>
                <br></br>
                <Testimonials />
                <br></br>
                <p className='disclaimer'>This website is intended to provide general information regarding the transfer of timeshare properties and related services available from TRCS, inc. This information does not constitute legal advice. Please seek legal advice if you have any legal questions. Changes happen very quickly in this industry; therefore, we do not guarantee the accuracy or availability of the content on this site or on other sites to which we link.</p>
            </div>
        </div>
    );
};

export default Home;

