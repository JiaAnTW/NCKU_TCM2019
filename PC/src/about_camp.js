import React, { Component } from 'react';
import './about_camp.css';
import play from './asset/play.jpg';
import play_2 from './asset/play_2.jpg';
import visit from './asset/visit.jpg';
import visit_2 from './asset/visit_2.jpg';
import explore_2 from './asset/explore_2.jpg';
import explore from './asset/explore.jpg';
import lesson_2 from './asset/lesson_2.jpg';
import lesson from './asset/lesson.jpg';
import Buttons from './Buttons'

class about_camp extends Component {
  render() {
    return (
      <div className="App">
        <body>
              <h1>旅程的任務是什麼?</h1>
              
              <intro>
                
                <visit>
                  <img src={visit_2} className='visit'  alt='visit_2'/>
                  <img src={visit} className='visit'  alt='visit'/>              
                </visit>
                <play>
                  <img src={play_2} className='play' alt='play_2'/>
                  <img src={play} className='play' alt='play'/>             
                </play>
                <explore>
                  <img src={explore_2} className='explore'  alt='explore_2'/>
                  <img src={explore} className='explore'  alt='explore'/>              
                </explore>
                <lesson>
                  <img src={lesson_2} className='lesson'  alt='lesson_2'/>
                  <img src={lesson} className='lesson'  alt='lesson'/>              
                </lesson>
              </intro>       
        </body>     
      </div>
    );
  }
}

export default about_camp;
