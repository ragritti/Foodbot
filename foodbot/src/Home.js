import React from "react";
import ricebowlimg from "../src/ricebowl.png";
import './Header.css';

function Home() {
  return (
      <div className="home-main">
        <div className="home-text">
          <h1>Your favourite food delivered hot and fresh</h1>
          <p className="prim">
          Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
        </div>
        <div className="home-img">
          <img src={ricebowlimg} alt="Restaurant" className="home-image" />
        </div>
        </div>
      
  )
}

export default Home;
