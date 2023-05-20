import { useEffect, useState } from 'react';
import { APIContracts, APIControllers } from 'authorizenet';

const AuthorizeCreditCard = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [reference, setReference] = useState('');
    const [cc, setCc] = useState('');
    const [cvv, setCvv] = useState('');
    const [exp, setExp] = useState('');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
  useEffect(() => {
    const apiLoginKey = '4Nq5qxGZ6a';
    const transactionKey = '45sM5bXG4ca9A5JD';


    const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(apiLoginKey);
    merchantAuthenticationType.setTransactionKey(transactionKey);

    const creditCard = new APIContracts.CreditCardType();
    creditCard.setCardNumber(cc);
    creditCard.setExpirationDate(exp);
    creditCard.setCardCode(cvv);

    const paymentType = new APIContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    const orderDetails = new APIContracts.OrderType();
    orderDetails.setInvoiceNumber(reference);
    orderDetails.setDescription('Product Description');

    const billTo = new APIContracts.CustomerAddressType();
    billTo.setFirstName(fname);
    billTo.setLastName(lname);
    billTo.setAddress(address);
    billTo.setCity(city);
    billTo.setState(state);
    billTo.setZip(zip);
    billTo.setCountry(country);

    const shipTo = new APIContracts.CustomerAddressType();
    shipTo.setFirstName(fname);
    shipTo.setLastName(lname);
    shipTo.setAddress(address);
    shipTo.setCity(city);
    shipTo.setState(state);
    shipTo.setZip(zip);
    shipTo.setCountry(country);

    const transactionRequestType = new APIContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(APIContracts.TransactionTypeEnum.AUTHONLYTRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(amount);

    const createRequest = new APIContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);

    const ctrl = new APIControllers.CreateTransactionController(createRequest.getJSON());

    ctrl.execute(() => {
      const apiResponse = ctrl.getResponse();
      const response = new APIContracts.CreateTransactionResponse(apiResponse);

      //handling API response here.. still figuring it out

      console.log(response);
    });
  }, [fname, lname, reference, cc, cvv, exp, amount, address, city, state, zip, country]);

  return null;
};

export default AuthorizeCreditCard;

// example of how to structure form when imported into main file (I don't think this can be kept separate from our form, sorry)
// {/* <label htmlFor="fname">First Name:</label>
//       <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />

//       <label htmlFor="lname">Last Name:</label>
//       <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} />

//       <label htmlFor="reference">Reference:</label>
//       <input type="text" id="reference" value={reference} onChange={(e) => setReference(e.target.value)} /> */}
