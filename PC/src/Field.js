import React from 'react';
import './Field.css';

class Field extends React.Component{
    constructor(props) {
        super(props);
        this.conentTxt=this.conentTxt.bind(this);
        this.state={
            containerStyle:[
                {"top": "23%","left": "32%"},
                {"top": "23%","right": "33%"},
                {"top": "59%","left": "32%"},
                {"top": "59%","right": "33%"}
            ],
            fieldStyle:[
                {"right": "10%","bottom": "0%"},
                {"left": "10%","bottom": "0%"},
                {"right": "10%","top": "0%"},
                {"left": "10%","top": "0%"}
            ],
            imgStyle:[
                {"bottom": "10%"},
                {"bottom": "4%"},
                {"top": "35%"},
                {"top": "35%"}
            ],
            topicStyle:[
                {"right": "1.1vw","bottom": "-3vh"},
                {"left": "1.1vw","bottom": "-3vh"},
                {"right": "1.1vw","top": "-3vh"},
                {"left": "1.1vw","top": "-3vh"}
            ],
            "type": this.props.id,
            content: this.conentTxt(this.props.id),
            topic:["旅客運輸","物流管理","運輸科技","電信管理"]
        }
        
    }
    conentTxt=(type)=>{
        return <div>尚未開放<br/>敬請期待</div>
    }
    render(){
        return(
                <div className='container' style={this.state.containerStyle[this.state.type]}>
                <img src={this.props.pic}  className="topic_img" style={this.state.imgStyle[this.state.type]} alt={this.props.alt}/>
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