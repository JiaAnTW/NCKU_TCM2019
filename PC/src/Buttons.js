import React from 'react';
import visit from './asset/visit_l.jpg';
import play from './asset/play_l.jpg';
import explore from './asset/explore_l.jpg';
import lesson from './asset/lesson_l.jpg';
var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

class Buttons extends React.Component{
    scrollToAnchor = (anchorName,time,PicOffset) => {
        if (anchorName) {
            scroller.scrollTo(anchorName,{duration: time,
                delay: 100,
                smooth: "easeInOutQuart",
                offset: PicOffset});
        }
      }

    render(){
        const nameOfPic=[
            {src:visit,alt:'visit',id:'visit' , pos: '-45px' , value:'參訪',offset:57,time:1000 },
            {src:play , alt: 'play' , id: 'play' ,pos: '-15px' , value:'體驗',offset:767 ,time:1250},
            {src:explore , alt: 'explore' , id: 'explore' ,pos: '15px' , value:'探索',offset:1477,time:1500},
            {src:lesson , alt: 'lesson' , id: 'lesson' ,pos: '45px' , value:'學習',offset:2187,time:2000}
            
        ];
        const PicBtn=nameOfPic.map(Pic=>{
            const PicStyle={position: 'relative', top:'-50px',left:Pic.pos, width: '15vw'};
            return(
                    <input type="image" src={Pic.src} alt={Pic.alt} style={PicStyle} onClick={()=>this.scrollToAnchor(Pic.id,Pic.time,Pic.offset)}>
                    </input>
                );
            }
        );
        return <div>{PicBtn}</div>;
    }
}

export default Buttons;