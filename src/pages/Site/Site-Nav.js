import React from 'react';
import img1 from "../../assets/images/logo.svg";
import { useNavigate } from 'react-router-dom'; 


export default function SiteNav() {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/home');   
  };
  return (
    <>
    <nav className='site-nav p-5 container-fluid'>
        <style>
            {`
             .site-nav{
             border-bottom: 1px solid #ced4da;
             margin-bottom: 20px;
             
             }
           
            .site-nav a{
            color:#343a40;
            font-size:22px;
            font-weight:500;
            text-decoration-line:none;
            }
            .site-nav a:hover{
            text-decoration-line:underline;
            
            }
            
            
            
            `}
        </style>
                <span> <img width="165" src={img1} alt="" /></span>
                <div>
                    <a href='' onClick={handleClick}>Sign Out</a>
                    
                </div>
            </nav>
    
    </>
  )
}
