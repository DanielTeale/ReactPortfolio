import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Logo from "../../images/logo.png";

const Header = (props) => {
  return (
    <header className="navbar">
      <div className="flexbox">
        <h2>
          <img src={Logo} alt="DT Logo"/>
      </h2>
          <div className="dropdown">
            <input className="dropbtn" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
              <ul className="navmap">
                <li><Link to="/">About</Link></li>
                <li><Link to="/skills" >Skills</Link></li>
                <li><Link to="/portfolio" >Portfolio</Link></li>
                {/* <li><Link to="/blog" >Blog</Link></li> */}
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header);