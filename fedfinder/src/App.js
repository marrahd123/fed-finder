import React, {Component} from 'react';
import logo from './assets/FedReserveLogo.svg';
import Floor from './assets/floor1.svg';
import Info from './components/Info';
import { RadioSVGMap } from "react-svg-map";
import './App.css';
import Taiwan from '@svg-maps/taiwan';
import "react-svg-map/lib/index.css";

class Map extends React.Component {
   
    state = {
        floor : Floor
    }
   
    render() {
      return (
        <div className = 'Map'> <RadioSVGMap map={ Taiwan } /> </div>);
    }
  }


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
            <a className="search-button" ></a>
          </div>
        </div>

        <div className="App-Body">

          <div className="App-Display">
            <Map floor={Floor} />
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
