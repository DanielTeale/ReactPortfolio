import React from 'react';

const SkillsPage = (props) => {
  return (
    <section id="skills">
      <div className="card card-one">
        <img src="./Icons/007-desktop-computer.png" alt="Desktop Computer Picture" />
          <p>Rich experience with and a passion for all things technical from a life-time of exposure</p>
      </div>
        <div className="card card-two">
          <img src="./Icons/008-apple.png" alt="Apple iOS Picture" />
            <p>Former Apple Technician, experience in Macintosh and iOS hardware and software repair</p>
      </div>
          <div className="card card-three">
            <img src="./Icons/006-reading.png" alt="Reading Picture" />
              <p>Current student at Coder Academy coder Bootcamp. Studying Ruby on Rails, HTML/CSS and Full Stack Javascript</p>
      </div>
    </section>
  )
}
export default SkillsPage;