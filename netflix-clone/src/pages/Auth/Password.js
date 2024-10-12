import React ,{useState} from 'react'
import "./style.css"; 
import { useNavigate } from 'react-router-dom';

import steplogo from '../../assets/images/stepplanelogo.png';
import paymentsteplogo from '../../assets/images/paymentsteplogo.png';
import visacard from '../../assets/images/VISA-card.png';
import mastercard from '../../assets/images/MASTERCARD.png';
import amexcard from '../../assets/images/amex-card.png';
import { FaCheck } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

export default function Password() {
    const [step, setStep] = useState(1); // State to track current step

    // Function to go to the next step
    const handleNext = () => {
      setStep(step + 1);
    };
    const Navigate = useNavigate();
    const handleNextPage =()=>{
      Navigate('/credit');
    }
    const [isClicked, setIsClicked] = useState(null);
    const handleClick = (isClicked) => {
      setIsClicked(isClicked);
    };

  return (
   <> 
    {step === 1 && (
   <div className="password-container">
      <div className="content">
      <span className='stepspan'>step <strong>1</strong> of <strong>3</strong></span> <br />


        <h1>Create a password to start your membership</h1>

        <p>Just a few more steps and you're done! <br /> We hate paperwork, too.</p>

        <div className="input-container">
          <input type="email" id="email" name="email" />
          <label for="input">Email</label>
          </div>
        <div className="input-container">

          <input type="password" id="password" name="password"/>
          <label for="password">Add a Password</label>

        </div>
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </div>
    )}


{/* choseplane */}

{step === 2 && (
    <div className="choseplan-container">
      <div className="content">
        <div className="img">
            <img src={steplogo} alt="" />
        </div>
        <span className='stepspan'>step <strong>2</strong> of <strong>3</strong></span> <br />
        <h1>Choose your plan.</h1>
        <ul className='context-body '>
            <li> <span> <FaCheck/></span> <p>No commitments, cancel at any time.</p></li>
            <li> <span> <FaCheck/></span> <p>Everything on Netflix for one low price.</p>  </li>
            <li><span> <FaCheck/></span> <p>No adverts and no extra fees. Ever.</p> </li>
        </ul>
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </div>

)}




{/* choose plane pricing */}

{step === 3 && (
     <div className="pricing-section container">
      <div className="section-heading">
      <span className='stepspan' > step <strong>1</strong> of <strong>3</strong> </span>
      <h1 className="section-headin ps-2">Choose the plan that’s right for you</h1>
      </div>

      <div className="pricing-row container">
        {/* Repeat for each column */}
        <div className={`pricing-col ${isClicked === 'mobile' ? 'card-shadow' : ''}`}
        onClick={() => handleClick('mobile')}  >

          <div className="col-header col-header-color">
            <h4>Mobile</h4>
            <h5>480p</h5>
            <h6 style={{textAlign: 'right' , height:'10px' , }}> {isClicked === 'mobile' && (  <FaCheck style={{backgroundColor: '#fff',color: 'blue' , padding: '4px', fontSize: '15px' , height: '20px' , width:'20px', borderRadius: '50%'}} /> ) }</h6>
          </div>
          <div className="col-content">
            <div className="price">
                <p>Monthly Price</p>
                <h5>PKR 250</h5>
            </div>
            <div className="description mt-4">
                <p>Video and sound quality</p>
                <h5>fair</h5>
            </div>
            <div className="feature">
                <p>Resulation</p>
                <h5>480p</h5>
            </div>
            <div className="feature">
                <p>Support devices</p>
                <h5>Mobile phone, tablet</h5>
            </div>
            <div className="note">
                <p>Devices your household can watch at the same time</p>
                <h5>1</h5>
            </div>
            <div className="download">
                <p>Download devices</p>
                <h5>1</h5>
            </div>
          </div>
        </div>
        
        <div className={`pricing-col ${isClicked === 'basic' ? 'card-shadow' : ''}`}
        onClick={() => handleClick('basic')} >
          <div className="col-header col-header-color1">
            <h4>Basic</h4>
            <h5>720p</h5>
            <h6 style={{textAlign: 'right' , height:'10px' , }}> {isClicked === 'basic' &&( <FaCheck style={{backgroundColor: '#fff',color: 'blue' , padding: '4px', fontSize: '15px' , height: '20px' , width:'20px', borderRadius: '50%'}} /> ) }</h6>
          </div>
          <div className="col-content">
            <div className="price">
                <p>Monthly Price</p>
                <h5>PKR 450</h5>
            </div>
            <div className="description mt-4">
                <p>Video and sound quality</p>
                <h5>Good</h5>
            </div>
            <div className="feature">
                <p>Resulation</p>
                <h5>720 (HD) </h5>
            </div>
            <div className="feature">
                <p>Support devices</p>
                <h5>TV, computer, mobile phone, tablet</h5>
            </div>
            <div className="note">
                <p>Devices your household can watch at the same time</p>
                <h5>1</h5>
            </div>
            <div className="download">
                <p>Download devices</p>
                <h5>1</h5>
            </div>
          </div>
        </div>


        <div className={`pricing-col ${isClicked === 'standard' ? 'card-shadow' : ''}`}
        onClick={() => handleClick('standard')}
        >
          <div className="col-header col-header-color2">
            <h4>Standard</h4>
            <h5>1080p</h5>
            <h6 style={{textAlign: 'right' , height:'10px' , }}> {isClicked === 'standard' &&( <FaCheck style={{backgroundColor: '#fff',color: 'blue' , padding: '4px', fontSize: '15px' , height: '20px' , width:'20px', borderRadius: '50%'}} /> ) }</h6>

          </div>
          <div className="col-content">
            <div className="price">
                <p>Monthly Price</p>
                <h5>PKR 800</h5>
            </div>
            <div className="description mt-4">
                <p>Video and sound quality</p>
                <h5>Great</h5>
            </div>
            <div className="feature">
                <p>Resulation</p>
                <h5>1080 (Full HD)</h5>
            </div>
            <div className="feature">
                <p>Support devices</p>
                <h5>TV, computer, mobile phone, tablet</h5>
            </div>
            <div className="note">
                <p>Devices your household can watch at the same time</p>
                <h5>2</h5>
            </div>
            <div className="download">
                <p>Download devices</p>
                <h5>2</h5>
            </div>
          </div>
        </div>

        
        <div className={`pricing-col ${isClicked === 'premium' ? 'card-shadow' : ''}`}
        onClick={() => handleClick('premium')}
        >
          <div className="col-header col-header-color3">
            <h4>Premium</h4>
            <h5>4k + HDR</h5>
            <h6 style={{textAlign: 'right' , height:'10px' , }}> {isClicked === 'premium' &&( <FaCheck style={{backgroundColor: '#fff',color: 'blue' , padding: '4px', fontSize: '15px' , height: '20px' , width:'20px', borderRadius: '50%'}} /> ) }</h6>

          </div>
          <div className="col-content">
            <div className="price">
                <p>Monthly Price</p>
                <h5>PKR 1,100</h5>
            </div>
            <div className="description mt-4">
                <p>Video and sound quality</p>
                <h5>Best</h5>
            </div>
            <div className="feature">
                <p>Resulation</p>
                <h5>4k(Full HD) + HDR</h5>
            </div>
            <div className="feature">
                <p>Spatial audio (immersive sound)</p>
                <h5>Included</h5>
            </div>
            <div className="feature">
                <p>Support devices</p>
                <h5>TV, computer, mobile phone, tablet</h5>
            </div>
            <div className="note">
                <p>Devices your household can watch at the same time</p>
                <h5>4</h5>
            </div>
            <div className="download">
                <p>Download devices</p>
                <h5>6</h5>
            </div>
          </div>
        </div>
        <div className="col-12">
            <div className="noteparagraph">
                <p> HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
            </div>
            <div className="pricebutton">
                <button className='btn' onClick={handleNext}>Next</button>
            </div>
        </div>

      </div>
    </div>
    )}



    {/* How to pay */}


    {step === 4 && (
    <div className="choose-pay-method choseplan-container">
    <div className="content">
        <div className="img">
            <img src={paymentsteplogo} alt="" />
        </div>
        <span className='stepspan'>step <strong>3</strong> of <strong>3</strong></span> <br />
        <h1>Choose how to pay</h1>
        <h5>Your payment is encrypted and you can change how you pay at any time.</h5>
        <h4>Secure for peace of mind. <br /> Cancel easily online.</h4>
        <p className='encrypted'>End-to-end encrypted <FaLock style={{ color: 'rgb(255, 181, 63)' }} /> </p>

        <button className="debit-card" onClick={handleNextPage}>
            <div className="text-left">
            <span className='text-start'>  Credit or Debit Card  </span>
            <span className='ms-3 me-5'>
                <img src={visacard} alt="visa-card" />
                <img src={mastercard} alt="master-card" />
                <img src={amexcard} alt="amex-card" />
            </span>
            <span className='ms-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  style={{width:"20px", height:"20px",}}><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg>
                
            </span> 
            </div>
        

        </button>
      </div>

    </div>
     )}

   </>
  )
}
