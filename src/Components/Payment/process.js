

function Process(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const resort = document.getElementById('resort').value;
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
    console.log(
  `First Name: ${fname}\n` +
  `Last Name: ${lname}\n` +
  `Email: ${email}\n` +
  `Resort: ${resort}\n` +
  `Reference: ${reference}\n` +
  `Credit Card No.: ${cc}\n` +
  `Card Identification No.: ${cvv}\n` +
  `Expiration Date: ${exp}\n` +
  `Amount: ${amount}\n` +
  `Address: ${address}\n` +
  `City: ${city}\n` +
  `State: ${state}\n` +
  `Zip: ${zip}\n` +
  `Country: ${country}`
);
}

export default Process;