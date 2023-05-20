import { useEffect } from 'react';
import { APIContracts, APIControllers } from 'authorizenet';

const AuthorizeCreditCard = () => {
  useEffect(() => {
    const apiLoginKey = '4Nq5qxGZ6a';
    const transactionKey = '45sM5bXG4ca9A5JD';
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const reference = document.getElementById('reference').value;
    const cc = document.getElementById('cardNum').value;
    const cvv = document.getElementById('cardId').value;
    const exp = document.getElementById('expDate').value;
    const amount = document.getElementById('amount').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;


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
  }, []);

  return null;
};

export default AuthorizeCreditCard;
