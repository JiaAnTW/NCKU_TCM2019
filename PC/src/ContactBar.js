import React from 'react';
import ReactDOM from 'react-dom';
import './ContactBar.css';
import * as serviceWorker from './serviceWorker';

export class ContactBar extends React.Component{
    render(){
        return <div>contact us</div>;
    }
}

ReactDOM.render(
    <ContactBar/>,
    document.getElementById('bar')
);
serviceWorker.unregister();