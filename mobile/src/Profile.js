import React from 'react';
import './Profile.css';
import img_1 from './asset/profile_img_1.jpg';
import img_2 from './asset/profile_img_2.jpg';
import img_3 from './asset/profile_img_3.jpg';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.conentTxt=this.conentTxt.bind(this);
        this.state={
            Name:["莊博宇","邱華奕","陳柔安"],
            pos:[{"top":"7%"},{"top":"37%"},{"top":"77%"}],
            Identity:["第18屆交管營小學員","第20屆交管營小學員","第20屆交管營小學員"],
            School_before:["台南一中","新竹中學","家齊高中"],
            School_Now:["國立成功大學交通管理學系","政治大學地政學系土地資源規劃組","台北大學不動產與城鄉環境學系"],
            Img:[img_1,img_2,img_3]
        }
        
    }
    conentTxt=(type)=>{
        if(type==="0"){
            return (
            <span className="feeback">
        我是個交通迷，的確，我是因為交通而加入營隊。但我加入後，卻發現，交管營不是只適合交通迷。這是個四天三夜的營隊，除了歡笑之外，更是收穫滿滿。

如果，是對交通有興趣的人，不管是飛機、鐵道、公路甚至是輪船，亦或是物流、倉儲、運輸科技，只要對任何一項有興趣，都歡迎來成大交管營！除了課程，營隊期間也會有企業參訪，能將龐大交通事業一探究竟，想當初，我有一大部分是被這個吸引的XDD

如果，只是想來參加營隊的，那交管營再適合不過了！四天三夜的活動真的是目不瑕給。有精彩的燈光晚會、震撼的營火晚會、豐富的大地遊戲，透過這些活動，也更能讓我認識小隊裡的彼此，留下最美好的回憶。總之，交管營不只教學豐富，活動的厲害更是大學營隊裡數一數二。

如果，只是單純想體驗大學科系，那我還是只想到交管營。自駕車是未來的趨勢。但，光是有電腦方面的人才是不夠的，別忘了『交通』才是核心，只要有人在的地方，就需要交通。來參加交管營，有機會認識交管系的學長姐，說不定能幫助各位未來大學面試的時候祝你一臂之力。

為了延續參加交管營這份感動，今年的我也會在交管營擔任工人，歡迎各位高中生來體驗看看，寒假，我們不見不散！

            </span>
            );
        }
        else if(type==="1"){
            return (
            <span className="feeback">
        高二那年為了不想讓寒假只剩下耍廢或純粹的玩樂，我在高中的網站上找一些在寒假的活動。<br/><br/>偶然間，我發現了交管營。由於我喜歡交通運輸設施(這是興趣，真的)，像是覺得鐵路系統很酷之類，而交管營安排了各種機關和企業的參訪，像是高雄捷運、高速公路局、航運公司等，整個就是我的菜(這個形容可以嗎XD)，於是馬上填了表單報名。<br/><br/>這也是我第一次參加大學營隊，一切都很新鮮，先從認真(?)的部分說起。<br/><br/>學長姐也會跟我們聊一些有關交管系的事，像是他們的課程包含什麼、以後的出路以及他們的看法(這很重要，平常外面都聽不到這些!!)，讓我更明白自己對興趣的喜愛程度，對決定自己未來要讀的大學科系還滿有幫助的。同時還能了解成大的環境(成大宿舍比我現在的好QQ)，和在成大的生活(附近好吃的很多，營隊的三餐也很棒，真不愧是臺南xD)，對高中的我而言這些真的很新奇～

            </span>
            );
        }
        else{
            return (
            <span className="feeback">
        「交管道義，承先啟後」(想不到吧我連這個都記得)，交管營學長姐每一個都超熱心積極，這四天會有種被捧在手心上照顧的親切感，生活起居喜怒哀樂大小細節都有人關心，在寒冷的天氣裡給我很多很多溫暖，可以從他們口中聽到很多酷炫的成大生活，讓自己想要更好的動力也會莫名被激起，想要告訴每位看見這篇文的高中生，不論你目前對交通管理有沒有高度熱情，明年寒假給自己一個蛻變的機會，衝一波成大參加交管營吧，絕對會留下永生難忘的回憶！
            </span>
            );
        }
    }
    render(){
        return(
                <div className='whole_container' style={this.state.pos[this.props.id]}>
                    <div className='pro_container'>
                        <img src={this.state.Img[this.props.id]} className='picture' alt='profile_img'/>
                        <h1 className="name">{this.state.Name[this.props.id]}</h1>
                        <h2 className="identity">{this.state.Identity[this.props.id]}</h2>
                        <h3 className="school">畢業高中:{this.state.School_before[this.props.id]}<br/>目前就讀:{this.state.School_Now[this.props.id]}</h3>
                    </div>
                    <div className='text_container'>
                    {this.conentTxt(this.props.id)}
                    </div>                   
              </div>
        );
    }
}

export default Profile;