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

const Menu = ()=> {
  return (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className='nav-link' to="">Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default withRouter(Menu)