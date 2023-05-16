import React from 'react';
const recipient = 'kwf1999@gmail.com';




const submit = (data) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    console.log('name: ' + name);
    console.log('email: ' + email);
    console.log('phone: ' + phone);
    console.log('message: ' + message);
    data.preventDefault();

    const emailContent = `name: ${name} \n email: ${email} \n phone: ${phone} \n message: ${message}`;
    console.log('email content: ' + emailContent);
    const subject = 'Contact Form Submission';
    const body = emailContent;
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

export default submit;