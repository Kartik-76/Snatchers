import React from 'react'
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"
const  Home = () => {
  console.log("API IS",API);
  return (
    <div>
        <Base title='Home Page' description='Welcome to Snatchers'>
          <div className="row">
            <div className="col-4">
              <button className="btn btn-success">Test</button>
            </div>
            <div className="col-4">
              <button className="btn btn-success">Test</button>
            </div>
            <div className="col-4">
              <button className="btn btn-success">Test</button>
            </div>
          </div>
        </Base>
    </div>
  )
}

export default Home