import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hospitals from './Hospitals';
import Helpline from './Helpline';
import Guidelines from './Guidelines'
import Statistics from './Statistics'
import Navigbar from './Navigbar';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Navigbar />
    <BrowserRouter>
    <Switch>
      
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path='/hospitals' component={Hospitals}/>
      <Route path='/statistics' component={Statistics}/>
      <Route path='/guidelines' component={Guidelines}/>
      <Route path='/helpline' component={Helpline}/>
      <Route path='/' component={App}/>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
