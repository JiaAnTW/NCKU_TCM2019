import React, { Component } from 'react';
import './App.css';
import {Nav} from './Nav.js';
import {contactBar} from './contactBar.js';
import TimeBar from './asset/TimeBar.png';
import pin from './asset/pin.png';
import cover from './asset/cover.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <header>
          <img src='https://ppt.cc/fopbJx' className="App-logo" alt="logo" />      
          <img src='https://ppt.cc/fbmTyx' className="header-pic" alt="headPage" /> 
        </header> 
        <body>      
            <img src={TimeBar} className='TimeBar' alt="TimeBar"/>
            <img src={pin} className='Pin' alt="Pin"/>
          <cover>
            <img src={cover} className='Cover' alt="cover"/>
          </cover>
        </body>
        <contactBar className='contactBar'/>    
      </div>
    );
  }
}

export default App;
