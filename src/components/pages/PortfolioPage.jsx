import React from 'react';

const PortfolioPage = (props) => {
  return (
    <section className="picture" id="portfolio">
      <h2 className="picture-heading">Selected Projects</h2>
      <div className="box1">
        <div className="box-content">
          <h2><a href="https://github.com/shaktigurung/MusesReactApp">Muses Website</a></h2>
          <p>A dynamic rebuild of the MusesJS/Node Girls website using the MERN stack interacting</p>
        </div>
      </div>
      <div className="box2">
        <div className="box-content">
          <h2><a href="https://github.com/shaktigurung/Market">Market</a></h2>
          <p>Two-sided marketplace built with Ruby on Rails and PostgreSQL</p>
        </div>
      </div>
      <div className="box3">
        <div className="box-content">
          <h2><a href="https://github.com/RHoKAustralia/umbo">Umbo</a></h2>
          <p>Platform for therapists to communicate with remote patients. Built on Ruby on Rails for the "Random Hacks of Kindness" hackathon</p>
        </div>
      </div>
    </section>
  )
};

export default PortfolioPage;