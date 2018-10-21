import React, { Component } from 'react';
import {slide as Menu } from 'react-burger-menu';
import headerPic from './asset/headerPic.jpg';
import icon from './asset/icon.jpg'
import './App.css';
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }
  render() {
    return (
      <div className="App">
        <Menu isOpen={this.state.menuOpen} >
            <img src={icon} className='menu-icon' alt='icon'/>
            <a id="" className="menu-item" href="/#/" onClick={()=>this.closeMenu()}>首頁</a>
            <a id="about_TCM" className="menu-item" href="/#/about_TCM" onClick={()=>this.closeMenu()}>關於交管</a>
            <a id="sign" className="menu-item" href="/#/sign" onClick={()=>this.closeMenu()}>加入旅程</a>
            <a id="contact_us" className="menu-item" href="/#/contact_us" onClick={()=>this.closeMenu()}>聯絡我們</a>
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
