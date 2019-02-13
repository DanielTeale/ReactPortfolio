import React from 'react';

const PortfolioPage = (props) => {
  return (
    <section className="picture" id="portfolio">
      <h2 className="picture-heading">Selected Projects</h2>
      <div className="box1">
        <div className="box-content">
          <h2><a href="https://github.com/DanielTeale/CalorieCounter">Calorie Track</a></h2>
          <p>A Ruby terminal app to track your meals</p>
        </div>
      </div>
      <div className="box2">
        <div className="box-content">
          <h2><a href="https://github.com/DanielTeale/lazydating">Lazy Dating</a></h2>
          <p>Generates a fake user database and matches you with the closest individual</p>
        </div>
      </div>
      <div className="box3">
        <div className="box-content">
          <h2><a href="https://github.com/DanielTeale/porfoliofinal">Portfolio</a></h2>
          <p>Source code for this website. Uses HTML and SCSS</p>
        </div>
      </div>
    </section>
  )
};

export default PortfolioPage;