
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/logo.svg';




const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-in logic here (API call)
    console.log('Sign In Form submitted:', formData);
  };

 



  const moveto = () => {
    navigate('/browser');

  }

  return ( 
  <>
  
    <div className="main signin">
    <nav>
         <span> <img width="145" src={img1} alt="" /></span>
    </nav>
    <div class="box">
    </div>
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email or mobile number'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='signin' type="submit"   onClick={moveto} >Sign In</button>
        <p className='pt-3 text-center fs-5 '>OR</p>
        <button className='signin-code' type="submit">Use a Sign-In Code</button>
        <p className='text-center pt-3'><a href="/home" className='link'>Forgot Password?</a></p>

        <div className="checkbox mb-3 ">
    <input type="checkbox" id="rememberMe" name="rememberMe"  /> 
    <h6>Remember me</h6>
  </div>
        
        
      
        <p className='text-left'><span className='new-netflix'> New to Netflix?</span> <a href="/home" className='link'>Sign Up Now.</a> </p>
        <p className='captcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/home"> Learn more. </a></p>

      </form>
    </div>
    
    </div>

    </>
  );
};

export default SignIn;


