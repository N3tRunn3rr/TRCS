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
            </div>
        </div>
    );
};

export default Home;

