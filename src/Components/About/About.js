import React from 'react';
import '../../styles/About.css'

export default function About() {
    return (
        <div className='aboutcontainer'>
            <h1>ABOUT US AND OUR SERVICES</h1>
            <p className='about-p'>TRCS, Inc. is a small minority-owned business capable of big business results.  When you choose TRCS, Inc. for your closings, you are choosing a team who consistently delivers excellent service with a professional, yet personal touch.  We take great pride in simplifying the closing process for our clients, doing everything in our power to ensure efficient, quick, and accurate transactions.  We manage some of the industry’s leaders such as Hilton Grand Vacations, Hyatt Residence Club, Disney Vacation Club, Marriott Vacation Club and Vistana and Westin, just to name a few.</p>
            <br />
            <p className='referrals'>Referrals are our biggest compliment and our best source of business.   If you are pleased with our service as we execute your closing, we’d appreciate your referral too. </p>
            <br />
            <div className='referrals-container'>
                <h3>All of our closings include the following:</h3>
                <ul className='referrals-list'>
                    <li>We obtain information in writing from the resort or management company verifying the status of maintenance fees and taxes, description of unit/week, and various other facts and information about use of the timeshare.</li>
                    <li> If the Developer has the Right of First Refusal (ROFR) on the property, a waiver is requested.</li>
                    <li>Closing Statements and Closing Documents preparation: We prepare all necessary closing documents for buyer and seller listing all charges and costs associated with the transaction.</li>
                    <li>Funds are held in an escrow account until all required documents are received by buyer and seller and the transaction closes. </li>
                    <li>Recording Fees charged by the county (if applicable) </li>
                    <li>Notification of New ownership to Resort or Management Company </li>
                    <li>We request confirmation once the transfer is completed and in turn, we will notify the buyer their new timeshare is ready to use! </li>
                </ul>
                <h3>Optional Service:</h3>
                <ul className='referrals-list'>
                    <li>Title insurance (for deeded properties only) – prices vary depending on the State. </li>
                </ul>
                <br></br>
                <p className='referral-question'>Do you need only a deed prepared and recorded? We can do that too! Contact us for more information. </p>
            </div>

        </div>
    )
}


