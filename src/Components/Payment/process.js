

const process = (data) => {
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
    console.log(fname + lname + email + resort + reference + cc + cvv + exp + amount + address + city + state + zip + country);
    data.preventDefault();
}

export default process;