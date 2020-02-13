import React from 'react';
import logo from './assets/FedReserveLogo.svg';
import Floor from './assets/floor1';
import Info from './components/Info';
import { RadioSVGMap } from "react-svg-map";
import './App.css';
import "react-svg-map/lib/index.css";

class App extends React.Component {
  state = {
    activehub : "Home",
    hubcontent : {
      hometab : "Home",
      searchtab : "Search",
      descriptortab : "Descriptor",
      helptab : "Help"
    }
  }
  render () {
    return (
      <div className="App">

        <div className="App-Nav">
          <img src={logo} className="App-Nav-Logo" alt="logo"/>
          <div className="App-Search">
            <input type="text" className="search-input" placeholder="Search..."></input>
            <button className="search-button" >Search</button>
          </div>
        </div>

        <div className="App-Body">
          <div className="App-Display">
            <div className = "App-Map">
              <RadioSVGMap map = { Floor } />
            </div>
            <div className = "App-Floors">

            </div>
          </div>
          <div className="App-Info" >
            <Info activehub={this.state.activehub} hubcontent={this.state.hubcontent} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
