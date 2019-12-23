import React from 'react';
import './App.css';
import RightPanel from "./components/RightPanel"
// const app = require("app")

function App() {
  return (
    <div className="App">
      <button className="quitBtn" id="quitBtn">
        Quit
      </button>
      <RightPanel />


    </div>
  );
}

export default App;
