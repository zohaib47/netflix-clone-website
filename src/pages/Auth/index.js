import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn'
import Password from './Password';

export default function index() {
  return (
    <>
    <Routes>
      <Route path='signin' element={<SignIn/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='password' element={<Password/>} />
    </Routes>
    
    
    </>
  )
}
