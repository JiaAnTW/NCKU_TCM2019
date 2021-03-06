import React, { Component } from 'react';
import './sign.css';
import TimeBar from './asset/TimeBar.png';
import sign from './asset/sign.jpg';
import pin from './asset/pin.png';
import list from './asset/list.jpg';
import list2 from './asset/list2.jpg';

class home extends Component {
  render() {
    return (
      <div className="App"> 
        <p>
            <img src={TimeBar} className='TimeBar' alt="TimeBar"/>
            <img src={pin} className='Pin' alt="Pin"/>
        </p>
        <img src={list} className='list' alt="list"/>
        <img src={list2} className='list2' alt="list2"/>
        <div className="cover">
            <img src={sign} alt="sign"/>
            <a id="form" className="form" href="https://goo.gl/nFHMU1">報名表單</a>
            <a id="pay" className="pay" href="https://goo.gl/nFHMU1">匯款完成表單</a>
        </div>                
      </div>
    );
  }
}

export default home;
