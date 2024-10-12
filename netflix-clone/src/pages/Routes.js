import React from 'react' ;
import { Route, Routes} from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth"
import Site from "./Site"


export default function Index() {
  return (
   <>


    <Routes>
        <Route path='/*' element={< Frontend/>} />
        <Route path='/auth/*' element= {<Auth/>} />
        <Route path='/site/' element={< Site />} />
    </Routes>
    
   

    </>
  )
}
