import React from 'react';
import train from './asset/buttons/train.png';

 class Buttons extends React.Component{   
    render(){
        return(
        <button>
            <img src={train} alt='train'/>
        </button>
        );
    }
}

export default Buttons;