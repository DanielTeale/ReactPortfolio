import React from 'react';
import ProfilePicture from "../../images/Photo on 19-8-18 at 6.47 pm.jpg"
import Facebook from "../../images/Icons/001-facebook.png"
import LinkedIn from "../../images/Icons/003-linkedin.png"
import Github from "../../images/Icons/005-github-logo.png"
import Soundcloud from "../../images/Icons/004-soundcloud.png"

const ContactPage = (props) => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <img className="profile" src={ProfilePicture} alt="Profile of Daniel" />
          <p><strong>Aspiring Web Developer</strong></p>
          <p>"With a commitment to learning I hope to make the world of technology a better place. I have a healthy appreciation for art, music and aesthetics, as well as pragmatism. I also enjoy travel and incorporate different ideas into my work"</p>
          <p>
            <a href="https://www.linkedin.com/in/daniel-teale-5a9311171/"><img src={LinkedIn} alt="linkedin" /></a>
            <a href="https://www.facebook.com/daniel.teale1"><img src={Facebook} alt="facebook" /></a>
            <a href="https://github.com/DanielTeale"><img src={Github} alt="github" /></a>
            <a href="https://soundcloud.com/betanutz"><img src={Soundcloud} alt="soundcloud" /></a>
        </p>
      </div>
    </section>
  )
}

export default ContactPage;