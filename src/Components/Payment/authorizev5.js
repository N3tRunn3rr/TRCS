import { useEffect, useState } from 'react';
import { APIContracts, APIControllers } from 'authorizenet';
import State from './stateDrop';
import Country from './countryDrop'

// we'll probably be able to move all this over so that it's just the form again, 
// I just didn't want to fuck with anything while I was figuring this out.
// also authorizenet has a node package that I believe we can use instead of axios/fetch, just npm install authorizenet
// I'm also not testing this until tomorrow bc I fear the adderall will win and I'll be up until 3AM working on it

const AuthorizeCreditCard = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [company, setCompany] = useState('');
    // const [reference, setReference] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cc, setCc] = useState('');
    const [cvv, setCvv] = useState('');
    const [exp, setExp] = useState('');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [apiResponseMessage, setApiResponseMessage] = useState('');
    const [apiResponseSuccess, setApiResponseSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // created an env file for security reasons, once you merge it in we'll add it to the gitignore and take it off the repository
    const apiLoginKey = process.env.REACT_APP_API_LOGIN_KEY;
    const transactionKey = process.env.REACT_APP_TRANSACTION_KEY;
    // speaking of security, we may need to add server-side code to more thoroughly ensure this info isn't getting intercepted
    // (stuff like OAuth). I believe authorizenet has us covered but it doesn't hurt to be overly safe.
    //  We can look into this once this code is functional.

    const makeTransactionRequest = () => {

        setLoading(true);

        const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
        merchantAuthenticationType.setName(apiLoginKey);
        merchantAuthenticationType.setTransactionKey(transactionKey);
    
        const creditCard = new APIContracts.CreditCardType();
        creditCard.setCardNumber(cc);
        creditCard.setExpirationDate(exp);
        creditCard.setCardCode(cvv);
    
        const paymentType = new APIContracts.PaymentType();
        paymentType.setCreditCard(creditCard);
    
        const billTo = new APIContracts.CustomerAddressType();
        billTo.setFirstName(fname);
        billTo.setLastName(lname);
        billTo.setEmail(email);
        billTo.setPhoneNumber(phone);
        billTo.setAddress(address);
        billTo.setCompany(company);
        billTo.setCity(city);
        billTo.setState(state);
        billTo.setZip(zip);
        billTo.setCountry(country);
       

        const shipTo = new APIContracts.CustomerAddressType();
        shipTo.setFirstName(fname);
        shipTo.setLastName(lname);
        shipTo.setEmail(email);
        shipTo.setPhoneNumber(phone);
        shipTo.setAddress(address);
        shipTo.setCompany(company);
        shipTo.setCity(city);
        shipTo.setState(state);
        shipTo.setZip(zip);
        shipTo.setCountry(country);
        
    
        const transactionRequestType = new APIContracts.TransactionRequestType();
        transactionRequestType.setTransactionType(APIContracts.TransactionTypeEnum.AUTHONLYTRANSACTION);
        transactionRequestType.setPayment(paymentType);
        transactionRequestType.setAmount(amount);
        transactionRequestType.setBillTo(billTo);
        transactionRequestType.setShipTo(shipTo);
    
        const createRequest = new APIContracts.CreateTransactionRequest();
        createRequest.setMerchantAuthentication(merchantAuthenticationType);
        createRequest.setTransactionRequest(transactionRequestType);
    
        const ctrl = new APIControllers.CreateTransactionController(createRequest.getJSON());
    
        ctrl.execute(() => {
          const apiResponse = ctrl.getResponse();
          const response = new APIContracts.CreateTransactionResponse(apiResponse);
    
         if (response != null) {
    if (response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK) {
      if(response.getTransactionResponse().getMessages() != null) {
        setApiResponseMessage(response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
        setApiResponseSuccess(true);
      }
    } else {
      if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {
        setApiResponseMessage(response.getTransactionResponse().getErrors().getError()[0].getErrorText());
        setApiResponseSuccess(false);
      } else {
        setApiResponseMessage(response.getMessages().getMessage()[0].getText());
        setApiResponseSuccess(false);
      }
    }
  } else {
    setApiResponseMessage('Null Response.');
    setApiResponseSuccess(false);
  }

  console.log(response);

  setLoading(false);
});
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        makeTransactionRequest();
    };

    // we may need more or less, I've just been looking at the documentation for how authorizenet authorizes credit cards
    // in node and trying to convert it to react.
    // thankfully if we also need to send this capture out like I'm assuming we have to, the code is very similar. 
    // here's the specific file i was looking at if you get to it before me:
    //  https://github.com/AuthorizeNet/sample-code-node/blob/master/PaymentTransactions/authorize-credit-card.js

    return (
        <div className="payment">
        {loading ? (
            <div>Loading...</div>
        ) : (
            <>
                {apiResponseMessage && (
                    <div>
                        {apiResponseSuccess ? 'Transaction Successful: ' : 'Transaction Failed: '}
                        {apiResponseMessage}
                    </div>
                )}
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name='date' required></input>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)}  placeholder='As it appears on credit card' required></input>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder='As it appears on credit card' required></input>
            <label htmlFor="resort">Resort</label>
            <input type="text" id="resort" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter resort value' required></input>
            <label htmlFor='reference'>Reference</label>
            {/* I have no idea what to do with reference. I don't think it's needed but it's staying until further notice */}
            <input type='text' id='reference' value='reference' placeholder='Enter reference' required></input>
            <label htmlFor="cardNum">Credit Card No.</label>
            <input type="text" id="cardNum" value={cc} onChange={(e) => setCc(e.target.value)} placeholder='Enter 16 digit card number' required></input>
            <label htmlFor="cardId">Card Identification No.</label>
            <input type="text" id="cardId" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder='Enter 3 digit card identification number or 4 digits on front of card htmlFor Amex' required></input>
            <label htmlFor="cardType">Type of Card</label>
            {/* I don't think we need cardType, at least for this step, I don't see it anywhere in the documentation */}
            <select id="cardType" value="cardType" required>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="amex">American Express</option>
                <option value="discover">Discover</option>
                <option value="jcb">JCB</option>
                <option value="diners">Diners Club</option>
            </select>
            <label htmlFor="expDate">Expiration Date</label>
            <input type="month" id="expDate" value={exp} onChange={(e) => setExp(e.target.value)} required></input>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount to be paid' required></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter email address' required></input>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter phone number' required></input>
            <label htmlFor="address">Billing Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter address' required></input>
            <label htmlFor="city">City</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter city' required></input>
            <State selectedValue={state} onChange={(e) => setState(e.target.value)} />
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder='Enter zip code' required></input>
            <Country selectedValue={country} onChange={(e) => setCountry(e.target.value)} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
        )}
    </div>
)
};

export default AuthorizeCreditCard;