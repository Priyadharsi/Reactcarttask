import React, { useReducer } from 'react'
import {BrowserRouter,Navigate, Route,Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Addtocart from '../Addtocart/Addtocart';
import { stateContext } from '../Context/stateContext';
import {initializevalue,stateReducer} from '../Context/StateReducer';
import Header from '../Header/Header';
import Productdetails from '../Productdetails/Productdetails';



const Routing = () => {
  const [state,dispatch]=useReducer(stateReducer,initializevalue)
  console.log("state",state);
  
  return (
    <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    {state?.isLoggedIn? (
      <>
      <div ><Header /></div>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Form" element={<Form />}></Route>
      <Route path="/Addtocart" element={<Addtocart />}></Route>
      <Route path="/Productdetails" element={<Productdetails />}></Route>
      <Route path="*" element={<Navigate to={"/Home"}></Navigate>}></Route>
    </Routes>
    </>
    ) : (
     <Routes> 
      <Route path="/" element={<Login />}></Route>
      <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
      </Routes>
    )}
    </BrowserRouter>
    </stateContext.Provider>
    
  )
}

export default Routing