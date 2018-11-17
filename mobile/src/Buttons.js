import React from 'react';
import visit from './asset/visit_l.jpg';
import play from './asset/play_l.jpg';
import explore from './asset/explore_l.jpg';
import lesson from './asset/lesson_l.jpg';
import './about_camp.css';
 class Buttons extends React.Component{
    

    render(){
        const nameOfPic=[
            {src:visit,alt:'visit',id:'visit' , pos: '-20px' , value:'參訪',textPos:'245px',offset:50,time:1000},
            {src:play , alt: 'play' , id: 'play' ,pos: '-5px' , value:'體驗' ,textPos:'562px',offset:250 ,time:1250},
            {src:explore , alt: 'explore' , id: 'explore' ,pos: '10px' , value:'探索' ,textPos:'879px',offset:450,time:1500},
            {src:lesson , alt: 'lesson' , id: 'lesson' ,pos: '25px' , value:'學習' ,textPos:'1200px',offset:650,time:2000}
            
        ];
        const PicBtn=nameOfPic.map(Pic=>{
            const PicStyle={position: 'relative', top:'200px',left:Pic.pos, width: '20vw'};
            return(
                    <input type="image" src={Pic.src} alt={Pic.alt} style={PicStyle}>
                    </input>
                );
            }
        );
        return <div>{PicBtn}</div>;
    }
}

export default Buttons;