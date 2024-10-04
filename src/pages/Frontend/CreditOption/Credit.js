import React , {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import './credit.css';
import visa from "../../../assets/images/VISA-card.png"
import master from "../../../assets/images/MASTERCARD.png"
import amex from "../../../assets/images/amex-card.png"

export default function Credit() {
 
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [remember, setRemember] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log({
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
      remember,
    });
  };

  const navigate = useNavigate();
  const handleNext=()=>{
    navigate('/browser');
  }

  return (
    < >

   
    
    <form className="debit-card-form" 
    onSubmit={handleSubmit}
    >

    <div className="firstrow">
    <div className="firstcol">
      <div className="step">
        <div className="span stepspan">step <strong>3</strong> of <strong>3</strong></div>
      </div>
      <div className="head">
        <h2>Set up your credit or debit card</h2>
      </div>
      <div className="image">
        <span> <img src={visa} alt="visa card" /> </span>
        <span> <img src={master} alt="visa card" /> </span>
        <span> <img src={amex} alt="visa card" /> </span>
      </div>
    </div>
  </div>
     
      {/* Card Number Row */}
      <div className="row">
        <div className="col">
          {/* <label htmlFor="cardNumber">Card Number</label> */}
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          {/* <span className="calendar-icon">&#128197;</span> */}
        </div>
      </div>

      {/* Expiry Date and CVV Row */}
      <div className="row">
        <div className="col">
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Cardholder Name Row */}
      <div className="row">
        <div className="col">
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            placeholder="Name on card"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Paragraph and Checkbox Row */}
      <div className="row">
        <p>Your payments will be processed internationally. Additional bank fees may apply.</p>
        <p>By ticking the tickbox below, you agree to our <a href=''> Terms of Use </a>,<a href=''> Privacy Statement </a>, and that you are over 18.
           Netflix will automatically continue your membership and charge the membership fee (currently PKR 450/month) 
           to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
      </div>

      <div className="remember-row">
        <span className='me-3'>
  <input
    type="checkbox"
    id="remember"
    name="remember"
    checked={remember}
    onChange={(e) => setRemember(e.target.checked)}
  />
   </span>
   <span>I agree.</span>
</div>

      <div className="membershipbutton">
        <button className='membership' type="submit" onClick={handleNext}>Start Membership</button>
        <p> This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href=''> Learn more. </a> </p>
      </div>
    </form>
    </>
  );
};
  
