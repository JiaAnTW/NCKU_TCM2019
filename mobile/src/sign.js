import React, { Component } from 'react';
import './sign.css';
import TimeBar from './asset/TimeBar.png';
import sign from './asset/sign.jpg';

class home extends Component {
  render() {
    return (
      <div className="App"> 
        <p>
            <img src={TimeBar} className='TimeBar' alt="TimeBar"/>
        </p>
        <cover>
            <img src={sign} alt="sign"/>
            <a id="form" className="form" href="https://goo.gl/nFHMU1">報名表單</a>
            <a id="pay" className="pay" href="https://goo.gl/nFHMU1">匯款完成表單</a>
        </cover>                
      </div>
    );
  }
}

export default home;
