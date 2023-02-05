import React from 'react'
import {Link} from "react-router-dom"
// import { withRouter } from "react-router-dom";

import {
  useLocation,
  useNavigate,
  useParams
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
  return (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item"><Link style={currentTab(history,"/")} className='nav-link' to="/">Home</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/cart")} className='nav-link' to="/cart">Cart</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/user/dashboard")} className='nav-link' to="/user/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/admin/dashboard")} className='nav-link' to="/admin/dashboard">A. Dashboard</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/signup")} className='nav-link' to="/signup">Signup</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/signin")} className='nav-link' to="/signin">Signin</Link></li>
            <li className="nav-item"><Link style={currentTab(history,"/signout")} className='nav-link' to="/signout">Signout</Link></li>
        </ul>
    </div>
  )
}

export default withRouter(Menu)