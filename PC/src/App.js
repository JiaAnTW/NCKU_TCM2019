import React, { Component } from 'react';
import './App.css';
import {Nav} from './Nav';
import icon from './asset/icon.jpg';
import header_pic from './asset/header_pic.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <header>
          <img src={icon} className="App-logo" alt="logo" />      
          <img src={header_pic} className="header-pic" alt="headPage" /> 
        </header>
        <body>
        {this.props.children}
        </body>
      </div>
    );
  }
}

export default App;
