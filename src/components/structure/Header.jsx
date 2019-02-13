import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const homeLink = (props) => {
  props.history.push("/")
}

const skillsLink = (props) => {
  props.history.push("/skills")
}

const Header = (props) => {
  return (
    <header className="navbar">
      <div className="flexbox">
        <h2>
          <img src="./images/logo.png" alt=""/>
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
                <li><Link to="/blog" >Blog</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                {/* <li><a onCLick={homeLink}>About</a></li>
                <li><a onCLick={skillsLink}>Skills</a></li> */}
              </ul>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header);