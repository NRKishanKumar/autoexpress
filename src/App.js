import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome</p>
      </header>
      <div className="body-content">
          <div className="">
              <Dashboard></Dashboard>
          </div>
      </div>
    </div>
  );
}

export default App;
