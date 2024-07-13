import React from 'react';
import "./App.css";
import idliImage from './idli.jpeg';
import dosaImage from './dosa.jpg';
import biryaniImage from './biryani.jpg';
import rotiCurryImage from './roti curry.jpg';
import saladImage from './salad.jpg';
import riceSambarImage from './rice sambar.jpg';
import pizzaImage from './pizza.jpg';
import curdRiceImage from './curd rice.jpg';


function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-items">
        <div className="menu-item">
          <img src={idliImage} alt="Item 1" />
          <h2>Idli</h2>
          
        </div>
        <div className="menu-item">
          <img src={dosaImage} alt="Item 2" />
          <h2>Dosa</h2>
         
        </div>
        <div className="menu-item">
          <img src={biryaniImage} alt="Item 3" />
          <h2>Biryani</h2>
          
        </div>
        <div className="menu-item">
          <img src={rotiCurryImage} alt="Item 4" />
          <h2>Roti curry</h2>
          
        </div>
        <div className="menu-item">
          <img src={saladImage} alt="Item 5" />
          <h2>Salad</h2>
        </div>
        <div className="menu-item">
          <img src={riceSambarImage} alt="Item 6" />
          <h2>Rice Sambar</h2>
        </div>
        <div className="menu-item">
          <img src={pizzaImage} alt="Item 7" />
          <h2>Pizza</h2>
        </div>
        <div className="menu-item">
          <img src={curdRiceImage} alt="Item 8" />
          <h2>Curd Rice</h2>
        </div>
      </div>
    </div>
  );
}

export default Menu;
