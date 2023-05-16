import React from 'react';
import '../../styles/Home.css';
import Testimonials from '../About/Testimonials';

const Home = () => {
    return (
        <div className='container'>
            <div className='homeContent'>
                <h1>Handling the Closings of Timeshares since 2008</h1>
                <br></br>
                <Testimonials />
                <br></br>
                <p className='disclaimer'>This website is intended to provide general information regarding the transfer of timeshare properties and related services available from TRCS, inc. This information does not constitute legal advice. Please seek legal advice if you have any legal questions. Changes happen very quickly in this industry; therefore, we do not guarantee the accuracy or availability of the content on this site or on other sites to which we link.</p>
            </div>
        </div>
    );
};

export default Home;

