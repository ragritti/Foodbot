import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'; 
import Menu from './Menu'; 
import AboutUs from "./AboutUs";
import Chatbot from "./Chatbot";
import Location from "./Location"
import "./Chatbot.css";
import Map from "./Map";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        < Menu />
        <Location/>
        <Map/>

        <AboutUs />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;


