import React, { Component } from 'react';
import fb from './asset/fb.png';
import gmail from './asset/gmail.png';

class contact_us extends Component {
    changeLink(anchorName){
        if (anchorName==='fb') {
            window.open('https://www.facebook.com/nckutcmcamp/');
        }
        else if (anchorName==='gmail') {
            window.open('mailto:nckutcmcamp@gmail.com');
        }
      }

  render() {
    const h3Style={
        position: 'relative',
        width: '55vw',
        top: '25px',
        alignItem: 'center',
        left: '20%',
        fontFamily:'Microsoft YaHei Light',
        color: 'rgb(159, 116, 60)',
        fontSize: '36px'
    }
    const fbStyle={
        position: 'relative',
        width: '25vw',
        top: '2vw',
        left: '10%',

    }
    const gmailStyle={
        position: 'relative',
        width: '37.5vw',
        top: '10vw',
        left: '-15%',
    }
    return (
      <div className="App">
      <h3  style={h3Style}>聯絡我們</h3>
        <input type="image" src={fb} style={fbStyle} alt='fb' onClick={this.changeLink.bind(this,'fb')}>
        </input>
        <input type="image" src={gmail} style={gmailStyle} alt='gmail' onClick={this.changeLink.bind(this,'gmail')}>
        </input>    
      </div>
    );
  }
}

export default contact_us;