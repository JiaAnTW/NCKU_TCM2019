import React, { Component } from 'react';
import './about_tcm.css';
import know_tcm from './asset/know_tcm_m.jpg';
import know_future from './asset/know_future_m.jpg';
import know_field from './asset/know_field_m.jpg';
import passengers from './asset/passengers.png';
import truck from './asset/truck.png';
import network from './asset/network.png';
import tower from './asset/tower.png';
import Profile from './Profile.js';

class about_tcm extends Component {
  render() {
    return (
      <div className="container">
              <div name='topic_container' id='topic_container'>
                  <h1 className="question">Q:</h1>
                  <h2 className="know_topic">交管到底是什麼<br/>你們指揮交通嗎</h2>
                  <h3 className="nope">A: 並沒有。<br/>憾!交管系竟不指揮交通?真相是...(往下滑小編告訴你)</h3>
              </div>
              <div className='pic_container'>
                <img src={know_tcm} className='know_tcm'  alt='know_tcm'/>
                <img src={know_future} className='know_future'  alt='know_future'/>
              </div>
              <div className='Field_container'>
                  <img src={know_field} className='know_field'  alt='know_field'/>
                  <div className='item_container'>
                  <img src={passengers} className='passengers'  alt='passengers'/>
                  <h4 className='passengers_topic'>旅客運輸</h4>
                  <p className='passengers_content'>尚未開放 敬請期待</p>
                  <img src={truck} className='truck'  alt='truck'/>
                  <h4 className='truck_topic'>物流管理</h4>
                  <p className='truck_content'>尚未開放 敬請期待</p>
                  <img src={network} className='network'  alt='network'/>
                  <h4 className='network_topic'>運輸科技</h4>
                  <p className='network_content'>尚未開放 敬請期待</p>
                  <img src={tower} className='tower'  alt='tower'/>
                  <h4 className='tower_topic'>電信管理</h4>
                  <p className='tower_content'>尚未開放 敬請期待</p>
                  </div>
              </div>
              <div className="know_member">
                <h2 className="profile_topic">歷年營隊學員分享</h2>
                <Profile id="0"/>
                <Profile id="1"/>
                <Profile id="2"/>
              </div>
      </div>
    );
  }
}

export default about_tcm;