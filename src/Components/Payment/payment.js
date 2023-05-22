import Country from './countryDrop';
import State from './stateDrop';
import Process from './process';
import '../../styles/process.css';

const payment = () => {
    return ( 
        <div className="payment">
            <form onSubmit={Process}>
                <label htmlFor="date" id='dateLabel'>Date</label>
                <input type="date" id="date" name="date" required></input>
                <br></br>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="name" placeholder='As it appears on credit card' required></input>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="name" placeholder='As it appears on credit card' required></input>
                <label htmlFor="resort">Resort</label>
                <input type="text" id="resort" name="resort" placeholder='Enter resort name' required></input>
                <label htmlFor='reference'>Reference</label>
                <input type='text' id='reference' name='reference' placeholder='Enter reference' required></input>
                <label htmlFor="cardNum">Credit Card No.</label>
                <input type="text" id="cardNum" name="cardNum" placeholder='Enter 16 digit card number' required></input>
                <label htmlFor="cardId">Card Identification No.</label>
                <input type="text" id="cardId" name="cardId" placeholder='Enter 3 digit card identification number or 4 digits on front of card htmlFor Amex' required></input>
                <label htmlFor="cardType" id='cardLabel'>Type of Card</label>
                <br></br>
                <select id="cardType" className='form-select' name="cardType" required>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                    <option value="discover">Discover</option>
                    <option value="jcb">JCB</option>
                    <option value="diners">Diners Club</option>
                </select>
                <br></br>
                <label htmlFor="expDate" id='expLabel'>Expiration Date</label>
                <br></br>
                <input type="month" id="expDate" name="expDate" required></input>
                <br></br>
                <label htmlFor="amount">Amount (Limit of $1500.00)</label>
                <input type="text" id="amount" name="amount" placeholder='Enter amount to be paid.' required></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder='Enter email address' required></input>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder='Enter phone number' required></input>
                <label htmlFor="address">Billing Address</label>
                <input type="text" id="address" name="address" placeholder='Enter address' required></input>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder='Enter city' required></input>
                <br></br>
                <label className="field-label" for="stateValue">State</label>
                <State />
                <br></br>
                <label htmlFor="zip" id='zipLabel'>Zip</label>
                <input type="text" id="zip" className='zip' name="zip" placeholder='Enter zip code' required></input>
                <br></br>
                <label htmlFor="countryValue">Country</label>
                <Country />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default payment;