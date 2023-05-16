import React from 'react';
import '../../styles/GetStarted.css'


async function handleSubmit(e) {
    let response = await fetch('https://apitest.authorize.net/xml/v1/request.api');
    let data = await response.json();
    console.log(data);
}

handleSubmit().then(data => console.log(data));