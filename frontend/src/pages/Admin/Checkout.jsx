// Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const submitPayment = async () => {
        const sessionId = new URLSearchParams(window.location.search).get('sessionId');
        try {
            const response = await fetch('/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sessionId, cardNumber, expiryDate, cvv })
            });
            const data = await response.json();
            // Handle payment success or failure
            console.log(data);
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('Error processing payment. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Enter Card Details</h1>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /><br />
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} /><br />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} /><br />
            <button onClick={submitPayment}>Submit Payment</button>
        </div>
    );
};

export default Checkout;
