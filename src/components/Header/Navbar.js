import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import img1 from '../../assets/images/logo.svg';
// import { BsChevronRight } from "react-icons/bs";

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(true);  
    // const [showFooter, setShowFooter] = useState(true);  
    const navigate = useNavigate();

      const handleClick = () => {
        setShowNavbar(false);  // Hide navbar on Sign In click
        navigate('/signin');   // Navigate to the Sign In page

        
    };

    const handleClick1 = () => {
        setShowNavbar(false);  // Hide navbar on Sign In click
        // setShowFooter(false);  
        navigate('/finish');   // Navigate to the Sign In page

        
    };
  return (
   <>
     {showNavbar && (
         <div class="main">
            <nav>
                <span> <img width="145" src={img1} alt="" /></span>
                <div>
                    <button class="butn butn-red-sm " onClick={handleClick} to='/signin'>Sign In</button>
                    
                </div>
            </nav>

            <div class="box">
            </div>
            <div class="hero hero-buttons">
                <span>Unlimited movies, TV shows, and more</span>
                <span>Start at Rs 250. Cancel anytime.</span>
                <span>Ready to watch? Enter your email to create or restart your membership.</span>
                <div className='two-buttons'>
                    <input type="text" placeholder="Email adress" />
                    <button class="butn butn-red" onClick={handleClick1}>Get Started  
                        
                    {/* <i> < BsChevronRight/> </i> */}

                        </button>
                </div>
            </div>
        </div> 
    
    )}

   </>
  )
}
