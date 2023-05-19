import Country from './countryDrop';
import State from './stateDrop';

const payment = () => {
    return ( 
        <div className="payment">
            <form>
                <label for="date">Date</label>
                <input type="date" id="date" name="date" required></input>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder='As it appears on credit card' required></input>
                <label for="cardNum">Credit Card No.</label>
                <input type="text" id="cardNum" name="cardNum" placeholder='Enter 16 digit card number' required></input>
                <label for="cardId">Card Identification No.</label>
                <input type="text" id="cardId" name="cardId" placeholder='Enter 3 digit card identification number or 4 digits on front of card for Amex' required></input>
                <label for="cardType">Type of Card</label>
                <select id="cardType" name="cardType" required>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                    <option value="discover">Discover</option>
                    <option value="jcb">JCB</option>
                    <option value="diners">Diners Club</option>
                </select>
                <label for="expDate">Expiration Date</label>
                <input type="month" id="expDate" name="expDate" required></input>
                <label for="amount">Amount</label>
                <input type="text" id="amount" name="amount" placeholder='Enter amount to be paid' required></input>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder='Enter email address' required></input>
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder='Enter phone number' required></input>
                <label for="address">Address</label>
                <input type="text" id="address" name="address" placeholder='Enter address' required></input>
                <label for="city">City</label>
                <State />
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder='Enter zip code' required></input>
                <Country />
            </form>
        </div>
    )
}

export default payment;