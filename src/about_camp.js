import React, { Component } from 'react';
import './about_camp.css';
import play from './asset/play.jpg';
import play_2 from './asset/play_2.jpg';
import visit from './asset/visit.jpg'
import visit_2 from './asset/visit_2.jpg'
import Buttons from './Buttons'

class about_camp extends Component {
  render() {
    return (
      <div className="App">
        <body>
              <h1>旅程的任務是什麼?</h1>
              
              <intro>
                <play>
                  <img src={play_2} className='play' alt='play_2'/>
                  <img src={play} className='play' alt='play'/>             
                </play>
                <visit>
                  <img src={visit_2} className='visit'  alt='visit_2'/>
                  <img src={visit} className='visit'  alt='visit'/>              
                </visit>
              </intro>       
        </body>     
      </div>
    );
  }
}

export default about_camp;
