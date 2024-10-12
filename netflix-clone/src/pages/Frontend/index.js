import React from 'react'
import { Route, Routes , useLocation } from 'react-router-dom';

import Home from './Home';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';
import Finish from './Finish';
import Password from '../Auth/Password';
import SiteNav from '../Site/Site-Nav';
import SiteFooter from '../Site/Site-Footer';
import Credit from './CreditOption/Credit';
import Browser from './Browser/Browser';

export default function Index() {

  

  const location = useLocation();

  // Function to hide navbar, sitenav, footer, and sitefooter for browser page
  const isBrowserPage = location.pathname === '/browser';
  
  // Other conditions for hiding navbar and footer
  const hideNavbarFooter = isBrowserPage || 
                           location.pathname.startsWith('/finish') || 
                           location.pathname.startsWith('/password') || 
                           location.pathname.startsWith('/credit');

  
  return (
    


    <>
      {/* Conditionally render Navbar or SiteNav, hide both if on browser page */}
      {!hideNavbarFooter && !isBrowserPage ? <Navbar /> : null}
      {hideNavbarFooter && !isBrowserPage ? <SiteNav /> : null}

      <main>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/browser' element={<Browser />} />
          <Route path='/finish' element={<Finish />} />
          <Route path='/password' element={<Password />} />
          <Route path='/credit' element={<Credit />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </main>

      {/* Conditionally render Footer or SiteFooter, hide both if on browser page */}
      {!hideNavbarFooter && !isBrowserPage ? <Footer /> : null}
      {hideNavbarFooter && !isBrowserPage ? <SiteFooter /> : null}
    </>
  )
}
