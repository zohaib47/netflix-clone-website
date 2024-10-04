import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";

export default function Footer() {
  return (
    <>
    <div className="sepration"></div>

    
    <footer>

      <div className="container">
      <div className="row">
        <div className="col-12 col-3">
        <a href="https://help.netflix.com/contactus">Question? Contact us.</a>


        </div>
        <div className="col-3">
          <div className='link'>
          <a href="https://help.netflix.com/support/412">FAQ</a>
          <a href="http://ir.netflix.com/">Investor Relation</a>
          <a href="https://help.netflix.com/legal/privacy">Privacy</a>
          <a href="https://fast.com/">speed test</a>
          </div>
          
          
        </div>


        <div className="col-3">
        <div className='link'>
          <a href="https://help.netflix.com/support/412">help center</a>
          <a href="http://ir.netflix.com/">job</a>
          <a href="https://help.netflix.com/legal/privacy">cookie preferences</a>
          <a href="https://fast.com/">leagel notices</a>
          </div>
        </div>
        <div className="col-3">
        <div className='link'>
          <a href="https://help.netflix.com/support/412">account</a>
          <a href="http://ir.netflix.com/">ways to watch</a>
          <a href="https://help.netflix.com/legal/privacy">coprate information</a>
          <a href="https://fast.com/">only netflix</a>
          </div>
        </div>
        <div className="col-3">
        <div className='link'>
          <a href="https://help.netflix.com/support/412">media</a>
          <a href="http://ir.netflix.com/">term of use</a>
          <a href="https://help.netflix.com/legal/privacy">contact us</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <select>
            <option value="english"> <AiOutlineGlobal/>  English</option>
          </select>
          <p>Netflix Pakistan </p>
        </div>
      </div>
      </div>
    </footer>
    </>
    
  )
}
