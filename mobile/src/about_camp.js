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
          <Buttons/>
          <div className="intro">
            <visit id='visit'>
                <img src={visit} className='visit'  alt='visit_2'/>            
            </visit>
            <play id='play'>
                <img src={play} className='play' alt='play'/>             
              </play>
              <lesson id='lesson'>
                <img src={lesson} className='lesson' alt='lesson'/>             
              </lesson>
              <explore id='explore'>
                <img src={explore} className='explore' alt='explore'/>             
              </explore>
              
          </div>           
      </div>
        );
    }
}
  
export default about_camp;