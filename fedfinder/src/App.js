import React from 'react';
import logo from './FedReserveLogo.svg';
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

        </div>
        
        <div className="App-Info">

        </div>
      </div>
    </div>
  );
}

export default App;
