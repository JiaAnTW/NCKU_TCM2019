import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import about_camp from './about_camp.js';
import sign from './sign.js';
import about_tcm from './about_tcm';
import contact_us from './contact_us';
import * as serviceWorker from './serviceWorker';
import { Router, Route,  hashHistory ,IndexRoute } from 'react-router';


ReactDOM.render(
<Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={about_camp}/>
        <Route path="about_camp" component={about_camp}/>
        <Route path="about_tcm" component={about_tcm}/>
        <Route path="sign" component={sign}/>
        <Route path="contact_us" component={contact_us}/> 
      </Route>
    </Router>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
