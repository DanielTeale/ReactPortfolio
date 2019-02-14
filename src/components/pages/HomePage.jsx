import React from 'react';
import Logo from "../../images/logo.png";

const HomePage = (props) => {
  return (
    <article className="title-page" id="about">
      <section className="preamble"><p>Daniel Teale: </p><p>Full Stack Javascript and Ruby on Rails Developer</p>
        <p>
        </p>
        <p>
          <img src={Logo} alt="DT logo" /><br />
        </p>
      </section>
      <section className="picture2">
        <h2>“Technology is best when it brings people together.” <span>Matt Mullenweg, Social Media Entrepreneur</span></h2>
      </section>
    </article>
  )
}

export default HomePage