import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Browser from './Browser'


export default function Index() {

   
  return (
    <>
    
    <Routes>
        <Route path='./browser' element={<Browser/>} />
    </Routes>
    
    
    </>
  )
}
