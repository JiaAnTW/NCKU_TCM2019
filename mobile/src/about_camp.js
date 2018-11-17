import React, { Component } from 'react';
import './about_camp.css';
import play from './asset/play_m.jpg';
import visit from './asset/visit_m.jpg';
import explore from './asset/explore_m.jpg';
import lesson from './asset/lesson_m.jpg';
import Buttons from './Buttons'

class about_camp extends Component {

  render() {
    return (
      <div className="App">
          <h1 className='intro_topic'>在交管營 我們帶你</h1>
          <Buttons/>
          <div className="intro">
            <visit id='visit'>
                <img src={visit} className='visit'  alt='visit_2'/>            
            </visit>
            <play id='play'>
                <img src={play} className='play' alt='play'/>             
              </play>
              <explore id='explore'>
                <img src={explore} className='explore' alt='explore'/>             
              </explore>
              <lesson id='lesson'>
                <img src={lesson} className='lesson' alt='lesson'/>             
              </lesson>
              
              
              
          </div>           
      </div>
        );
    }
}
  
export default about_camp;