import React from 'react';
import train from './asset/train.png';
import './about_camp.css';

 class Buttons extends React.Component{
     
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
      }

    render(){
        const nameOfPic=[
            {src:train,alt:'train',id:'visit' , pos: '-20px' , value:'參訪',textPos:'245px'},
            {src:train , alt: 'fun' , id: 'play' ,pos: '-5px' , value:'體驗' ,textPos:'562px'},
            {src:train , alt: 'explore' , id: 'explore' ,pos: '10px' , value:'探索' ,textPos:'879px'},
            {src:train , alt: 'lesson' , id: 'lesson' ,pos: '25px' , value:'學習' ,textPos:'1200px'}
            
        ];
        const PicBtn=nameOfPic.map(Pic=>{
            const PicStyle={position: 'relative', top:'200px',left:Pic.pos, width: '20vw'};
            return(
                    <input type="image" src={Pic.src} alt={Pic.alt} style={PicStyle} onClick={()=>this.scrollToAnchor(Pic.id)}>
                    </input>
                );
            }
        );
        return <div>{PicBtn}</div>;
    }
}

export default Buttons;