//Services JS
import React from 'react';
import '../../styles/Services.css'

const Services = () => {
    return (
        <div className='serviceContainer'>
            <div className='servicesContent'>
                <h1>Our Services</h1>
                <p>
                We understand that as a timeshare owner, your needs are unique. We offer fast, friendly, accurate and professional service. We want you to have peace of mind.
                </p>
                <br></br>
                <h3>Our Closing Fees Include: </h3>
                <p>
                Following are the basic steps we follow for every one of our closings.
                </p>
                <ul>
                    <li>File is setup : An escrow number will be assigned and you can check in online - real time, any time the status of your closing.</li>

                    <li>Estoppel Letter is Ordered. We obtain information in writing from the resort or management company verifying the status of maintenance fees and taxes, description of unit/week, and various other facts and information about use and restrictions of the timeshare.</li>

                    <li>Right of First Refusal (ROFR) If applicable : If the Developer has the ROFR on this property, a waiver is requested at this time. Legally, a developer has 30 days to provide an answer, however, most resorts, take an average of 2 weeks</li>

                    <li>Closing Statements and Closing Documents preparation - We prepare detailed closing documents for buyer and seller listing all charges and costs associated with the transaction.</li>

                    <li>Holding of Escrow: Funds are held in an escrow account until all required documents are received by buyer and seller and the transaction closes.</li>

                    <li>Notification of New ownership to Resort or Management Company</li>

                    <li>Confirmation of transfer : We request a confirmation once the transfer is completed and in turn, we will notify the buyer their new timeshare is ready to use!</li>
                </ul>
                <br></br>
                <h3>Additional Services: </h3>
                <ul>
                    <li>Title Insurance (deeded properties only) - prices vary depending on the state.</li>
                    <li>Transfer of banked weeks from Seller to Buyer is subject to a $50 document processing fee.</li>
                </ul>
                <br></br>
                <p>
                The closing cost stated above can be honored in most areas of the country. However, please be aware that in certain states, an attorney must be involved in the transfer of timeshare property which can incur additional charges and prolong the sale closing process. If your property is located outside the U.S. or if other issues arise incurring unexpected expense then additional costs may apply to the closing.
                </p>
            </div>
        </div>
    );
};

export default Services;