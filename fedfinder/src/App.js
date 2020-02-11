import React from 'react';
import logo from './assets/FedReserveLogo.svg';
import floor from './assets/floor1.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="App-Nav">
        <img src={logo} className="App-Nav-Logo" alt="logo"/>
        <div className="App-Search">
          <input type="text" className="search-input" placeholder="Search..."></input>
          <a class="search-button" ></a>
        </div>
      </div>

      <div className="App-Body">

        <div className="App-Display">
          <img src={floor} />
        </div>
        <div className="App-Info">
          <h1 className="Info-Hub">Information Hub</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
