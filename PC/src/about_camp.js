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
import Buttons from './Buttons';
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

class about_camp extends Component {
  render() {
    return (
      <div className="App">
        <body>
              <h1 className="intro_topic">在交管營 我們帶你</h1>
              <Buttons/>
              <div className="intro">
              <Element name='visit' id='visit'>      
                  <img src={visit_2} className='visit'  alt='visit_2'/>
                  <img src={visit} className='visit'  alt='visit'/>              
              </Element>
              <Element name='play' id='play'> 
                  <img src={play_2} className='play' alt='play_2'/>
                  <img src={play} className='play' alt='play'/>             
                </Element>
                <Element name='explore' id='explore'>
                  <img src={explore_2} className='explore'  alt='explore_2'/>
                  <img src={explore} className='explore'  alt='explore'/>              
                </Element>
                <Element name='lesson' id='lesson'>
                  <img src={lesson_2} className='lesson'  alt='lesson_2'/>
                  <img src={lesson} className='lesson'  alt='lesson'/>              
                </Element>
              </div>       
        </body>     
      </div>
    );
  }
}

export default about_camp;
