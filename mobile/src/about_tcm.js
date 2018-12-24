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
                  <h3 className="nope">A: 並沒有。<br/>憾!交管系竟不指揮交通?真相是...<br/>(往下滑小編告訴你)</h3>
              </div>
              <div className='pic_container'>
                <img src={know_tcm} className='know_tcm'  alt='know_tcm'/>
                <img src={know_future} className='know_future'  alt='know_future'/>
              </div>
              <div className='Field_container'>
                  <div className="background"></div>
                  <img src={know_field} className='know_field'  alt='know_field'/>
                  <div className='item_container'>
                  <img src={passengers} className='passengers'  alt='passengers'/>
                  <h4 className='passengers_topic'>旅客運輸</h4>
                  <span className='passengers_content'>交通建設的評估、運輸系統所蘊藏的風險、排班隱藏的奧妙......所有和「人」有關的運輸服務、安全與方便性都是旅客運輸的討論範疇</span>
                  <img src={truck} className='truck'  alt='truck'/>
                  <h4 className='truck_topic'>物流管理</h4>
                  <p className='truck_content'>物流(logistics)是有關商品、服務及相關訊息流動的一連串過程。在『物流管理』的領域將透過『供應鏈管理、倉儲與存貨管理、國際貿易、國際物流』介紹有關「物」的流動，像是商品在運送的過程、決定庫存的方法......</p>
                  <img src={network} className='network'  alt='network'/>
                  <h4 className='network_topic'>運輸科技</h4>
                  <p className='network_content'>所謂的『運輸科技』就是，結合資訊、通信、電子、控制等技術應用於運輸。像智慧腳踏車租借系統，就是便利且被廣泛應用的運輸科技實例之一!透過本系運輸科技的專業課程『運輸工程、智慧型運輸系統、管理資訊系統、交通流理論』，將會帶給大家更深入的了解和專業的相關知識哦</p>
                  <img src={tower} className='tower'  alt='tower'/>
                  <h4 className='tower_topic'>電信管理</h4>
                  <p className='tower_content'>在電管，你會廣泛了解網路和手機訊號傳遞的技術。但比起資/電工著重技術，電管更重視如何從定價策略、行銷、市場分析，去經營「提供電信技術的公司」。你需要在了解最新技術的同時，用宏觀的視野去看待技術和市場的關聯</p>
                  </div>
              </div>
              <div className="know_member">
                <h2 className="profile_topic">了解了交管卻還在猶豫嗎?<br/>聽聽他們怎麼說!</h2>
                <Profile id="0"/>
                <Profile id="1"/>
                <Profile id="2"/>
              </div>
      </div>
    );
  }
}

export default about_tcm;