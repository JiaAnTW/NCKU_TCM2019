import React, { Component } from 'react';
import './sign.css';
import TimeBar from './asset/TimeBar.png';
import pin from './asset/pin.png';
import cover from './asset/cover.jpg';
import list from './asset/list.jpg';

class sign extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <p id='routine'>      
            <img src={TimeBar} className='TimeBar' alt="TimeBar"/>
            <img src={pin} className='Pin' alt="Pin"/>
          </p>
          <img src={list} className="list" alt="list"/>

          <div className='cover'>
            <img src={cover} alt="cover"/>
            <a id="form" className="form" href="https://goo.gl/nFHMU1">報名表單連結</a>
            <a id="pay" className="pay" href="https://goo.gl/nFHMU1">匯款完成表單連結</a>
          </div>        
        </body>          
      </div>
    );
  }
}

export default sign;
