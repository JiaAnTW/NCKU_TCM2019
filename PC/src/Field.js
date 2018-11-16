import React from 'react';
import train from './asset/train.png';
import './Field.css';

class Field extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            fieldStyle:[
                {"right": "0%","bottom": "0%"},
                {"left": "0%","bottom": "0%"},
                {"right": "0%","top": "0%"},
                {"left": "0%","top": "0%"}
            ],
            containerStyle:[
                {"top": "20%","left": "32%"},
                {"top": "20%","right": "32%"},
                {"top": "60%","left": "32%"},
                {"top": "60%","right": "32%"}
            ],
            topicStyle:[
                {"right": "1.9vw","bottom": "-2vh"},
                {"left": "1.9vw","bottom": "-2vh"},
                {"right": "1.9vw","top": "-2vh"},
                {"left": "1.9vw","top": "-2vh"}
            ],
            "type": this.props.id,
            "content": "測試",
            topic:["旅客運輸","物流管理","運輸科技","電信管理"]
        }
        
    }
    render(){
        return(
                <div className='container' style={this.state.containerStyle[this.state.type]}>
                <img src={train}   alt='train'/>
                  <div className='back' style={this.state.fieldStyle[this.state.type]}>
                    <div className='text'>
                      {this.state.content}
                    </div>
                    <p className='topic'style={this.state.topicStyle[this.state.type]} >{this.state.topic[this.state.type]}</p>
                  </div>
              </div>
        );
    }
}

export default Field;