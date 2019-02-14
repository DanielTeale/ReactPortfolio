import React from 'react';
import Desktop from "../../images/Icons/007-desktop-computer.png"
import Apple from "../../images/Icons/008-apple.png"
import Reading from "../../images/Icons/006-reading.png"

const SkillsPage = (props) => {
  return (
    <section id="skills">
      <div className="card card-one">
        <img src={Desktop} alt="Desktop Computer" />
          <p>Rich experience with and a passion for all things technical from a life-time of exposure</p>
      </div>
        <div className="card card-two">
          <img src={Apple} alt="Apple iOS" />
            <p>Former Apple Technician, experience in Macintosh and iOS hardware and software repair</p>
      </div>
          <div className="card card-three">
            <img src={Reading} alt="Reading" />
              <p>Graduate of the Fast Track Bootcamp at Coder Academy and avid coder</p>
      </div>
    </section>
  )
}
export default SkillsPage;