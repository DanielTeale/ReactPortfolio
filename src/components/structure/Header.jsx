import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom'

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
            <BrowserRouter>

              <ul className="navmap">
                <li><Link to="/about"/>About</li>
                <li><Link to="/skills"/>Skills</li>
                <li><Link to="/portfolio"/>Portfolio</li>
                <li><Link to="/blog"/>Blog</li>
                <li><Link to="/contact"/>Contact</li>
              </ul>
            </BrowserRouter>

        </div>
      </div>
    </header>
  )
}

export default Header;