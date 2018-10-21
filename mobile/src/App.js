import React, { Component } from 'react';
import {slide as Menu } from 'react-burger-menu';
import headerPic from './asset/headerPic.jpg';
import icon from './asset/icon.jpg'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu >
            <img src={icon} className='menu-icon' alt='icon'/>
            <a id="" className="menu-item" href="/#/">首頁</a>
            <a id="about_TCM" className="menu-item" href="/#/about_TCM">關於交管</a>
            <a id="sign" className="menu-item" href="/#/sign">加入旅程</a>
            <a id="contact_us" className="menu-item" href="/#/contact_us">聯絡我們</a>
          </Menu>      
        <header className="App-header">       
          <img src={headerPic} alt="header"/>
        </header>
        <body>
          {this.props.children}
        </body>
      </div>
    );
  }
}

export default App;
