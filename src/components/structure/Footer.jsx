import React from 'react';
import Facebook from "../../images/Icons/001-facebook.png";
import LinkedIn from "../../images/Icons/003-linkedin.png";
import Github from "../../images/Icons/005-github-logo.png";
import Soundcloud from "../../images/Icons/004-soundcloud.png";

const Footer = (props) => {
  return (
    <footer>
      <h5>Created by Daniel Teale</h5>
      <p>
        <a href="https://www.linkedin.com/in/daniel-teale-5a9311171/"><img src={LinkedIn} alt="linkedin" /></a>
        <a href="https://www.facebook.com/daniel.teale1"><img src={Facebook} alt="facebook" /></a>
        <a href="https://github.com/DanielTeale"><img src={Github} alt="github" /></a>
        <a href="https://soundcloud.com/betanutz"><img src={Soundcloud} alt="soundcloud" /></a>
      </p>
    </footer>
  )
}

export default Footer;