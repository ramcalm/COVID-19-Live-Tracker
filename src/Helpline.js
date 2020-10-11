import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigbar from './Navigbar';
import * as serviceWorker from './serviceWorker';
import Table from './hospitals/Tables';

function Helpline() {

    return(
        <Table />
    );
}

export default Helpline;

serviceWorker.unregister();
