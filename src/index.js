import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Iparty from './components/Iparty'
import "bootstrap/dist/css/bootstrap.min.css"
import index from './index.css'


ReactDOM.render(
    <Router>
        <Iparty />
        </Router>
        , document.getElementById('root'));
         
         
