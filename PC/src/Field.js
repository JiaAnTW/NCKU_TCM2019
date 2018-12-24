import React from 'react';
import './Field.css';

class Field extends React.Component{
    constructor(props) {
        super(props);
        this.conentTxt=this.conentTxt.bind(this);
        this.state={
            containerStyle:[
                {"top": "11.5vw","left": "32%"},
                {"top": "11.5vw","right": "33%"},
                {"top": "31vw","left": "32%"},
                {"top": "31vw","right": "33%"}
            ],
            fieldStyle:[
                {"right": "10%","bottom": "0%"},
                {"left": "10%","bottom": "0%"},
                {"right": "10%","top": "0%"},
                {"left": "10%","top": "0%"}
            ],
            imgStyle:[
                {"bottom": "24%","right": "12%"},
                {"bottom": "20%","left": "16%"},
                {"top": "35%","right": "14%"},
                {"top": "35%","left": "16%"}
            ],
            topicStyle:[
                {"right": "1.1vw","bottom": "-1.7vw"},
                {"left": "1.1vw","bottom": "-1.7vw"},
                {"right": "1.1vw","top": "-1.7vw"},
                {"left": "1.1vw","top": "-1.7vw"}
            ],
            "type": this.props.id,
            content: this.conentTxt(this.props.id),
            topic:["旅客運輸","物流管理","運輸科技","電信管理"]
        }
        
    }
    conentTxt=(type)=>{
        if(type==="0")
            return <span className="content">捷運、輕軌、高鐵延伸到屏東......究竟這些建設是否真的有必要執行呢？ 先前的 普悠碼出軌事件，是否讓你想要了解運輸系統所蘊藏的風險？每次坐公車時，有時候要等很久，有時候車一下子就來了，其排班究竟隱藏著什麼奧妙？告訴大家，他們的答案都可以在旅客運輸的專業課程內找到哦！分別是『軌道運輸、航空運輸、公共運輸以及運輸風險與危機管理』。所有和「人」有關的服務、安全與方便性都是我們的討論範疇。</span>
        else if(type==="1")
            return <span className="content">物流(logistics)是有關商品、服務及相關訊息流動的一連串過程。在『物流管理』的領域將透過『供應鏈管理、倉儲與存貨管理、國際貿易、國際物流』介紹有關「物」的流動，像是商品在運送的過程、決定庫存的方法......</span>
        else if(type==="3")
            return <span className="content">2018/11/24，九合一選舉之夜。全台超過200萬人在電腦前刷新開票網頁。讓這件事情能順利進行的，就是電信公司。在電管，你會廣泛了解網路和手機訊號傳遞的技術，從定價策略、行銷、市場分析，去學習怎麼樣去營運一個電信公司。那電管跟資工、電工(電機)有什麼差別呢?以觀看開票網頁來說，資電工負責創造出能夠同時負荷200萬人的軟硬體技術、網站呈現、處理開票結果，而電管則是負責決定提供這項技術的價格、對象以及行銷策略。</span>
        else
            return <span className="content">所謂的『運輸科技』就是，結合資訊、通信、電子、控制等技術應用於運輸。像智慧腳踏車租借系統，就是便利且被廣泛應用的運輸科技實例之一!透過本系運輸科技的專業課程『運輸工程、智慧型運輸系統、管理資訊系統、交通流理論』，將會帶給大家更深入的了解和專業的相關知識哦</span>
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