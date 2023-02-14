import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./core/Home"
import Signin from './user/Signin'
import Signup from './user/Signup'



const Routess = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/"  element ={<Home/>}/>
            <Route exact path="/signup"  element ={<Signup/>}/>
            <Route exact path="/signin"  element ={<Signin/>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default Routess
