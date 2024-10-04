import React from 'react'

export default function SiteFooter() {
 

  return (
    <>
    <footer className='site-footer'>
      <style>

        { `
          .site-footer{
    background-color:rgba(231, 231, 231, 0.83);
    margin-top: 50px;
}
.site-footer .row .col-3 .link a{

  color: #555555;
  line-height: 2.5rem;
  text-transform: capitalize;
  text-decoration-line:none;
  font-size: 14px;
  font-weight: 500;
}
.site-footer .row .col-3 .link a:hover{
  text-decoration-line:underline;
}
  
        ` }
      </style>
    
<div className="container">
<div className="row">
  <div className="col-12 col-3 ">
  <div className='link'>
  <a href="https://help.netflix.com/contactus">Question? Contact us.</a>
  </div>



  </div>
  <div className="col-3">
    <div className='link'>
    <a href="https://help.netflix.com/support/412">FAQ</a>
    <a href="https://www.netflix.com/signup/creditoption#">Cookie Preferences</a>
    </div>
    
    
  </div>


  <div className="col-3">
  <div className='link'>
    <a href="https://help.netflix.com/support/412">Help center</a>
    <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
   
    </div>
  </div>
 
  <div className="col-3">
  <div className='link'>
    <a href="https://help.netflix.com/legal/termsofuse">term of use</a>
    </div>
  </div>
  <div className="col-3">
  <div className='link'>
    <a href="https://help.netflix.com/legal/privacy">privacy</a>
    </div>
  </div>
</div>
</div>
</footer>
    
    </>
  )
}
