import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./core/Home"

const Routess = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/"  element ={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default Routess
