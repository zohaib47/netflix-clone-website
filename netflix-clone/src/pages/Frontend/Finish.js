import React  from 'react'
import { useNavigate } from 'react-router-dom';
import "./pages.css"
import stepLogo from '../../assets/images/stepLogo.png'
// import SiteNav from '../Site/Site-Nav';
// import SiteFooter from '../Site/Site-Footer';
export default function Finish() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/password');   // Navigate to the Sign In page
};
  return (
   <>

    <div className="finish-container">
      <div className="content">
        {/* Logos */}
        <div className="logos">
          <img src={stepLogo} alt="Logo 1" />

        </div>

        {/* Paragraphs */}
        <span className='stepspan text-center'>step <strong>1</strong> of <strong>3</strong></span> <br />
        <h1>Finish setting up your account</h1>
        <p>Create a password or request a sign-up link to use Netflix without a password on any device at any time.</p>

        {/* Checkbox and label */}
        <div className="checkbox-container">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <h6 htmlFor="rememberMe" className='pt-2'> Please do not email me Netflix special offer</h6>
        </div>

        {/* Buttons */}
        <button className="finishbtn" onClick={handleClick} >Create Password</button>
        <button className="finishbtn">Go Passwordless</button>
      </div>
    </div>
   
   </>
  )
}
