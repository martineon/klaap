import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './landingPage/landingPage.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
