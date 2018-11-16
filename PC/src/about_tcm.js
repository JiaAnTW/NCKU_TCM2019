import React, { Component } from 'react';
import './about_tcm.css';
import know1 from './asset/know1.jpg';
import know_tcm from './asset/know_tcm.jpg';
import know_future from './asset/know_future.jpg';
import know_field from './asset/know_field.jpg';
import know_member from './asset/know_member.jpg';
import Field from './Field.js';
import train from './asset/train.png';

class about_tcm extends Component {

  render() {
    return (
      <div className="App">
              <div name='topic_container' id='topic_container'>
                <h1 className="question">Q:</h1>
                <h2 className="know_topic">交管到底是什麼<br/>你們指揮交通嗎</h2>
                <h3 className="nope">A: 並沒有。<br/>憾!交管系竟不指揮交通?真相是...(往下滑小編告訴你)</h3>
              </div>
              <div name='know' id='know'>      
                  <img src={know1} className='know_1'  alt='know_1'/>
                  <img src={know_tcm} className='know_tcm'  alt='know_tcm'/>
                  <img src={know_future} className='know_future'  alt='know_future'/> 
                  <div className='know_field'>                  
                    <img src={know_field}   className="field_img" alt='know_field'/>
                     <Field className="test" id="0"/>
                     <Field className="test" id="1"/>
                     <Field className="test" id="2"/>
                     <Field className="test" id="3"/>
                  </div>
                  <img src={know_member} className='know_member'  alt='know_member'/>              
              </div>    
      </div>
    );
  }
}

export default about_tcm;
