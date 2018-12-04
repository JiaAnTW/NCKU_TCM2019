import React, { Component } from 'react';
import './about_tcm.css';
import know1 from './asset/know1.jpg';
import know_tcm from './asset/know_tcm.jpg';
import know_future from './asset/know_future.jpg';
import know_field from './asset/know_field.jpg';
import passengers from './asset/passengers.png';
import truck from './asset/truck.png';
import network from './asset/network.png';
import tower from './asset/tower.png'
import Field from './Field.js';
import Profile from './Profile.js';

class about_tcm extends Component {
  constructor(){
    super();
    this.changeNow=this.changeNow.bind(this);
    this.state={
      now:"0",
      button_pos: [{"left":"48.25%"},{"left":"50.25%"},{"left":"52.25%"}]
    }
  }

  changeNow(e){
    this.setState({now:e.target.value});
  }


  render() {
    const ButtonStyle=[{left: "48%"},{left: "50%"},{left: "52%"}];
    return (
      <div className="App">
              <div name='topic_container' id='topic_container'>
                <h1 className="question">Q:</h1>
                <h2 className="know_topic">交管到底是什麼<br/>你們指揮交通嗎</h2>
                <h3 className="nope">A: 並沒有。<br/>憾!交管系竟不指揮交通?真相是...(往下滑小編告訴你)</h3>
              </div>
              <div name='know' id='know'>
                  <div className="pic_container">     
                    <img src={know1} className='know_tcm'  alt='know_1'/>
                    <img src={know_tcm} className='know_tcm'  alt='know_tcm'/>
                    <img src={know_future} className='know_tcm'  alt='know_future'/> 
                  </div> 
                  <div className='know_field'>                  
                    <img src={know_field}   className="field_img" alt='know_field'/>
                     <Field className="Field" id="0" pic={passengers} alt="passengers"/>
                     <Field className="Field" id="1" pic={truck} alt="truck"/>
                     <Field className="Field" id="2" pic={network} alt="network"/>
                     <Field className="Field" id="3" pic={tower} alt="tower"/>
                  </div>
                  <div className='know_member'>
                    <Profile id= {this.state.now}/>                   
                    <button onClick={this.changeNow} value={0} style={ButtonStyle[0]} ></button>
                    <button onClick={this.changeNow} value={1} style={ButtonStyle[1]} ></button>
                    <button onClick={this.changeNow} value={2} style={ButtonStyle[2]} ></button>
                    <div className="fakeButton" style={this.state.button_pos[this.state.now]}></div>
                  </div>             
              </div>    
      </div>
    );
  }
}

export default about_tcm;
