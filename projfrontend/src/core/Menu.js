import React, {Fragment} from 'react'

import { signout, isAuthenticated } from "../auth/helper";

import {
  useLocation,
  useNavigate,
  useParams,
  Link,
  
} from "react-router-dom";


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const currentTab = (history,path)=>{
  if(window.location.pathname === path){
    return {color:"#2ecc72"}
  }else{
    return {color: "#FFFFFF"}
  }
}

const Menu = ({history})=> {
  let navigate = useNavigate();
  return (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item"><Link style={currentTab(history,"/")} className='nav-link' to="/">Home</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/cart")} className='nav-link' to="/cart">Cart</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/user/dashboard")} className='nav-link' to="/user/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/admin/dashboard")} className='nav-link' to="/admin/dashboard">A. Dashboard</Link></li>
            {!isAuthenticated() && (
              <Fragment>
              <li className="nav-item"><Link style={currentTab(history,"/signup")} className='nav-link' to="/signup">Signup</Link></li>
              <li className="nav-item"><Link style={currentTab(history,"/signin")} className='nav-link' to="/signin">Signin</Link></li>
              </Fragment>
            )}
            {isAuthenticated() && (
              <li className="nav-item">
                <span className='nav-link text-warning' 
                onClick={()=>{
                  signout(()=>{
                    navigate('/');
                  });
                }}>
                  signout
                </span>
              </li>
            )}
        </ul>
    </div>
  )
}

export default withRouter(Menu)