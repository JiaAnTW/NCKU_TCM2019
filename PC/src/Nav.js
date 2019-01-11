import React from 'react';
import './Nav.css';



export class Nav extends React.Component{
    render(){
        const NavStrs=[
            {text:'首頁', value: '', pos:'15%'},
            {text:'營隊介紹', value: 'about_camp', pos:'30%'},
            {text:'關於交管', value: 'about_TCM', pos:'45%'},
            {text:'加入旅程', value:'sign', pos:'60%'},
            {text:'聯絡我們', value: 'contact_us', pos:'75%'}
        ];
        const NavBtn = NavStrs.map(NavStr=>{
            const NavStyle={position:'absolute',top:'10px',left:NavStr.pos}
            return (
                <a href={'/#/'+ NavStr.value} style={NavStyle}>
                {NavStr.text}
                </a>
            )
        }
        );
        return <nav>{NavBtn}</nav>;
    }
}