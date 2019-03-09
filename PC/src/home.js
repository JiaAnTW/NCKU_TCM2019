import React, { Component } from 'react';
import home_pic from './asset/front_page.jpg';
import './home.css';

class home extends Component {
    constructor() {
        super();
        this.dateCounter=this.dateCounter.bind(this);  
        this.changeNow=this.changeNow.bind(this);
        this.changeText=this.changeText.bind(this);  
        this.state={
            text: 0,
            rememberstyle: {'display':'none'},
            TopicStyle:{'opacity':'1'}
        }  
    }

    dateCounter=()=>{
        var clock = new Date('GMT+0800');
        if(clock.getFullYear()===2019 && clock.getMonth()===1 && clock.getDate() <22 ){
            const number=21-clock.getDate();
            return number;
        }
        else 
            return 0;
    }
    changeNow=(e)=>{
        if(e.target.value==='0')
            this.setState({text: 0,rememberstyle: {'display':'block'},TopicStyle:{'opacity':'0'}});
        else if(e.target.value==='1')
            this.setState({text: 1,rememberstyle: {'display':'block'},TopicStyle:{'opacity':'0'}});
        else if(e.target.value==='3')
            this.setState({rememberstyle: {'display':'none'},TopicStyle:{'opacity':'1'}});
        else
            document.location.replace('/#/about_camp');
      }

    changeText(){
        const textStyle={'textAlign':'left','position':'absolute','left':'5vw'};
        if(this.state.text===0)
        return(
            <p>
                攜帶物品:<br/>1.個人換洗衣物(三~四套)。<br/>2. 額外帶上一套黑色或白色的長袖衣服<br/>3. 個人盥洗用具、毛巾、吹風機、室內拖鞋...等等。(營隊將不會提供唷!!)<br/>4. 帶件保暖的大外套。<br/>5. 健保卡、個人藥品及輕便雨具。<br/>6. 睡袋(或準備100元租用睡袋)、文具用品。<br/>7. 準備一份 50 元以內的小禮物。<br/>8. 家長同意書和兩張大頭照(尚未繳交者)<br/>9. 不用攜帶水罐喔,我們會幫你準備。<br/><br/>P.S記得將自己的行李分成<br/>i. 隨身行李:手機、錢包、鉛筆盒、衛生紙等等的隨身物品<br/>ii. 大型行李:衣服、盥洗用品等晚上回房間才會用到的東西<br/>(不要攜帶貴重的物品,以免造成不必要的困擾)
            </p>
        );      
        return(
            
            <p style={textStyle}>
                一、搭乘火車/客運:<br/>
            搭乘火車請於台南火車站後站門口集合<br/>搭乘客運請事先聯絡我們,可在原下車處集合報到。<br/>
            *1/21 當天 11:00~11:30,會有專人接送你至報到地點<br/>
            <br/>
            二、搭乘高鐵:<br/>
            請轉搭沙崙支線至台南火車站後站<br/>
            並請事先聯絡我們,下高鐵後,在高鐵站搭乘沙崙支線至台南火車站,<br/>
            在台南火車站後站下車。<br/>
            *1/21 當天 11:00~11:30,會有專人接送你至報到地點。<br/>
            ※沙崙支線大約 30 分鐘一班,需撘乘 20~30 分鐘左右,如果要搭乘高<br/>
            鐵,記得提早出發喔!<br/>
            <br/>
            三、搭乘私人運具:<br/>
            可在成大光復校區門口下車(火車站後站的大學路上),校門口會有專人<br/>
            接送你至報到地點,沒趕上專人接送時間者,請循著隨信所附的地圖步<br/>
            行到成大。
            </p>
        );
    }

  render() {
    const ButtonStyle=[{left: "35vw"},{left: "46vw"},{left: "57vw"},{top:'35vw',left: "21vw"}];
    return (
      <div className="App">
        <img src={home_pic} className="home_pic" alt='home_pic'/>
        <div className='home_text_container' style={this.state.TopicStyle}>
            <h1 className='home_topic' >距離交管營剩下</h1>    
            <span className='day'>{this.dateCounter()}</span>
            <span className='day_txt'>天</span>
        
        <button className="home_button" onClick={this.changeNow} style={ButtonStyle[0]} value='0'>要帶什麼</button>
        <button className="home_button" onClick={this.changeNow} style={ButtonStyle[1]} value='1'>報到方式</button>
        <button className="home_button" onClick={this.changeNow} style={ButtonStyle[2]} value='2'>進入網站</button>
        </div>
        <span className="remember" style={this.state.rememberstyle}>
        <button className="home_button" onClick={this.changeNow} style={ButtonStyle[3]} value='3'>關閉</button>
            {this.changeText()}
        </span>
      </div>
    );
  }
}

export default home;
