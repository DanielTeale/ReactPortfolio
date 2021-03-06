import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/structure/Header"
import HomePage from "./components/pages/HomePage"
import SkillsPage from "./components/pages/SkillsPage"
import PortfolioPage from "./components/pages/PortfolioPage"
import BlogPage from "./components/pages/BlogPage"
import ContactPage from "./components/pages/ContactPage"
import './App.css';
import Footer from './components/structure/Footer';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/skills" component={SkillsPage}/>
            <Route exact path="/portfolio" component={PortfolioPage}/>
            {/* <Route exact path="/blog" component={BlogPage}/> */}
            <Route exact path="/contact" component={ContactPage}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
