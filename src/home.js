import React, { Component } from 'react';
import './home.css';
import TimeBar from './asset/TimeBar.png';
import pin from './asset/pin.png';
import cover from './asset/cover.jpg';

class home extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <p id='routine'>      
            <img src={TimeBar} className='TimeBar' alt="TimeBar"/>
            <img src={pin} className='Pin' alt="Pin"/>
          </p>
          <cover>
            <img src={cover} className='Cover' alt="cover"/>
          </cover>        
        </body>          
      </div>
    );
  }
}

export default home;
